# ADR-002: Use Layered Architecture (Controller-Service-Repository)

## Status
Accepted

## Date
2026-05-12

## Context
While implementing the task tracker API, a decision was needed about how to organize code.
The simplest option was to place all logic directly inside Express route handlers.

However, the assignment requires maintainable structure and testability.

## Options Considered

### Option 1: All logic inside routes
- Faster to write initially
- Harder to test
- Hard to maintain

### Option 2: Layered architecture (Chosen)
- routes → controllers → services → repository
- Business logic isolated in services
- Easy to unit test

## Decision
We decided to use a layered architecture:
- Controllers handle HTTP concerns
- Services handle business logic and validation
- Repository handles storage

## Rationale
- Improves readability and separation of concerns
- Enables unit testing without Express
- Matches best practices from lectures

## Consequences
### Positive
- Easier testing and refactoring
- Cleaner structure

### Negative
- More boilerplate code
- Requires discipline to maintain boundaries

## AI Interaction Notes
AI suggested using service and repository layers.  
Human review confirmed this would simplify testing and reduce coupling.
