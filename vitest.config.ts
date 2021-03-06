/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    coverage: {
      reporter: ['clover', 'html'],
    }
  },
});
