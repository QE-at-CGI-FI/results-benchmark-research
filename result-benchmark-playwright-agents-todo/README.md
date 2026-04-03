# result-benchmark-playwright-agents-todo

## This repo

Sample of Playwright agents out-of-box version testing of a todo application with 45 known issues. The purpose is to bechmark #ResultfulTesting: capability of exceptional testers, regular testers and AI agents in being able to not just create appearance of testing but the results we would expect from testing.

In 2026, we benchmark against three groups of testers:

1. Exploratory tester extraordinare. Sample size: 1 tester. Score 45 out of 45 issues. Baseline for known while still incomplete (achieving 62% to additions from this benchmark)
2. Professional testers employed in the industry. Sample size: 57 testers. Score 13.5 out of 45 known issues. (30% of human issues coverage, 18% of human with AI results coverage)
3. Graduates seeking trainee positions in testing. Sample size: 9 testers. Score 11.5 out of 45 known issues.

We seek to understand _when is out-of-box playwright agents doing better than our testers_ knowing that "AI will not replace humans, but those who use AI will replace those who don’t." - Ginni Rometty, former CEO of IBM

The out-of-box benchmark also enables us to have educated discussions about how much better things are when using our collection of contemporary exploratory testing agent and skills files within Github Copilot.

**Results disclaimer: due to publicly available bug list in a high-profile blog, some AI tools with online access get 100% score not because AI excellence but because the answer discoverability. When this happened first time in a training session, people attributed it to AI learning, but it should be attributed to 20 years of blogging with significant visibility.**

## Playwright agents capability 2026-02-12

- Playwright agents found 12 / 45 known issues in the application (27% of human results coverage)
- Playwright agents found 28 issues previously not listed with the selected prompting approach documented in prompt-history.md (26/73, 36% of human with AI results coverage)
- No thorough analysis of possible overlap of new reports checked yet.

## The ToDo Application

The test target of this benchmark is a ToDo application created for showing off frontend frameworks, with seeded simple bugs the developer version did not have. The developer version is not bug free, and the seeded bugs give an appearance of results we consider false under conditions of modern development. Even without seeded bugs, there is plenty of feedback to give and to find _some of what the others might not know_ to make better decisions knowing rather than suffering from the real quality challenge: well-maintained illusions.

Application under test is deployed at: https://todolist.james.am/ with its source code at: https://github.com/TheJambo/ToDoInterviewTest

The exercises and answer key to assessing human testers is at: https://github.com/QE-at-CGI-FI/todoapp-solution and licensed Creative Commons Attribution Non-Commercial Sharealike 4.0 with full copyrights to change license for CGI. The asset bases on earlier work by Maaret Pyhäjärvi licensed under CC-BY 4.0.

## The Playwright Agents

Depends on Github Copilot.

Install playwright
`npm init playwright@latest`

Install agents
`npx playwright init-agents --loop=vscode`

## Files

- `prompt-history.md` the history of prompts given to the agents.
- `specs/todolist-james-am.plan.md` the test case plan created by the agents.
- `take-home-requirements.md` the requirements given to human testers in the take-home test.
- `problems.md` the problems found by the agents.
- `take-home-known-issues.md` the problems found by human testers and unique playwright agents added ones from this test session. The master list to compare againt for now.

## Contact

Maaret Pyhäjärvi, maaret.pyhajarvi@cgi.com, CGI Finland.
