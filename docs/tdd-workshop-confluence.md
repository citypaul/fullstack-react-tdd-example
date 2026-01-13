# TDD Workshop: Behavioral Testing Across Languages

|                 |                                          |
| --------------- | ---------------------------------------- |
| **Status**      | 🟡 DRAFT - Work in Progress              |
| **Owner**       | Paul Hammond                             |
| **Duration**    | Half-day (4 hours)                       |
| **Audience**    | Senior developers (TypeScript, Java, C#) |
| **Target Date** | TBD                                      |

---

> ⚠️ **Work in Progress**: This document outlines the current thinking for the TDD workshop. Ideas and structure may change as we make progress and gather feedback. Nothing here is set in stone.

> 📅 **Next Update**: Paul Hammond will present progress at the next L&D session in two weeks, including a preview of the new repository being created for the workshop.

---

## Overview

A hands-on workshop teaching Test-Driven Development through the lens of behavioral testing. Engineers will spend the majority of the session building a credit card validator from scratch, learning to write tests as executable specifications rather than implementation verification.

**Core message**: Tests are executable specifications. They describe _what_ the system should do, not _how_ it does it.

---

## Why This Workshop?

| Problem                            | What We'll Learn                                     |
| ---------------------------------- | ---------------------------------------------------- |
| Tests that pass but bugs ship      | Write tests that catch real bugs with clear messages |
| Tests that break on every refactor | Write tests that survive refactoring                 |
| "100% coverage" that means nothing | Write tests that serve as living documentation       |
| Requirements lost in translation   | Discover requirements through concrete examples      |

---

## Agenda

### Foundations (45 min)

| Time   | Section        | Description                                                                                            |
| ------ | -------------- | ------------------------------------------------------------------------------------------------------ |
| 15 min | **Opening**    | TDD journey, what BDD actually is (not Given/When/Then), what we'll build                              |
| 20 min | **Demo**       | Booking system showing: good tests catch bugs, good tests allow refactoring, bad tests do the opposite |
| 10 min | **Principles** | Agree on shared principles across all languages                                                        |

### Hands-On Labs (~2 hours)

Engineers build a credit card validator using TDD. Each lab has a tagged checkpoint for catch-up.

| Lab       | Focus                                                                        | Tag                                | Duration |
| --------- | ---------------------------------------------------------------------------- | ---------------------------------- | -------- |
| **Lab 0** | Requirements gathering — teams discover specs through conversation           | `lab-0-requirements`               | 25 min   |
| **Lab 1** | Basic validation — length, format, Luhn checksum                             | `lab-1-basic-validation`           | 25 min   |
| **Lab 2** | Provider detection — identify Visa, Mastercard, Amex                         | `lab-2-provider-detection`         | 25 min   |
| **Lab 3** | Provider-specific rules — different lengths, CVV rules                       | `lab-3-provider-rules`             | 25 min   |
| **Lab 4** | Integration (choose one): Frontend form validation OR Backend API protection | `lab-4-frontend` / `lab-4-backend` | 25 min   |

### Closing (20 min)

| Time   | Section     | Description                                                         |
| ------ | ----------- | ------------------------------------------------------------------- |
| 10 min | **AI Demo** | Regenerate implementation from specs — proves specs are what matter |
| 10 min | **Wrap-up** | Brownfield projects, "Working Effectively with Legacy Code", Q&A    |

---

## Principles We'll Agree On

| Principle                             | What It Means                          |
| ------------------------------------- | -------------------------------------- |
| **Test behavior, not implementation** | Refactoring shouldn't break tests      |
| **Tests are specifications**          | Test names = business requirements     |
| **Test-first (RED-GREEN-REFACTOR)**   | Failing test → minimal code → refactor |
| **Test-first beats test-last**        | Shapes APIs, catches ambiguity early   |
| **Mock at boundaries**                | Mock HTTP/DB/time, not your own code   |
| **Isolated test state**               | Each test creates its own data         |

---

## What BDD Actually Is

> **Important clarification**: BDD is NOT Given/When/Then syntax, Cucumber, or SpecFlow.

**BDD IS:**

- Conversations with stakeholders to understand desired behavior
- Concrete examples that clarify requirements
- Executable specifications in your test framework (Jest, JUnit, xUnit)
- Test names that read as business requirements

The requirement gathering exercise (Lab 0) IS the BDD practice. The tests we write ARE the executable specifications.

---

## Card Validator: Lab Progression

```
Lab 0: Requirements Gathering
    │   "We need to validate credit card numbers"
    │   Teams ask questions → discover specifications
    ▼
Lab 1: Basic Validation
    │   Empty check, numeric only, Luhn checksum
    ▼
Lab 2: Provider Detection
    │   Visa (4), Mastercard (51-55), Amex (34/37)
    ▼
Lab 3: Provider-Specific Rules
    │   Visa: 16 digits, 3-digit CVV
    │   Amex: 15 digits, 4-digit CVV
    ▼
Lab 4: Integration (choose one)
        Frontend: Real-time form validation, provider icons, user-friendly errors
        Backend: API endpoint protection, validation middleware
```

---

## Multi-Language Support

All labs have identical implementations at each tag:

| Language       | Coverage                   | Notes                        |
| -------------- | -------------------------- | ---------------------------- |
| **TypeScript** | Labs 0-4 (all)             | Node.js + React for frontend |
| **Java**       | Labs 0-3, 4 (backend only) | Spring Boot                  |
| **C#**         | Labs 0-3, 4 (backend only) | .NET                         |

Engineers choose their preferred language. Tags keep everyone synchronized.

> 📝 **Note**: Java and C# examples will be produced by the L&D team, based on the same git tags as the TypeScript implementation. This ensures all languages stay synchronized and teams can keep on track during the day regardless of language choice.

---

## Pre/Post Workshop Feedback

We'll gather feedback before and after the workshop to understand where engineers are starting from and whether the session shifted their thinking.

---

### Pre-Workshop Survey

_Completed before the session begins. Should take ~3 minutes._

#### Section 1: Current Practice

**Q1. How often do you write tests before writing implementation code?**

| Never | Rarely | Sometimes | Often | Always |
| :---: | :----: | :-------: | :---: | :----: |
|   ○   |   ○    |     ○     |   ○   |   ○    |

**Q2. How would you describe your current understanding of TDD?**

| I'm not sure what TDD is | I've heard of it but haven't practiced it | I have some experience with TDD | I practice TDD regularly | I'm confident teaching TDD to others |
| :----------------------: | :---------------------------------------: | :-----------------------------: | :----------------------: | :----------------------------------: |
|            ○             |                     ○                     |                ○                |            ○             |                  ○                   |

#### Section 2: Confidence & Safety

**Q3. How confident are you making changes to your codebase without introducing bugs?**

| 1 - Not at all confident |  2  |  3  |  4  | 5 - Very confident |
| :----------------------: | :-: | :-: | :-: | :----------------: |
|            ○             |  ○  |  ○  |  ○  |         ○          |

**Q4. When you refactor code, how often do your tests help you do so safely?**

| Never | Rarely | Sometimes | Often | Always |
| :---: | :----: | :-------: | :---: | :----: |
|   ○   |   ○    |     ○     |   ○   |   ○    |

**Q5. How confident are you that your current tests would catch a real bug?**

| 1 - Not at all confident |  2  |  3  |  4  | 5 - Very confident |
| :----------------------: | :-: | :-: | :-: | :----------------: |
|            ○             |  ○  |  ○  |  ○  |         ○          |

#### Section 3: Perceived Value & Tradeoffs

**Q6. How often do you skip or delay writing tests due to time pressure?**

| Never | Rarely | Sometimes | Often | Always |
| :---: | :----: | :-------: | :---: | :----: |
|   ○   |   ○    |     ○     |   ○   |   ○    |

**Q7. To what extent do you agree: "Writing tests slows down my development"**

| Strongly Disagree | Disagree | Neutral | Agree | Strongly Agree |
| :---------------: | :------: | :-----: | :---: | :------------: |
|         ○         |    ○     |    ○    |   ○   |       ○        |

**Q8. To what extent do you agree: "Tests are valuable for documenting how the system should behave"**

| Strongly Disagree | Disagree | Neutral | Agree | Strongly Agree |
| :---------------: | :------: | :-----: | :---: | :------------: |
|         ○         |    ○     |    ○    |   ○   |       ○        |

#### Section 4: Tech Debt & Maintenance

**Q9. How often do you feel confident tackling technical debt in your codebase?**

| Never | Rarely | Sometimes | Often | Always |
| :---: | :----: | :-------: | :---: | :----: |
|   ○   |   ○    |     ○     |   ○   |   ○    |

**Q10. When tests break after refactoring (without changing behavior), how do you typically feel?**

| Frustrated — the tests are getting in the way | Unsure — not clear if I broke something or the tests are wrong | Confident — I know how to investigate and fix it |
| :-------------------------------------------: | :------------------------------------------------------------: | :----------------------------------------------: |
|                       ○                       |                               ○                                |                        ○                         |

#### Section 5: Open Response

**Q11. In one sentence, what do you hope to get out of this workshop?**

_[Free text]_

---

### Post-Workshop Survey

_Completed at the end of the session. Should take ~4 minutes._

#### Section 1: Repeat Measures (Comparison)

_These questions are repeated from the pre-workshop survey to measure any shift._

**Q1. After today, how would you describe your understanding of TDD?**

| I'm still not sure what TDD is | I understand the concepts but need practice | I feel I have a solid grasp of TDD | I'm confident I can apply TDD | I'm confident teaching TDD to others |
| :----------------------------: | :-----------------------------------------: | :--------------------------------: | :---------------------------: | :----------------------------------: |
|               ○                |                      ○                      |                 ○                  |               ○               |                  ○                   |

**Q2. After today, how confident are you that you could make changes to your codebase without introducing bugs?**

| 1 - Not at all confident |  2  |  3  |  4  | 5 - Very confident |
| :----------------------: | :-: | :-: | :-: | :----------------: |
|            ○             |  ○  |  ○  |  ○  |         ○          |

**Q3. After today, to what extent do you agree: "Writing tests slows down my development"**

| Strongly Disagree | Disagree | Neutral | Agree | Strongly Agree |
| :---------------: | :------: | :-----: | :---: | :------------: |
|         ○         |    ○     |    ○    |   ○   |       ○        |

**Q4. After today, to what extent do you agree: "Tests are valuable for documenting how the system should behave"**

| Strongly Disagree | Disagree | Neutral | Agree | Strongly Agree |
| :---------------: | :------: | :-----: | :---: | :------------: |
|         ○         |    ○     |    ○    |   ○   |       ○        |

**Q5. After today, how confident are you that you could write tests that catch real bugs?**

| 1 - Not at all confident |  2  |  3  |  4  | 5 - Very confident |
| :----------------------: | :-: | :-: | :-: | :----------------: |
|            ○             |  ○  |  ○  |  ○  |         ○          |

#### Section 2: Impact & Intentions

**Q6. What (if anything) will you do differently as a result of this workshop?**

_Select all that apply:_

- [ ] Write tests before implementation more often
- [ ] Focus on testing behavior rather than implementation
- [ ] Change how I name my tests
- [ ] Be more intentional about what I mock
- [ ] Use tests to support refactoring
- [ ] Feel more confident tackling technical debt
- [ ] Nothing — I'll continue as before
- [ ] Other: ******\_\_\_******

**Q7. Which part of the workshop was most valuable to you?**

_Select one:_

- ( ) Opening presentation
- ( ) Demo (good tests vs bad tests)
- ( ) Principles discussion
- ( ) Requirements gathering exercise (Lab 0)
- ( ) Hands-on coding labs
- ( ) AI demo
- ( ) Other: ******\_\_\_******

**Q8. How likely are you to recommend this workshop to a colleague?**

| 1 - Not at all likely |  2  |  3  |  4  | 5 - Very likely |
| :-------------------: | :-: | :-: | :-: | :-------------: |
|           ○           |  ○  |  ○  |  ○  |        ○        |

#### Section 3: Open Feedback

**Q9. What was your biggest "aha moment" or takeaway from today?**

_[Free text]_

**Q10. What would have made this workshop more valuable for you?**

_[Free text]_

**Q11. Any other feedback or comments?**

_[Free text]_

---

### Metrics We'll Track

| Metric                      | Pre Q# | Post Q# | What Shift Indicates                                 |
| --------------------------- | ------ | ------- | ---------------------------------------------------- |
| TDD Understanding           | Q2     | Q1      | Increased clarity on what TDD actually is            |
| Confidence in codebase      | Q3     | Q2      | Feel safer making changes                            |
| "Tests slow me down"        | Q7     | Q3      | Shift in perception of testing as investment vs cost |
| Tests as documentation      | Q8     | Q4      | Increased appreciation of tests as specifications    |
| Confidence tests catch bugs | Q5     | Q5      | Trust in test quality                                |

Additional insights from:

- **Q6 (post)**: Concrete behavior changes intended
- **Q7 (post)**: Which sections resonated most (informs future workshops)
- **Q9-11 (post)**: Qualitative feedback for continuous improvement

---

## Repository Structure

```
tdd-workshop/
├── typescript/
│   ├── card-validator/         # Labs 0-4
│   └── demo-booking-system/    # Opening demo
├── java/
│   ├── card-validator/         # Labs 0-3, 4-backend
│   └── demo-booking-system/
├── csharp/
│   ├── CardValidator/          # Labs 0-3, 4-backend
│   └── DemoBookingSystem/
├── slides/
└── facilitator/
    ├── requirements-cheatsheet.md
    └── timing-guide.md
```

---

## What Success Looks Like

After the workshop, developers will:

- ✅ Understand that tests ARE specifications, not verification of code
- ✅ Practice requirement gathering through concrete examples (real BDD)
- ✅ Use the RED-GREEN-REFACTOR cycle confidently
- ✅ Recognize behavioral vs implementation-coupled tests
- ✅ Write tests that describe business rules, not code structure
- ✅ Have patterns for applying TDD to brownfield codebases

---

## Preparation Timeline

| Week       | Tasks                                                                      | Owner |
| ---------- | -------------------------------------------------------------------------- | ----- |
| **Week 1** | Create booking system demo (TypeScript), set up lab starters               | TBD   |
| **Week 2** | Card validator solution at each tag (TS), Java/C# parallel implementations | TBD   |
| **Week 3** | Presentation slides, dry run with small group                              | TBD   |
| **Week 4** | Final polish, facilitator materials, logistics                             | TBD   |

---

## Open Questions

- [ ] Confirm Java and C# team representatives for preparation
- [ ] Which AI tool for the demo? (Claude, GPT-4, Copilot)
- [ ] Internal repo or external?
- [ ] Team formation: mixed language or language-specific groups?

---

## Resources

- Repository: _TBD_
- Slides: _TBD_
- Reference: "Working Effectively with Legacy Code" by Michael Feathers

---

_Last updated: January 2026_
