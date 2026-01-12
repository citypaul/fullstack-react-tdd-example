# TDD Workshop: Behavioral Testing Across Languages

## Planning Document v3.1

**Duration**: Half-day (4 hours including breaks)
**Format**: Presentation, Demo, Hands-On Labs (majority of time)
**Audience**: Senior developers across TypeScript, Java, and C# teams
**Preparation Time**: 1 month

---

## What BDD Actually Is

Before we begin, let's be clear about BDD (Behavior-Driven Development):

**BDD is NOT:**

- Gherkin syntax (Given/When/Then)
- Cucumber, SpecFlow, or any specific tool
- A way to write tests in natural language
- Something you adopt by using a DSL

**BDD IS:**

- A collaborative practice for discovering and specifying behavior
- Conversations between developers, testers, and business stakeholders
- Using concrete examples to clarify requirements
- Those examples becoming executable specifications
- Writing specifications in your test framework (Jest, JUnit, xUnit), not a separate DSL

**The key insight**: Many teams adopt Given/When/Then syntax without the practice — they write Cucumber scenarios after the code exists, which misses the entire point. The value is in the conversations and the examples, not the syntax.

**In this workshop**: The requirement gathering exercise IS the BDD practice. The tests we write ARE the executable specifications. Test names describe business behavior in plain language.

---

## Workshop Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  FOUNDATIONS (45 min)                                                   │
│  ════════════════════                                                   │
│                                                                         │
│  OPENING PRESENTATION (15 min)                                          │
│  ───────────────────────────────                                        │
│  Paul's TDD journey (brief)                                             │
│  What BDD actually is (not Given/When/Then)                             │
│  What we'll build today                                                 │
│                                                                         │
│                              ↓                                          │
│                                                                         │
│  DEMO (20 min) — Booking system example                                 │
│  ────────────────────────────────────────────                           │
│  1. Good tests catch broken behavior                                    │
│  2. Good tests allow refactoring                                        │
│  3. Bad tests do the opposite                                           │
│                                                                         │
│                              ↓                                          │
│                                                                         │
│  PRINCIPLES (10 min)                                                    │
│  ────────────────────                                                   │
│  Agree on shared principles (quick discussion)                          │
│                                                                         │
│  ═══════════════════════════════════════════════════════════════════    │
│  HANDS-ON LABS (~2.5 hours including breaks)                            │
│  ═══════════════════════════════════════════                            │
│                                                                         │
│  LAB 0: Requirements Gathering (25 min)                                 │
│  ─────────────────────────────────────────────────                      │
│  Teams discover requirements through conversation                       │
│  TAG: lab-0-requirements                                                │
│                                                                         │
│                              ↓                                          │
│                                                                         │
│  LAB 1: Basic Validation (25 min)                                       │
│  ──────────────────────────────────                                     │
│  Length, format, Luhn checksum                                          │
│  TAG: lab-1-basic-validation                                            │
│                                                                         │
│                              ↓                                          │
│                                                                         │
│  LAB 2: Provider Detection (25 min)                                     │
│  ──────────────────────────────────                                     │
│  Identify Visa, Mastercard, Amex from card number                       │
│  TAG: lab-2-provider-detection                                          │
│                                                                         │
│                              ↓                                          │
│                                                                         │
│  LAB 3: Provider-Specific Rules (25 min)                                │
│  ─────────────────────────────────────────                              │
│  Different lengths, CVV rules per provider                              │
│  TAG: lab-3-provider-rules                                              │
│                                                                         │
│                              ↓                                          │
│                                                                         │
│  LAB 4: Integration (25 min) — CHOOSE ONE                               │
│  ──────────────────────────────────────────────────────                 │
│  Option A: Frontend (form validation, user messaging)                   │
│  Option B: Backend (API endpoint protection)                            │
│  TAG: lab-4-frontend OR lab-4-backend                                   │
│                                                                         │
│  ═══════════════════════════════════════════════════════════════════    │
│  CLOSING (20 min)                                                       │
│  ════════════════                                                       │
│                                                                         │
│  AI DEMO (10 min)                                                       │
│  ────────────────                                                       │
│  Regenerate implementation from specifications                          │
│                                                                         │
│                              ↓                                          │
│                                                                         │
│  WRAP-UP (10 min)                                                       │
│  ────────────────                                                       │
│  Brownfield projects, resources, Q&A                                    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Time Allocation

| Section        | Content                           | Duration | Cumulative |
| -------------- | --------------------------------- | -------- | ---------- |
| **Opening**    | Presentation: Journey + BDD intro | 15 min   | 0:15       |
| **Demo**       | Three-part demonstration          | 20 min   | 0:35       |
| **Principles** | Agree on shared principles        | 10 min   | 0:45       |
| _Break_        |                                   | 10 min   | 0:55       |
| **Lab 0**      | Requirements gathering            | 25 min   | 1:20       |
| **Lab 1**      | Basic validation                  | 25 min   | 1:45       |
| **Lab 2**      | Provider detection                | 25 min   | 2:10       |
| _Break_        |                                   | 10 min   | 2:20       |
| **Lab 3**      | Provider-specific rules           | 25 min   | 2:45       |
| **Lab 4**      | Integration (frontend OR backend) | 25 min   | 3:10       |
| _Break_        |                                   | 10 min   | 3:20       |
| **AI Demo**    | Regenerate from specs             | 10 min   | 3:30       |
| **Wrap-Up**    | Brownfield, resources, Q&A        | 10 min   | 3:40       |
| _Buffer_       | Overrun / extended Q&A            | 20 min   | 4:00       |

**Total**: 4 hours

**Hands-on time**: ~2 hours 5 min (Labs 0-4) — **majority of workshop**

---

## Core Principles

These are the principles we want everyone to agree on:

| Principle                             | What It Means                                                      |
| ------------------------------------- | ------------------------------------------------------------------ |
| **Test behavior, not implementation** | If you refactor without changing behavior, tests shouldn't break   |
| **Tests are specifications**          | Test names should read like business requirements                  |
| **Test-first (RED-GREEN-REFACTOR)**   | Write a failing test, then minimum code to pass, then refactor     |
| **Test-first beats test-last**        | Writing tests first shapes better APIs and catches ambiguity early |
| **Mock at boundaries**                | Mock HTTP, databases, time — not your own functions                |
| **Isolated test state**               | Each test creates its own data; no shared mutable state            |

---

## Opening Presentation (30 min)

### Purpose

Set context, establish credibility, introduce the concept of tests as specifications.

### Content

**Part 1: My TDD Journey (10 min)**

- How I first encountered TDD
- Initial skepticism vs. what changed my mind
- A specific moment where it clicked

**Part 2: The Problem (5 min)**

- Tests that passed but bugs shipped
- Tests that broke every time we refactored
- "100% coverage" that meant nothing

**Part 3: Tests as Specifications (10 min)**

- The shift from "testing code" to "specifying behavior"
- What BDD actually is (not Cucumber)
- Requirement gathering through concrete examples
- Test names as business documentation

**Part 4: What We'll Do Today (5 min)**

- Demo: see the difference between good and bad tests
- Principles: agree on how we want to work
- Labs: build a card validator from requirements to full-stack
- AI demo: prove that specs are what matter

---

## Demo (30 min)

### Single Application Throughout

We use **one application** for the entire demo to show the contrast clearly. The booking system works well because it has:

- Clear business rules
- Subtle edge cases (back-to-back bookings, time boundaries)
- Universal understanding (everyone knows booking systems)

### Demo Part 1: Good Tests Catch Broken Behavior (10 min)

**Show tests passing first**, then introduce bugs:

**Bug 1: Off-by-one in overlap detection**

```typescript
// Introduce bug: <= instead of <
newBooking.start <= existing.end && newBooking.end >= existing.start;
```

Run tests. **Test fails with clear message:**

```
FAIL: should allow back-to-back bookings

  A booking from 10:00-11:00 should be allowed when an existing
  booking ends at exactly 10:00 (back-to-back bookings are valid)
```

**Bug 2: Wrong time comparison**

```typescript
// Introduce bug: checking end instead of start
if (booking.end < now) { ... }
```

Run tests. **Test fails with clear message:**

```
FAIL: should reject booking in the past

  A booking starting at 9:00 (in the past) but ending at 11:00
  (in the future) should still be rejected
```

**Key point**: The test told us exactly which business rule was violated. We didn't debug — we read.

### Demo Part 2: Good Tests Allow Refactoring (5 min)

With the bugs fixed, refactor the implementation:

- Extract helper functions
- Rename variables
- Reorganize structure

Run tests after each change. **Tests stay green.**

**Key point**: We changed HOW the code works. The tests only care about WHAT it does.

### Demo Part 3: Bad Tests Do The Opposite (15 min)

**This is the most important part.**

Show the same application with implementation-coupled tests:

```typescript
// BAD TESTS — verify implementation, not behavior
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

**Introduce the same bugs.** Run bad tests. **They still pass.**

Let this sink in:

- The system has real bugs
- Users can't book back-to-back meetings
- Bookings in the past are accepted
- But tests are green

Ask the audience:

- "Would you deploy this? Tests pass."
- "What did these tests actually verify?"

**Now show refactoring with bad tests:**

Refactor the implementation (same changes as before — extract functions, rename).

**Bad tests break.** Even though behavior is unchanged.

|                | Behavior Broken   | Behavior Works     |
| -------------- | ----------------- | ------------------ |
| **Good tests** | FAIL (correct)    | PASS (correct)     |
| **Bad tests**  | PASS (bug ships!) | FAIL (wastes time) |

**Key insight**: Bad tests fail when they shouldn't and pass when they shouldn't. They provide negative value.

---

## Principles Discussion (20 min)

After the demo, facilitate a discussion to agree on principles.

**Format**: Not a lecture. Present each principle, invite questions/pushback, get agreement.

### The Principles

1. **Test behavior, not implementation**
   - Litmus test: "If I refactor without changing behavior, do tests break?"
   - Yes → testing implementation (bad)
   - No → testing behavior (good)

2. **Tests are specifications**
   - Test names read like business requirements
   - Test output is documentation that can't go stale
   - Non-developers can read and understand what the system does

3. **Test-first (RED-GREEN-REFACTOR)**
   - Write a failing test first (RED)
   - Write minimum code to pass (GREEN)
   - Improve structure (REFACTOR)
   - Repeat

4. **Test-first beats test-last**
   - Test shapes the API — you're the first user of your code
   - Catches ambiguity in requirements immediately
   - Code is testable by construction
   - Tests don't get skipped under pressure

5. **Mock at boundaries**
   - Mock: HTTP, databases, time, file system
   - Don't mock: your own functions, internal modules
   - The test should exercise real code, with controlled external dependencies

6. **Isolated test state**
   - Each test creates its own data
   - No shared mutable state
   - Tests can run in any order

---

## Hands-On Labs: Card Validator

The bulk of the day is spent building a credit card validator from scratch, progressing from basic validation to full-stack integration.

**Why card validation:**

- Everyone understands credit cards
- Clear, simple starting rules
- Natural progression to complexity
- Good edge cases
- Applicable to both frontend and backend

**Multi-language parity:**

All labs have identical implementations at each tag in:

- **TypeScript** (Node.js + React)
- **Java** (Spring Boot)
- **C#** (.NET)

Engineers choose their language. The tags ensure everyone is at the same checkpoint regardless of language.

---

### Lab 0: Requirements Gathering Simulation (30 min)

**TAG: `lab-0-requirements`**

**Purpose**: This IS the BDD practice. Teams discover requirements through conversation before writing any code.

**Setup**: Facilitator plays the role of "Product Owner"

**Initial requirement** (intentionally vague):

> "We need to validate credit card numbers in our payment form."

**Teams must ask questions to discover:**

- What makes a card number valid?
- What providers do we support?
- What feedback do users need?
- Where does validation happen (frontend, backend, both)?
- What happens with invalid cards?

**Facilitator reveals information only when asked:**

| Question                       | Answer                                                             |
| ------------------------------ | ------------------------------------------------------------------ |
| "What's a valid length?"       | "Depends on the provider. Visa and Mastercard are 16, Amex is 15." |
| "How do we know the provider?" | "First digits: 4 = Visa, 51-55 = Mastercard, 34/37 = Amex"         |
| "Any checksum?"                | "Yes, Luhn algorithm. Google it."                                  |
| "What about CVV?"              | "3 digits, but Amex is 4 digits."                                  |
| "Frontend validation?"         | "Yes, real-time feedback as they type."                            |
| "Backend validation?"          | "Yes, validate before processing payment."                         |
| "Error messages?"              | "User-friendly. Not 'INVALID_LUHN_CHECKSUM'."                      |

**Deliverable**: Teams document their discovered requirements as test names (specifications) — NO implementation yet.

```typescript
// Example output from Lab 0
describe("Card Validator", () => {
  describe("basic validation", () => {
    it("should reject empty card numbers");
    it("should reject card numbers with non-numeric characters");
    it("should reject card numbers that fail Luhn checksum");
  });

  describe("provider detection", () => {
    it("should identify Visa cards (start with 4)");
    it("should identify Mastercard cards (start with 51-55)");
    it("should identify Amex cards (start with 34 or 37)");
  });

  describe("provider-specific validation", () => {
    it("should accept 16-digit Visa cards");
    it("should reject 15-digit Visa cards");
    it("should accept 15-digit Amex cards");
    it("should reject 16-digit Amex cards");
  });

  describe("CVV validation", () => {
    it("should accept 3-digit CVV for Visa");
    it("should reject 4-digit CVV for Visa");
    it("should accept 4-digit CVV for Amex");
    it("should reject 3-digit CVV for Amex");
  });
});
```

**Key learning**: The conversation IS the process. Requirements aren't handed down — they're discovered through examples.

---

### Lab 1: Basic Validation (30 min)

**TAG: `lab-1-basic-validation`**

**Starting point**: Starter project with test framework configured

**Goal**: Implement basic card validation using TDD

**Specifications to implement:**

```typescript
describe("Card Validator - Basic", () => {
  it("should reject empty card numbers", () => {
    expect(validateCard("")).toEqual({
      valid: false,
      error: "Card number is required",
    });
  });

  it("should reject card numbers with non-numeric characters", () => {
    expect(validateCard("4111-1111-1111-1111")).toEqual({
      valid: false,
      error: "Card number must contain only digits",
    });
  });

  it("should reject card numbers that fail Luhn checksum", () => {
    expect(validateCard("4111111111111112")).toEqual({
      valid: false,
      error: "Invalid card number",
    });
  });

  it("should accept valid card numbers", () => {
    expect(validateCard("4111111111111111")).toEqual({
      valid: true,
      error: null,
    });
  });
});
```

**TDD cycle**:

1. RED: Write first test, watch it fail
2. GREEN: Implement minimum code to pass
3. REFACTOR: Clean up if needed
4. Repeat for each test

**Checkpoint**: All basic validation tests pass. Tag and sync.

---

### Lab 2: Provider Detection (30 min)

**TAG: `lab-2-provider-detection`**

**Goal**: Identify card provider from number prefix

**Specifications to implement:**

```typescript
describe("Card Provider Detection", () => {
  it("should identify Visa cards (start with 4)", () => {
    expect(detectProvider("4111111111111111")).toBe("visa");
  });

  it("should identify Mastercard cards (start with 51)", () => {
    expect(detectProvider("5111111111111118")).toBe("mastercard");
  });

  it("should identify Mastercard cards (start with 55)", () => {
    expect(detectProvider("5511111111111117")).toBe("mastercard");
  });

  it("should identify Amex cards (start with 34)", () => {
    expect(detectProvider("341111111111111")).toBe("amex");
  });

  it("should identify Amex cards (start with 37)", () => {
    expect(detectProvider("371111111111114")).toBe("amex");
  });

  it("should return unknown for unrecognized prefixes", () => {
    expect(detectProvider("9111111111111111")).toBe("unknown");
  });
});
```

**Discussion point**: How do you handle cards that match multiple patterns? (They don't in practice, but good to discuss.)

**Checkpoint**: Provider detection works. Tag and sync.

---

### Lab 3: Provider-Specific Rules (30 min)

**TAG: `lab-3-provider-rules`**

**Goal**: Apply different validation rules per provider

**Specifications to implement:**

```typescript
describe("Provider-Specific Validation", () => {
  describe("Visa", () => {
    it("should accept 16-digit Visa cards", () => {
      const result = validateCard("4111111111111111");
      expect(result.valid).toBe(true);
      expect(result.provider).toBe("visa");
    });

    it("should reject 15-digit Visa cards", () => {
      const result = validateCard("411111111111111");
      expect(result.valid).toBe(false);
      expect(result.error).toBe("Visa cards must be 16 digits");
    });
  });

  describe("Amex", () => {
    it("should accept 15-digit Amex cards", () => {
      const result = validateCard("341111111111111");
      expect(result.valid).toBe(true);
      expect(result.provider).toBe("amex");
    });

    it("should reject 16-digit Amex cards", () => {
      const result = validateCard("3411111111111111");
      expect(result.valid).toBe(false);
      expect(result.error).toBe("American Express cards must be 15 digits");
    });
  });

  describe("CVV", () => {
    it("should accept 3-digit CVV for Visa", () => {
      const result = validateCVV("123", "visa");
      expect(result.valid).toBe(true);
    });

    it("should reject 4-digit CVV for Visa", () => {
      const result = validateCVV("1234", "visa");
      expect(result.valid).toBe(false);
      expect(result.error).toBe("CVV must be 3 digits");
    });

    it("should accept 4-digit CVV for Amex", () => {
      const result = validateCVV("1234", "amex");
      expect(result.valid).toBe(true);
    });

    it("should reject 3-digit CVV for Amex", () => {
      const result = validateCVV("123", "amex");
      expect(result.valid).toBe(false);
      expect(result.error).toBe("American Express CVV must be 4 digits");
    });
  });
});
```

**Checkpoint**: Full validation logic complete. Tag and sync.

---

### Lab 4: Frontend Integration (30 min)

**TAG: `lab-4-frontend`**

**Goal**: Create a payment form with real-time validation and user-friendly messaging

**Specifications to implement:**

```typescript
describe("Payment Form", () => {
  it("should show card provider icon when detected", async () => {
    render(<PaymentForm />);

    const cardInput = screen.getByLabelText("Card number");
    await user.type(cardInput, "4111");

    expect(screen.getByTestId("card-icon")).toHaveAttribute(
      "data-provider",
      "visa"
    );
  });

  it("should show validation error after user stops typing", async () => {
    render(<PaymentForm />);

    const cardInput = screen.getByLabelText("Card number");
    await user.type(cardInput, "4111111111111112"); // Invalid Luhn

    // Error shown after debounce
    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent("Invalid card number");
    });
  });

  it("should show provider-specific error messages", async () => {
    render(<PaymentForm />);

    const cardInput = screen.getByLabelText("Card number");
    await user.type(cardInput, "41111111111111"); // 14 digits

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent(
        "Visa cards must be 16 digits"
      );
    });
  });

  it("should adapt CVV field length based on provider", async () => {
    render(<PaymentForm />);

    const cardInput = screen.getByLabelText("Card number");
    await user.type(cardInput, "341111111111111"); // Amex

    const cvvInput = screen.getByLabelText("CVV");
    expect(cvvInput).toHaveAttribute("maxLength", "4");
  });

  it("should show success state when card is valid", async () => {
    render(<PaymentForm />);

    await user.type(screen.getByLabelText("Card number"), "4111111111111111");
    await user.type(screen.getByLabelText("CVV"), "123");

    await waitFor(() => {
      expect(screen.getByTestId("card-input")).toHaveClass("valid");
    });
  });
});
```

**Key patterns:**

- Test user behavior, not component internals
- Use accessible queries (`getByLabelText`, `getByRole`)
- Real-time validation with debouncing
- User-friendly error messages (not technical jargon)

**Checkpoint**: Frontend form complete with real-time validation. Tag and sync.

---

### Lab 5: Backend Integration (30 min)

**TAG: `lab-5-backend`**

**Goal**: Protect API endpoints with validation middleware

**Specifications to implement:**

```typescript
describe("Payment API", () => {
  describe("POST /api/payments", () => {
    it("should reject requests with invalid card numbers", async () => {
      const response = await request(app).post("/api/payments").send({
        cardNumber: "4111111111111112", // Invalid Luhn
        cvv: "123",
        amount: 100,
      });

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        error: "validation_error",
        message: "Invalid card number",
        field: "cardNumber",
      });
    });

    it("should reject requests with mismatched CVV length", async () => {
      const response = await request(app).post("/api/payments").send({
        cardNumber: "341111111111111", // Amex
        cvv: "123", // Should be 4 digits
        amount: 100,
      });

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        error: "validation_error",
        message: "American Express CVV must be 4 digits",
        field: "cvv",
      });
    });

    it("should accept valid payment requests", async () => {
      const response = await request(app).post("/api/payments").send({
        cardNumber: "4111111111111111",
        cvv: "123",
        amount: 100,
      });

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject({
        success: true,
        provider: "visa",
      });
    });
  });
});
```

**Key patterns:**

- Validation middleware (reuse same validation logic)
- Consistent error response format
- Provider detection in response

**Discussion**: Same validation logic, different presentation. Frontend shows user-friendly messages; API returns structured errors for programmatic handling.

**Checkpoint**: Full-stack validation complete. Tag and sync.

---

## Tag Structure

Each tag represents a checkpoint where all language implementations are synchronized.

```
lab-0-requirements     # Discovered requirements (specs only, no implementation)
lab-1-basic-validation # Basic validation working
lab-2-provider-detection # Provider detection working
lab-3-provider-rules   # Provider-specific rules working
lab-4-frontend         # Frontend form complete
lab-5-backend          # Backend API complete
```

**Branch structure per language:**

```
typescript/
├── main               # Starting point (test framework only)
├── lab-0-requirements # Specs written, no implementation
├── lab-1-basic-validation
├── lab-2-provider-detection
├── lab-3-provider-rules
├── lab-4-frontend
└── lab-5-backend

java/
├── main
├── lab-0-requirements
├── lab-1-basic-validation
├── lab-2-provider-detection
├── lab-3-provider-rules
└── lab-5-backend      # (No frontend in Java)

csharp/
├── main
├── lab-0-requirements
├── lab-1-basic-validation
├── lab-2-provider-detection
├── lab-3-provider-rules
└── lab-5-backend      # (No frontend in C#)
```

**Facilitator use**: If a team falls behind, they can checkout the tag and continue from there.

---

## AI Demo (10 min)

### Purpose

Prove that the specifications are what matter. The implementation is secondary.

### Demo

Take the card validator specifications that teams created.

Feed them to an AI (Claude, GPT-4, Copilot) with the prompt:

> "Here are my test specifications. Implement the code to make them pass."

Watch the AI generate an implementation.

Run the tests. **They pass.**

### Key Insight

If an AI can implement from your specifications, your specifications are good. The tests describe WHAT the system should do clearly enough that the implementation becomes mechanical.

This is the ultimate proof that tests are specifications.

---

## Further Material & Wrap-Up (20 min)

### Brownfield Projects

Most real work is on existing codebases without tests. Acknowledge this reality.

**Recommended approach:**

1. When touching existing code, add behavioral tests first
2. Use the "characterization test" technique — write tests that describe current behavior
3. Then refactor with confidence
4. Don't try to retrofit tests to everything at once

**Resource**: "Working Effectively with Legacy Code" by Michael Feathers

### Q&A

Open discussion. Common questions:

- "What about integration tests?"
- "How do you test private methods?" (You don't)
- "What about legacy code with no tests?"
- "How do you get buy-in from the team?"

---

## Repository Structure

```
tdd-workshop/
├── typescript/
│   ├── card-validator/
│   │   ├── src/
│   │   ├── tests/
│   │   └── package.json
│   └── demo-booking-system/        # For opening demo only
│
├── java/
│   ├── card-validator/
│   │   ├── src/
│   │   └── pom.xml
│   └── demo-booking-system/
│
├── csharp/
│   ├── CardValidator/
│   │   ├── src/
│   │   └── CardValidator.csproj
│   └── DemoBookingSystem/
│
├── slides/
│   └── workshop-presentation.pptx
│
└── facilitator/
    ├── requirements-cheatsheet.md  # Answers for Lab 0
    └── timing-guide.md             # Pacing notes
```

---

## Preparation Checklist

### Week 1

- [ ] Create booking system demo (TypeScript)
- [ ] Create good tests and bad tests versions
- [ ] Set up lab starter projects (all languages)

### Week 2

- [ ] Create card validator solution at each tag (TypeScript)
- [ ] Java team creates parallel implementations
- [ ] C# team creates parallel implementations
- [ ] Verify all tags are in sync across languages

### Week 3

- [ ] Draft presentation slides
- [ ] Dry run with small group
- [ ] Refine timing based on feedback
- [ ] Test AI demo with actual specifications

### Week 4

- [ ] Final polish
- [ ] Prepare facilitator materials
- [ ] Confirm logistics

---

## Facilitator Notes

### Pacing

- Watch for teams falling behind
- Tags allow catch-up without embarrassment
- Labs 4-5 can be shortened if time is tight (frontend/backend are optional extensions)

### Requirements Gathering (Lab 0)

- Don't give away answers too easily
- Make teams ask specific questions
- If they don't ask, they don't learn

### Common Issues

- Teams jumping ahead (gently remind: RED-GREEN-REFACTOR)
- Teams overthinking (minimum to pass, then refactor)
- Analysis paralysis on requirements (time-box, move on)

### Language Parity

- Same business logic, idiomatic implementation
- Don't force patterns that don't fit the language
- Focus on the principles, not the syntax
