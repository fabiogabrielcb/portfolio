<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  imgSrc: string;
}>();
</script>

<template>
  <div class="flex flex-col rounded-3xl border-2 p-5 pt-8">
    <p class="text-3xl">
      {{ props.title }}
    </p>

    <Separator />

    <p class="mb-5">
      {{ props.description }}
    </p>

    <img :src="props.imgSrc" class="grow rounded-3xl object-contain" />
  </div>
</template>
