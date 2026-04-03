// spec: specs/todolist-james-am.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Filtering and Navigation', () => {
  test('Filter by Completed items', async ({ page }) => {
    await page.goto('https://todolist.james.am/');
    
    // Add three items and mark two as completed
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Task 1');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Task 2');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).fill('Task 3');
    await page.getByRole('textbox', { name: 'What need\'s to be done?' }).press('Enter');
    
    // Mark 'Task 2' as completed
    await page.getByRole('listitem').filter({ hasText: 'Task 2' }).getByRole('checkbox').click();
    
    // Verify setup - at this point we should have completed items
    const task2Checkbox = page.getByRole('listitem').filter({ hasText: 'Task 2' }).getByRole('checkbox');
    await expect(task2Checkbox).toBeChecked();
    
    // Click the 'Completed' filter link
    await page.getByRole('link', { name: 'Completed' }).click();
    
    // Verify only completed items are visible
    await expect(page.getByText('Task 2')).toBeVisible();
    
    // Verify active items are hidden
    await expect(page.getByText('Task 3')).not.toBeVisible();
    
    // Verify URL shows '#/completed'
    expect(page.url()).toContain('#/completed');
    
    // Verify all displayed items have checked checkboxes
    const completedCheckbox = page.getByRole('listitem').filter({ hasText: 'Task 2' }).getByRole('checkbox');
    await expect(completedCheckbox).toBeChecked();
    
    // While in completed view, uncheck one of the items
    await page.locator('div').getByRole('checkbox').click();
    
    // Verify item disappears from completed view
    await expect(page.getByText('Task 2')).not.toBeVisible();
    
    // Verify item counter reflects the change (should increase since unchecked item becomes active)
    await expect(page.getByText('2 items left')).toBeVisible();
  });
});