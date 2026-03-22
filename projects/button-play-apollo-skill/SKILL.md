# ButtonPlayApollo Skill

## Intent
Provide a repeatable process to document, verify, and demo `@rds-vue-ui/button-play-apollo`.

## Inputs
- Storybook docs URL:
  `https://rds-vue-ui.edpl.us/?path=/docs/components-button-buttonplayapollo--docs`
- NPM registry package:
  `@rds-vue-ui/button-play-apollo`

## Workflow
1. Confirm Storybook docs/stories IDs from `index.json`.
2. Extract prop/event truth from compiled Storybook modules.
3. Cross-check package metadata from `https://npm.edpl.us`.
4. Update component spec and usage notes.
5. Validate examples and checklist.

## Outputs
- `README.md`
- `spec/component-spec.md`
- `examples/*`
- `checklists/qa.md`

## Constraints
- Keep API docs aligned to current Storybook docs page for this component.
- Prefer source-confirmed values over inferred defaults.
