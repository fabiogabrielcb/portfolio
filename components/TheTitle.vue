<script setup lang="ts">
defineProps<{
  text: string[];
}>();
</script>

<template>
  <div class="flex flex-col gap-2 text-2xl md:gap-5 md:text-5xl">
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
