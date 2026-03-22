# QA Checklist: Button Docs (Base Theme)

## Scope & Accuracy
- [ ] Documentation explicitly states base theme only.
- [ ] Canonical Storybook link resolves to Button docs.
- [ ] Confirm this docs page is class-based (no component prop/event/slot API table).
- [ ] Confirm class names in docs match Storybook source examples.

## Visual Behavior
- [ ] Variant list matches available base theme variants.
- [ ] Size list matches available sizes.
- [ ] State behavior validated: default, hover, focus, active, disabled.
- [ ] Block layout behavior validated (`btn-block`).

## Accessibility
- [ ] Keyboard activation validated (`Enter`, `Space`).
- [ ] Focus style is visible in base theme.
- [ ] Disabled state blocks interaction.
- [ ] Icon-only guidance includes accessible name requirement.

## Examples
- [ ] Primary usage example works.
- [ ] Disabled usage example works.
- [ ] Outline submit usage example works in a form.
- [ ] Block button example works.

## Publish Readiness
- [ ] No unresolved placeholder markers remain in spec.
- [ ] No references to non-base themes remain.
- [ ] Another engineer can implement from docs without assumptions.
