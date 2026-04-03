// spec: specs/todolist-james-am.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Filtering and Navigation', () => {
  test('URL navigation and persistence', async ({ page }) => {
    await page.goto('https://todolist.james.am/');
    
    // Add items and navigate to different filter views
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Navigation Test 1');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Navigation Test 2');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    // Navigate to All view to verify URL '#/'
    await page.getByRole('link', { name: 'All' }).click();
    expect(page.url()).toContain('#/');
    
    // Navigate to Active view to verify URL '#/active'
    await page.getByRole('link', { name: 'active' }).click();
    expect(page.url()).toContain('#/active');
    
    // Navigate to Completed view to verify URL '#/completed'
    await page.getByRole('link', { name: 'Completed' }).click();
    expect(page.url()).toContain('#/completed');
    
    // Test browser back button functionality
    await page.evaluate('() => { window.history.back(); }');
    // Wait for navigation to complete
    await page.waitForURL('**/active');
    
    // Verify we went back to active view
    expect(page.url()).toContain('#/active');
    
    // Test direct URL access to '#/completed' view
    await page.goto('https://todolist.james.am/#/completed');
    expect(page.url()).toContain('#/completed');
    
    // Navigate to active view before testing page refresh
    await page.goto('https://todolist.james.am/#/active');
    
    // Verify items are present before refresh
    await expect(page.getByText('Navigation Test 1')).toBeVisible();
    await expect(page.getByText('Navigation Test 2')).toBeVisible();
    
    // Refresh the page while on '#/active' to test persistence
    await page.keyboard.press('F5');
    
    // Verify page loads with active filter applied
    expect(page.url()).toContain('#/active');
    
    // Verify items persist (localStorage is working)
    await expect(page.getByText('Navigation Test 1')).toBeVisible();
    await expect(page.getByText('Navigation Test 2')).toBeVisible();
    
    // Verify URL remains '#/active'
    expect(page.url()).toContain('#/active');
  });
});