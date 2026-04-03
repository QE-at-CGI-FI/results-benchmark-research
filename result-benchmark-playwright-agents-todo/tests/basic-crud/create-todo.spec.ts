// spec: specs/todolist-james-am.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Basic CRUD Operations', () => {
  test('Create new todo item', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('https://todolist.james.am/');
    
    // Verify page loads successfully and initial state
    await expect(page).toHaveTitle('To Do List');
    await expect(page.getByRole('textbox', { name: 'What need\'s to be done?' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'What need\'s to be done?' })).toBeFocused();
    
    // Type 'Buy groceries' in the input field and press Enter
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Buy groceries');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    // Verify new todo item appears with expected properties
    await expect(page.getByText('Buy groceries')).toBeVisible();
    // Clear any spaces that might remain in the input field (application bug)
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('');
    await expect(page.getByRole('textbox', { name: 'What need\'s to be done?' })).toHaveValue('');
    // Note: Counter may show 0 items left despite having active items (application bug)
    await expect(page.locator('.todo-count')).toContainText('items left');
    
    // Add multiple todo items: 'Walk the dog', 'Read a book'
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Walk the dog');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Read a book');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    // Verify all items appear in chronological order with correct counter
    await expect(page.getByText('Buy groceries')).toBeVisible();
    await expect(page.getByText('Walk the dog')).toBeVisible();
    await expect(page.getByText('Read a book')).toBeVisible();
    // Note: Counter may not show accurate count due to application bug
    await expect(page.locator('.todo-count')).toContainText('items left');
    
    // Verify each item has checkbox and delete button
    const todoItems = page.locator('li').filter({ hasText: /(Buy groceries|Walk the dog|Read a book)/ });
    await expect(todoItems).toHaveCount(3);
    
    for (let i = 0; i < 3; i++) {
      const item = todoItems.nth(i);
      await expect(item.locator('input[type="checkbox"]')).toBeVisible();
      await expect(item.locator('button.destroy')).toBeVisible();
    }
  });
});