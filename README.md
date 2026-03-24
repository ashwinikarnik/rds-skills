# rds-skills

## Run Locally

```bash
yarn install --production=false
yarn dev
```

Then open the URL shown by Vite (usually `http://localhost:5173`).

## Install RDS Skills With npx

This repo now exposes reusable skills under `skills/` so you can install them with the `skills` CLI.

### List available skills from this repo

```bash
npx skills add ashwinikarnik/rds-skills --list
```

### Install one skill

```bash
npx skills add ashwinikarnik/rds-skills --skill button-skill
npx skills add ashwinikarnik/rds-skills --skill button-play-apollo-skill
npx skills add ashwinikarnik/rds-skills --skill form-checkbox-skill
```

### Install all skills at once

```bash
npx skills add ashwinikarnik/rds-skills --skill '*'
```

### Install for other coding agents

```bash
# Claude Code
npx skills add ashwinikarnik/rds-skills --skill '*' -a claude-code

# Multiple agents in one command
npx skills add ashwinikarnik/rds-skills --skill '*' -a codex -a claude-code
```

### Command flags explained

- `--skill '*'`: install all skills from the repository.
- `-a codex`: install for the Codex agent target (swap with `claude-code`, etc.).
- `-y`: skip confirmation prompts (non-interactive mode).
- `-g`: optional global install, available across projects.

Example with all common flags:

```bash
npx skills add ashwinikarnik/rds-skills --skill '*'
```

### Test locally before publishing

```bash
npx skills add . --list
npx skills add . --skill button-skill
npx skills list -a codex
```
