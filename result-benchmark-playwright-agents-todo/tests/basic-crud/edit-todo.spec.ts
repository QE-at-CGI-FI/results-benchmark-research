// spec: specs/todolist-james-am.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Basic CRUD Operations', () => {
  test('Edit existing todo item', async ({ page }) => {
    await page.goto('https://todolist.james.am/');
    
    // Add a todo item 'Original task'
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Original task');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    // Verify todo item is created successfully
    await expect(page.getByText('Original task')).toBeVisible();
    
    // Double-click on the todo item text 'Original task'
    await page.getByText('Original task').dblclick();
    
    // Verify item enters edit mode
    const listItem = page.getByRole('listitem').filter({ hasText: 'Original task' });
    const editInput = listItem.getByRole('textbox');
    await expect(editInput).toBeVisible();
    await expect(editInput).toBeFocused();
    await expect(editInput).toHaveValue('Original task');
    
    // Clear the text and type 'Updated task', then press Enter
    await editInput.fill('Updated task');
    // Use keyboard.press instead of locator.press for better reliability
    await page.keyboard.press('Enter');
    
    // Verify item text updates and edit mode exits
    await expect(page.getByText('Updated task')).toBeVisible();
    await expect(page.getByText('Original task')).not.toBeVisible();
    await expect(editInput).not.toBeVisible();
    
    // Add another todo item for escape testing
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Test escape');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    // Double-click on another item and press Escape
    await page.getByText('Test escape').dblclick();
    
    // Verify edit mode is active
    const escapeEditInput = page.getByRole('listitem').filter({ hasText: 'Test escape' }).getByRole('textbox');
    await expect(escapeEditInput).toBeVisible();
    
    // Press Escape to cancel edit mode
    await page.keyboard.press('Escape');
    
    // Verify edit mode is cancelled without saving changes
    await expect(page.getByText('Test escape')).toBeVisible();
    await expect(escapeEditInput).not.toBeVisible();
  });
});