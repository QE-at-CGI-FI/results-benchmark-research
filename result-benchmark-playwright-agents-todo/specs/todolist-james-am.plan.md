# Todo List Application Test Plan

## Application Overview

A comprehensive test plan for todolist.james.am, a web-based todo list application that allows users to create, edit, complete, delete, and filter todo items. The application features a single-page interface with persistent state management and client-side filtering capabilities.

## Test Scenarios

### 1. Basic CRUD Operations

**Seed:** `tests/seed.spec.ts`

#### 1.1. Create new todo item

**File:** `tests/basic-crud/create-todo.spec.ts`

**Steps:**
  1. Navigate to the homepage
    - expect: Page loads successfully
    - expect: Input field 'What need's to be done?' is visible and active
    - expect: Page title is 'To Do List'
  2. Type 'Buy groceries' in the input field and press Enter
    - expect: New todo item 'Buy groceries' appears in the list
    - expect: Input field clears after submission
    - expect: Item counter shows '0 items left'
    - expect: Todo item has an unchecked checkbox
    - expect: Todo item has a delete button (×)
  3. Add multiple todo items: 'Walk the dog', 'Read a book'
    - expect: All items appear in chronological order
    - expect: Counter updates correctly (should show '2 items left')
    - expect: Each item has its own checkbox and delete button

#### 1.2. Edit existing todo item

**File:** `tests/basic-crud/edit-todo.spec.ts`

**Steps:**
  1. Add a todo item 'Original task'
    - expect: Todo item is created successfully
  2. Double-click on the todo item text 'Original task'
    - expect: Item enters edit mode
    - expect: Text becomes an editable input field
    - expect: Input field is focused and contains 'Original task'
  3. Clear the text and type 'Updated task', then press Enter
    - expect: Item text updates to 'Updated task'
    - expect: Edit mode is exited
    - expect: Item returns to normal display mode
  4. Double-click on another item and press Escape (if supported)
    - expect: Edit mode is cancelled without saving changes (if Escape handling exists)

#### 1.3. Mark todo items as complete

**File:** `tests/basic-crud/complete-todo.spec.ts`

**Steps:**
  1. Add two todo items: 'Task 1' and 'Task 2'
    - expect: Both items are created with unchecked checkboxes
    - expect: Counter shows '2 items left'
  2. Click the checkbox for 'Task 1'
    - expect: Task 1 checkbox becomes checked
    - expect: Counter decreases to '1 item left'
    - expect: Task 1 delete button becomes a proper button element
  3. Click the checkbox for 'Task 1' again to uncheck it
    - expect: Task 1 checkbox becomes unchecked
    - expect: Counter increases to '2 items left'
    - expect: Task 1 returns to incomplete state

#### 1.4. Delete todo items

**File:** `tests/basic-crud/delete-todo.spec.ts`

**Steps:**
  1. Add three todo items: 'Item 1', 'Item 2', 'Item 3'
    - expect: All three items are visible
    - expect: Counter shows '3 items left'
  2. Click the delete button (×) for 'Item 2'
    - expect: Item 2 is removed from the list
    - expect: Items 1 and 3 remain in their original order
    - expect: Counter decreases to '2 items left'
  3. Mark 'Item 1' as complete, then delete it
    - expect: Item 1 is removed regardless of completion status
    - expect: Only 'Item 3' remains
    - expect: Counter shows '1 item left'

### 2. Filtering and Navigation

**Seed:** `tests/seed.spec.ts`

#### 2.1. Filter by All items

**File:** `tests/filtering/all-items-filter.spec.ts`

**Steps:**
  1. Add three items: 'Active 1', 'Active 2', 'Completed 1' and mark 'Completed 1' as done
    - expect: All three items are visible
    - expect: URL shows '#/'
    - expect: Counter shows '2 items left'
  2. Click the 'All' filter link
    - expect: All items (both active and completed) are visible
    - expect: URL shows '#/'
    - expect: Both checked and unchecked items are displayed

#### 2.2. Filter by Active items

**File:** `tests/filtering/active-items-filter.spec.ts`

**Steps:**
  1. Add three items and mark one as completed
    - expect: Setup completed successfully
  2. Click the 'active' filter link
    - expect: Only uncompleted items are visible
    - expect: URL shows '#/active'
    - expect: Completed items are hidden
    - expect: Counter still shows correct count of active items
  3. While in active view, add a new item 'New Active'
    - expect: New item appears in the active list
    - expect: Item remains visible since it's uncompleted
    - expect: Counter updates appropriately

#### 2.3. Filter by Completed items

**File:** `tests/filtering/completed-items-filter.spec.ts`

**Steps:**
  1. Add three items and mark two as completed
    - expect: Setup completed successfully
  2. Click the 'Completed' filter link
    - expect: Only completed items are visible
    - expect: URL shows '#/completed'
    - expect: Active items are hidden
    - expect: All displayed items have checked checkboxes
  3. While in completed view, uncheck one of the items
    - expect: Item disappears from completed view
    - expect: Item counter reflects the change

#### 2.4. URL navigation and persistence

**File:** `tests/filtering/url-navigation.spec.ts`

**Steps:**
  1. Add items and navigate to different filter views ('#/', '#/active', '#/completed')
    - expect: URL changes correctly for each view
    - expect: Browser back/forward buttons work correctly
    - expect: Direct URL access loads the correct filter view
  2. Refresh the page while on '#/active' with items present
    - expect: Page loads with active filter applied
    - expect: Items persist (if localStorage is used)
    - expect: URL remains '#/active'

### 3. Bulk Operations

**Seed:** `tests/seed.spec.ts`

#### 3.1. Mark all items as complete

**File:** `tests/bulk-operations/mark-all-complete.spec.ts`

**Steps:**
  1. Add three todo items, all uncompleted
    - expect: Mark all checkbox is unchecked
    - expect: All individual items are unchecked
  2. Click the 'Mark all as complete' checkbox
    - expect: All individual items become checked
    - expect: Mark all checkbox becomes checked
    - expect: Counter shows '0 items left'
  3. Uncheck one individual item
    - expect: Mark all checkbox becomes unchecked
    - expect: Counter increases to '1 item left'
    - expect: Other items remain checked
  4. Click 'Mark all as complete' again
    - expect: All items become checked again including the previously unchecked one

#### 3.2. Clear completed items

**File:** `tests/bulk-operations/clear-completed.spec.ts`

**Steps:**
  1. Add five items and mark three as completed
    - expect: 5 items total
    - expect: 2 active items
    - expect: 3 completed items
    - expect: 'Clear' button is visible
  2. Click the 'Clear' button
    - expect: Only active items remain
    - expect: All completed items are removed
    - expect: Counter shows only active items
    - expect: 'Clear' button may become disabled or hidden if no completed items remain
  3. Try clicking 'Clear' when no completed items exist
    - expect: Nothing happens
    - expect: Active items remain unchanged

### 4. Edge Cases and Validation

**Seed:** `tests/seed.spec.ts`

#### 4.1. Empty input handling

**File:** `tests/edge-cases/empty-input.spec.ts`

**Steps:**
  1. Try to submit an empty todo by pressing Enter in empty input field
    - expect: No new todo item is created
    - expect: Input field remains focused
    - expect: No change in item count
  2. Type only spaces '   ' and press Enter
    - expect: No new todo item is created (or spaces are trimmed)
    - expect: Input behaves appropriately for whitespace-only input

#### 4.2. Special characters and long text

**File:** `tests/edge-cases/special-characters.spec.ts`

**Steps:**
  1. Add todo with special characters: '¿Buy café & émojis? 🎉 #special chars áñ'
    - expect: Item is created successfully
    - expect: Special characters and emojis display correctly
    - expect: Accented characters render properly
  2. Add extremely long todo text (300+ characters)
    - expect: Text is accepted
    - expect: Layout doesn't break
    - expect: Text wraps appropriately or is handled gracefully
    - expect: All functionality remains accessible
  3. Test leading and trailing spaces: '  spaced text  '
    - expect: Leading and trailing spaces are trimmed
    - expect: Text displays as 'spaced text' without outer spaces

#### 4.3. XSS and security considerations

**File:** `tests/edge-cases/security.spec.ts`

**Steps:**
  1. Try to add HTML tags as todo text: '<script>alert("test")</script>'
    - expect: Text is properly escaped
    - expect: No script execution occurs
    - expect: HTML tags display as plain text
  2. Add todo with HTML entities: '&lt;test&gt; &amp; &quot;quotes&quot;'
    - expect: Entities are handled properly
    - expect: Text displays correctly without causing rendering issues

#### 4.4. Performance with many items

**File:** `tests/edge-cases/performance.spec.ts`

**Steps:**
  1. Add 100 todo items programmatically
    - expect: All items are created successfully
    - expect: Page remains responsive
    - expect: Filtering operations work smoothly
    - expect: Counter displays correctly
  2. Test bulk operations with 100 items (mark all, clear completed)
    - expect: Operations complete in reasonable time
    - expect: UI remains responsive during operations
    - expect: Results are accurate

### 5. User Interface and Experience

**Seed:** `tests/seed.spec.ts`

#### 5.1. Visual feedback and states

**File:** `tests/ui-ux/visual-feedback.spec.ts`

**Steps:**
  1. Hover over todo items, checkboxes, and buttons
    - expect: Appropriate hover states are visible
    - expect: Cursor changes to pointer for clickable elements
    - expect: Visual feedback indicates interactivity
  2. Focus on input field using Tab key
    - expect: Input field shows proper focus indication
    - expect: Focus outline is visible and accessible
    - expect: Tab navigation works logically
  3. Complete and uncomplete items multiple times
    - expect: Visual state changes are smooth
    - expect: Checked/unchecked states are clearly distinguished
    - expect: No visual glitches occur

#### 5.2. Keyboard accessibility

**File:** `tests/ui-ux/keyboard-navigation.spec.ts`

**Steps:**
  1. Navigate through all interactive elements using Tab key
    - expect: All interactive elements are reachable via keyboard
    - expect: Tab order is logical
    - expect: Focus indicators are visible
  2. Test Enter key on various elements (checkboxes, buttons)
    - expect: Enter key activates focused elements appropriately
    - expect: Checkbox toggling works with keyboard
    - expect: Button actions trigger with keyboard
  3. Test Escape key during edit mode (if supported)
    - expect: Edit mode cancels without saving changes
    - expect: Original text is restored
    - expect: Focus returns appropriately

#### 5.3. Responsive behavior

**File:** `tests/ui-ux/responsive-design.spec.ts`

**Steps:**
  1. Resize browser window to mobile-sized viewport (320px wide)
    - expect: Layout adapts appropriately to narrow screens
    - expect: All functionality remains accessible
    - expect: Text remains readable
    - expect: Touch targets are appropriately sized
  2. Test on tablet-sized viewport (768px wide)
    - expect: Layout makes good use of available space
    - expect: No horizontal scrolling required
    - expect: Interface elements are well-proportioned

#### 5.4. Data persistence

**File:** `tests/ui-ux/data-persistence.spec.ts`

**Steps:**
  1. Add several todos and refresh the page
    - expect: Todos persist after page refresh (if localStorage is implemented)
    - expect: Todo states (complete/incomplete) are maintained
    - expect: Current filter view is maintained
  2. Complete some items, navigate away, and return
    - expect: All changes are preserved
    - expect: Completion states are accurate
    - expect: Item count is correct
