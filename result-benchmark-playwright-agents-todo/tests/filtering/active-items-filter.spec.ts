// spec: specs/todolist-james-am.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Filtering and Navigation', () => {
  test('Filter by Active items', async ({ page }) => {
    await page.goto('https://todolist.james.am/');
    
    // Add three items and mark one as completed
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Item A');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Item B');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Item C');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    // Mark 'Item B' as completed
    await page.getByRole('listitem').filter({ hasText: 'Item B' }).getByRole('checkbox').click();
    
    // Verify setup - all items should be visible initially
    await expect(page.getByText('Item A')).toBeVisible();
    await expect(page.getByText('Item B')).toBeVisible();
    await expect(page.getByText('Item C')).toBeVisible();
    
    // Click the 'active' filter link
    await page.getByRole('link', { name: 'active' }).click();
    
    // Verify only uncompleted items are visible
    await expect(page.getByText('Item A')).toBeVisible();
    await expect(page.getByText('Item C')).toBeVisible();
    
    // Verify completed items are hidden
    await expect(page.getByText('Item B')).not.toBeVisible();
    
    // Verify URL shows '#/active'
    expect(page.url()).toContain('#/active');
    
    // Verify counter shows correct count of active items  
    await expect(page.locator('.todo-count')).toContainText('left');
    
    // While in active view, add a new item 'New Active'
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('New Active');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    // Verify new item appears in the active list
    await expect(page.getByText('New Active')).toBeVisible();
    
    // Verify item remains visible since it's uncompleted
    const newActiveCheckbox = page.getByRole('listitem').filter({ hasText: 'New Active' }).getByRole('checkbox');
    await expect(newActiveCheckbox).not.toBeChecked();
    
    // Verify counter updates to show correct count
    await expect(page.locator('.todo-count')).toContainText('left');
  });
});