# TDD Workshop: Behavioral Testing Across Languages

## Planning Document v1.1

**Duration**: Full Afternoon (~4 hours)
**Format**: Presentation followed by Hands-On Workshop
**Audience**: Senior developers across TypeScript and C# teams
**Preparation Time**: 1 month

---

## Preparation Plan

### Overview

We have one month to prepare materials. The goal is to create a **new repository** containing examples in both TypeScript and C# that demonstrate identical concepts. C# teams will collaborate during preparation to ensure the C# examples are idiomatic and complete before the workshop day.

### Examples Catalog

Each example is designed to teach specific concepts. This section defines what each example demonstrates and why it exists.

---

#### Example 1: Booking System (Opening Demo)

**Languages**: TypeScript + C#
**Purpose**: Opening demonstration — "What good looks like"
**Used in**: Phase 1 (Inspiration)

**Key Concepts Demonstrated**:

| Concept                                  | How It's Shown                                                                            |
| ---------------------------------------- | ----------------------------------------------------------------------------------------- |
| **Tests catch bugs with clear messages** | Break overlap detection → test fails explaining "back-to-back bookings should be allowed" |
| **Tests describe business behavior**     | Test names read as specification: "should reject booking in the past"                     |
| **Bad tests provide false confidence**   | Same bugs pass through implementation-coupled tests (spy assertions)                      |
| **Controlling time as a boundary**       | `now` is passed as parameter, not `new Date()` inside function                            |

**Files**:

- `booking-system.test.ts` — Good behavioral tests
- `booking-system-bad-tests.test.ts` — Contrast: implementation-coupled tests that miss bugs
- `booking-system.ts` — Implementation
- `types.ts` — Type definitions

**Demo Flow**:

1. Run tests (all green)
2. Break overlap logic → test fails with descriptive message
3. Break past-booking check → test fails with descriptive message
4. Show bad tests file → same bugs pass through
5. Show refactoring doesn't break good tests

---

#### Example 2: Price Calculator (Pure Function + Implementation Independence)

**Languages**: TypeScript + C#
**Purpose**: Show that behavioral tests survive complete implementation rewrites
**Used in**: Phase 3 (Patterns)

**Key Concepts Demonstrated**:

| Concept                           | How It's Shown                                                                     |
| --------------------------------- | ---------------------------------------------------------------------------------- |
| **Implementation independence**   | Two different implementations (with mutation vs immutable) pass identical tests    |
| **Tests don't care about HOW**    | Tests verify output for given input, nothing about internal structure              |
| **Factory pattern for test data** | `createPriceParams()` with overrides                                               |
| **Coverage through behavior**     | All business rules tested (discounts, edge cases) without testing internal methods |

**Files**:

- `price-calculator.test.ts` — Behavioral tests (never changes)
- `price-calculator-v1.ts` — Implementation A: uses `let` and reassignment
- `price-calculator-v2.ts` — Implementation B: immutable, no reassignment

**Key Point**: The test file is identical for both implementations. You can switch implementations and tests still pass.

---

#### Example 3: Shopping Cart (Hands-On TDD Exercise)

**Languages**: TypeScript + C#
**Purpose**: Teams practice the full RED-GREEN-REFACTOR cycle from scratch
**Used in**: Phase 4 (Practice)

**Key Concepts Demonstrated**:

| Concept                         | How It's Shown                                                |
| ------------------------------- | ------------------------------------------------------------- |
| **RED-GREEN-REFACTOR workflow** | Teams write tests first, then implementation, then refactor   |
| **Test-first shapes design**    | Requirements given in English; teams decide API through tests |
| **Incremental development**     | Build feature by feature, test by test                        |
| **Refactoring with confidence** | Final exercise: restructure implementation, tests protect you |

**Files** (starter):

- `shopping-cart.ts` — Empty file (teams build from scratch)
- `shopping-cart.test.ts` — Empty file (teams write tests first)
- `types.ts` — Type definitions (provided as reference)
- `REQUIREMENTS.md` — Business rules in plain English

**Exercise Structure**:

Teams receive requirements in plain English and must:

1. Write a failing test for the first requirement (RED)
2. Write minimum code to pass (GREEN)
3. Refactor if needed
4. Repeat for next requirement

This is real TDD — not filling in blanks for pre-written tests.

---

#### Example 4: Counter Component (State Mechanism Independence)

**Languages**: TypeScript/React only
**Purpose**: Show that UI tests don't care about internal state management
**Used in**: Phase 5 (Application — Frontend Patterns)

**Key Concepts Demonstrated**:

| Concept                                        | How It's Shown                                                               |
| ---------------------------------------------- | ---------------------------------------------------------------------------- |
| **Internal state is an implementation detail** | Same tests pass for `useState` and `useReducer` implementations              |
| **Test user-visible behavior**                 | Tests click buttons and verify displayed count, not state values             |
| **Accessible queries**                         | `getByRole('button', { name: /increment/i })` — tests use accessibility tree |
| **Tests survive state refactoring**            | Switch from useState to useReducer (or Redux, or Zustand) — tests unchanged  |

**Files**:

- `counter.test.tsx` — Behavioral tests (never changes)
- `counter-use-state.tsx` — Implementation A: React useState
- `counter-use-reducer.tsx` — Implementation B: React useReducer

**Key Point**: The test doesn't know or care whether you use `useState`, `useReducer`, Redux, Zustand, or any other state mechanism. It only knows: "when I click increment, the displayed count goes up."

---

#### Example 5: Product Search (Data Fetching Independence)

**Languages**: TypeScript/React only
**Purpose**: Show that tests don't care about data fetching implementation
**Used in**: Phase 5 (Application — Frontend Patterns)

**Key Concepts Demonstrated**:

| Concept                                       | How It's Shown                                                     |
| --------------------------------------------- | ------------------------------------------------------------------ |
| **Data fetching is an implementation detail** | Same tests pass for React Query and Redux Toolkit implementations  |
| **Mock at HTTP boundary (MSW)**               | Network requests intercepted, not fetch/axios mocked               |
| **Test user workflows**                       | User types search term, clicks button, sees results                |
| **Tests survive library changes**             | Switch from React Query to Redux (or vice versa) — tests unchanged |

**Files**:

- `product-search.test.tsx` — Behavioral tests (never changes)
- `product-search-react-query.tsx` — Implementation A: React Query
- `product-search-redux.tsx` — Implementation B: Redux Toolkit RTK Query
- `handlers.ts` — MSW handlers for mocking API

**Key Point**: Whether you use React Query, Redux, SWR, or plain fetch — the tests don't change. They verify: "user searches, loading appears, results display."

---

#### Example 6: API Integration with MSW (Mocking at Boundaries)

**Languages**: TypeScript (frontend) + C# equivalent with WireMock
**Purpose**: Demonstrate mocking at the HTTP boundary, not at internal layers
**Used in**: Phase 3 (Patterns) and Phase 5 (Application)

**Key Concepts Demonstrated**:

| Concept                                  | How It's Shown                                         |
| ---------------------------------------- | ------------------------------------------------------ |
| **Mock at network boundary**             | MSW intercepts HTTP requests, real code executes       |
| **Same mocks for tests and development** | MSW handlers work in Jest and in browser               |
| **Test real integration code**           | Actual fetch/axios calls execute, only network is fake |
| **No mocking of internal functions**     | Don't mock `fetchData()`, mock the endpoint it calls   |

**TypeScript Files** (MSW):

- `api-integration.test.tsx` — Tests that verify API integration behavior
- `handlers.ts` — MSW request handlers
- `api-client.ts` — Real API client code (not mocked)

**C# Equivalent** (WireMock):

- `ApiIntegrationTests.cs` — Tests using WireMock.Net
- `WireMockSetup.cs` — WireMock server configuration
- `ApiClient.cs` — Real HTTP client code

**Key Point**: We mock the external world (HTTP responses), not our own code. The test exercises the real API client, real error handling, real response parsing — only the network is controlled.

**Contrast with bad approach**:

```typescript
// ❌ BAD: Mocking internal function
jest.spyOn(apiClient, 'fetchProducts').mockResolvedValue([...]);

// ✅ GOOD: Mocking at HTTP boundary
server.use(
  http.get('/api/products', () => {
    return HttpResponse.json([...]);
  })
);
```

---

#### Example 7: Service with Repository (Backend Boundary Mocking)

**Languages**: C# (primary) + TypeScript equivalent
**Purpose**: Show backend pattern for mocking at boundaries via interfaces
**Used in**: Phase 5 (Application — Backend Patterns)

**Key Concepts Demonstrated**:

| Concept                                   | How It's Shown                                                            |
| ----------------------------------------- | ------------------------------------------------------------------------- |
| **Interface as boundary**                 | `IUserRepository` defines the contract, tests provide fake implementation |
| **Test service behavior, not repository** | Tests verify service logic, not database queries                          |
| **Dependency injection enables testing**  | Service receives repository via constructor                               |
| **In-memory fakes vs mocks**              | Prefer simple in-memory implementations over complex mocking              |

**C# Files**:

- `UserServiceTests.cs` — Tests with in-memory repository
- `UserService.cs` — Service containing business logic
- `IUserRepository.cs` — Interface (the boundary)
- `InMemoryUserRepository.cs` — Test fake implementation

**TypeScript Equivalent**:

- `user-service.test.ts` — Same patterns in TypeScript
- `user-service.ts` — Service implementation
- `user-repository.ts` — Interface + in-memory implementation

**Key Point**: The repository is the boundary. Tests provide a simple in-memory implementation, not a mock with `verify()` calls. We test: "when service does X, what happens?" — not "did service call repository method Y?"

---

### Repository Structure

```
tdd-workshop/
├── README.md                           # Workshop overview and setup instructions
├── docs/
│   └── workshop-guide.md               # Facilitator guide for the day
│
├── 01-core-concepts/                   # Language-agnostic examples
│   ├── typescript/
│   │   ├── booking-system/             # Example 1: Opening demo
│   │   ├── price-calculator/           # Example 2: Implementation independence
│   │   └── shopping-cart/              # Example 3: Hands-on exercise
│   └── csharp/
│       ├── BookingSystem/              # Example 1: C# version
│       ├── PriceCalculator/            # Example 2: C# version
│       └── ShoppingCart/               # Example 3: C# version
│
├── 02-boundary-mocking/                # Mocking at boundaries (both languages)
│   ├── typescript/
│   │   └── msw-api-integration/        # Example 6: MSW pattern
│   └── csharp/
│       └── WireMockApiIntegration/     # Example 6: WireMock pattern
│
├── 03-frontend-patterns/               # Frontend-specific (TypeScript/React)
│   ├── counter-example/                # Example 4: State mechanism independence
│   └── product-search/                 # Example 5: Data fetching independence
│
├── 04-backend-patterns/                # Backend-specific (C# primary)
│   ├── csharp/
│   │   └── ServiceWithRepository/      # Example 7: Repository pattern
│   └── typescript/
│       └── service-with-repository/    # Example 7: TS equivalent
│
└── slides/                             # Presentation materials
    └── tdd-workshop.md                 # Slide content
```

### Preparation Timeline

```
Week 1: Core Setup & Booking System Demo
─────────────────────────────────────────
[ ] Create new repository with structure above
[ ] Implement TypeScript booking-system (demo code)
[ ] Implement TypeScript booking-system-bad-tests (contrast)
[ ] Write implementation that passes good tests
[ ] Verify demo flow: break code → tests fail with clear messages

Week 2: Core Examples & C# Collaboration Begins
───────────────────────────────────────────────
[ ] Implement TypeScript price-calculator (both implementations)
[ ] Implement TypeScript shopping-cart tests (exercise starter)
[ ] Meet with C# team: review TypeScript examples
[ ] C# team begins BookingSystem translation
[ ] C# team begins PriceCalculator translation

Week 3: Frontend Patterns & C# Completion
─────────────────────────────────────────
[ ] Port counter example from existing repo
[ ] Port product-search example from existing repo
[ ] Port MSW example from existing repo
[ ] C# team completes ShoppingCart exercise starter
[ ] C# team reviews and refines all examples
[ ] Cross-review: verify concepts are identical across languages

Week 4: Polish & Dry Run
────────────────────────
[ ] Create presentation slides
[ ] Write facilitator guide
[ ] Test all examples run correctly (both languages)
[ ] Dry run with small group
[ ] Adjust timing based on dry run feedback
[ ] Final repository cleanup and documentation
```

### Collaboration with C# Teams

**Goals**:

1. C# examples should be **idiomatic** — not direct translations
2. Same concepts, potentially different patterns (e.g., factory vs builder)
3. Both languages ready and tested before workshop day
4. C# developers can present their own examples if desired

**Collaboration Points**:

- Week 2: Kickoff meeting to review TypeScript examples and discuss C# idioms
- Week 3: Review session for C# implementations
- Week 4: Joint dry run with both TypeScript and C# examples

### Key Concepts Summary

The workshop teaches these core concepts, each demonstrated by specific examples:

| Concept                                  | Primary Example                       | Also Shown In  |
| ---------------------------------------- | ------------------------------------- | -------------- |
| **Tests catch bugs with clear messages** | Booking System (demo)                 | All examples   |
| **Tests describe business behavior**     | Booking System (demo)                 | Shopping Cart  |
| **Bad tests provide false confidence**   | Booking System (bad tests contrast)   | —              |
| **Test-first (RED-GREEN-REFACTOR)**      | Shopping Cart (hands-on TDD)          | Phase 2        |
| **Test-first beats test-last**           | Shopping Cart (hands-on TDD)          | Phase 2        |
| **Implementation independence**          | Price Calculator, Counter             | Product Search |
| **State mechanism independence**         | Counter (useState vs useReducer)      | —              |
| **Data fetching independence**           | Product Search (React Query vs Redux) | —              |
| **Mock at HTTP boundary**                | MSW API Integration                   | Product Search |
| **Mock at interface boundary**           | Service with Repository               | —              |
| **Factory/Builder pattern**              | All examples                          | —              |
| **Controlling time as dependency**       | Booking System                        | —              |

---

## Workshop Day Structure

The following sections describe what happens on the day itself. The workshop follows a deliberate arc: from personal story to inspiration to understanding to practice.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  OPENING: PRESENTATION (PowerPoint)                                     │
│  "My Journey with TDD"                                                  │
│  ─────────────────────                                                  │
│  Paul's personal story: How I started using TDD                         │
│  Historical context and credibility                                     │
│  Transition into "What Good Looks Like"                                 │
│  Goal: Build connection and establish why this matters to ME            │
│                                                                         │
│                              ↓                                          │
│                                                                         │
│  PHASE 1: INSPIRATION                                                   │
│  "What Good Looks Like"                                                 │
│  ─────────────────────                                                  │
│  Live demo: Break code, watch tests catch bugs with clear messages      │
│  Contrast: Show same bugs passing through bad tests                     │
│  Goal: Create visceral understanding of WHY this matters                │
│                                                                         │
│                              ↓                                          │
│                                                                         │
│  PHASE 2: PRINCIPLES                                                    │
│  "Why It Works"                                                         │
│  ──────────────                                                         │
│  Extract principles from what they just witnessed                       │
│  Name the patterns, explain the reasoning                               │
│  Goal: Give them a mental model to apply                                │
│                                                                         │
│                              ↓                                          │
│                                                                         │
│  PHASE 3: PATTERNS                                                      │
│  "How To Do It"                                                         │
│  ──────────────                                                         │
│  Concrete examples in TypeScript                                        │
│  Discussion of C# translation patterns                                  │
│  Goal: Show the mechanics of good behavioral tests                      │
│                                                                         │
│                              ↓                                          │
│                                                                         │
│  PHASE 4: PRACTICE                                                      │
│  "Now You Try"                                                          │
│  ─────────────                                                          │
│  Hands-on exercises with starter repos                                  │
│  RED-GREEN-REFACTOR cycle in action                                     │
│  Goal: Build muscle memory through doing                                │
│                                                                         │
│                              ↓                                          │
│                                                                         │
│  PHASE 5: APPLICATION                                                   │
│  "Taking It Home"                                                       │
│  ────────────────                                                       │
│  Domain-specific considerations (frontend, backend, integration)        │
│  Adoption strategies and anti-pattern checklist                         │
│  Goal: Bridge from workshop to real work                                │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Time Allocation

| Phase       | Content                           | Duration | Cumulative |
| ----------- | --------------------------------- | -------- | ---------- |
| **Opening** | Presentation: My Journey with TDD | 15 min   | 0:15       |
| **Phase 1** | Inspiration: Live Demo            | 25 min   | 0:40       |
| **Phase 2** | Principles                        | 35 min   | 1:15       |
| _Break_     |                                   | 10 min   | 1:25       |
| **Phase 3** | Patterns & Examples               | 45 min   | 2:10       |
| _Break_     |                                   | 10 min   | 2:20       |
| **Phase 4** | Hands-On Practice                 | 90 min   | 3:50       |
| **Phase 5** | Application & Wrap-Up             | 20 min   | 4:10       |

**Total**: ~4 hours 10 minutes

---

## Pedagogical Rationale

### Why This Structure?

Most TDD training fails because it follows a pattern that doesn't create buy-in:

```
Traditional (Less Effective)          Our Approach (More Effective)
─────────────────────────────         ────────────────────────────
1. Theory first                       1. Personal story (connection)
2. Explain RED-GREEN-REFACTOR         2. Demo first (visceral impact)
3. Abstract principles                3. Show tests catching real bugs
4. Practice at the end                4. Contrast with bad tests
5. Hope they remember                 5. THEN explain why it worked
                                      6. THEN show patterns
                                      7. Practice throughout
                                      8. They've experienced it firsthand
```

**The key insight**: Developers don't need to be convinced that testing is good. They've heard that. What they need is to SEE the difference between tests that catch bugs and describe behavior versus tests that provide false confidence.

### Why Start With a Personal Story?

Opening with your TDD journey achieves several things:

1. **Establishes credibility** - You're not preaching theory, you've lived this
2. **Creates connection** - "I was skeptical too" builds trust
3. **Sets honest expectations** - Acknowledging trade-offs prevents defensiveness
4. **Frames the demo** - "Let me show you what I mean" is a natural transition

### Why Follow With "Breaking Code"?

The live demo where we deliberately break code and watch tests fail achieves:

1. **Immediate engagement** - It's a live performance, not a lecture
2. **Visceral understanding** - They SEE the value, not just hear about it
3. **The contrast is powerful** - Same bugs passing through bad tests is memorable
4. **Sets up the principles** - "Why did those tests work?" flows naturally

---

## Opening: Presentation — "My Journey with TDD"

**Duration**: 15 minutes
**Format**: PowerPoint presentation

### Purpose

Before diving into code, establish personal credibility and create connection. This isn't abstract theory — it's something that changed how I work.

### Slide Outline

**Slide 1: Title**

- TDD Workshop: Testing Behavior, Not Implementation
- Paul Hammond, Director at Pack Software

**Slide 2-3: My Story**

- How I first encountered TDD (the context, the project)
- Initial skepticism vs. what changed my mind
- A specific moment or project where it clicked

**Slide 4: The Problem I Kept Seeing**

- Tests that passed but bugs shipped anyway
- Tests that broke every time we refactored
- Teams afraid to change code because tests were fragile
- "100% coverage" that meant nothing

**Slide 5: What Changed**

- The shift from "testing code" to "testing behavior"
- Realizing tests should be a specification, not a verification of implementation
- The freedom that comes from tests you can trust

**Slide 6: What We'll Do Today**

- I'll show you what good looks like (live demo)
- We'll break down why it works (principles)
- You'll practice it yourselves (hands-on)
- You'll leave with patterns you can apply Monday

**Slide 7: Transition to Demo**

- "Let me show you what I mean..."
- Sets up the live coding demo

### Speaker Notes

- Keep it personal and authentic — this is YOUR story
- Acknowledge that TDD can feel slower at first
- Don't oversell — be honest about trade-offs
- The goal is curiosity, not conversion (yet)

### Preparation Needed

- [ ] Draft slides in PowerPoint
- [ ] Decide which specific story/project to reference
- [ ] Practice the transition from slides to live demo

---

## Phase 1: Inspiration — "What Good Looks Like"

**Duration**: 25 minutes

### 1.1 The Demo Domain: Meeting Room Booking System

We use a **Meeting Room Booking System** because:

- **Universal**: Every developer understands booking/scheduling
- **Not tied to frontend or backend**: Pure business logic
- **Rich in subtle bugs**: Time-based logic, overlap detection, edge cases
- **Language-agnostic**: Same concepts apply in TypeScript, C#, Java, etc.

### 1.2 The Business Rules (Become Test Descriptions)

```
Booking System
  Creating a booking
    ✓ should create a booking with valid start and end times
    ✓ should reject booking where end time is before start time
    ✓ should reject booking that overlaps with existing booking
    ✓ should allow back-to-back bookings (boundary case)
    ✓ should reject booking in the past
    ✓ should reject booking exceeding maximum duration (4 hours)
  Cancelling a booking
    ✓ should allow cancellation of future booking
    ✓ should reject cancellation of booking that has already started
```

### 1.3 Demo Flow

**Step 1: Show tests passing (2 minutes)**

- Run the test suite
- All green
- Point out: "These test names read like a specification"

**Step 2: Break the code — Bug #1: Overlap Detection (5 minutes)**

Introduce a subtle off-by-one error in overlap logic:

```typescript
// BEFORE (correct)
const hasOverlap = existingBookings.some(
  (existing) =>
    newBooking.start < existing.end && newBooking.end > existing.start,
);

// AFTER (buggy)
const hasOverlap = existingBookings.some(
  (existing) =>
    newBooking.start <= existing.end && newBooking.end >= existing.start,
);
```

Run tests. **Key moment — the failure message**:

```
FAIL: should allow back-to-back bookings

  A booking from 10:00-11:00 should be allowed when an existing
  booking ends at exactly 10:00 (back-to-back bookings are valid)

  Expected: { success: true }
  Received: { success: false, error: "Overlaps with existing booking" }
```

**Point out**: "The test told us exactly what business rule was violated. We didn't have to debug — we just had to read."

**Step 3: Break the code — Bug #2: Past Booking Check (5 minutes)**

```typescript
// BEFORE (correct)
if (booking.start < now) {
  return { success: false, error: "Cannot book in the past" };
}

// AFTER (buggy)
if (booking.end < now) {
  return { success: false, error: "Cannot book in the past" };
}
```

Run tests. Failure message describes the edge case:

```
FAIL: should reject booking in the past

  A booking starting at 9:00 (in the past) but ending at 11:00
  (in the future) should still be rejected

  Expected: { success: false, error: containing "past" }
  Received: { success: true }
```

**Step 4: The Contrast — Bad Tests (8 minutes)**

Show the SAME feature with implementation-coupled tests:

```typescript
// BAD TESTS
it("should call validateTimes", () => {
  const spy = jest.spyOn(bookingService, "validateTimes");
  bookingService.createBooking(mockBooking);
  expect(spy).toHaveBeenCalled();
});

it("should call checkOverlap", () => {
  const spy = jest.spyOn(bookingService, "checkOverlap");
  bookingService.createBooking(mockBooking);
  expect(spy).toHaveBeenCalledWith(mockBooking, existingBookings);
});
```

Introduce the same bugs. **Tests still pass.**

Ask the audience: "What did these tests actually verify? That a function was called. Not that the system behaves correctly."

**Step 5: The Refactoring Proof (5 minutes)**

Return to good tests. Show two completely different implementations:

**Implementation A**: Imperative, step-by-step

```typescript
function createBooking(booking, existingBookings, now) {
  if (booking.end <= booking.start) {
    return { success: false, error: "End must be after start" };
  }
  if (booking.start < now) {
    return { success: false, error: "Cannot book in the past" };
  }
  // ... more sequential checks
}
```

**Implementation B**: Extracted validation functions

```typescript
function createBooking(booking, existingBookings, now) {
  const timeOrderError = validateTimeOrder(booking);
  if (timeOrderError) return timeOrderError;

  const pastError = validateNotInPast(booking, now);
  if (pastError) return pastError;

  const overlapError = validateNoOverlap(booking, existingBookings);
  if (overlapError) return overlapError;

  const durationError = validateMaxDuration(booking);
  if (durationError) return durationError;

  return { success: true, booking: persistBooking(booking) };
}
```

Both pass the same tests. Tests don't care about implementation.

### 1.4 Key Takeaways (5 minutes)

Make explicit what they witnessed:

1. **Tests caught subtle bugs immediately** — No manual testing required
2. **Failure messages described business rules** — Not implementation details
3. **Bad tests provided false confidence** — Bugs passed through undetected
4. **Good tests survived refactoring** — Implementation changed, tests didn't

---

## Phase 2: Principles — "Why It Works"

**Duration**: 40 minutes

Now that they've SEEN the difference, we name and explain the principles.

### 2.1 Principle: Test Behavior, Not Implementation (10 minutes)

**The Rule**:

> Tests should describe what the system does for users, not how it does it internally.

**The Litmus Test**:

> "If I refactor the implementation without changing behavior, do my tests break?"
>
> - Yes → Testing implementation (bad)
> - No → Testing behavior (good)

**Concrete Examples**:

| Good (Behavior)                      | Bad (Implementation)                   |
| ------------------------------------ | -------------------------------------- |
| "should reject overlapping bookings" | "should call checkOverlap method"      |
| "should reject booking in the past"  | "should compare start with Date.now()" |
| `expect(result.success).toBe(false)` | `expect(spy).toHaveBeenCalled()`       |

### 2.2 Principle: Tests Are Executable Specifications (8 minutes)

**The Rule**:

> Test descriptions should read like business requirements. They ARE the specification.

**Example**:

```
Booking System
  Creating a booking
    ✓ should create a booking with valid start and end times
    ✓ should reject booking where end time is before start time
    ✓ should reject booking that overlaps with existing booking
    ✓ should allow back-to-back bookings
    ✓ should reject booking in the past
    ✓ should reject booking exceeding maximum duration
```

This is documentation that:

- Cannot go stale (it runs)
- Is verified on every commit
- Is readable by non-developers
- Is the single source of truth

### 2.3 Principle: Coverage Through Behavior (8 minutes)

**The Rule**:

> Achieve coverage by testing all business behaviors, not by testing all lines.

**The Question to Ask**:

> "What business behavior am I NOT testing?"
> NOT: "What line am I missing?"

**Coverage Theater** (the anti-pattern):

```typescript
// 100% line coverage, tests nothing meaningful
it("processes booking", () => {
  const result = createBooking(validBooking);
  expect(result).toBeDefined(); // So what?
});
```

**Real Coverage**:

```typescript
it('should reject overlapping bookings', () => { ... });
it('should allow back-to-back bookings', () => { ... });
it('should reject bookings in the past', () => { ... });
it('should reject bookings over 4 hours', () => { ... });
```

Each test covers a business rule. Coverage is a side effect.

### 2.4 Principle: Isolated Test State — Factory Pattern (7 minutes)

**The Rule**:

> Each test creates its own fresh state. No shared mutable state.

**The Problem**:

```typescript
// ANTI-PATTERN: Shared mutable state
let booking: Booking;
let existingBookings: Booking[];

beforeEach(() => {
  booking = { start: "10:00", end: "11:00", room: "A" };
  existingBookings = [];
});

it("test 1", () => {
  existingBookings.push(anotherBooking); // Mutates shared state!
});

it("test 2", () => {
  // May fail depending on test execution order!
});
```

**The Solution**:

```typescript
// Factory pattern
const createBooking = (overrides?: Partial<Booking>): Booking => ({
  id: "booking-123",
  room: "Room A",
  start: new Date("2025-01-15T10:00:00"),
  end: new Date("2025-01-15T11:00:00"),
  ...overrides,
});

it("should reject overlapping bookings", () => {
  const existing = createBooking({ start: "09:30", end: "10:30" });
  const newBooking = createBooking({ start: "10:00", end: "11:00" });

  const result = bookingService.create(newBooking, [existing]);

  expect(result.success).toBe(false);
});
```

### 2.5 Principle: Test First — RED-GREEN-REFACTOR (10 minutes)

**The Rule**:

> Write a failing test before writing any production code. Then write the minimum code to pass. Then refactor.

**The Cycle**:

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   RED ──────────────► GREEN ──────────────► REFACTOR               │
│    │                    │                      │                    │
│    │ Write a test       │ Write minimum        │ Improve structure  │
│    │ that fails         │ code to pass         │ (tests stay green) │
│    │                    │                      │                    │
│    └────────────────────┴──────────────────────┴───────► repeat     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Why Test-First Beats Test-Last**:

| Test-First (TDD)                            | Test-Last                                      |
| ------------------------------------------- | ---------------------------------------------- |
| Test shapes the API — you're the first user | API already exists — tests retrofit to it      |
| Forces small, testable units                | Often leads to hard-to-test code               |
| Catches requirement ambiguity immediately   | Ambiguity discovered during testing (too late) |
| 100% of code has tests (by construction)    | Tests often skipped under time pressure        |
| Design emerges from usage                   | Design decisions already baked in              |
| Confidence to refactor from the start       | Refactoring feels risky                        |

**The Key Insight**:

> When you write the test first, the test tells you what code to write.
> When you write code first, you're guessing what the test should verify.

**What "Minimum Code to Pass" Means**:

```typescript
// RED: Test expects greeting
it("should greet the user by name", () => {
  expect(greet("Alice")).toBe("Hello, Alice!");
});

// GREEN: Minimum code (resist the urge to over-engineer!)
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// NOT THIS (over-engineering):
function greet(name: string, options?: GreetingOptions): string {
  const greeting = options?.formal ? "Good day" : "Hello";
  const punctuation = options?.enthusiastic ? "!" : ".";
  return `${greeting}, ${name}${punctuation}`;
}
```

Only add complexity when a test demands it.

### 2.6 Principle: Mock at Boundaries, Not Internals (7 minutes)

**The Rule**:

> Mock things you don't control (HTTP, databases, time). Don't mock your own code.

**The Boundaries Diagram**:

```
┌─────────────────────────────────────────┐
│           Your Application              │
│                                         │
│   Domain Logic (pure functions)         │
│              ↓                          │
│   Ports (interfaces/abstractions)       │
│              ↓                          │
└──────────────┼──────────────────────────┘
               │ ← MOCK HERE
               ↓
    External World (HTTP, DB, Clock, etc.)
```

**Example — Controlling Time**:

```typescript
// BAD: Hard to test, depends on actual time
function isBookingInPast(booking: Booking): boolean {
  return booking.start < new Date();
}

// GOOD: Time is a parameter (injected dependency)
function isBookingInPast(booking: Booking, now: Date): boolean {
  return booking.start < now;
}
```

---

## Phase 3: Patterns — "How To Do It"

**Duration**: 45 minutes

Concrete examples in TypeScript with C# translation discussion.

### 3.1 Example: Email Validation — Pure Function Testing (12 minutes)

**Why**: Start simple. Pure functions are the easiest to test.

```typescript
describe("Email Validation", () => {
  describe("valid emails", () => {
    it("should accept standard email format", () => {
      expect(isValidEmail("user@example.com")).toBe(true);
    });

    it("should accept emails with subdomains", () => {
      expect(isValidEmail("user@mail.example.com")).toBe(true);
    });

    it("should accept emails with plus addressing", () => {
      expect(isValidEmail("user+tag@example.com")).toBe(true);
    });
  });

  describe("invalid emails", () => {
    it("should reject email without @ symbol", () => {
      expect(isValidEmail("userexample.com")).toBe(false);
    });

    it("should reject email without domain", () => {
      expect(isValidEmail("user@")).toBe(false);
    });

    it("should reject empty string", () => {
      expect(isValidEmail("")).toBe(false);
    });
  });
});
```

**C# Translation Pattern**:

```csharp
public class EmailValidationTests
{
    [Theory]
    [InlineData("user@example.com")]
    [InlineData("user@mail.example.com")]
    [InlineData("user+tag@example.com")]
    public void Should_Accept_Valid_Email(string email)
    {
        EmailValidator.IsValid(email).Should().BeTrue();
    }

    [Theory]
    [InlineData("userexample.com")]
    [InlineData("user@")]
    [InlineData("")]
    public void Should_Reject_Invalid_Email(string email)
    {
        EmailValidator.IsValid(email).Should().BeFalse();
    }
}
```

**Discussion**: Theory/InlineData vs individual tests — trade-offs.

### 3.2 Example: Price Calculator — Implementation Independence (15 minutes)

**Why**: Shows that behavioral tests survive complete rewrites.

```typescript
describe("Price Calculator", () => {
  it("should calculate total from unit price and quantity", () => {
    const result = calculateTotal({ unitPrice: 10, quantity: 3 });
    expect(result).toBe(30);
  });

  it("should apply percentage discount", () => {
    const result = calculateTotal({
      unitPrice: 100,
      quantity: 1,
      discountPercent: 10,
    });
    expect(result).toBe(90);
  });

  it("should apply fixed discount after percentage discount", () => {
    const result = calculateTotal({
      unitPrice: 100,
      quantity: 1,
      discountPercent: 10,
      fixedDiscount: 5,
    });
    expect(result).toBe(85); // 100 - 10% = 90 - 5 = 85
  });

  it("should never return negative total", () => {
    const result = calculateTotal({
      unitPrice: 10,
      quantity: 1,
      fixedDiscount: 100,
    });
    expect(result).toBe(0);
  });
});
```

**Show two implementations** that both pass:

**Imperative** (with mutation):

```typescript
function calculateTotal(params: PriceParams): number {
  let total = params.unitPrice * params.quantity;
  if (params.discountPercent) {
    total = total * (1 - params.discountPercent / 100);
  }
  if (params.fixedDiscount) {
    total = total - params.fixedDiscount;
  }
  return Math.max(0, total);
}
```

**Immutable** (no mutation):

```typescript
function calculateTotal(params: PriceParams): number {
  const subtotal = params.unitPrice * params.quantity;

  const afterPercentDiscount = params.discountPercent
    ? subtotal * (1 - params.discountPercent / 100)
    : subtotal;

  const afterFixedDiscount = params.fixedDiscount
    ? afterPercentDiscount - params.fixedDiscount
    : afterPercentDiscount;

  return Math.max(0, afterFixedDiscount);
}
```

**The point**: Same tests, completely different code structure.

### 3.3 Example: Factory Pattern Deep Dive (10 minutes)

```typescript
// Complete factory with sensible defaults
const createBooking = (overrides?: Partial<Booking>): Booking => ({
  id: "booking-123",
  room: "Room A",
  start: new Date("2025-01-15T10:00:00"),
  end: new Date("2025-01-15T11:00:00"),
  createdBy: "user-1",
  status: "confirmed",
  ...overrides,
});

// Composable factories for related objects
const createRoom = (overrides?: Partial<Room>): Room => ({
  id: "room-1",
  name: "Room A",
  capacity: 10,
  hasVideoConference: true,
  ...overrides,
});

// Usage in tests
it("should reject booking for room at capacity", () => {
  const room = createRoom({ capacity: 2 });
  const existingBookings = [createBooking({ attendees: ["user-1", "user-2"] })];
  const newBooking = createBooking({ attendees: ["user-3"] });

  const result = addAttendee(newBooking, room, existingBookings);

  expect(result.success).toBe(false);
  expect(result.error).toContain("capacity");
});
```

**C# Builder Pattern**:

```csharp
var booking = new BookingBuilder()
    .WithRoom("Room A")
    .StartingAt(DateTime.Parse("2025-01-15T10:00"))
    .EndingAt(DateTime.Parse("2025-01-15T11:00"))
    .Build();
```

### 3.4 Example: Boundary Mocking (8 minutes)

**TypeScript with MSW**:

```typescript
// Setup: Mock at the HTTP boundary
server.use(
  http.get("/api/rooms", () => {
    return HttpResponse.json([{ id: "room-1", name: "Room A", capacity: 10 }]);
  }),
);

// Test: Real code, controlled external dependency
it("should fetch available rooms", async () => {
  const rooms = await roomService.getAvailable();

  expect(rooms).toHaveLength(1);
  expect(rooms[0].name).toBe("Room A");
});
```

**C# Equivalent Concepts**:

- WireMock.Net for HTTP-level mocking
- Interface abstraction with NSubstitute/Moq for ports
- `IClock` interface pattern for time

---

## Phase 4: Practice — "Now You Try"

**Duration**: 90 minutes

This is where teams learn TDD by doing it. They will build a feature from scratch using the RED-GREEN-REFACTOR cycle — not fill in blanks for pre-written tests.

### 4.1 Setup (10 minutes)

**Team Formation**:

- Teams of 2-3 developers
- Grouped by primary language (TypeScript or C#)
- Each team gets access to starter repo

**Starter Repo Contents**:

- Empty implementation file (`shopping-cart.ts` or `ShoppingCart.cs`)
- Empty test file (`shopping-cart.test.ts` or `ShoppingCartTests.cs`)
- Type definitions / interfaces (provided as reference)
- `REQUIREMENTS.md` with business rules in plain English
- Pre-configured test runner (npm test / dotnet test)

**The Requirements Document** (given to teams):

```markdown
# Shopping Cart Requirements

Build a shopping cart that:

1. Can add items (each item has id, name, price, quantity)
2. Calculates subtotal (sum of price × quantity for all items)
3. Supports discount codes:
   - "SAVE10" = 10% off
   - "SAVE20" = 20% off
   - Invalid codes should be rejected
4. Calculates total with tax (20% tax rate)
5. Discount is applied before tax
6. Quantities must be positive (reject zero or negative)
7. Total can never be negative
```

### 4.2 Exercise 1: First Feature with TDD (30 minutes)

**Goal**: Build "add item and calculate subtotal" using strict TDD.

**Facilitated Walkthrough** (first 10 minutes):

The facilitator demonstrates the first cycle live:

**Step 1 — RED**: Write the first failing test

```typescript
describe("Shopping Cart", () => {
  it("should calculate subtotal for a single item", () => {
    const cart = createCart();
    const cartWithItem = addItem(cart, {
      id: "item-1",
      name: "Widget",
      price: 100,
      quantity: 2,
    });

    const result = calculateSubtotal(cartWithItem);

    expect(result).toBe(200);
  });
});
```

Run tests → **RED** (functions don't exist yet)

**Step 2 — GREEN**: Write minimum code to pass

```typescript
type CartItem = { id: string; name: string; price: number; quantity: number };
type Cart = { items: CartItem[] };

const createCart = (): Cart => ({ items: [] });

const addItem = (cart: Cart, item: CartItem): Cart => ({
  ...cart,
  items: [...cart.items, item],
});

const calculateSubtotal = (cart: Cart): number =>
  cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
```

Run tests → **GREEN**

**Step 3 — REFACTOR**: Any improvements? (In this case, code is already clean)

**Teams Continue** (remaining 20 minutes):

Teams add more tests for the subtotal feature:

- Empty cart returns 0
- Multiple items sum correctly
- Adding same item twice (by id) increases quantity

**Key coaching points**:

- Write ONE test at a time
- Don't write the next test until current one is GREEN
- Resist the urge to implement features before tests demand them

### 4.3 Exercise 2: Discount Codes with TDD (25 minutes)

**Goal**: Add discount code functionality using strict TDD.

Teams work independently. Requirements:

- Apply "SAVE10" for 10% discount
- Apply "SAVE20" for 20% discount
- Reject invalid codes with clear error

**Expected TDD Cycle**:

```
RED:   it("should apply SAVE10 for 10% discount")
GREEN: Implement applyDiscount with hardcoded 10% for "SAVE10"

RED:   it("should apply SAVE20 for 20% discount")
GREEN: Extend to handle "SAVE20"

RED:   it("should reject invalid discount code")
GREEN: Add validation and error handling

RED:   it("should apply discount before tax")
GREEN: Update calculateTotal to apply discount first
```

**Debrief Questions**:

- How did writing the test first change how you thought about the API?
- Did anyone discover edge cases while writing tests that they wouldn't have considered otherwise?
- How did the test help clarify what "reject invalid code" actually means?

### 4.4 Exercise 3: Refactor with Confidence (15 minutes)

**Goal**: Restructure the implementation while keeping tests green.

**Challenge**: Your code works, but the team lead wants you to refactor it. Choose one:

- Extract discount logic into a separate function
- Rename variables for clarity
- Reorganize into separate modules

**Rules**:

- Tests must NOT change (they test behavior, not implementation)
- Tests must stay GREEN throughout (run after each change)
- Implementation can change completely

**The Point**: If your tests break when you refactor, they were testing implementation, not behavior. Good behavioral tests give you freedom to change HOW without changing WHAT.

### 4.5 Debrief: Why TDD? (10 minutes)

Facilitated discussion connecting their experience to principles:

**Questions**:

1. "How did it feel to write the test before the code?"
2. "Did anyone try to write code first and then go back? What happened?"
3. "How confident did you feel during refactoring?"
4. "What would have been different if you'd written tests after the code?"

**Key Takeaways to Reinforce**:

| What They Experienced                  | The Principle                                   |
| -------------------------------------- | ----------------------------------------------- |
| Test told them what API to create      | Test-first shapes design                        |
| Tests passed after refactoring         | Behavioral tests survive implementation changes |
| Edge cases emerged while writing tests | TDD surfaces requirements gaps early            |
| Small cycles felt manageable           | RED-GREEN-REFACTOR keeps progress incremental   |

---

## Phase 5: Application — "Taking It Home"

**Duration**: 25 minutes

### 5.1 Frontend-Specific Patterns (8 minutes)

The same principles apply, with different boundaries:

**The "Public API" is the DOM**:

- Test what users see and do
- Use accessible queries (`getByRole`, `getByLabelText`)
- Avoid testing component internals (state, hooks)

**Example from existing repo**:

- Counter component: Same tests pass for `useState` and `useReducer` implementations
- Product Search: Same tests pass for React Query and Redux Toolkit

**Mock at the HTTP boundary**:

- MSW intercepts network requests
- Same mocks work in tests, Storybook, development

### 5.2 Backend/Integration Patterns (7 minutes)

**Repository pattern**:

- Interface defines the contract
- Tests use in-memory implementation
- Production uses real database

**Service boundaries**:

- Mock external services at HTTP level
- Test your service's behavior, not the external service

### 5.3 Adoption Strategies (5 minutes)

**Practical advice**:

- Don't rewrite all tests at once
- Start with new features (TDD from scratch)
- When touching existing code, add behavioral tests first
- Use the litmus test: "Can I refactor without changing tests?"

**The Anti-Pattern Checklist** (handout):

Before committing a test, ask:

- [ ] Does this test describe a business behavior?
- [ ] Would this test survive an implementation refactor?
- [ ] Is the test isolated (no shared mutable state)?
- [ ] Am I mocking boundaries, not internals?
- [ ] Does the failure message explain what went wrong?

### 5.4 Resources and Wrap-Up (5 minutes)

**Resources**:

- Workshop starter repos (TypeScript and C#)
- Kent C. Dodds' Testing JavaScript
- Ian Cooper's "TDD: Where Did It All Go Wrong"
- Testing Library documentation
- Your existing React TDD talk (YouTube link)

**Final Message**:

> "Good tests give you confidence to change code. Bad tests give you fear of changing code. The difference is whether you're testing behavior or implementation."

---

## Appendix A: Demo Code — Booking System

### Test File

```typescript
// booking-system.test.ts
import { createBooking, cancelBooking } from "./booking-system";
import type { BookingRequest, Booking } from "./types";

describe("Booking System", () => {
  // Factory function
  const createBookingRequest = (
    overrides?: Partial<BookingRequest>,
  ): BookingRequest => ({
    room: "Room A",
    start: new Date("2025-01-15T10:00:00"),
    end: new Date("2025-01-15T11:00:00"),
    bookedBy: "user-1",
    ...overrides,
  });

  // Fixed "now" for deterministic tests
  const now = new Date("2025-01-15T09:00:00");

  describe("creating a booking", () => {
    it("should create a booking with valid start and end times", () => {
      const request = createBookingRequest();

      const result = createBooking(request, [], now);

      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.booking.room).toBe("Room A");
      }
    });

    it("should reject booking where end time is before start time", () => {
      const request = createBookingRequest({
        start: new Date("2025-01-15T11:00:00"),
        end: new Date("2025-01-15T10:00:00"),
      });

      const result = createBooking(request, [], now);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toContain("End time must be after start time");
      }
    });

    it("should reject booking where end time equals start time", () => {
      const request = createBookingRequest({
        start: new Date("2025-01-15T10:00:00"),
        end: new Date("2025-01-15T10:00:00"),
      });

      const result = createBooking(request, [], now);

      expect(result.success).toBe(false);
    });

    it("should reject booking that overlaps with existing booking", () => {
      const existing: Booking = {
        id: "existing-1",
        ...createBookingRequest({
          start: new Date("2025-01-15T09:30:00"),
          end: new Date("2025-01-15T10:30:00"),
        }),
        status: "confirmed",
      };

      const request = createBookingRequest({
        start: new Date("2025-01-15T10:00:00"),
        end: new Date("2025-01-15T11:00:00"),
      });

      const result = createBooking(request, [existing], now);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toContain("overlaps");
      }
    });

    it("should allow back-to-back bookings", () => {
      const existing: Booking = {
        id: "existing-1",
        ...createBookingRequest({
          start: new Date("2025-01-15T09:00:00"),
          end: new Date("2025-01-15T10:00:00"),
        }),
        status: "confirmed",
      };

      const request = createBookingRequest({
        start: new Date("2025-01-15T10:00:00"),
        end: new Date("2025-01-15T11:00:00"),
      });

      const result = createBooking(request, [existing], now);

      expect(result.success).toBe(true);
    });

    it("should reject booking in the past", () => {
      const request = createBookingRequest({
        start: new Date("2025-01-15T08:00:00"),
        end: new Date("2025-01-15T09:00:00"),
      });

      const result = createBooking(request, [], now);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toContain("past");
      }
    });

    it("should reject booking exceeding maximum duration of 4 hours", () => {
      const request = createBookingRequest({
        start: new Date("2025-01-15T10:00:00"),
        end: new Date("2025-01-15T15:00:00"), // 5 hours
      });

      const result = createBooking(request, [], now);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toContain("duration");
      }
    });

    it("should allow booking in different room even at same time", () => {
      const existing: Booking = {
        id: "existing-1",
        ...createBookingRequest({ room: "Room A" }),
        status: "confirmed",
      };

      const request = createBookingRequest({ room: "Room B" });

      const result = createBooking(request, [existing], now);

      expect(result.success).toBe(true);
    });
  });

  describe("cancelling a booking", () => {
    it("should allow cancellation of future booking", () => {
      const booking: Booking = {
        id: "booking-1",
        ...createBookingRequest({
          start: new Date("2025-01-15T14:00:00"),
          end: new Date("2025-01-15T15:00:00"),
        }),
        status: "confirmed",
      };

      const result = cancelBooking(booking, now);

      expect(result.success).toBe(true);
    });

    it("should reject cancellation of booking that has already started", () => {
      const booking: Booking = {
        id: "booking-1",
        ...createBookingRequest({
          start: new Date("2025-01-15T08:00:00"),
          end: new Date("2025-01-15T10:00:00"),
        }),
        status: "confirmed",
      };

      const result = cancelBooking(booking, now);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toContain("already started");
      }
    });
  });
});
```

### Implementation (for demo)

```typescript
// booking-system.ts
import type {
  BookingRequest,
  Booking,
  BookingResult,
  CancelResult,
} from "./types";

const MAX_DURATION_HOURS = 4;

export function createBooking(
  request: BookingRequest,
  existingBookings: Booking[],
  now: Date,
): BookingResult {
  // Validate time order
  if (request.end <= request.start) {
    return {
      success: false,
      error: "End time must be after start time",
    };
  }

  // Validate not in past
  if (request.start < now) {
    return {
      success: false,
      error: "Cannot create booking in the past",
    };
  }

  // Validate duration
  const durationHours =
    (request.end.getTime() - request.start.getTime()) / (1000 * 60 * 60);
  if (durationHours > MAX_DURATION_HOURS) {
    return {
      success: false,
      error: `Booking duration cannot exceed ${MAX_DURATION_HOURS} hours`,
    };
  }

  // Check for overlaps (same room only)
  const hasOverlap = existingBookings
    .filter((existing) => existing.room === request.room)
    .some(
      (existing) =>
        request.start < existing.end && request.end > existing.start,
    );

  if (hasOverlap) {
    return {
      success: false,
      error: "Booking overlaps with existing booking",
    };
  }

  // Create the booking
  const booking: Booking = {
    id: `booking-${Date.now()}`,
    ...request,
    status: "confirmed",
  };

  return { success: true, booking };
}

export function cancelBooking(booking: Booking, now: Date): CancelResult {
  if (booking.start <= now) {
    return {
      success: false,
      error: "Cannot cancel booking that has already started",
    };
  }

  return { success: true };
}
```

---

## Appendix B: Exercise Materials — Shopping Cart

### Requirements Document (Given to Teams)

```markdown
# Shopping Cart — TDD Exercise

## Your Task

Build a shopping cart using Test-Driven Development. For each requirement:

1. Write a failing test (RED)
2. Write minimum code to pass (GREEN)
3. Refactor if needed
4. Move to the next requirement

## Requirements

### Part 1: Basic Cart (Exercise 1)

1. **Create an empty cart**
   - A new cart should have no items

2. **Add items to cart**
   - Each item has: id, name, price, quantity
   - Adding an item increases the cart's item count

3. **Calculate subtotal**
   - Subtotal = sum of (price × quantity) for all items

4. **Handle duplicate items**
   - Adding an item with the same id should increase quantity, not add a duplicate

### Part 2: Discounts (Exercise 2)

5. **Apply discount codes**
   - "SAVE10" = 10% off subtotal
   - "SAVE20" = 20% off subtotal

6. **Reject invalid discount codes**
   - Unknown codes should return an error

7. **Calculate total with tax**
   - Tax rate is 20%
   - Discount is applied before tax
   - Formula: (subtotal - discount) × 1.2

### Edge Cases (if time permits)

8. **Reject invalid quantities**
   - Quantity must be positive (> 0)

9. **Total cannot be negative**
   - Even with large discounts, total should be at least 0
```

### Starter Files (Given to Teams)

**types.ts** (provided):

```typescript
export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
  discountCode?: string;
  taxRate: number;
};

export type CartTotal = {
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
};

export type DiscountResult =
  | { success: true; cart: Cart }
  | { success: false; error: string };
```

**shopping-cart.ts** (empty — teams build this):

```typescript
// Teams implement this file using TDD
```

**shopping-cart.test.ts** (empty — teams write tests first):

```typescript
// Teams write tests here BEFORE implementation
```

### Example Solution (Facilitator Reference Only)

This is what a completed implementation might look like. **Do not share with teams** — they should arrive at their own design through TDD.

**Example tests** (one possible approach):

```typescript
import {
  createCart,
  addItem,
  calculateSubtotal,
  applyDiscount,
  calculateTotal,
} from "./shopping-cart";

describe("Shopping Cart", () => {
  const createItem = (overrides?: Partial<CartItem>): CartItem => ({
    id: "item-1",
    name: "Test Product",
    price: 100,
    quantity: 1,
    ...overrides,
  });

  describe("basic cart operations", () => {
    it("should create an empty cart", () => {
      const cart = createCart();
      expect(cart.items).toHaveLength(0);
    });

    it("should add an item to the cart", () => {
      const cart = createCart();
      const item = createItem();

      const result = addItem(cart, item);

      expect(result.items).toHaveLength(1);
      expect(result.items[0].name).toBe("Test Product");
    });

    it("should calculate subtotal for items", () => {
      let cart = createCart();
      cart = addItem(cart, createItem({ price: 50, quantity: 2 }));

      expect(calculateSubtotal(cart)).toBe(100);
    });

    it("should increase quantity when adding duplicate item", () => {
      let cart = createCart();
      cart = addItem(cart, createItem({ id: "item-1", quantity: 1 }));
      cart = addItem(cart, createItem({ id: "item-1", quantity: 2 }));

      expect(cart.items).toHaveLength(1);
      expect(cart.items[0].quantity).toBe(3);
    });
  });

  describe("discount codes", () => {
    it("should apply SAVE10 for 10% discount", () => {
      let cart = createCart();
      cart = addItem(cart, createItem({ price: 100, quantity: 1 }));

      const result = applyDiscount(cart, "SAVE10");

      expect(result.success).toBe(true);
    });

    it("should reject invalid discount code", () => {
      let cart = createCart();
      cart = addItem(cart, createItem());

      const result = applyDiscount(cart, "INVALID");

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toContain("Invalid");
      }
    });
  });

  describe("total calculation", () => {
    it("should calculate total with tax", () => {
      let cart = createCart();
      cart = addItem(cart, createItem({ price: 100, quantity: 1 }));

      const total = calculateTotal(cart);

      expect(total.subtotal).toBe(100);
      expect(total.tax).toBe(20);
      expect(total.total).toBe(120);
    });

    it("should apply discount before tax", () => {
      let cart = createCart();
      cart = addItem(cart, createItem({ price: 100, quantity: 1 }));
      const discountResult = applyDiscount(cart, "SAVE10");

      if (discountResult.success) {
        const total = calculateTotal(discountResult.cart);

        // 100 - 10% = 90, then + 20% tax = 108
        expect(total.subtotal).toBe(100);
        expect(total.discount).toBe(10);
        expect(total.tax).toBe(18);
        expect(total.total).toBe(108);
      }
    });
  });
});
```

**Note**: Teams' solutions will vary — that's expected and good. The tests they write will shape different (but equally valid) APIs.

---

## Appendix C: C# Translation Patterns

### Factory Pattern → Builder Pattern

**TypeScript**:

```typescript
const createBooking = (overrides?: Partial<Booking>): Booking => ({
  id: "booking-123",
  room: "Room A",
  start: new Date("2025-01-15T10:00:00"),
  ...overrides,
});
```

**C#**:

```csharp
public class BookingBuilder
{
    private string _id = "booking-123";
    private string _room = "Room A";
    private DateTime _start = DateTime.Parse("2025-01-15T10:00:00");
    private DateTime _end = DateTime.Parse("2025-01-15T11:00:00");

    public BookingBuilder WithId(string id) { _id = id; return this; }
    public BookingBuilder WithRoom(string room) { _room = room; return this; }
    public BookingBuilder StartingAt(DateTime start) { _start = start; return this; }
    public BookingBuilder EndingAt(DateTime end) { _end = end; return this; }

    public Booking Build() => new Booking(_id, _room, _start, _end);
}

// Usage
var booking = new BookingBuilder()
    .WithRoom("Room B")
    .StartingAt(DateTime.Parse("2025-01-15T14:00:00"))
    .Build();
```

### Test Structure

**TypeScript (Jest)**:

```typescript
describe("Booking System", () => {
  describe("creating a booking", () => {
    it("should create a booking with valid times", () => {
      // ...
    });
  });
});
```

**C# (xUnit)**:

```csharp
public class BookingSystemTests
{
    public class CreatingABooking
    {
        [Fact]
        public void Should_Create_Booking_With_Valid_Times()
        {
            // ...
        }
    }
}
```

### Assertions

**TypeScript (Jest)**:

```typescript
expect(result.success).toBe(true);
expect(result.error).toContain("overlaps");
```

**C# (FluentAssertions)**:

```csharp
result.Success.Should().BeTrue();
result.Error.Should().Contain("overlaps");
```

### HTTP Mocking

**TypeScript (MSW)**:

```typescript
server.use(
  http.get("/api/rooms", () => {
    return HttpResponse.json([{ id: "room-1", name: "Room A" }]);
  }),
);
```

**C# (WireMock.Net)**:

```csharp
_wireMockServer
    .Given(Request.Create().WithPath("/api/rooms").UsingGet())
    .RespondWith(Response.Create()
        .WithStatusCode(200)
        .WithBodyAsJson(new[] { new { Id = "room-1", Name = "Room A" } }));
```

---

## Appendix D: Concepts by Example Matrix

This matrix shows which concepts are demonstrated by each example:

| Concept                              | Ex.1 Booking | Ex.2 Price Calc |  Ex.3 Cart  | Ex.4 Counter | Ex.5 Product Search | Ex.6 MSW/WireMock | Ex.7 Repository |
| ------------------------------------ | :----------: | :-------------: | :---------: | :----------: | :-----------------: | :---------------: | :-------------: |
| Tests catch bugs with clear messages | **PRIMARY**  |        ✓        |      ✓      |      ✓       |          ✓          |         ✓         |        ✓        |
| Tests describe business behavior     | **PRIMARY**  |        ✓        |      ✓      |              |                     |                   |                 |
| Bad tests provide false confidence   | **PRIMARY**  |                 |             |              |                     |                   |                 |
| Implementation independence          |      ✓       |   **PRIMARY**   |             | **PRIMARY**  |     **PRIMARY**     |                   |                 |
| State mechanism independence         |              |                 |             | **PRIMARY**  |                     |                   |                 |
| Data fetching lib independence       |              |                 |             |              |     **PRIMARY**     |                   |                 |
| Mock at HTTP boundary                |              |                 |             |              |          ✓          |    **PRIMARY**    |                 |
| Mock at interface boundary           |              |                 |             |              |                     |                   |   **PRIMARY**   |
| Factory/Builder pattern              |      ✓       |        ✓        |      ✓      |              |          ✓          |         ✓         |        ✓        |
| Controlling time as dependency       |      ✓       |                 |             |              |                     |                   |                 |
| RED-GREEN-REFACTOR workflow          |              |                 | **PRIMARY** |              |                     |                   |                 |
| Accessible queries (frontend)        |              |                 |             |      ✓       |          ✓          |                   |                 |
| In-memory fakes over mocks           |              |                 |             |              |                     |                   |   **PRIMARY**   |

**Legend**:

- **PRIMARY** = Main example for teaching this concept
- ✓ = Also demonstrates this concept
- Empty = Not covered in this example

### Quick Reference: Which Example Teaches What?

**"Why should I care about TDD?"** → Example 1: Booking System (demo)

**"How do tests survive refactoring?"** → Example 2: Price Calculator, Example 4: Counter

**"How do I practice TDD?"** → Example 3: Shopping Cart (hands-on)

**"How do I test React components without testing implementation?"** → Example 4: Counter

**"How do I mock external APIs?"** → Example 5: Product Search, Example 6: MSW/WireMock

**"How do I test backend services?"** → Example 7: Repository Pattern

---

## Questions for Review

### Preparation

1. **Repository**: Should the new repo be public (for attendees to reference later) or internal?

2. **C# Team Involvement**: Who from C# should be involved in preparation? Do we need dedicated time allocated?

3. **Existing Code**: Should we copy examples from this repo or start fresh with cleaner implementations?

### Content

4. **Demo Domain**: Is Meeting Room Booking suitable, or would another domain resonate better with your organization?

5. **Exercise Domain**: Shopping Cart for hands-on — appropriately different from demo while still being universally understood?

6. **Frontend Depth**: The current plan has frontend patterns as a separate section. Should frontend teams have their own extended exercises?

7. **Anti-patterns Gallery**: Should we add an explicit "Bad Tests Gallery" showing common anti-patterns as a standalone section?

### Logistics

8. **Time Allocation**: Does the 90 minutes for hands-on practice feel right? Could be adjusted if needed.

9. **Team Size**: What's the expected attendance? This affects how we structure the exercises.

10. **Follow-up**: Should there be follow-up sessions or office hours after the workshop?
