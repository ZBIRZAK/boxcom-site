export function normalizeBoxcomBrand(value = "") {
  if (typeof value !== "string") return value;

  return value
    .replace(/BoxCom/g, "Boxcom")
    .replace(
      /https?:\/\/(?:www\.)?boxcom-africa\.com/gi,
      "https://www.boxcomafrica.com"
    )
    .replace(
      /http:\/\/(?:www\.)?boxcomafrica\.com/gi,
      "https://www.boxcomafrica.com"
    )
    .replace(
      /https:\/\/boxcomafrica\.com/gi,
      "https://www.boxcomafrica.com"
    );
}

export function normalizeBoxcomBrandDeep(value) {
  if (typeof value === "string") return normalizeBoxcomBrand(value);
  if (Array.isArray(value)) return value.map(normalizeBoxcomBrandDeep);

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        normalizeBoxcomBrandDeep(item),
      ])
    );
  }

  return value;
}
