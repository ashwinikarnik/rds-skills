# RDS Component Skill Spec: Button (Base Theme)

## Purpose
Define the first skill project for documenting and validating the RDS `Button` component in the **base theme only**.

## Scope
- In scope: `Button` behavior, API, visual variants, accessibility, and usage examples for base theme.
- Out of scope: non-base themes, cross-theme token comparisons, and migration guides.

## Documentation Deliverables
1. Component overview.
2. API contract:
   - Props with type, default, required flag, and usage notes.
   - Events with payload shape.
   - Slots with expected content.
3. Visual behavior matrix:
   - Variants.
   - Sizes.
   - States (`default`, `hover`, `focus`, `active`, `disabled`, `loading` if supported).
4. Accessibility notes:
   - Keyboard behavior.
   - ARIA guidance.
   - Color contrast expectations for base theme.
5. Usage examples:
   - Primary action.
   - Secondary action.
   - Icon button pattern (if supported).
6. QA checklist for doc completeness and correctness.

## Suggested File Layout For This One Component
- `projects/button-skill/README.md` - human-facing component documentation.
- `projects/button-skill/spec/component-spec.md` - structured API and behavior spec.
- `projects/button-skill/examples/` - runnable examples focused on base theme.
- `projects/button-skill/checklists/qa.md` - verification checklist.

## Acceptance Criteria
- Documentation clearly states base theme scope.
- API section is complete and consistent with Storybook docs for `Button`.
- Examples cover at least primary and disabled usage.
- Accessibility section includes keyboard and screen-reader expectations.
- Another engineer can implement or test Button usage from docs alone.

## Open Items To Confirm During Extraction
- Canonical Storybook path for Button docs page.
- Final prop names and defaults from source.
- Whether icon-only and loading button states are officially supported.
