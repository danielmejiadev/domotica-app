import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Default: dynamic Next.js server (Route Handlers, Server Components reading
// from Supabase per-request) deployed to Cloudflare Workers via the
// @opennextjs/cloudflare adapter (see wrangler.jsonc, open-next.config.ts).
// @cloudflare/next-on-pages is deprecated and not used.
//
// NEXT_PUBLIC_STATIC_EXPORT=true builds the public pages only, for GitHub
// Pages (see .github/workflows/pages.yml, which strips admin/api/auth first).
const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

const nextConfig: NextConfig = isStaticExport
  ? {
      output: "export",
      trailingSlash: true,
      basePath: process.env.NEXT_PUBLIC_BASE_PATH,
      images: { loader: "custom", loaderFile: "./src/lib/staticImageLoader.ts" },
    }
  : {};

if (!isStaticExport) {
  // Makes `pnpm dev` use the same Cloudflare bindings (ASSETS, IMAGES,
  // WORKER_SELF_REFERENCE) as the deployed Worker, reading local values from
  // .dev.vars instead of the production environment.
  initOpenNextCloudflareForDev();
}

export default nextConfig;
