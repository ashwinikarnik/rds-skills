# QA Checklist: ButtonPlayApollo Docs

## Scope & Accuracy
- [ ] Storybook docs link resolves to `components-button-buttonplayapollo--docs`.
- [ ] Package name/version matches registry (`@rds-vue-ui/button-play-apollo`).
- [ ] Props table matches Storybook compiled source.
- [ ] `ctaClick` event docs match component emit behavior.

## Behavior
- [ ] `backgroundVariant` class pattern is documented (`btn-*`).
- [ ] Text classes are documented for `buttonTextSize` and `buttonTextVariant`.
- [ ] Disabled state behavior is validated.

## Accessibility
- [ ] Keyboard interaction is documented (`Tab`, `Enter`, `Space`).
- [ ] Focus visibility requirement is included.
- [ ] Icon-only/empty-text behavior has accessibility note.

## Examples
- [ ] Example imports package correctly.
- [ ] Enabled example fires `ctaClick`.
- [ ] Disabled example does not trigger click behavior.

## Publish Readiness
- [ ] No unresolved placeholders remain.
- [ ] A consuming engineer can implement without assumptions.
