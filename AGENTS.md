<!-- BEGIN:pnpm-rules -->
# This project uses pnpm — NEVER use npm to install or remove packages

Vercel builds this project with **pnpm** (`packageManager: pnpm@11.1.2` in `package.json`, `pnpm-lock.yaml` present).
Running `npm install` or `npm uninstall` only updates `package-lock.json` — it leaves `pnpm-lock.yaml` stale.
Vercel then fails with `ERR_PNPM_OUTDATED_LOCKFILE` on every deploy.

**Rules (non-negotiable):**
- **ALWAYS** use `pnpm add <pkg>` to install packages (never `npm install <pkg>`)
- **ALWAYS** use `pnpm remove <pkg>` to uninstall packages (never `npm uninstall <pkg>`)
- **ALWAYS** use `pnpm install` to sync the lockfile after manual `package.json` edits
- `npm run build` / `pnpm run build` are both fine for local builds (npm delegates to the script)
- The pre-push git hook runs `pnpm run build` before every push — if it fails locally it won't push
<!-- END:pnpm-rules -->

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:tailwind-font-size-rules -->
# Tailwind v4 Font Sizes — NEVER use named scale utilities for custom sizes

This project uses Tailwind v4. The named text utilities (`text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, etc.) map to Tailwind's **built-in** scale, which is completely different from any `--font-size-*` variables defined in `@theme inline`.

**The built-in Tailwind v4 scale (do not assume these match project sizes):**
- `text-sm` = 14px, `text-base` = 16px, `text-lg` = 18px
- `text-xl` = 20px, `text-2xl` = 24px, `text-3xl` = 30px
- `text-4xl` = 36px, `text-5xl` = 48px

**Rules (non-negotiable):**
- **NEVER** replace an explicit `text-[Npx]` value with a named Tailwind token like `text-3xl` unless you have verified the pixel value matches exactly.
- **ALWAYS** use arbitrary values for custom sizes: `text-[13px]`, `text-[52px]`, `text-[72px]`, etc.
- **NEVER** invent utility class names like `text-14xl`, `text-17xl` — these do not exist in Tailwind v4's built-in scale and will silently produce uncontrolled/inherited font sizes.
- The `@theme inline` block in `globals.css` defines CSS variables only. They do NOT auto-generate utility classes unless the variable name matches Tailwind's `--text-*` namespace exactly.
<!-- END:tailwind-font-size-rules -->

<!-- BEGIN:image-optimization-rules -->
# Image & Video Assets

Before adding, modifying, or deploying any image or video asset, you MUST read
and follow the rules in IMAGE_OPTIMIZATION.md at the project root.

Key checks (non-negotiable):
- **Never** use raw `<img>` tags or CSS `background-image` — always use `<Image>` from `next/image` (or the project wrapper if one exists, e.g. `@/atoms/img`)
- **Always** set the `sizes` prop to match actual rendered dimensions (without it, next/image downloads a 1920px image for a 55px avatar)
- **Only one** image per page gets `priority` + `fetchPriority="high"` — the LCP element (largest above-fold image). All others lazy-load by default
- **Always** use `quality={100}` — never lower image quality below 100 for any image type (photos, screenshots, UI, logos, heroes). This is a global rule across all projects
- **Never** use `dynamic(() => import("next/image"))` — it kills the SSR preload signal for priority images; only `ReactPlayer`, `Lottie`, and similar heavy client-only libs should be dynamically imported
- If adding images from a new S3 bucket, add its hostname to `remotePatterns` in `next.config.ts` first
<!-- END:image-optimization-rules -->

<!-- BEGIN:asset-storage-rules -->
# Asset Storage — All Assets Must Live on S3

**Never** commit image, video, audio, font, PDF, or any binary asset file to the Git repository. All assets must be uploaded to the project S3 bucket and referenced by URL or proxy path.

Rules:
- Upload all images, videos, fonts, and binary files to the project S3 bucket before referencing them in code
- Reference assets via the project S3 URL or its configured proxy path (e.g. `/sw-img/` for StealthWatch, the `S3` constant for TOL)
- **Never** store large assets in `public/` — only tiny files like favicons and `robots.txt` (<10 KB) may live there
- **Never** commit `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, `.svg` (large), `.mp4`, `.mov`, `.pdf`, `.woff`, `.woff2`, or `.ttf` files to git
- After uploading to a new S3 bucket, add the hostname to `remotePatterns` in `next.config.ts` before referencing it in `<Image>`
- All S3 assets must go through `next/image` for delivery — never link to raw S3 URLs in `<img>` or `<video>` tags
<!-- END:asset-storage-rules -->

<!-- BEGIN:optimization-playbook -->
# Performance Optimization Playbook

When the user mentions "optimization file", "optimization playbook", "performance playbook", or asks to optimize a site for PageSpeed/Lighthouse, read and follow the playbook at:

`/Users/alihusayni/.gemini/config/optimization-playbook.md`

This contains the proven workflow for achieving 99/100 PageSpeed scores across all projects.
<!-- END:optimization-playbook -->
