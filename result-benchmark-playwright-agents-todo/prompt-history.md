# What was asked to build what is here

- Add opening of https://todolist.james.am/ to seed.
- Design tests for todolist.james.am. (with playwright-test-planner.agent selected)
- Look at todolist with playwright. List all the problems you see into problems.md (with generic agent selected) [ Prompt 3 ]
- Make problems listed in prompt3.md more concise, like '[ TYPO ] Incorrectly written word in placeholder text: "need's" => "needs"' oneliners and save the result to problems.md
- Look at the repo with source code at https://github.com/TheJambo/ToDoInterviewTest. Add problems you can identify based on code to the problems.md (with generic agent selected)
- Remove titles and create just one list of bugs. Verify there are no duplicates.
- Automate tests (with playwright-test-generator.agent selected) -- stop generation at second "shall I continue", at 9 tests generated.
- If you saw more problems while automating, add them to problems.md (same context window, with generic agent selected)
- Run the tests (with generic agent selected)
- Tests don't run green. Report problems to problems.md. Make sure not to report duplicates and to avoid adding titles to the file. (with generic agent selected and same context window)
- Tests don't run green. Fix them. (with playwright-test-healer.agent selected)
- Report problems to problems.md if there are still any. (with generic agent selected and same context window)
- We have requirements in take-home-requirements.md. Check if all are covered with tests. If not, add the missing ones. Create a separate plan for missing coverage. List found problems to problems.md (with playwright-test-planner.agent selected)
- Any new bugs these requirements help find, add to problems.md and avoid duplication of reports. (with generic agent selected and same context window)

