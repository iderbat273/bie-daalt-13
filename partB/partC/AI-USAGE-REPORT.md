# AI Usage Report (Part C)

## 1. What did AI do and what did I do?
During this project, AI was mainly used for generating boilerplate code, suggesting architecture, and producing test templates.
For example, AI suggested implementing a layered structure with routes, controllers, services, and repository. I accepted this because it matched clean architecture principles and improved testability.

However, I personally reviewed every generated code block before integration. I made final decisions about folder structure, naming conventions, and endpoint paths. I also manually tested the API using curl commands and fixed issues caused by incorrect usage.

In the CRUD implementation, AI helped draft the service functions for create, update, delete, and list tasks. I validated these functions, fixed incorrect error handling, and ensured correct validation rules were applied. I also ensured the Express server correctly used `express.json()` middleware.

## 2. Hallucination examples (2+)
### Hallucination Example 1
At one point, AI suggested using Windows CMD-style curl syntax with the `^` character to break lines. However, my environment was Git Bash, not CMD. As a result, curl commands failed and the server received undefined request bodies.

I detected the issue because curl produced errors like "Bad hostname" and bash interpreted `-H` and `-d` as separate commands. I corrected it by rewriting curl commands using Git Bash style line continuation with `\`.

### Hallucination Example 2
AI initially suggested that TypeScript would compile without needing to modify tsconfig.json. But when running `npm run dev`, I received a TypeScript error about `rootDir` not being set. This was related to TypeScript 6.0 changes.

I verified the issue by reading the error message and checking tsconfig.json. The fix was to uncomment and set `"rootDir": "./src"` and `"outDir": "./dist"`.

## 3. Security / license attention example
One security issue identified was missing validation on user inputs. If the server accepted arbitrary values for status or priority, it could lead to inconsistent application state and potential errors. AI-generated code initially did not enforce strict validation for all fields.

I addressed this by implementing validator functions that restrict allowed values for status and priority. I also ensured title cannot be empty. This reduced the risk of malformed input causing unexpected behavior.

## 4. What did AI help me do faster?
AI helped speed up:
- generating CRUD boilerplate code
- producing layered architecture template
- creating test cases quickly
- drafting OpenAPI YAML format

Without AI, writing the OpenAPI spec and the Jest test skeleton would have taken significantly more time.

## 5. What did AI make slower?
AI slowed me down when:
- it suggested commands incompatible with my shell environment
- it produced code that looked correct but failed due to configuration issues
- it suggested overly generic solutions that required adaptation

For example, the curl syntax issue wasted time because I trusted the suggestion initially.

## 6. How did I manage skill atrophy risk?
To avoid becoming dependent on AI, I tried to manually understand every file structure decision and each function before committing.
I also manually wrote some parts of the code, such as validation logic and repository operations, without directly copying AI output.

Additionally, I practiced debugging by reading error messages and fixing configuration issues myself rather than asking AI immediately.

## Conclusion
This project demonstrated that AI can significantly improve productivity, but only when combined with human verification.
The most important lesson was to "verify, don’t trust" because AI output can contain hallucinations, environment mismatches, or security oversights.
