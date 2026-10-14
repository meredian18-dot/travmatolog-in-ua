/**
 * Path prefix for the deployment. Empty for root hosting (local dev,
 * custom domain); set to "/<repo>" for GitHub Pages project sites.
 * Driven by NEXT_PUBLIC_BASE_PATH at build time.
 */
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
