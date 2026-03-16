export function isDev() {
  return process.env.NODE_ENV === "development";
}

export function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function isLocalHost(value) {
  if (!value) return false;
  return /localhost|127\.0\.0\.1|0\.0\.0\.0/i.test(value);
}

export function getHost() {
  const fallbackHost = "https://box-com.com";
  const configuredHost = process.env.FRONTEND_HOST;
  const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : undefined;

  const hostCandidates = [configuredHost, vercelHost, fallbackHost];
  const selected = hostCandidates.find((h) => h && !isLocalHost(h)) || fallbackHost;

  return selected.replace(/\/$/, "");
}
