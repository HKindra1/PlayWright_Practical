import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: '..',
	testMatch: '**/*.{js,ts}',
});
