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

### Repository Structure

```
tdd-workshop/
├── README.md                           # Workshop overview and setup instructions
├── docs/
│   └── workshop-guide.md               # Facilitator guide for the day
│
├── 01-core-concepts/                   # Language-agnostic examples (demo + exercises)
│   ├── typescript/
│   │   ├── booking-system/             # Opening demo
│   │   │   ├── booking-system.test.ts
│   │   │   ├── booking-system.ts
│   │   │   ├── booking-system-bad-tests.test.ts  # Contrast: implementation-coupled tests
│   │   │   └── types.ts
│   │   ├── price-calculator/           # Implementation independence example
│   │   │   ├── price-calculator.test.ts
│   │   │   ├── price-calculator-imperative.ts
│   │   │   └── price-calculator-functional.ts
│   │   └── shopping-cart/              # Hands-on exercise
│   │       ├── shopping-cart.test.ts   # Tests provided (RED)
│   │       ├── shopping-cart.ts        # Empty - teams implement
│   │       └── types.ts
│   │
│   └── csharp/
│       ├── BookingSystem/              # Same concepts, idiomatic C#
│       │   ├── BookingSystemTests.cs
│       │   ├── BookingSystem.cs
│       │   ├── BookingSystemBadTests.cs
│       │   └── Types.cs
│       ├── PriceCalculator/
│       │   ├── PriceCalculatorTests.cs
│       │   ├── PriceCalculatorImperative.cs
│       │   └── PriceCalculatorFunctional.cs
│       └── ShoppingCart/
│           ├── ShoppingCartTests.cs    # Tests provided (RED)
│           ├── ShoppingCart.cs         # Empty - teams implement
│           └── Types.cs
│
├── 02-frontend-patterns/               # Frontend-specific (TypeScript only)
│   ├── counter-example/                # useState vs useReducer - same tests
│   │   ├── counter.test.tsx
│   │   ├── counter-use-state.tsx
│   │   └── counter-use-reducer.tsx
│   ├── product-search/                 # React Query vs Redux - same tests
│   │   ├── product-search.test.tsx
│   │   ├── product-search-react-query.tsx
│   │   └── product-search-redux.tsx
│   └── msw-example/                    # Mocking at HTTP boundary
│       ├── api-integration.test.tsx
│       ├── handlers.ts
│       └── api-client.ts
│
├── 03-backend-patterns/                # Backend-specific (C# focused, TS equivalent)
│   ├── typescript/
│   │   └── repository-pattern/         # Interface-based testing
│   │       ├── user-service.test.ts
│   │       ├── user-service.ts
│   │       └── user-repository.ts
│   └── csharp/
│       └── RepositoryPattern/
│           ├── UserServiceTests.cs
│           ├── UserService.cs
│           └── IUserRepository.cs
│
└── slides/                             # Presentation materials
    └── tdd-workshop.md                 # Slide content (can use reveal.js, etc.)
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

### Key Principles for Examples

Each example should demonstrate:

1. **Tests describe behavior, not implementation**
   - Test names read like specifications
   - Failure messages explain what business rule was violated

2. **Tests survive refactoring**
   - Show two implementations passing same tests
   - Prove that changing HOW doesn't break tests

3. **Factory/Builder pattern for test data**
   - No shared mutable state
   - Complete objects with sensible defaults
   - Easy to customize via overrides

4. **Mocking at boundaries only**
   - Time as an injected dependency
   - HTTP mocking (MSW for TS, WireMock for C#)
   - No mocking of internal methods

---

## Workshop Day Structure

The following sections describe what happens on the day itself. The workshop follows a deliberate arc: from inspiration to understanding to practice.

```
┌─────────────────────────────────────────────────────────────────────────┐
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

| Phase       | Content                | Duration | Cumulative |
| ----------- | ---------------------- | -------- | ---------- |
| **Phase 1** | Inspiration: Live Demo | 30 min   | 0:30       |
| **Phase 2** | Principles             | 40 min   | 1:10       |
| _Break_     |                        | 10 min   | 1:20       |
| **Phase 3** | Patterns & Examples    | 45 min   | 2:05       |
| _Break_     |                        | 10 min   | 2:15       |
| **Phase 4** | Hands-On Practice      | 90 min   | 3:45       |
| **Phase 5** | Application & Wrap-Up  | 25 min   | 4:10       |

**Total**: ~4 hours 10 minutes

---

## Pedagogical Rationale

### Why This Structure?

Most TDD training fails because it follows a pattern that doesn't create buy-in:

```
Traditional (Less Effective)          Our Approach (More Effective)
─────────────────────────────         ────────────────────────────
1. Theory first                       1. Demo first (visceral impact)
2. Explain RED-GREEN-REFACTOR         2. Show tests catching real bugs
3. Abstract principles                3. Contrast with bad tests
4. Practice at the end                4. THEN explain why it worked
5. Hope they remember                 5. THEN show patterns
                                      6. Practice throughout
                                      7. They've experienced it firsthand
```

**The key insight**: Developers don't need to be convinced that testing is good. They've heard that. What they need is to SEE the difference between tests that catch bugs and describe behavior versus tests that provide false confidence.

### Why Start With "Breaking Code"?

Starting with a demo where we deliberately break code and watch tests fail achieves several things:

1. **Immediate engagement** - It's a live performance, not a lecture
2. **Visceral understanding** - They SEE the value, not just hear about it
3. **The contrast is powerful** - Same bugs passing through bad tests is memorable
4. **Sets up the principles** - "Why did those tests work?" flows naturally

---

## Phase 1: Inspiration — "What Good Looks Like"

**Duration**: 30 minutes

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

**Implementation B**: Functional, composable validators

```typescript
const createBooking = pipe(
  validateTimeOrder,
  validateNotInPast,
  validateNoOverlap,
  validateMaxDuration,
  persistBooking,
);
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

### 2.5 Principle: Mock at Boundaries, Not Internals (7 minutes)

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

**Imperative**:

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

**Functional**:

```typescript
const calculateTotal = (params: PriceParams): number =>
  [
    (p: PriceParams) => p.unitPrice * p.quantity,
    (total: number, p: PriceParams) =>
      p.discountPercent ? total * (1 - p.discountPercent / 100) : total,
    (total: number, p: PriceParams) =>
      p.fixedDiscount ? total - p.fixedDiscount : total,
    (total: number) => Math.max(0, total),
  ].reduce((acc, fn) => fn(acc, params), 0);
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

### 4.1 Setup (10 minutes)

**Team Formation**:

- Teams of 2-3 developers
- Grouped by primary language (TypeScript or C#)
- Each team gets access to starter repo

**Starter Repo Contents**:

- Test file with all tests written (RED state — all failing)
- Empty implementation files
- README with business requirements
- Pre-configured test runner

### 4.2 Exercise 1: Make It Green (35 minutes)

**Domain**: Shopping Cart

**Business Rules (expressed as failing tests)**:

1. Can add items to cart
2. Can calculate subtotal (sum of item prices × quantities)
3. Can apply discount codes (SAVE10 = 10%, SAVE20 = 20%)
4. Invalid discount codes are rejected
5. Can calculate total with tax (configurable rate)
6. Cannot have negative quantities
7. Discount cannot reduce total below zero

**Task**: Implement the code to make all tests pass.

**Debrief Questions**:

- Did anyone feel tempted to change the tests?
- Did the tests guide your implementation?
- Were there moments of "oh, I see what this rule means now"?

### 4.3 Exercise 2: Add a Requirement (25 minutes)

**New Requirement**: "Discount codes should expire after a certain date"

Teams must:

1. **Write a failing test first** (RED)
2. Run tests — observe the new test failing
3. **Implement minimum code to pass** (GREEN)
4. Run tests — all pass

**Debrief Questions**:

- Who wrote the test first vs code first?
- How did writing the test first clarify the requirement?
- What edge cases did you discover while writing the test?

### 4.4 Exercise 3: Refactor Without Breaking (20 minutes)

**Challenge**: Refactor your implementation to use a different approach.

Suggestions:

- Extract a discount strategy pattern
- Change from imperative to functional style
- Reorganize the code structure

**Rules**:

- Tests must NOT change
- Tests must remain green throughout
- Implementation can change completely

**Debrief Questions**:

- Did your tests break during refactoring?
- If they broke, what does that tell you?
- How confident did you feel making changes?

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

## Appendix B: Exercise Starter — Shopping Cart

### Test File (Given to Teams)

```typescript
// shopping-cart.test.ts
import {
  createCart,
  addItem,
  applyDiscount,
  calculateTotal,
} from "./shopping-cart";
import type { Cart, CartItem, DiscountCode } from "./types";

describe("Shopping Cart", () => {
  const createItem = (overrides?: Partial<CartItem>): CartItem => ({
    id: "item-1",
    name: "Test Product",
    price: 100,
    quantity: 1,
    ...overrides,
  });

  describe("adding items", () => {
    it("should add item to empty cart", () => {
      const cart = createCart();
      const item = createItem();

      const result = addItem(cart, item);

      expect(result.items).toHaveLength(1);
      expect(result.items[0].name).toBe("Test Product");
    });

    it("should increase quantity when adding existing item", () => {
      const cart = createCart();
      const item = createItem({ id: "item-1", quantity: 1 });

      let result = addItem(cart, item);
      result = addItem(result, createItem({ id: "item-1", quantity: 2 }));

      expect(result.items).toHaveLength(1);
      expect(result.items[0].quantity).toBe(3);
    });

    it("should reject negative quantity", () => {
      const cart = createCart();
      const item = createItem({ quantity: -1 });

      expect(() => addItem(cart, item)).toThrow("quantity");
    });
  });

  describe("calculating subtotal", () => {
    it("should calculate subtotal for single item", () => {
      const cart = createCart();
      const item = createItem({ price: 50, quantity: 2 });
      const cartWithItem = addItem(cart, item);

      const subtotal = calculateTotal(cartWithItem).subtotal;

      expect(subtotal).toBe(100);
    });

    it("should calculate subtotal for multiple items", () => {
      let cart = createCart();
      cart = addItem(cart, createItem({ id: "1", price: 100, quantity: 1 }));
      cart = addItem(cart, createItem({ id: "2", price: 50, quantity: 2 }));

      const subtotal = calculateTotal(cart).subtotal;

      expect(subtotal).toBe(200);
    });
  });

  describe("discount codes", () => {
    it("should apply SAVE10 for 10% discount", () => {
      let cart = createCart();
      cart = addItem(cart, createItem({ price: 100, quantity: 1 }));

      const result = applyDiscount(cart, "SAVE10");

      expect(result.success).toBe(true);
      if (result.success) {
        expect(calculateTotal(result.cart).discount).toBe(10);
      }
    });

    it("should apply SAVE20 for 20% discount", () => {
      let cart = createCart();
      cart = addItem(cart, createItem({ price: 100, quantity: 1 }));

      const result = applyDiscount(cart, "SAVE20");

      expect(result.success).toBe(true);
      if (result.success) {
        expect(calculateTotal(result.cart).discount).toBe(20);
      }
    });

    it("should reject invalid discount code", () => {
      let cart = createCart();
      cart = addItem(cart, createItem());

      const result = applyDiscount(cart, "INVALID");

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toContain("Invalid discount code");
      }
    });

    it("should not allow discount to reduce total below zero", () => {
      let cart = createCart();
      cart = addItem(cart, createItem({ price: 5, quantity: 1 }));

      const result = applyDiscount(cart, "SAVE20");

      expect(result.success).toBe(true);
      if (result.success) {
        const total = calculateTotal(result.cart);
        expect(total.total).toBeGreaterThanOrEqual(0);
      }
    });
  });

  describe("calculating total with tax", () => {
    it("should calculate total with default tax rate", () => {
      let cart = createCart();
      cart = addItem(cart, createItem({ price: 100, quantity: 1 }));

      const result = calculateTotal(cart);

      // Default tax rate is 20%
      expect(result.tax).toBe(20);
      expect(result.total).toBe(120);
    });

    it("should calculate total with custom tax rate", () => {
      let cart = createCart({ taxRate: 0.1 }); // 10%
      cart = addItem(cart, createItem({ price: 100, quantity: 1 }));

      const result = calculateTotal(cart);

      expect(result.tax).toBe(10);
      expect(result.total).toBe(110);
    });

    it("should apply discount before tax", () => {
      let cart = createCart({ taxRate: 0.2 }); // 20%
      cart = addItem(cart, createItem({ price: 100, quantity: 1 }));
      const discountResult = applyDiscount(cart, "SAVE10");

      if (discountResult.success) {
        const result = calculateTotal(discountResult.cart);

        // 100 - 10% = 90, then + 20% tax = 108
        expect(result.subtotal).toBe(100);
        expect(result.discount).toBe(10);
        expect(result.tax).toBe(18);
        expect(result.total).toBe(108);
      }
    });
  });
});
```

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

## Appendix D: Concepts by Example

This table maps each core concept to the examples that demonstrate it:

| Concept                           | Booking System | Price Calculator | Shopping Cart | Counter  | Product Search |
| --------------------------------- | -------------- | ---------------- | ------------- | -------- | -------------- |
| Test behavior, not implementation | ✓ (demo)       | ✓                | ✓             | ✓        | ✓              |
| Tests as specifications           | ✓ (demo)       |                  | ✓             |          |                |
| Implementation independence       | ✓ (demo)       | ✓ (main)         |               | ✓ (main) | ✓ (main)       |
| Factory/Builder pattern           | ✓              | ✓                | ✓             |          | ✓              |
| Mock at boundaries (time)         | ✓              |                  |               |          |                |
| Mock at boundaries (HTTP)         |                |                  |               |          | ✓ (main)       |
| Bad tests contrast                | ✓ (main)       |                  |               |          |                |
| Coverage through behavior         | ✓              | ✓                | ✓             |          |                |

**Legend**:

- ✓ = demonstrates this concept
- (main) = primary example for this concept
- (demo) = used in opening demonstration

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
