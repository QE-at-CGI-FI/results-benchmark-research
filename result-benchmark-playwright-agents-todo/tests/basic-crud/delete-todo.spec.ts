// spec: specs/todolist-james-am.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Basic CRUD Operations', () => {
  test('Delete todo items', async ({ page }) => {
    await page.goto('https://todolist.james.am/');
    
    // Add three todo items: 'Item 1', 'Item 2', 'Item 3'
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Item 1');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Item 2');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Item 3');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    // Verify all three items are visible
    await expect(page.getByText('Item 1')).toBeVisible();
    await expect(page.getByText('Item 2')).toBeVisible();
    await expect(page.getByText('Item 3')).toBeVisible();
    
    // Click the delete button (×) for 'Item 2'
    await page.getByText('Item 2').click();
    await page.getByRole('button', { name: '×' }).click();
    
    // Verify Item 2 is removed and others remain in order
    await expect(page.getByText('Item 2')).not.toBeVisible();
    await expect(page.getByText('Item 1')).toBeVisible();
    await expect(page.getByText('Item 3')).toBeVisible();
    await expect(page.getByText('1 item left')).toBeVisible();
    
    // Mark 'Item 1' as complete, then delete it
    await page.getByRole('listitem').filter({ hasText: 'Item 1' }).getByRole('checkbox').click();
    
    // Verify Item 1 is marked as complete
    await expect(page.getByRole('listitem').filter({ hasText: 'Item 1' }).getByRole('checkbox')).toBeChecked();
    
    // Delete Item 1
    await page.getByRole('button', { name: '×' }).click();
    
    // Verify only Item 3 remains
    await expect(page.getByText('Item 1')).not.toBeVisible();
    await expect(page.getByText('Item 3')).toBeVisible();
    await expect(page.getByText('0 items left')).toBeVisible();
  });
});