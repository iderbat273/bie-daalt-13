# AI Usage Report — AI-Assisted Software Construction

## 1. Introduction

This project was developed using an AI-assisted workflow following the Spec → Generate → Review → Integrate pattern. The main goal was not only to build a working application, but also to understand how AI tools (Claude Code / Copilot-like assistants) can be integrated into real software engineering workflows.

The project implemented a Task Management API using Node.js and Express with TypeScript, including CRUD operations, testing, and OpenAPI documentation.

---

## 2. What AI did vs What I did

### AI contributions:
- Suggested project architecture (controller/service separation)
- Generated Express server boilerplate
- Helped design REST endpoints (GET, POST, PUT, DELETE)
- Assisted in writing Jest test cases
- Helped debug TypeScript configuration issues (tsconfig + Jest mismatch)
- Provided OpenAPI 3.0 specification template
- Helped resolve module issues (ESM vs CommonJS conflicts)

### My contributions:
- Selected project scope and requirements
- Adjusted AI-generated architecture to match assignment constraints
- Fixed runtime issues manually (server crash, curl errors)
- Debugged Jest configuration issues step-by-step
- Structured Git workflow and commit history
- Verified API behavior using curl/Postman
- Wrote and refined test logic after AI suggestions

---

## 3. Hallucination examples (AI mistakes)

### Example 1: Jest + ESM mismatch
AI initially suggested using ESM (`module: nodenext`) in TypeScript config. This caused Jest to fail due to CommonJS incompatibility.

**Fix:** I changed `module` to `commonjs` and removed incompatible settings.

---

### Example 2: Missing types in Jest
AI did not initially include `@types/jest`, which caused errors like:
- "Cannot find name 'describe'"
- "Cannot find name 'expect'"

**Fix:** Installed `@types/jest` and updated tsconfig `"types": ["jest", "node"]`.

---

## 4. Security considerations

AI-generated code initially did not include strict validation for API inputs. For example:
- Missing validation for empty task title
- No restriction on invalid priority values

**Fix applied:**
- Added manual validation in service layer
- Ensured API rejects invalid payloads

This highlights the importance of not blindly trusting AI-generated backend logic.

---

## 5. Productivity gains from AI

AI significantly improved development speed in:
- Project scaffolding (Express + TypeScript setup)
- Writing repetitive CRUD boilerplate
- Generating test case structures
- Explaining complex errors (Jest + TS integration issues)

Without AI, setup and debugging would have taken significantly longer.

---

## 6. Where AI slowed me down

AI sometimes:
- Suggested incompatible configurations (ESM vs CommonJS)
- Provided overly complex architecture for a small project
- Required repeated correction during debugging cycles

This shows that AI suggestions still require human validation.

---

## 7. Skill atrophy risk mitigation

To avoid over-reliance on AI:
- I manually fixed TypeScript and Jest configuration issues
- I tested API endpoints using curl without AI assistance
- I wrote and adjusted test cases after understanding logic
- I reviewed all AI-generated code before committing

This ensured I still understood the system deeply.

---

## 8. Conclusion

AI was used as a co-developer rather than a replacement. The final system is a combination of AI-generated scaffolding and human-driven validation and debugging.

The most important learning was:
> AI is fast at generation, but humans are responsible for correctness, security, and architecture decisions.
