# Requirements

## 1) Onboarding & Empty State

As a first-time user, I want a focused, clutter-free start so I can immediately add my first task.

- When there are no tasks, the main task area and any footer/controls are not displayed, keeping the interface clean.
- On first load, the app should let the user start typing a task immediately without extra clicks (e.g., the input is ready and clearly visible).
- The task input shows helpful placeholder text that guides the user.

## 2) Capturing Tasks

Adding tasks should be fast and forgiving so users can build their list without friction.

- Users can add a new task by entering text and confirming (e.g., press Enter).
- Empty or whitespace-only entries are not allowed; the app prevents creating blank tasks.
- After adding a task, the input clears and remains ready for the next entry.
- The app accepts tasks of varying length and content (e.g., short, long, symbols/Unicode, Scandic) without breaking layout or behavior.
- Once at least one task exists, the previously hidden main area and footer become visible.

## 3) Individual Task Management

Each task should be manageable in isolation for accurate tracking.

- A task can be marked complete and later returned to active status.
- A task can be edited in place. While editing, other controls for that task are hidden to avoid accidental clicks.
- Edits are saved when the user confirms (e.g., Enter) or finishes editing (e.g., moving focus away).
- If the edited text is only whitespace, the task is removed rather than saved blank.
- Users can cancel an edit (e.g., with Escape) so no unintended changes are applied.
- Delete is available but unobtrusive: the removal control is discoverable on hover and removes only the chosen task.

## 4) Bulk Completion Control

Users with many tasks need a quick way to reconcile their list’s status.

- A single control allows marking all tasks complete or clearing completion for all.
- If the list is in a mixed state, using this control completes all tasks by default.
- The bulk control’s on/off state reflects the current items: it updates automatically as individual tasks are toggled.

## 5) Views & Navigation (Filters)

Users should easily focus on what matters: everything, only active, or only completed.

- Users can switch between All, Active, and Completed views.
- The currently selected view is clearly highlighted.
- The selected view is encoded in the URL so it’s shareable and deep‑linkable (e.g., a hash/route).
- Direct navigation to a view via URL should open the correct list.
- When task states change (e.g., completing a task), the current view updates immediately without reloading the page.
- The selected view is remembered across reloads.

## 6) Status Summary

Users want a simple, readable summary of remaining work.

- The app displays the current count of active (remaining) tasks.
- The label uses correct singular/plural grammar (e.g., “1 item left” vs. “0 items left”), with no decorative punctuation.
- The number is visually emphasized (e.g., bold) so it’s easy to spot.

## 7) Clearing Completed

Clearing finished work helps keep the list tidy.

- A control shows the number of completed tasks and allows clearing completed items with one action.
- This control is hidden when there are no completed tasks.

## 8) Session Continuity (Persistence)

Work shouldn’t disappear just because the tab was closed.

Tasks, their completion states, and the selected view are preserved across refreshes and browser restarts on the same device, without sign‑in (stored locally).
