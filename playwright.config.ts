import { fileURLToPath } from 'node:url'
import { defineConfig, devices } from '@playwright/test'
import type { ConfigOptions } from '@nuxt/test-utils/playwright'

export default defineConfig<ConfigOptions>({
    testDir: './play-tests',
    timeout: 60 * 1000,
  use: {
    nuxt: {
      rootDir: fileURLToPath(new URL('.', import.meta.url))
    }
  },
  // ...
})
