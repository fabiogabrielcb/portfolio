<script setup lang="ts">
const props = defineProps<{
  placeholder: string;
}>();
</script>

<template>
  <div class="w-full rounded-xl bg-white p-3">
    <input
      type="text"
      :placeholder="props.placeholder"
      class="w-full bg-white outline-none"
    />
  </div>
</template>
