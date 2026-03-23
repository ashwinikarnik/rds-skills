<template>
  <main class="page">
    <h1>FormCheckbox Demo (Base Theme)</h1>
    <p>
      Example page built from <code>projects/form-checkbox-skill/SKILL.md</code> using
      <code>@rds-vue-ui/form-checkbox</code> from the private registry.
    </p>

    <section class="demo-card mb-space-sm">
      <h2>Interactive Examples</h2>

      <div class="checkbox-stack">
        <FormCheckbox
          id="checkbox-basic"
          label="Basic checkbox"
          :model-value="basicChecked"
          @update:modelValue="onBasicModelUpdate"
          @changed="onChanged"
        />

        <FormCheckbox
          id="checkbox-disabled"
          label="Disabled checkbox"
          :model-value="true"
          :disabled="true"
          @changed="onDisabledChanged"
        />

        <FormCheckbox
          id="checkbox-parent"
          label="Parent (indeterminate while some children are selected)"
          :model-value="allChildrenChecked"
          :indeterminate="isIndeterminate"
          @update:modelValue="onParentToggle"
          @changed="onChanged"
        />

        <div class="checkbox-children">
          <FormCheckbox
            id="checkbox-child-1"
            label="Child option 1"
            v-model="children.child1"
            @changed="onChanged"
          />
          <FormCheckbox
            id="checkbox-child-2"
            label="Child option 2"
            v-model="children.child2"
            @changed="onChanged"
          />
          <FormCheckbox
            id="checkbox-child-3"
            label="Child option 3"
            v-model="children.child3"
            @changed="onChanged"
          />
        </div>
      </div>
    </section>

    <section class="demo-card">
      <h2>State + Verification</h2>
      <ul class="mb-0">
        <li>
          Basic checkbox value:
          <strong>{{ basicChecked ? 'Checked' : 'Unchecked' }}</strong>
        </li>
        <li>
          Children selected:
          <strong>{{ selectedChildrenCount }}/3</strong>
        </li>
        <li>
          Parent indeterminate:
          <strong>{{ isIndeterminate ? 'Yes' : 'No' }}</strong>
        </li>
        <li>
          `changed` events observed:
          <strong>{{ changedEvents }}</strong>
        </li>
        <li>
          Disabled change attempts emitted:
          <strong>{{ disabledChangeAttempts }}</strong>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import { FormCheckbox } from '@rds-vue-ui/form-checkbox';

const basicChecked = ref(false);
const changedEvents = ref(0);
const disabledChangeAttempts = ref(0);

const children = reactive({
  child1: true,
  child2: false,
  child3: false
});

const selectedChildrenCount = computed(
  () => Number(children.child1) + Number(children.child2) + Number(children.child3)
);

const allChildrenChecked = computed(() => selectedChildrenCount.value === 3);

const isIndeterminate = computed(
  () => selectedChildrenCount.value > 0 && selectedChildrenCount.value < 3
);

const onBasicModelUpdate = (value) => {
  basicChecked.value = value;
};

const onParentToggle = (checked) => {
  children.child1 = checked;
  children.child2 = checked;
  children.child3 = checked;
};

const onChanged = () => {
  changedEvents.value += 1;
};

const onDisabledChanged = () => {
  disabledChangeAttempts.value += 1;
};
</script>

<style scoped>
.checkbox-stack {
  display: grid;
  gap: 0.75rem;
}

.checkbox-children {
  border-left: 2px solid var(--rds-light-4, #d0d0d0);
  margin-left: 0.5rem;
  padding-left: 0.75rem;
  display: grid;
  gap: 0.5rem;
}
</style>
