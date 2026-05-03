# Part A — Architecture

## Architecture Diagram

```mermaid
flowchart TD
    Client[Client / Frontend] -->|HTTP JSON| Routes[API Routes]
    Routes --> Controllers[Controllers]
    Controllers --> Services[Task Service Layer]
    Services --> Repo[Repository Layer]
    Repo --> Storage[(In-memory / JSON File Storage)]

    Services --> Validator[Validation Module]
    Controllers --> ErrorHandler[Error Handling Middleware]
Layer Responsibilities
Routes

Maps URL endpoints to controllers.

Controllers

Handles HTTP request/response. No business logic.

Services

Contains business logic such as validation and task rules.

Repository

Stores and retrieves tasks (in-memory initially).

Validation

Ensures correct input data.

Error Handling

Centralizes error formatting and HTTP status codes.

Data Model

Task fields:

id (string)
title (string)
status (todo/in_progress/done)
priority (low/medium/high)
dueDate (optional)
createdAt
updatedAt
Planned Endpoints
POST /tasks
GET /tasks
GET /tasks/:id
PUT /tasks/:id
DELETE /tasks/:id
GET /tasks?search=keyword
GET /tasks?status=todo&priority=high

⚠️ Анхаар: Mermaid code block нь **```mermaid** гэж эхэлж **```** гэж дуусна.

---

## 📌 4.4 `partA/README.md`

Paste:

```md
# Part A — Planning Draft

## Summary
This is the planning part of the project for "AI-Assisted Software Construction".

## Contents
- PROJECT.md: project scope and requirements
- STACK-COMPARISON.md: compares 3 stacks and selects one
- ARCHITECTURE.md: architecture diagram and design
- adr/: architecture decision records
- ai-sessions/: AI planning session logs

## Next Step
Implement Part B (features, tests, OpenAPI spec).
