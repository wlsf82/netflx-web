import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    env: { hideXhr: true },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 1024,
    viewportWidth: 1280,
  },
})
