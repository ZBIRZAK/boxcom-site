#!/usr/bin/env bash
set -euo pipefail

MANIFEST="scripts/asset-optimization/manifest.csv"
APPLY=0
REWRITE=0

usage() {
  cat <<'EOF'
Usage:
  scripts/asset-optimization/optimize-assets.sh [--manifest <path>] [--apply] [--rewrite]

Options:
  --manifest <path>  CSV manifest path
  --apply            Execute conversion/minification
  --rewrite          Rewrite source code references from source path to target path

Actions supported in manifest:
  - image_to_webp
  - minify_json
  - video_to_webm
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --manifest)
      MANIFEST="$2"
      shift 2
      ;;
    --apply)
      APPLY=1
      shift
      ;;
    --rewrite)
      REWRITE=1
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown option: $1" >&2
      usage
      exit 1
      ;;
  esac
done

if [[ ! -f "$MANIFEST" ]]; then
  echo "Manifest not found: $MANIFEST" >&2
  exit 1
fi

need_cmd() {
  local cmd="$1"
  command -v "$cmd" >/dev/null 2>&1
}

stat_size() {
  local f="$1"
  if [[ -f "$f" ]]; then
    stat -f '%z' "$f"
  else
    echo 0
  fi
}

rewrite_refs() {
  local from="$1"
  local to="$2"
  local web_from="${from#public}"
  local web_to="${to#public}"

  if [[ "$web_from" == "$web_to" ]]; then
    return 0
  fi

  local files
  files=$(rg -lF "$web_from" src --glob '*.{js,jsx,ts,tsx,css,scss}' || true)
  if [[ -z "$files" ]]; then
    return 0
  fi

  while IFS= read -r file; do
    [[ -z "$file" ]] && continue
    FROM="$web_from" TO="$web_to" perl -0pi -e 's/\Q$ENV{FROM}\E/$ENV{TO}/g' "$file"
  done <<< "$files"

  echo "  refs updated: $web_from -> $web_to"
}

tmp="$(mktemp)"
trap 'rm -f "$tmp"' EXIT

while IFS=, read -r source action target quality rewrite_flag notes; do
  [[ -z "$source" ]] && continue
  [[ "${source:0:1}" == "#" ]] && continue

  if [[ ! -f "$source" ]]; then
    echo "SKIP missing source: $source"
    continue
  fi

  before=$(stat_size "$source")
  echo "PROCESS $action: $source"

  if [[ "$APPLY" -eq 1 ]]; then
    case "$action" in
      image_to_webp)
        if ! need_cmd cwebp; then
          echo "  SKIP: cwebp not found"
          continue
        fi
        mkdir -p "$(dirname "$target")"
        cwebp -quiet -mt -m 6 -q "${quality:-72}" "$source" -o "$target"
        ;;
      minify_json)
        if ! need_cmd jq; then
          echo "  SKIP: jq not found"
          continue
        fi
        jq -c . "$source" > "$tmp"
        mv "$tmp" "$target"
        ;;
      video_to_webm)
        if ! need_cmd ffmpeg; then
          echo "  SKIP: ffmpeg not found"
          continue
        fi
        mkdir -p "$(dirname "$target")"
        ffmpeg -nostdin -y -i "$source" -c:v libvpx-vp9 -crf "${quality:-30}" -b:v 0 -deadline good -cpu-used 2 -row-mt 1 -c:a libopus -b:a 96k "$target" < /dev/null
        ;;
      *)
        echo "  SKIP unknown action: $action"
        continue
        ;;
    esac
  fi

  after=$(stat_size "$target")
  if [[ "$after" -gt 0 ]]; then
    delta=$((before - after))
    echo "  size: $before -> $after (saved $delta bytes)"
  else
    echo "  no output generated"
  fi

  if [[ "$REWRITE" -eq 1 && "$rewrite_flag" == "1" ]]; then
    rewrite_refs "$source" "$target"
  fi
done < <(tail -n +2 "$MANIFEST")

echo "Done."
