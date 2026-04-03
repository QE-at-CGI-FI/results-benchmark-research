# TodoList Application Problems

## Overview

After examining the todolist application at https://todolist.james.am/ using Playwright, several issues have been identified ranging from functional bugs to text errors and missing resources.

## Critical Functional Issues

### 1. Item Counter Logic Error

**Problem**: The "items left" counter displays incorrect values consistently.

- Shows "0 items left" when there should be 1 uncompleted item
- Shows "-1 items left" when an item is checked (negative counter!)
- Counter logic appears to be fundamentally broken

**Expected behavior**: Should show the actual count of uncompleted todo items.

## Text and Content Errors

### 2. Grammar Error in Input Placeholder

**Problem**: The input field placeholder text reads "What need's to be done?"

- Incorrect apostrophe usage
- "need's" should be "needs"

**Expected behavior**: Should read "What needs to be done?"

### 3. Spelling Error in Footer

**Problem**: Footer text reads "Double-click to edit a toodo"

- "toodo" is misspelled
- Should be "todo"

**Expected behavior**: Should read "Double-click to edit a todo"

## Technical Issues

### 4. Missing Resources (404 Errors)

**Problem**: Multiple HTTP 404 errors in browser console:

- `https://todolist.james.am/learn.json` - Not Found
- `https://todolist.james.am/api` - Not Found
- `https://todolist.james.am/favicon.ico` - Not Found

**Impact**: These errors appear in the browser console and may indicate incomplete application setup or broken links.

## Working Functionality

Despite the issues above, the following features work correctly:

- ✅ Adding new todo items
- ✅ Checking/unchecking items as complete
- ✅ Filtering by All/Active/Completed
- ✅ Deleting individual items with × button
- ✅ Clearing all completed items
- ✅ Double-click editing of item text
- ✅ Preventing empty todo items from being added
- ✅ "Mark all as complete" functionality

## Recommendations

1. **High Priority**: Fix the counter logic to display accurate counts
2. **Medium Priority**: Correct the text/spelling errors for better user experience
3. **Low Priority**: Resolve the 404 errors or remove the unnecessary resource requests

The core todo functionality works well, but the counter bug significantly impacts usability and should be addressed first.
