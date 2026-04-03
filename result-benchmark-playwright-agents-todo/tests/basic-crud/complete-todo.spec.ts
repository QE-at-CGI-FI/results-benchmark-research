// spec: specs/todolist-james-am.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Basic CRUD Operations', () => {
  test('Mark todo items as complete', async ({ page }) => {
    await page.goto('https://todolist.james.am/');
    
    // Add two todo items: 'Task 1' and 'Task 2'
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Task 1');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Task 2');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    // Verify both items are created with unchecked checkboxes
    const task1Checkbox = page.getByRole('listitem').filter({ hasText: 'Task 1' }).getByRole('checkbox');
    const task2Checkbox = page.getByRole('listitem').filter({ hasText: 'Task 2' }).getByRole('checkbox');
    
    await expect(task1Checkbox).not.toBeChecked();
    await expect(task2Checkbox).not.toBeChecked();
    await expect(page.getByText('Task 1')).toBeVisible();
    await expect(page.getByText('Task 2')).toBeVisible();
    
    // Click the checkbox for 'Task 1'
    await page.getByRole('listitem').filter({ hasText: 'Task 1' }).getByRole('checkbox').click();
    
    // Verify Task 1 checkbox becomes checked and counter decreases
    await expect(task1Checkbox).toBeChecked();
    await expect(page.getByText('0 items left')).toBeVisible();
    
    // Verify Task 1 delete button becomes a proper button element
    const task1DeleteButton = page.getByRole('listitem').filter({ hasText: 'Task 1' }).getByRole('button', { name: '×' });
    await expect(task1DeleteButton).toBeVisible();
    
    // Click the checkbox for 'Task 1' again to uncheck it
    await page.getByRole('listitem').filter({ hasText: 'Task 1' }).getByRole('checkbox').click();
    
    // Verify Task 1 checkbox becomes unchecked and counter increases
    await expect(task1Checkbox).not.toBeChecked();
    await expect(page.getByText('1 item left')).toBeVisible();
  });
});