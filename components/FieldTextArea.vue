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
    class="rounded-xl border-2 bg-white p-3"
    :class="{
      'border-secondary-light focus-within:border-primary': !errorMessage,
      'border-error': errorMessage,
    }"
  >
    <textarea
      cols="30"
      rows="10"
      :name="props.name"
      :placeholder="placeholder"
      v-model="value"
      class="w-full resize-none bg-white py-1 outline-none"
    ></textarea>

    <transition name="slide-fade-back">
      <p v-if="errorMessage" class="text-error text-xs">
        {{ errorMessage }}
      </p>
    </transition>
  </div>
</template>
