---
name: button-skill
description: Reusable workflow for documenting and validating the RDS Button component in base theme, including API capture, behavior matrix, examples, and QA checks.
---

# Button Skill

## Intent
Provide a repeatable process to document and validate the RDS `Button` component for the base theme.

## Inputs
- Storybook docs URL for Button.
- Base theme only (ignore all alternate themes).

## Workflow
1. Confirm component metadata and canonical docs path.
2. Extract API surface from Storybook:
   - Props (name, type, default, required).
   - Events and payloads.
   - Slots and usage.
3. Capture behavior matrix:
   - Variants.
   - Sizes.
   - States.
4. Document accessibility expectations for keyboard and screen readers.
5. Create/update practical examples.
6. Run `checklists/qa.md` and resolve all open items.

## Outputs
- `README.md`
- `spec/component-spec.md`
- `examples/*`
- `checklists/qa.md`

## Constraints
- Base theme only.
- No non-base screenshots, variants, or token references.
- If details are unknown, mark them as `TBD` and capture the source needed to confirm.
