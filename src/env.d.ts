/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

// https://docs.astro.build/en/guides/environment-variables/#intellisense-for-typescript
interface ImportMetaEnv {
	readonly SITE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare const gsap: typeof import("gsap");
