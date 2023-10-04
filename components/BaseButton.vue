<script setup lang="ts">
const props = defineProps<{
  type?: "button" | "submit" | "reset";
  loading?: boolean;
}>();
</script>

<template>
  <button
    :type="props.type"
    class="cursor-pointer rounded-full p-3 px-8"
    :class="{
      'bg-primary hover:bg-primary-darken': !loading,
      'cursor-not-allowed bg-gray': loading,
    }"
  >
    <Icon v-if="props.loading" name="eos-icons:loading" class="h-6 w-6" />
    <slot v-else />
  </button>
</template>
