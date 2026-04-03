# Missing Test Coverage Plan

## Application Overview

Test plan to address gaps in test coverage for the Todo List application based on take-home requirements. This covers empty state behavior, input validation, edge cases, and functionality not currently tested.

## Test Scenarios

### 1. Empty State and Onboarding

**Seed:** `tests/seed.spec.ts`

#### 1.1. Empty state displays correctly on first load

**File:** `tests/onboarding/empty-state.spec.ts`

**Steps:**
  1. Navigate to the todo list application
    - expect: Page loads successfully
    - expect: Main task area is not visible
    - expect: Footer controls are not visible
    - expect: Only header and input are shown
  2. Check input field state and focus
    - expect: Input field is visible and ready for typing
    - expect: Input field has focus automatically
    - expect: Placeholder text shows helpful guidance
  3. Verify clean interface without clutter
    - expect: No todo items displayed
    - expect: No counters or filters visible
    - expect: Interface is minimal and focused

#### 1.2. Main area and footer appear after first task

**File:** `tests/onboarding/first-task-reveals-ui.spec.ts`

**Steps:**
  1. Start with empty state
    - expect: Main area hidden
    - expect: Footer hidden
  2. Add the first task
    - expect: Main area becomes visible
    - expect: Footer becomes visible
    - expect: Task appears in the list
  3. Delete the only task
    - expect: Main area becomes hidden again
    - expect: Footer becomes hidden again
    - expect: Returns to clean empty state

### 2. Input Validation and Edge Cases

**Seed:** `tests/seed.spec.ts`

#### 2.1. Empty and whitespace validation

**File:** `tests/validation/empty-input-validation.spec.ts`

**Steps:**
  1. Try to create task with empty input
    - expect: No task is created
    - expect: Input remains ready for typing
    - expect: No error messages displayed
  2. Try to create task with only spaces
    - expect: No task is created
    - expect: Input clears and remains focused
    - expect: Whitespace is not accepted as valid task
  3. Try to create task with tabs and newlines only
    - expect: No task is created
    - expect: Various whitespace characters rejected

#### 2.2. Input clearing after task creation

**File:** `tests/validation/input-clearing.spec.ts`

**Steps:**
  1. Add a normal task
    - expect: Task is created successfully
    - expect: Input field clears completely
    - expect: Input field remains focused and ready
  2. Add multiple tasks in sequence
    - expect: Each task creation clears input
    - expect: Input stays focused between entries
    - expect: No residual text remains

#### 2.3. Special characters and Unicode support

**File:** `tests/validation/special-characters.spec.ts`

**Steps:**
  1. Create tasks with emojis and Unicode characters
    - expect: Tasks with 🎯📝✅ emojis display correctly
    - expect: Tasks with åäö Scandic characters work
    - expect: Unicode characters don't break layout
  2. Create tasks with special symbols and punctuation
    - expect: Tasks with @#$%^&*()_+= symbols work
    - expect: HTML characters like <>&" are handled safely
    - expect: Layout remains stable with various characters
  3. Create very long tasks
    - expect: Long content doesn't break layout
    - expect: Text wraps appropriately
    - expect: Task remains functional regardless of length

### 3. Edit Mode Behavior

**Seed:** `tests/seed.spec.ts`

#### 3.1. Controls hidden during edit mode

**File:** `tests/editing/edit-mode-ui.spec.ts`

**Steps:**
  1. Create a task and double-click to edit
    - expect: Edit input field appears
    - expect: Checkbox is hidden during edit
    - expect: Delete button is hidden during edit
  2. Complete edit and verify controls return
    - expect: Edit input disappears
    - expect: Checkbox becomes visible again
    - expect: Delete button becomes visible again

#### 3.2. Whitespace-only edit handling

**File:** `tests/editing/whitespace-edit-removal.spec.ts`

**Steps:**
  1. Create a task and enter edit mode
    - expect: Task enters edit mode successfully
  2. Clear text and enter only whitespace, then save
    - expect: Task is removed completely
    - expect: No blank task remains
    - expect: List updates correctly
  3. Edit with mixed whitespace (spaces, tabs)
    - expect: Task is removed when only whitespace provided
    - expect: Various whitespace types handled consistently

#### 3.3. Edit saves on focus loss

**File:** `tests/editing/focus-loss-saves.spec.ts`

**Steps:**
  1. Create a task and enter edit mode
    - expect: Task is in edit mode
  2. Modify text and click outside the edit field
    - expect: Changes are saved automatically
    - expect: Edit mode exits
    - expect: Task displays updated text
  3. Start edit, modify text, then click on input field to add new task
    - expect: Current edit is saved
    - expect: Focus moves to new task input
    - expect: Both tasks are preserved correctly

### 4. Clear Completed Functionality

**Seed:** `tests/seed.spec.ts`

#### 4.1. Clear completed shows count and clears items

**File:** `tests/bulk-operations/clear-completed.spec.ts`

**Steps:**
  1. Create several tasks and mark some as completed
    - expect: Mixed completed and active tasks exist
  2. Verify clear completed control shows correct count
    - expect: Clear completed button shows number of completed tasks
    - expect: Button text indicates how many items will be cleared
  3. Click clear completed
    - expect: All completed tasks are removed
    - expect: Active tasks remain unchanged
    - expect: Clear completed control updates or hides

#### 4.2. Clear completed hidden when no completed tasks

**File:** `tests/bulk-operations/clear-completed-visibility.spec.ts`

**Steps:**
  1. Start with only active tasks
    - expect: Clear completed control is not visible
    - expect: Only relevant controls are shown
  2. Complete one task
    - expect: Clear completed control becomes visible
    - expect: Control shows '1' completed task
  3. Clear the completed task
    - expect: Clear completed control becomes hidden again
    - expect: UI returns to clean state with only active tasks

### 5. Status Counter Grammar and Display

**Seed:** `tests/seed.spec.ts`

#### 5.1. Singular and plural grammar correctness

**File:** `tests/status/counter-grammar.spec.ts`

**Steps:**
  1. Create exactly one active task
    - expect: Counter shows '1 item left' (singular)
    - expect: No decorative punctuation around count
    - expect: Number is visually emphasized (bold)
  2. Add a second active task
    - expect: Counter shows '2 items left' (plural)
    - expect: Grammar switches correctly to plural form
  3. Complete all tasks
    - expect: Counter shows '0 items left' (plural)
    - expect: Zero uses plural form correctly

#### 5.2. Visual emphasis and formatting

**File:** `tests/status/counter-formatting.spec.ts`

**Steps:**
  1. Create tasks with varying counts
    - expect: Number portion is visually emphasized
    - expect: No decorative punctuation or extra formatting
    - expect: Count is easy to spot at a glance
  2. Test with different count ranges
    - expect: Single digit counts formatted correctly
    - expect: Double digit counts formatted correctly
    - expect: Formatting remains consistent across count ranges

### 6. Session Persistence

**Seed:** `tests/seed.spec.ts`

#### 6.1. Task persistence across browser restart

**File:** `tests/persistence/browser-restart-persistence.spec.ts`

**Steps:**
  1. Create several tasks with mixed completion states
    - expect: Tasks and their states are saved
  2. Close and reopen browser
    - expect: All tasks remain with correct completion states
    - expect: No data is lost
    - expect: Tasks appear in same order
  3. Modify tasks after restart and close again
    - expect: Changes persist across multiple browser sessions
    - expect: Local storage maintains data integrity

#### 6.2. Filter view persistence

**File:** `tests/persistence/filter-persistence.spec.ts`

**Steps:**
  1. Navigate to Active filter and add tasks
    - expect: Active filter view is selected
  2. Refresh page while on Active filter
    - expect: Active filter remains selected
    - expect: Page loads showing active tasks
    - expect: Filter state is maintained
  3. Switch to Completed filter and refresh
    - expect: Completed filter state persists through refresh
    - expect: URL hash remains correct
    - expect: Filter selection is remembered
