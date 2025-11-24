export function isDev() {
  return process.env.NODE_ENV === "development";
}

export function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

export function getHost() {
  return process.env.FRONTEND_HOST.replace(/\/$/, "");
}
