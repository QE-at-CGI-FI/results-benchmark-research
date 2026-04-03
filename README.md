# Results Benchmark Research

|                                                                                                                      |                                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc/4.0/) | **Results Benchmark Research** by Maaret Pyhäjärvi is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License. For more permissive licenses, contact CGI Suomi Oy / Maaret Pyhäjärvi. |
|                                                                                                                      |                                                                                                                                                                                                                     |

“A set of test materials is nothing more than a list of possible problems in a program and a set of procedures for determining whether the problems are actually there or not” - Cem Kaner, Testing Computer Software, 1999

The essential result of testing is discovery of information about the software. Information may include experience that the software is working as expected, or that it has aspects that should make us _curious_. We use many names for the latter: bugs, defects, change requests, unimplemented features - essentially something that could warrant more work on the system as action.

Testing Computer Software, appendix A, holds a listing of over 400 generalized problems. We don't have a listing of specific problems for our systems, before we test to produce the listing. And if we don't see the problems when we test, testing does not serve it's purpose of adding to information about the software.

This research is motivated by the observation of significantly different skills of testers in identifying problems. The skill that produces results seems often disconnected from the experience in years, and this leads to curiosity about the sociotechnical system:

- Can testers test resultfully, finding versatile problems?
- Is finding problems as much of a core to testing as I have grown to expect?
- Is ability to find problems delayed with domain and system learning, and expecting quick results based on foundation skills unwarranted?
- Can we measure resultful testing in a meaningful way?
- Does ability to find problems predict success in tester roles or is this a teachable skill?

These questions are particularly essential in the agentic AI era, where agents capabilities on observation exceed people's. If core of testing used to be _serendipity_ and _perseverance_, in terms of "The more I practice, the luckier I get" - Arnold Palmer and "It's not that I'm so smart, I just stick with the problems longer" - Albert Einstein, what changes can we expect going forward with technology of today?

## Research motivation

1. Redefining the bar of tester skill: spending time with the application is insufficient - or is it? Pay in relation to the value produced in age of outcome-based work.
2. Leveling up grey literature from 20 years of blogging by connecting it with academic body of knowledge.
3. Next generation teaching: testing is taught poorly at educational institutions

## Sections in this repository

### Test target: ToDo App

1. Results benchmark humans vs. playwright agents Feb 12th, 2026
   - Intentionally bugful application with 45 known issues benchmarked for results with out-of-box playwright agents. When is AI doing better than our testers who with a sample set of 57 score 13.5 of this list? #ResultfulTesting #ContemporaryExploratoryTesting
   - available in /result-benchmark-playwright-agents-todo

2. Aspiring testers with IT studies with a requirements specification, 2026
   - Focus of work in _finding information_ and _reporting coverage against requirements_

3. Aspiring testers with IT studies without requirement specification, 2025
   - Two versions with two technologies of the same application, with both overlapping and distinct bugs in each
   - Focus of work in _finding information_ and _explaining approach_
   - Scoring rubrik published in https://github.com/QE-at-CGI-FI/todoapp-solution Sep 20th, 2025

### Test target: Eprimer

4. Seasoned testers observed in job interviews
   - Data not collected for research, anecdotal evidence shows senior testers of sample set 20+ have small percentage of people who do well in the exercise
   - Common patterns include expecting specifications with ready answers and limited set of ideas on how to discover problems
   - Course teaching this is published at https://dev.to/maaretp/exploratory-testing-foundations-4lb3 Sept 20th 2021 and updated at https://github.com/QE-at-CGI-FI/ETF2025/blob/main/material/index.md November 17th 2025

### Test target: Potion shop

5. Seasoned testers in testing with AI -course
   - Extremely target rich application created with AI and seeded with bugs
   - As bugs are found, documented with failing programmatic tests and fixed, what remains to be found?
   - Ongoing work

### Test target: Roman numerals -function

6. Over 100 testers in various constellations from 1:1 to groups solving unit testing exercise
   - AI-generated test target, one that is reasonably correct and other that is essentially broken, in efforts to find information about the test target that are beyond the obvious (boundaries, conflicting domain rules) and discussing coverage

### Test target: Gilded rose

7. Efficiency to test coverage and problems in specification vs. application

- Finding problems in specification pertaining to incomplete information and incorrect information

### Test target: real systems

To be added on the set.
