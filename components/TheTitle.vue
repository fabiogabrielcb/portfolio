<script setup lang="ts">
defineProps<{
  text: string[];
}>();
</script>

<template>
  <div class="flex flex-col text-2xl md:leading-tight lg:text-5xl">
    <p>
      <span
        v-for="(item, idx) of text"
        :class="{
          'text-primary': idx % 2 === 1,
          hidden: !item,
        }"
      >
        {{ item + " " }}
      </span>
    </p>
  </div>
</template>
