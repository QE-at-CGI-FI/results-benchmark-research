// spec: specs/todolist-james-am.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Filtering and Navigation', () => {
  test('Filter by All items', async ({ page }) => {
    await page.goto('https://todolist.james.am/');
    
    // Add three items: 'Active 1', 'Active 2', 'Completed 1' and mark 'Completed 1' as done
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Active 1');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Active 2');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Completed 1');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    // Mark 'Completed 1' as done
    await page.getByRole('listitem').filter({ hasText: 'Completed 1' }).getByRole('checkbox').click();
    
    // Verify initial state - all three items visible
    await expect(page.getByText('Active 1')).toBeVisible();
    await expect(page.getByText('Active 2')).toBeVisible();
    await expect(page.getByText('Completed 1')).toBeVisible();
    
    // Verify URL shows '#/'
    expect(page.url()).toContain('#/');
    
    // Verify completed item is checked and active items are unchecked
    await expect(page.getByRole('listitem').filter({ hasText: 'Active 1' }).getByRole('checkbox')).not.toBeChecked();
    await expect(page.getByRole('listitem').filter({ hasText: 'Active 2' }).getByRole('checkbox')).not.toBeChecked();
    await expect(page.getByRole('listitem').filter({ hasText: 'Completed 1' }).getByRole('checkbox')).toBeChecked();
    
    // Click the 'All' filter link
    await page.getByRole('link', { name: 'All' }).click();
    
    // Verify all items (both active and completed) are still visible
    await expect(page.getByText('Active 1')).toBeVisible();
    await expect(page.getByText('Active 2')).toBeVisible();
    await expect(page.getByText('Completed 1')).toBeVisible();
    
    // Verify URL still shows '#/'
    expect(page.url()).toContain('#/');
    
    // Verify both checked and unchecked items are displayed
    await expect(page.getByRole('listitem').filter({ hasText: 'Active 1' }).getByRole('checkbox')).not.toBeChecked();
    await expect(page.getByRole('listitem').filter({ hasText: 'Active 2' }).getByRole('checkbox')).not.toBeChecked();
    await expect(page.getByRole('listitem').filter({ hasText: 'Completed 1' }).getByRole('checkbox')).toBeChecked();
  });
});