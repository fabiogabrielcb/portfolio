<script setup lang="ts">
const props = defineProps<{
  placeholder: string;
}>();
</script>

<template>
  <div class="rounded-xl bg-white p-3">
    <textarea
      cols="30"
      rows="10"
      :placeholder="props.placeholder"
      class="w-full resize-none bg-white outline-none"
    ></textarea>
  </div>
</template>
