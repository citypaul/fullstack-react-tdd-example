# Counter Component Requirements

## Overview

The Counter component is an interactive element that allows users to increment, decrement, and reset a counter value. The main intent is to provide users with a simple, user-friendly interface for managing and controlling a numerical value.

## Requirements

1. **Initial Counter Value:** The Counter component should start with an initial value of zero (0). This ensures that the counter is at a baseline state upon initialization.

2. **Increment Functionality:** The Counter component should include an interactive button labeled "Increment". Upon clicking this button, the current counter value should increase by one (1).

3. **Decrement Functionality:** The Counter component should include an interactive button labeled "Decrement". Upon clicking this button, the current counter value should decrease by one (1), given that the current counter value is above zero (0).

4. **Minimum Counter Value:** The Counter component should prevent the counter value from falling below zero (0). If a user attempts to decrement the counter value when it's already at zero (0), the counter value should remain unchanged.

5. **Reset Functionality:** The Counter component should include an interactive button labeled "Reset". Upon clicking this button, the counter value should reset back to the initial state of zero (0), irrespective of its current value.

## Acceptance Criteria

- Upon the Counter component's initial render, the counter value should be zero (0).
- When a user interacts with the "Increment" button, the counter value should increase by one (1).
- When a user interacts with the "Decrement" button, the counter value should decrease by one (1) provided the current counter value is above zero (0).
- If a user attempts to decrement the counter value when it's already at zero (0), the counter value should remain at zero (0).
- When a user interacts with the "Reset" button, the counter value should reset to zero (0), regardless of its current value.
