// spec: specs/todolist-james-am.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Bulk Operations', () => {
  test('Mark all items as complete', async ({ page }) => {
    await page.goto('https://todolist.james.am/');
    
    // Add three todo items, and ensure they become uncompleted
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Bulk Test 1');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Bulk Test 2');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
        
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Bulk Test 3');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    // Ensure all items are unchecked (new items might be auto-completed)
    const item1Checkbox = page.getByRole('listitem').filter({ hasText: 'Bulk Test 1' }).getByRole('checkbox');
    const item2Checkbox = page.getByRole('listitem').filter({ hasText: 'Bulk Test 2' }).getByRole('checkbox');
    const item3Checkbox = page.getByRole('listitem').filter({ hasText: 'Bulk Test 3' }).getByRole('checkbox');
    
    // If items are checked by default, uncheck them
    if (await item1Checkbox.isChecked()) {
      await item1Checkbox.click();
    }
    if (await item2Checkbox.isChecked()) {
      await item2Checkbox.click();
    }
    if (await item3Checkbox.isChecked()) {
      await item3Checkbox.click();
    }
    
    // Verify initial state - all individual items are unchecked
    const item1Checkbox = page.getByRole('listitem').filter({ hasText: 'Bulk Test 1' }).getByRole('checkbox');
    const item2Checkbox = page.getByRole('listitem').filter({ hasText: 'Bulk Test 2' }).getByRole('checkbox');
    const item3Checkbox = page.getByRole('listitem').filter({ hasText: 'Bulk Test 3' }).getByRole('checkbox');
    
    await expect(item1Checkbox).not.toBeChecked();
    await expect(item2Checkbox).not.toBeChecked();
    await expect(item3Checkbox).not.toBeChecked();
    
    // Click the 'Mark all as complete' checkbox
    await page.getByText('Mark all as complete').click();
    
    // Verify all individual items become checked
    await expect(item1Checkbox).toBeChecked();
    await expect(item2Checkbox).toBeChecked();
    await expect(item3Checkbox).toBeChecked();
    
    // Uncheck one individual item
    await page.getByRole('listitem').filter({ hasText: 'Bulk Test 2' }).getByRole('checkbox').click();
    
    // Verify one item becomes unchecked while others remain checked
    await expect(item1Checkbox).toBeChecked();
    await expect(item2Checkbox).not.toBeChecked();
    await expect(item3Checkbox).toBeChecked();
    
    // Click 'Mark all as complete' again (this will uncheck all first, then we click again to check all)
    await page.getByText('Mark all as complete').click();
    await page.getByText('Mark all as complete').click();
    
    // Verify all items become checked again including the previously unchecked one
    await expect(item1Checkbox).toBeChecked();
    await expect(item2Checkbox).toBeChecked();
    await expect(item3Checkbox).toBeChecked();
  });
});