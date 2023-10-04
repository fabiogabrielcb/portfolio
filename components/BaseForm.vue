<script setup lang="ts">
import { Form as VeeForm } from "vee-validate";

const props = defineProps<{
  validationSchema: Record<string, any> | undefined;
  initialValues?: any;
  loading?: boolean;
}>();

const emit = defineEmits<{
  (e: "submit", data: any): void;
}>();

const onSubmit = (data: string) => {
  if (props.loading) return;

  emit("submit", data);
};
</script>

<template>
  <div>
    <VeeForm
      :validation-schema="validationSchema"
      :initial-values="initialValues"
      @submit="onSubmit"
    >
      <slot />
    </VeeForm>
  </div>
</template>
