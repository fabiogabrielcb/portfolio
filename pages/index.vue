<script setup lang="ts">
import {
  IMAGE_PERSON,
  IMAGE_CODE,
  IMAGE_MOBILE,
  IMAGE_WEBSITE,
  IMAGE_KOLEL_DASHBOARD,
  IMAGE_KAROV_DASHBOARD,
  IMAGE_UPHOTO_DASHBOARD,
  IMAGE_KAROV_MOBILE,
  IMAGE_KOLEL_MOBILE,
  IMAGE_UPHOTO_MOBILE,
} from "~/assets";
import { HOME_ID, PROJECTS_ID, SERVICES_ID } from "~/constants";

// Projects
const projects = [
  {
    title: "Kolel Rio - Aulas de conteúdo judaico",
    description:
      "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet lorem et lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet lorem et lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet lorem et lorem ipsum dolor sit amet",
    features: ["Aplicativo", "Dashboard", "API"],
    mobileImgSrc: IMAGE_KOLEL_MOBILE,
    dashboardImgSrc: IMAGE_KOLEL_DASHBOARD,
  },
  {
    title: "Karov - Ache seu novo carro",
    description:
      "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet lorem et lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet lorem et lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet lorem et lorem ipsum dolor sit amet",
    features: ["Aplicativo", "Dashboard", "API"],
    mobileImgSrc: IMAGE_KAROV_MOBILE,
    dashboardImgSrc: IMAGE_KAROV_DASHBOARD,
  },
  {
    title: "uPhoto - Um novo jeito de imprimir suas fotos",
    description:
      "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet lorem et lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet lorem et lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet lorem et lorem ipsum dolor sit amet",
    features: ["Aplicativo", "Dashboard", "API"],
    mobileImgSrc: IMAGE_UPHOTO_MOBILE,
    dashboardImgSrc: IMAGE_UPHOTO_DASHBOARD,
  },
];
const currentProjectIdx = ref(0);

const hasNextProject = computed(
  () => currentProjectIdx.value < projects.length - 1,
);
const hasPreviousProject = computed(() => currentProjectIdx.value > 0);

const onNextProject = () => currentProjectIdx.value++;
const onPreviousProject = () => currentProjectIdx.value--;
</script>

<template>
  <div>
    <TheHeader ref="header" />

    <section :id="HOME_ID" class="section">
      <div class="pt-22 flex grow items-center justify-between">
        <div class="flex w-1/2 flex-col gap-10">
          <p class="w-max rounded-full border p-3 text-lg">Olá, tudo bem ?</p>

          <div class="flex flex-col gap-5 text-5xl">
            <p class="text-primary">Eu sou o Akiva</p>
            <p>Programador Fullstack</p>
            <p>Situado no Brasil</p>
          </div>

          <p class="w-3/5 text-justify text-lg text-gray">
            Com anos de programação, já tive a oportunidade de trabalhar em
            muitos projetos, com as mais diferentes pessoas, e em cada projeto
            tirar um aprendizado incrível.
          </p>
        </div>

        <img :src="IMAGE_PERSON" alt="Person" class="w-2/6 rounded" />
      </div>
    </section>

    <section :id="SERVICES_ID" class="bg-secondary section">
      <p class="text-4xl text-white">
        Meus <span class="text-primary">Serviços</span>
      </p>

      <Separator class="mb-10" />

      <div class="flex gap-7">
        <Service
          title="Sites"
          description="Criação de sites, desenvolvimento completo, entregando já com o endereço do site."
          :img-src="IMAGE_WEBSITE"
        />

        <Service
          title="Aplicativos"
          description="Criação de aplicativos, desenvolvimento completo, entregando o app direto nas lojas de aplicativo."
          :img-src="IMAGE_MOBILE"
          :highlighted="true"
        />

        <Service
          title="Automações"
          description="Soluções para automatizar processos repetitivos como ler emails, buscar por determindas coisas..."
          :img-src="IMAGE_CODE"
        />
      </div>
    </section>

    <section :id="PROJECTS_ID" class="section">
      <div class="mb-8 flex flex-col gap-3 text-4xl">
        <p class="text-4xl">Dê uma olhada nos</p>

        <p class="text-primary">meus Projetos</p>
      </div>

      <div class="flex grow items-start justify-between">
        <Icon
          name="formkit:arrowleft"
          color="white"
          @click="hasPreviousProject ? onPreviousProject() : null"
          class="self-center rounded-icon"
          :class="{
            'bg-primary': hasPreviousProject,
            'bg-secondary': !hasPreviousProject,
          }"
        />

        <transition>
          <Project
            :key="currentProjectIdx"
            :title="projects[currentProjectIdx].title"
            :description="projects[currentProjectIdx].description"
            :features="projects[currentProjectIdx].features"
            :mobile-img-src="projects[currentProjectIdx].mobileImgSrc"
            :dashboard-img-src="projects[currentProjectIdx].dashboardImgSrc"
          />
        </transition>

        <Icon
          name="formkit:arrowright"
          color="white"
          @click="hasNextProject ? onNextProject() : null"
          class="self-center rounded-icon"
          :class="{
            'bg-primary': hasNextProject,
            'bg-secondary': !hasNextProject,
          }"
        />
      </div>
    </section>
  </div>
</template>
