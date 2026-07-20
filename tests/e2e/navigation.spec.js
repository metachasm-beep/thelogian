import { test, expect } from '@playwright/test';

test('has title and can navigate to Apply Online', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ABTS/);

  // Click the "Apply Now" button in the Navbar.
  await page.getByRole('link', { name: 'Apply Now' }).click();

  // Expects page to have a heading with the name of Apply Online.
  await expect(page.getByRole('heading', { name: 'Apply Online' })).toBeVisible();
});

test('search modal can be opened and closed', async ({ page }) => {
  await page.goto('/');
  
  // Click the Search trigger
  await page.getByRole('button', { name: 'Search' }).click();
  
  // Expect search input to be focused
  const searchInput = page.getByPlaceholder('Search academics, admissions, doctrine...');
  await expect(searchInput).toBeVisible();
  await expect(searchInput).toBeFocused();
  
  // Type a query
  await searchInput.fill('Academics');
  
  // Click the result
  await page.getByRole('button', { name: 'Academic Programs' }).click();
  
  // Verify navigation
  await expect(page.getByRole('heading', { name: 'Academic Programs' })).toBeVisible();
});
