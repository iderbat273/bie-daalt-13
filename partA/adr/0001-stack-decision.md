# ADR-001: Choose Node.js + Express + TypeScript

## Status
Accepted

## Date
2026-05-03

## Context
We need a lightweight stack to build a REST API task tracker.
The project requires testing, documentation, and AI-assisted workflow evidence.

## Considered Options
1. Node.js + Express + TypeScript
2. Python + FastAPI
3. Java + Spring Boot

## Decision
We choose Node.js + Express + TypeScript.

## Rationale
- Fast to implement CRUD API
- TypeScript reduces runtime bugs
- Jest makes testing easy
- Suitable for small educational project

## Consequences
### Positive
- Quick development
- Easy tooling
- Good ecosystem

### Negative
- Express does not enforce strict architecture automatically
