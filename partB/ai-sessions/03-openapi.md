# AI Session 03 — OpenAPI Documentation

## Goal
Create OpenAPI 3.0 YAML spec for the REST API.

## AI Suggestions
- Define Task schema and request schemas
- Document /api/tasks and /api/tasks/{id}
- Include query parameters for filtering and search

## Problems Encountered
- Needed to ensure endpoint paths match actual Express routes

## Fixes Applied
- Confirmed base route /api/tasks
- Added CreateTaskRequest and UpdateTaskRequest schemas

## Result
- openapi.yaml created
- Covers CRUD endpoints and query filtering
