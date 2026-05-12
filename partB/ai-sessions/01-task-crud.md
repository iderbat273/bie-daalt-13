# AI Session 01 — Task CRUD Implementation

## Goal
Implement basic task CRUD endpoints with layered architecture.

## AI Suggestions
- Use Express routes + controllers + service + repository
- Use UUID for task id
- Add validation module

## Problems Encountered
- Curl commands failed due to incorrect bash syntax
- Request body was undefined when headers were not passed correctly

## Fixes Applied
- Used correct Git Bash curl syntax with `\`
- Added express.json() middleware
- Implemented validators for title, priority, status

## Result
- POST /api/tasks works
- GET /api/tasks works with search/filter
- PUT and DELETE endpoints implemented successfully
