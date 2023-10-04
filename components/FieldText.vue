<script setup lang="ts">
import { useField } from "vee-validate";

// General
const props = defineProps<{
  placeholder?: string;
  name?: string;
}>();

// Form
const { value, errorMessage } = useField<string>(props.name || "");
</script>

<template>
  <div
    class="w-full rounded-xl border-2 bg-white p-3"
    :class="{
      'border-secondary-light focus-within:border-primary': !errorMessage,
      'border-error': errorMessage,
    }"
  >
    <input
      :name="props.name"
      :placeholder="placeholder"
      v-model="value"
      class="text-regular-14-bold-black w-full py-1 outline-none"
    />

    <transition name="slide-fade-back">
      <p v-if="errorMessage" class="text-error text-xs">
        {{ errorMessage }}
      </p>
    </transition>
  </div>
</template>
