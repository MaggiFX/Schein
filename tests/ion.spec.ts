import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ion2s.com/');
  await page.getByRole('link', { name: 'Kontakt aufnehmen' }).click();
  await page.getByLabel('Thema Ihres Anliegens *').selectOption('1');
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('Robert Lang');
  await expect(page.getByText('Schreiben Sie')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Kontakt aufnehmen' })).toBeVisible();
});