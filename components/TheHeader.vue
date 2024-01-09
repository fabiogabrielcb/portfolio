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
];

// App Bar
const openAppBar = ref(false);
const onMenuClick = () => {
  console.log("onMenuClick");
  openAppBar.value = !openAppBar.value;
};

const goHomeSection = (id: string) => {
  router.push(`${ROUTE_HOME}#${id}`);
};
</script>

<template>
  <div
    class="bg-secondary lg:(px-20) fixed z-10 flex w-full flex-row items-center justify-between p-5 px-5 text-white"
  >
    <div class="flex flex-row items-center gap-3 text-lg">
      <img :src="IMAGE_LOGO" alt="Logo" class="w-12" />

      <p>Akiva</p>
    </div>

    <div class="lg:(flex items-center) hidden gap-5">
      <ul class="lg:(flex-row) flex flex-col">
        <a
          v-for="category of categories"
          rel="noopener"
          :href="`#${category.id}`"
          class="hover:text-primary cursor-pointer px-5"
        >
          {{ category.title }}
        </a>
      </ul>

      <BaseButton @click="goHomeSection(CONTACT_ID)">Fale comigo</BaseButton>
    </div>

    <div class="lg:(hidden) relative">
      <Icon name="mdi:menu" @click="onMenuClick()" />

      <div
        v-if="openAppBar"
        class="absolute right-0 flex flex-col items-center justify-center gap-5 rounded-lg border border-black bg-white p-5 px-8"
      >
        <ul class="flex flex-col gap-2">
          <a
            v-for="category of categories"
            rel="noopener"
            :href="`#${category.id}`"
            class="hover:text-primary cursor-pointer px-5 text-black"
          >
            {{ category.title }}
          </a>
        </ul>

        <BaseButton @click="goHomeSection(CONTACT_ID)" class="w-40"
          >Fale comigo</BaseButton
        >
      </div>
    </div>
  </div>
</template>
