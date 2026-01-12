# TDD Workshop: Executive Overview

**Purpose**: Cross-team workshop teaching behavioral testing principles across TypeScript and C#

**Duration**: Half-day (~4 hours)

**Audience**: Senior developers from TypeScript and C# teams

---

## The Core Message

> Tests should describe what the system does, not how it does it.

When tests verify behavior rather than implementation:

- They catch real bugs with clear, actionable messages
- They survive refactoring without breaking
- They serve as living documentation of business rules
- They give teams confidence to change code

---

## Workshop Structure

### Opening: Personal Story (15 min)

Paul shares his TDD journey — how he started, what changed his mind, and why this matters.

### Phase 1: Inspiration (25 min)

Live demo: We break code and watch good tests catch bugs with clear messages. Then we show the same bugs passing through bad tests. The contrast is powerful.

### Phase 2: Principles (35 min)

We name what they just witnessed:

- Test behavior, not implementation
- Tests are executable specifications
- Write the test first (RED-GREEN-REFACTOR)
- Mock at boundaries, not internals

### Phase 3: Patterns (45 min)

Concrete examples showing the mechanics — factory patterns, implementation independence, boundary mocking. Side-by-side TypeScript and C# patterns.

### Phase 4: Practice (90 min)

Hands-on TDD from scratch. Teams receive requirements in plain English and build a shopping cart using the RED-GREEN-REFACTOR cycle — write a failing test, make it pass, refactor, repeat. No pre-written tests; they experience the full TDD workflow.

### Phase 5: Application (20 min)

Domain-specific patterns (frontend, backend) and adoption strategies for real work.

---

## Core Principles

These are the key ideas the workshop teaches:

| Principle                             | What It Means                                                      |
| ------------------------------------- | ------------------------------------------------------------------ |
| **Test behavior, not implementation** | If you refactor without changing behavior, tests shouldn't break   |
| **Tests are specifications**          | Test names should read like business requirements                  |
| **Test-first (RED-GREEN-REFACTOR)**   | Write a failing test, then minimum code to pass, then refactor     |
| **Test-first beats test-last**        | Writing tests first shapes better APIs and catches ambiguity early |
| **Mock at boundaries**                | Mock HTTP, databases, time — not your own functions                |
| **Isolated test state**               | Each test creates its own data; no shared mutable state            |
| **Implementation independence**       | Same tests should pass for different implementations               |

---

## Workshop Repository Structure

We will create a new repository with examples in both languages:

```
tdd-workshop/
├── typescript/
│   ├── 01-booking-system/      # Demo: "What good looks like"
│   ├── 02-price-calculator/    # Implementation independence
│   ├── 03-shopping-cart/       # Hands-on exercise
│   ├── 04-counter/             # React: state mechanism independence
│   ├── 05-product-search/      # React: data fetching independence
│   └── 06-api-integration/     # MSW boundary mocking
│
├── csharp/
│   ├── 01-booking-system/      # Same concepts, idiomatic C#
│   ├── 02-price-calculator/
│   ├── 03-shopping-cart/
│   └── 07-repository-pattern/  # Backend boundary mocking
│
└── slides/
    └── workshop-presentation.pptx
```

Each example teaches specific concepts. TypeScript and C# implementations are parallel — same business logic, idiomatic to each language.

---

## Preparation Plan

**Timeline**: 1 month

| Week | Focus                                                |
| ---- | ---------------------------------------------------- |
| 1    | Finalize examples, create TypeScript implementations |
| 2    | C# team creates parallel implementations             |
| 3    | Test run with small group, refine based on feedback  |
| 4    | Final polish, prepare slides and handouts            |

**Team Involvement**:

- Paul: TypeScript examples, presentation, facilitation
- C# representatives: Parallel C# implementations using idiomatic patterns
- All: Review and feedback during week 3

---

## What Success Looks Like

After the workshop, developers will:

1. Recognize the difference between behavioral and implementation-coupled tests
2. Practice the RED-GREEN-REFACTOR cycle and understand why test-first matters
3. Write tests that describe business rules, not code structure
4. Use factory patterns for isolated test data
5. Mock at system boundaries (HTTP, database, time)
6. Feel confident refactoring code with good test coverage

---

## Next Steps

1. **Today**: Align on scope, timeline, and team involvement
2. **This week**: Confirm C# team representatives for preparation
3. **Week 1**: Begin example development
4. **Ongoing**: Detailed planning document available for deep-dive discussions

---

## Questions for Discussion

1. Does the half-day format work, or do we need to split across sessions?
2. Who from C# teams will collaborate on preparation?
3. Should the repository be internal or available externally?
4. Any domain preferences for examples (booking, shopping cart, or something closer to our work)?
