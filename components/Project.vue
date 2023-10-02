<script setup lang="ts">
const props = defineProps<{
  features: string[];
  title: string;
  description: string;
  mobileImgSrc: string;
  dashboardImgSrc: string;
}>();

const imgs = [props.dashboardImgSrc, props.mobileImgSrc];
</script>

<!-- <template>
  <div class="">
    <img :src="props.mobileImgSrc" class="absolute w-1/2 object-cover" />

    <div>{{ props.title }}</div>
    <div>{{ props.description }}</div>
  </div>
</template> -->

<template>
  <div class="flex flex-col items-center gap-5">
    <div class="flex w-1/2 justify-center gap-5">
      <img
        v-for="img of imgs"
        :src="img"
        class="w-4/6 grow rounded-3xl border-[15px] border-gray-light"
      />
    </div>

    <div class="flex gap-3">
      <div
        v-for="feature of props.features"
        class="rounded-full bg-gray-light p-2 px-3"
      >
        <p>{{ feature }}</p>
      </div>
    </div>

    <p class="w-4/6 text-center text-2xl">{{ props.title }}</p>

    <p class="w-4/6 text-center">{{ props.description }}</p>
  </div>
</template>
