# AGENTS.md (minimal)

Entry point for AI agents in this repository. Expand over time; start here for stack, build, and git rules.

**Playbook:** [Cursor CLI playbook](https://github.com/marcop135/dotfiles/blob/main/docs/cursor-cli-playbook.md) (dotfiles) or link your org copy.

## Stack

<!-- TODO: one-line stack summary -->

## Build / test

<!-- TODO: primary commands -->

## Git

<!-- TODO: default branch, PR policy, deploy trigger if any -->

## Do not

- Commit secrets (`.env`, credentials).
- Force-push shared branches unless explicitly requested.

## Cursor CLI

- Model: Composer 2.5 standard (`maxMode: false`).
- Headless: `agent -p --force` from repo root with this file in context.
- Long parallel audits with overlapping files: use repo `scripts/*-fanout.sh` if present.
