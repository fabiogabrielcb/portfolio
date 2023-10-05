<script setup lang="ts">
defineProps<{
  icon: string;
}>();
</script>

<template>
  <div class="rounded-icon">
    <Icon :name="icon" color="white" class="md:(h-12 w-12) h-6 w-6" />
  </div>
</template>
