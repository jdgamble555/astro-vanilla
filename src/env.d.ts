/// <reference path="../.astro/types.d.ts" />

declare global {
    interface Window {
        increment2: () => void
        increment3: () => void
    }
}

export { };