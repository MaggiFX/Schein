import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tevis.ekom21.de/stdar/?rs');
  await page.getByLabel('Fahrerlaubnisbehörde').click();
  await page.getByLabel('Cookie-Verwendung akzeptieren').click();
  await page.getByRole('tab', { name: 'Erteilung/Ersatz/Umtausch' }).click();
  await page.getByLabel('Erhöhen der Anzahl des Anliegens Antrag Umschreibung einer ausländischen').click();
  await page.getByLabel('Weiter', { exact: true }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByLabel('Bürger- und Ordnungsamt (').click();
  await expect(page.getByRole('heading', { name: 'Kein freier Termin verfügbar' })).toBeVisible();
});