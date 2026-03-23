# Spec: `dropdown-apollo-skill`

## Goal
Create a minimal reusable skill for implementing `@rds-vue-ui/dropdown-apollo` from the private registry in Vue 3 projects using the base theme.

## Proposed Skill Name
`dropdown-apollo-skill`

## Trigger Conditions
Use this skill when a request mentions:
- `@rds-vue-ui/dropdown-apollo`
- “RDS dropdown”
- “dropdown-apollo”
- building dropdown UI in Vue with RDS base theme

## Scope (Minimal)
1. Ensure scoped registry config:
- `.npmrc` has `@rds-vue-ui:registry=https://npm.edpl.us/`
2. Ensure package installation from registry:
- `@rds-vue-ui/dropdown-apollo`
- `@rds-vue-ui/rds-theme-base`
- `sass-embedded` only if needed for build
3. Ensure base theme CSS is imported once in app entry.
4. Implement dropdown using package component (no local replacement component).
5. Include one practical page-level implementation pattern:
- basic dropdown
- `v-model` binding
- disabled state
6. Run validation:
- build passes
- dropdown renders and updates model correctly

## Non-Goals
- No Storybook deep-copy or exhaustive variant matrix.
- No framework support beyond Vue 3.
- No alternate theme support (base theme only).

## Expected Skill Output
One concise `SKILL.md` containing:
- frontmatter (`name`, `description`)
- when-to-use
- required registry/deps
- short implementation workflow
- short verification checklist
- failure handling for registry/auth and style/build issues

## Acceptance Criteria
- Skill is concise and directly actionable.
- Avoids verbose explanations and avoids extra docs/files.
- Enforces registry package usage over local dropdown clones.
- Works as a reusable guide for other projects.

## Open Items For Approval
1. Skill location after approval:
- `~/.codex/skills/RDS/dropdown-apollo-skill/` (default)
2. Keep this as `SKILL.md` only (no additional references/scripts) unless later requested.
