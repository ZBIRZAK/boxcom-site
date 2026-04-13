import * as cheerio from "cheerio";
import { getHost } from "../../lib/helpers";

function safeUrl(value) {
  try {
    return new URL(value);
  } catch {
    return null;
  }
}

function normalizeInternalUrl(value, targetHost, legacyHosts) {
  const parsed = safeUrl(value);
  if (!parsed) return value;

  if (!["http:", "https:"].includes(parsed.protocol)) return value;

  const hostname = parsed.hostname.toLowerCase();
  const isLegacyHost =
    legacyHosts.has(hostname) ||
    hostname.endsWith(".vercel.app") ||
    hostname === "localhost" ||
    hostname === "127.0.0.1";

  if (!isLegacyHost) return value;

  const target = new URL(targetHost);
  const normalized = new URL(parsed.pathname + parsed.search, target.origin);
  normalized.hash = parsed.hash || "";
  return normalized.toString();
}

function normalizeJsonLdHosts(jsonString, targetHost, legacyHosts) {
  try {
    const parsed = JSON.parse(jsonString);

    const rewrite = (value) => {
      if (Array.isArray(value)) return value.map(rewrite);
      if (value && typeof value === "object") {
        const next = {};
        for (const [k, v] of Object.entries(value)) {
          next[k] = rewrite(v);
        }
        return next;
      }
      if (typeof value === "string") {
        return normalizeInternalUrl(value, targetHost, legacyHosts);
      }
      return value;
    };

    return JSON.stringify(rewrite(parsed));
  } catch {
    return jsonString;
  }
}

const LDJsonScripts = ({ seoData }) => {
  const $ = cheerio.load(seoData || "");
  const frontendHost = getHost();
  const backendHost = process.env.BACKEND_HOST;
  const legacyHosts = new Set();

  if (backendHost) {
    const backend = safeUrl(backendHost);
    if (backend?.hostname) legacyHosts.add(backend.hostname.toLowerCase());
  }

  // Known historical/internal hosts that can leak from backend SEO payload.
  legacyHosts.add("hiroy.club");
  legacyHosts.add("www.hiroy.club");

  // <script type="application/ld+json">
  const ldJsons = $("script[type='application/ld+json']")
    .map((_, el) => $(el).html())
    .get();

  return (
    <>
      {ldJsons.map((jsonString, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Keep backend schema content but normalize legacy internal hosts.
          dangerouslySetInnerHTML={{
            __html: normalizeJsonLdHosts(
              jsonString,
              frontendHost,
              legacyHosts
            ),
          }}
        />
      ))}
    </>
  );
};

export default LDJsonScripts;
