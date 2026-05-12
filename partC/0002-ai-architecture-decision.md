# ADR-0002: Service Layer Architecture Decision

## Context

During implementation of the Task API, a decision was needed on how to structure business logic:
- Option A: Put logic directly in Express routes
- Option B: Use service layer separation

---

## Decision

We chose **Service Layer Architecture**:
- Controllers handle HTTP requests
- Services handle business logic
- Models define data structures

---

## Reasoning

- Improves code maintainability
- Easier to test business logic independently
- Better separation of concerns
- Aligns with scalable backend design patterns

---

## Consequences

### Positive:
- Cleaner project structure
- Easier unit testing
- Reusable business logic

### Negative:
- Slightly more initial setup complexity
- More files to manage

---

## Status

Accepted
