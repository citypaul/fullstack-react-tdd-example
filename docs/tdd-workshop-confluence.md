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
