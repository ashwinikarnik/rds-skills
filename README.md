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
npx skills add edplus/rds-skills --list
```

### Install one skill (Codex, project scope)

```bash
npx skills add edplus/rds-skills --skill button-skill -a codex -y
npx skills add edplus/rds-skills --skill button-play-apollo-skill -a codex -y
npx skills add edplus/rds-skills --skill form-checkbox-skill -a codex -y
```

### Install all skills at once (Codex)

```bash
npx skills add edplus/rds-skills --skill '*' -a codex -y
```

### Install for other coding agents

```bash
# Claude Code
npx skills add edplus/rds-skills --skill '*' -a claude-code -y

# Multiple agents in one command
npx skills add edplus/rds-skills --skill '*' -a codex -a claude-code -y
```

### Command flags explained

- `--skill '*'`: install all skills from the repository.
- `-a codex`: install for the Codex agent target (swap with `claude-code`, etc.).
- `-y`: skip confirmation prompts (non-interactive mode).
- `-g`: optional global install, available across projects.

Example with all common flags:

```bash
npx skills add edplus/rds-skills --skill '*' -a codex -y
```

### Test locally before publishing

```bash
npx skills add . --list
npx skills add . --skill button-skill -a codex -y
npx skills list -a codex
```
