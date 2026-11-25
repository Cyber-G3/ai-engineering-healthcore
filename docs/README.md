# Repository documentation

Use this page as the index. Keep business facts in their canonical sources and avoid copying them into architecture or milestone documents.

| Need | Canonical location |
| --- | --- |
| Official HealthCore facts and constraints | [`BRIEFING.md`](../BRIEFING.md) |
| Selected project focus | [`company-choice.md`](../company-choice.md) |
| Concise domain view and schema hypotheses | [`CONTEXT.es.md`](../CONTEXT.es.md) |
| Agent instructions and reusable guidance | [`AGENTS.md`](../AGENTS.md), [`.agents/rules/`](../.agents/rules/), [`.agents/skills/`](../.agents/skills/) |
| Technical state and course continuity | [`memory-bank/progress.md`](../memory-bank/progress.md), [`memory-bank/techContext.md`](../memory-bank/techContext.md) |
| Folder responsibilities | README files under `uis/`, `services/`, `data/`, `agents/`, `skills/`, `mcps/` and `workflows/` |

## Architecture and decisions

No complete HealthCore application architecture has been approved yet. Document architecture only when a milestone introduces a concrete system; place system-specific diagrams and interfaces beside that system, and link them here.

Record durable architecture decisions as `docs/decisions/NNNN-short-title.md` when a decision is made. Each record should state the context, status (proposed or accepted), decision owner, alternatives and consequences. Do not turn a proposal or template recommendation into an accepted decision without approval.

## Milestone documentation

Add a document under `docs/milestones/` only when a course milestone has actual scope or deliverables. Link it from the relevant component README and record its status in `memory-bank/progress.md`. The template lists Web, Programming, Backend, Telemetry, RAG, Agents, Workflows and Real-time; confirm course sequencing in the current 4Geeks materials before creating dated plans.

## APIs, interfaces, tests and validation

- Document each API with its owning service in `services/<service>/README.md`; keep an OpenAPI contract beside the implementation once an API exists.
- Document user flows and interface behavior in `uis/<app>/README.md` when that application exists.
- Keep component tests with their component. Use `data/eval/` for model or agent evaluation sets, following its README and data-safety guidance.
- The repository workflow may validate universal file hygiene and configuration. Add build/test jobs only when a real project declares its commands and dependencies.
- Never store real or identifiable patient data, credentials or secrets in this public repository.
