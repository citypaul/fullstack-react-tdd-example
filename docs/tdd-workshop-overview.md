# TDD Workshop: Executive Overview

**Purpose**: Cross-team workshop teaching behavioral testing and specification-driven development across TypeScript, Java, and C#

**Duration**: Full day (~7 hours including breaks)

**Audience**: Senior developers from TypeScript, Java, and C# teams

---

## The Core Message

> Tests are executable specifications. They describe what the system should do, not how it does it.

When we write tests this way:

- They catch real bugs with clear, actionable messages
- They survive refactoring without breaking
- They serve as living documentation of business rules
- They give teams confidence to change code

---

## What BDD Actually Is

**BDD is NOT** Given/When/Then syntax, Cucumber, or SpecFlow.

**BDD IS** a collaborative practice:

1. **Conversations** with business stakeholders to understand desired behavior
2. **Concrete examples** that clarify requirements and surface edge cases
3. **Executable specifications** written in your test framework (Jest, JUnit, xUnit)
4. Test names that read as **business requirements**, not code descriptions

The tools came later and became conflated with the practice. We do BDD by having conversations and writing specifications — not by adopting a syntax.

---

## Workshop Structure

### Morning: Foundations (~1.5 hours)

**Opening Presentation (30 min)** — Paul's TDD journey + introduction to requirement gathering and specifications

**Demo (30 min)** — Using a booking system to show:

1. Good tests catch broken behavior
2. Good tests allow refactoring
3. Bad tests do the opposite (miss bugs AND break on refactoring)

**Principles Discussion (20 min)** — Agree on shared principles across all languages

### Afternoon: Hands-On Labs (~4 hours)

**The bulk of the day is hands-on work.** Engineers build a credit card validator from scratch, progressing through tagged checkpoints ~30 minutes apart.

| Lab       | Focus                                              | Tag                        |
| --------- | -------------------------------------------------- | -------------------------- |
| **Lab 0** | Requirements gathering simulation (this IS BDD)    | `lab-0-requirements`       |
| **Lab 1** | Basic validation (length, format, Luhn)            | `lab-1-basic-validation`   |
| **Lab 2** | Provider detection (Visa, Mastercard, Amex)        | `lab-2-provider-detection` |
| **Lab 3** | Provider-specific rules (lengths, CVV)             | `lab-3-provider-rules`     |
| **Lab 4** | Frontend integration (form validation + messaging) | `lab-4-frontend`           |
| **Lab 5** | Backend integration (API endpoint protection)      | `lab-5-backend`            |

**Multi-language parity**: All labs have identical implementations at each tag in TypeScript, Java, and C#. Engineers choose their language; tags keep everyone synchronized.

### Closing (~30 min)

**AI Demo (10 min)** — Regenerate implementation from specs (proves specs are what matter)

**Wrap-Up (20 min)** — Brownfield projects, "Working Effectively with Legacy Code", Q&A

---

## Core Principles

| Principle                             | What It Means                          |
| ------------------------------------- | -------------------------------------- |
| **Test behavior, not implementation** | Refactoring shouldn't break tests      |
| **Tests are specifications**          | Test names = business requirements     |
| **Test-first (RED-GREEN-REFACTOR)**   | Failing test → minimal code → refactor |
| **Test-first beats test-last**        | Shapes APIs, catches ambiguity early   |
| **Mock at boundaries**                | Mock HTTP/DB/time, not your own code   |
| **Isolated test state**               | Each test creates its own data         |

---

## Lab Progression: Card Validator

The card validator exercise progresses naturally from simple to full-stack:

```
Lab 0: Requirements Gathering
    │   "We need to validate credit card numbers"
    │   Teams ask questions to discover specifications
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
Lab 4: Frontend Integration
    │   Real-time form validation
    │   Provider icon display
    │   User-friendly error messages
    ▼
Lab 5: Backend Integration
        API endpoint protection
        Validation middleware
        Structured error responses
```

**Why card validation:**

- Everyone understands credit cards
- Clear, simple starting rules
- Natural progression to complexity
- Applicable to both frontend and backend

---

## Repository Structure

```
tdd-workshop/
├── typescript/
│   ├── card-validator/         # Labs 0-5
│   └── demo-booking-system/    # Opening demo
│
├── java/
│   ├── card-validator/         # Labs 0-3, 5
│   └── demo-booking-system/
│
├── csharp/
│   ├── CardValidator/          # Labs 0-3, 5
│   └── DemoBookingSystem/
│
├── slides/
│   └── workshop-presentation.pptx
│
└── facilitator/
    ├── requirements-cheatsheet.md
    └── timing-guide.md
```

Tags at each lab allow teams to catch up if they fall behind.

---

## What Success Looks Like

After the workshop, developers will:

1. Understand that tests ARE specifications, not verification of code
2. Practice requirement gathering through concrete examples (real BDD)
3. Use the RED-GREEN-REFACTOR cycle confidently
4. Recognize the difference between behavioral and implementation-coupled tests
5. Write tests that describe business rules, not code structure
6. Apply the same patterns across frontend and backend
7. Have patterns for applying TDD to existing (brownfield) codebases

---

## Next Steps

1. **Today**: Align on scope, timeline, and team involvement
2. **This week**: Confirm Java and C# team representatives for preparation
3. **Week 1**: Begin example development (TypeScript first, then parallel)
4. **Week 3**: Dry run with small group
5. **Ongoing**: Detailed planning document available for deep-dive discussions
