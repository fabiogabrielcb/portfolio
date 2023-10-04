<script setup lang="ts">
import {
  HOME_ID,
  SERVICES_ID,
  PROJECTS_ID,
  CONTACT_ID,
} from "~/constants/constants";
import { IMAGE_LOGO } from "../constants/assets";
import { ROUTE_HOME } from "~/constants/routes";

const router = useRouter();

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
  {
    title: "Contato",
    id: CONTACT_ID,
  },
];

const goHomeSection = (id: string) => {
  router.push(`${ROUTE_HOME}#${id}`);
};
</script>

<template>
  <div
    class="fixed z-10 flex w-full flex-row items-center justify-between bg-secondary p-5 px-20 text-white"
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

    <BaseButton @click="goHomeSection(CONTACT_ID)">Fale comigo</BaseButton>
  </div>
</template>
