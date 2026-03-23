# QA Checklist: FormCheckbox Skill

## Registry & Setup
- [ ] `.npmrc` contains `@rds-vue-ui:registry=https://npm.edpl.us/`.
- [ ] `@rds-vue-ui/form-checkbox` resolves from private registry.
- [ ] Base theme CSS is imported once.

## Behavior
- [ ] `v-model` updates as expected.
- [ ] `changed` event fires with interaction.
- [ ] Disabled checkbox blocks interaction.
- [ ] Indeterminate visual state works.

## Accessibility
- [ ] Focus ring is visible.
- [ ] Keyboard interaction works.
- [ ] Label association is valid (`id` + label semantics).

## Publish Readiness
- [ ] Examples compile in consuming project.
- [ ] No local replacement checkbox component is introduced.
- [ ] Build passes.
