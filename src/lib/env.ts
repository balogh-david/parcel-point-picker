type RequiredEnvKey =
  | "VITE_PICKUP_API_ENDPOINT"
  | "VITE_PICKUP_SESSION_ID"
  | "VITE_PICKUP_NOMINATIM_URL";

export function requireEnv(key: RequiredEnvKey): string {
  const value = import.meta.env[key];

  if (!value) {
    throw new Error("The application is not configured correctly.");
  }

  return value;
}
