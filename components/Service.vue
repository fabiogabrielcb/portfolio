<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  imgSrc: string;
  highlighted?: boolean;
}>();
</script>

<template>
  <div
    class="flex cursor-pointer flex-col rounded-3xl p-5 pt-8 hover:scale-105"
    :class="{
      'bg-primary': props.highlighted,
      'bg-secondary-light': !props.highlighted,
    }"
  >
    <p
      class="text-3xl"
      :class="{
        'text-white': props.highlighted,
        'text-primary': !props.highlighted,
      }"
    >
      {{ props.title }}
    </p>

    <Separator />

    <p
      class="mb-5"
      :class="{
        'text-white': props.highlighted,
        'text-gray': !props.highlighted,
      }"
    >
      {{ props.description }}
    </p>

    <img :src="props.imgSrc" class="grow rounded-3xl" />
  </div>
</template>
