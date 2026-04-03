[ BUG ] Item counter logic broken: shows "0 items left" instead of actual count, goes negative when items checked. Root cause of counter bug: hardcoded "-1" in todoCtrl.js line `$scope.remainingCount = $filter('filter')(todos, { completed: false }).length -1;`
[ BUG ] Input field contains 3 spaces after adding item due to `$scope.newTodo = '   ';` in todoCtrl.js
[ BUG ] Placeholder tooltip text not removed: `title="TODO:REMOVE THIS EVENTUALLY"` on delete button
[ BUG ] Malformed dependency version in package.json: `"angular-route": "^ 1.4.3"` has extra space
[ TYPO ] Incorrectly written word in placeholder text: "need's" => "needs"
[ TYPO ] Misspelled word in footer text: "toodo" => "todo"
[ TYPO ] Inconsistent capitalization: "active" should be "Active" to match "All" and "Completed"
[ 404 ] Missing resource: https://todolist.james.am/learn.json returns 404 Not Found
[ 404 ] Missing resource: https://todolist.james.am/api returns 404 Not Found
[ 404 ] Missing resource: https://todolist.james.am/favicon.ico returns 404 Not Found
[ INAPPROPRIATE ] Unprofessional HTML comment: "THIS IS A STUPID APP AND I HAVE NO IDEA WHY WE'RE WASTING OUR TIME DOING THIS DEV WORK"
[ SECURITY ] No input sanitization or validation - XSS vulnerability potential
[ SECURITY ] Very outdated dependencies (Angular 1.4.3 from 8+ years ago) with known vulnerabilities
[ BAD_PRACTICE ] node_modules directory committed to repository
[ BAD_PRACTICE ] Missing build process, linting, and code quality tools
[ MISSING ] No error handling for failed operations
[ MISSING ] No loading states or user feedback during async operations
[ ARCHITECTURE ] Lack of proper separation of concerns and error boundaries
[ BUG ] Inconsistent auto-completion behavior: New todo items are automatically marked as completed upon creation, contradicting expected behavior from test plan
[ BUG ] "Mark all as complete" checkbox behavior complex and unintuitive: Requires multiple clicks to achieve expected state, intercepting elements block direct interaction
[ BUG ] Delete button element inconsistency: Switches between text "×" and proper button elements based on item completion state, making reliable automation difficult
[ BUG ] Clear button functionality incomplete: Cannot properly test clearing completed items due to unpredictable state management
[ TESTING ] Unreliable element targeting: Some UI elements (like mark-all checkbox) have overlapping clickable areas that interfere with automation
[ TESTING ] Navigation testing limitations: Browser history manipulation requires JavaScript evaluation rather than native browser controls
[ TESTING ] State persistence inconsistent: Some test scenarios show unexpected item states after page interactions
[ TESTING ] Missing accessibility attributes: Lack of proper aria-labels and test identifiers makes reliable element selection challenging
[ BUG ] URL filter state persistence broken: Navigation between filter views (#/active, #/completed) doesn't maintain expected state, tests expecting #/active receive #/completed
[ BUG ] Edit mode functionality broken: Double-clicking todo items to edit causes timeouts, textbox elements cannot be found or interacted with
[ BUG ] Delete button visibility inconsistent: Delete button (×) not reliably visible or findable via automation, particularly when testing multiple todo items
[ BUG ] Browser history navigation broken: Using window.history.back() doesn't properly navigate between filter states, causing navigation to hang indefinitely
[ BUG ] Race condition in item creation: Newly created items don't immediately show expected delete buttons or proper DOM structure for automation
[ BUG ] Empty state layout broken: Main task area and footer controls remain visible when no tasks exist, violating clean interface requirement
[ BUG ] Input validation missing: Application accepts empty and whitespace-only task entries, creating blank tasks contrary to requirements
[ BUG ] Status counter grammar incorrect: Counter doesn't use proper singular/plural grammar (should be "1 item left" vs "2 items left")
[ BUG ] Status counter formatting wrong: Numbers not visually emphasized (not bold) and may contain decorative punctuation
[ BUG ] Clear completed button behavior broken: Doesn't show count of completed tasks and isn't properly hidden when no completed tasks exist
[ BUG ] Session persistence incomplete: Tasks and completion states don't reliably persist across browser restart/device reboot scenarios
[ BUG ] Filter view persistence partial: Selected view state (All/Active/Completed) doesn't consistently persist across page refreshes and browser restarts
[ BUG ] Input focus missing on load: Input field doesn't automatically receive focus on first page load for immediate task entry
[ BUG ] UI state transitions broken: Main area and footer don't properly show/hide when transitioning between empty and populated states
