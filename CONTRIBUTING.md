# Contributing to HealthCore

## Before editing

- Read `AGENTS.md`, the current Memory Bank files, and the README for the affected route.
- Keep changes scoped to the active 4Geeks milestone and use the existing monorepo paths.
- Do not edit the official `BRIEFING.md`, include patient data or secrets, or add unapproved product functionality.

## Branches and commits

Use one focused branch per change:

- `feature/<milestone>-<short-description>`
- `fix/<short-description>`
- `docs/<short-description>`
- `chore/<short-description>`

Use Conventional Commit subjects, for example `docs: clarify HealthCore project context`, `chore: add repository validation`, or `feat(web): add approved milestone deliverable`. Keep commits focused and explain the reason for a change.

## Pull Requests and review

Open a Pull Request against `main`. Describe the scope, milestone, decisions or assumptions, and verification performed. Review the whole diff for unrelated files, secrets, patient data, accidental changes to the official brief, and consistency with the relevant README. State checks that could not be run. Request a second-person review when a collaborator is available; do not treat self-review as independent approval.

## Verification and Memory Bank

Run only checks documented by the affected project or repository workflow. Do not add dependencies or invent project commands to make an empty template appear runnable. Update `memory-bank/progress.md` after a milestone or meaningful verification, and update technical context when the repository's confirmed tooling or structure changes.
