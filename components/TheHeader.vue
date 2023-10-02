<script setup lang="ts">
import { HOME_ID, SERVICES_ID, PROJECTS_ID } from "~/constants";
import { IMAGE_LOGO } from "../assets";

const categories = [
  {
    title: "Home",
    id: HOME_ID,
  },

  {
    title: "Serviços",
    id: SERVICES_ID,
  },
  {
    title: "Projetos",
    id: PROJECTS_ID,
  },
];
</script>

<template>
  <div
    class="fixed z-50 flex w-full flex-row items-center justify-between bg-secondary p-5 px-20 text-white"
  >
    <div class="flex flex-row items-center gap-3 text-lg">
      <img :src="IMAGE_LOGO" alt="Logo" class="w-12" />

      <p>Akiva</p>
    </div>

    <div>
      <ul class="flex flex-row">
        <a
          v-for="category of categories"
          rel="noopener"
          :href="`#${category.id}`"
          class="cursor-pointer px-5 hover:text-primary"
        >
          {{ category.title }}
        </a>
      </ul>
    </div>

    <BaseButton>Fale comigo</BaseButton>
  </div>
</template>
