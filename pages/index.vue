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
} from "~/constants/assets";
import {
  CONTACT_ID,
  HOME_ID,
  PROJECTS_ID,
  SERVICES_ID,
  LINKEDIN_PROFILE_URL,
  GITHUB_PROFILE_URL,
  MAILTO_INFO,
  EMAIL,
  NAME,
} from "~/constants/constants";
import { EmailService } from "../services";
import { contactSchema, ContactSchemaSubmit } from "../formSchemas";

// General
const runtimeConfig = useRuntimeConfig();
const toastPlugin = useNuxtApp().$toast;

// Projects
const projects = [
  {
    title: "Kolel Rio - Aulas de conteúdo judaico",
    description:
      "Fique por dentro de todas as atividades do Kolel Rio. Tenha estudos diários e shiurim de Torá. Saiba os horários das rezas pela halachá.",
    features: ["Aplicativo", "Dashboard", "API"],
    mobileImgSrc: IMAGE_KOLEL_MOBILE,
    dashboardImgSrc: IMAGE_KOLEL_DASHBOARD,
  },
  {
    title: "Karov - Ache seu novo carro",
    description:
      "Karov é um aplicativo desenvolvido para pessoas cansadas de procurar carros de forma física, entrar nas agências, falar com vendedores... Com esse app, você pode fazer tudo isso com rapidez e na palma da sua mão.",
    features: ["Aplicativo", "Dashboard", "API"],
    mobileImgSrc: IMAGE_KAROV_MOBILE,
    dashboardImgSrc: IMAGE_KAROV_DASHBOARD,
  },
  {
    title: "uPhoto - Um novo jeito de imprimir suas fotos",
    description:
      "Com o uPhoto você pode mandar fotos / apostilas / documentos e recebê-los na porta da sua casa!",
    features: ["Aplicativo", "Dashboard", "API"],
    mobileImgSrc: IMAGE_UPHOTO_MOBILE,
    dashboardImgSrc: IMAGE_UPHOTO_DASHBOARD,
  },
];

const projectTransition = ref("");
const currentProjectIdx = ref(0);

const hasNextProject = computed(
  () => currentProjectIdx.value < projects.length - 1,
);
const hasPreviousProject = computed(() => currentProjectIdx.value > 0);

const onNextProject = () => {
  projectTransition.value = "slide-fade-next";
  currentProjectIdx.value++;
};
const onPreviousProject = () => {
  projectTransition.value = "slide-fade-back";
  currentProjectIdx.value--;
};

// Image full screen
const showImagesFullScreen = ref(false);

const toogleShowImagesFullScreen = () =>
  (showImagesFullScreen.value = !showImagesFullScreen.value);

// Contact
const loading = ref(false);
const contacts = [
  {
    icon: "mdi:email",
    link: {
      title: EMAIL,
      ref: MAILTO_INFO,
    },
  },
  {
    icon: "mdi:linkedin",
    link: {
      title: NAME,
      ref: LINKEDIN_PROFILE_URL,
    },
  },
  {
    icon: "mdi:github",
    link: {
      title: NAME,
      ref: GITHUB_PROFILE_URL,
    },
  },
];

const onContactFormSubmit = async ({
  name,
  email,
  message,
}: ContactSchemaSubmit) => {
  loading.value = true;

  try {
    await EmailService.sendEmail(
      name,
      email,
      message,
      runtimeConfig.public.emailjsPublicKey,
    );

    toastPlugin.success("Email enviado com sucesso");
  } catch (error) {
    toastPlugin.error("Erro ao enviar email");
  }

  loading.value = false;
};
</script>

<template>
  <div>
    <TheHeader ref="header" />

    <section :id="HOME_ID" class="section justify-center">
      <div
        class="flex w-full grow flex-col items-center justify-between gap-10 md:flex-row"
      >
        <div class="flex w-full flex-col gap-10 md:w-1/2">
          <p class="w-max rounded-full border p-3 text-lg">Olá, tudo bem ?</p>

          <TheTitle
            :text="[
              '',
              'Eu sou o Akiva Barreto',
              'Programador Fullstack',
              '',
              'Situado no Brasil',
            ]"
          />

          <p class="text-gray w-full text-justify text-lg md:w-3/5">
            Com anos de programação, já tive a oportunidade de trabalhar em
            muitos projetos, com as mais diferentes pessoas, e em cada projeto
            tirar um aprendizado incrível.
          </p>
        </div>

        <img
          :src="IMAGE_PERSON"
          alt="Person"
          class="lg:(block) hidden w-2/6 rounded"
        />
      </div>
    </section>

    <section :id="SERVICES_ID" class="bg-secondary section">
      <TheTitle :text="['Meus', 'Serviços']" class="text-white" />

      <Separator class="mb-10" />

      <div class="md:(flex-row) flex flex-col gap-7">
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
      <TheTitle :text="['Dê uma olhada nos', 'meus projetos']" class="" />

      <Separator class="mb-10" />

      <div class="md:(flex-row) flex flex-col gap-7">
        <Project
          v-for="(project, idx) of projects"
          :key="idx"
          :title="project.title"
          :description="project.description"
          :features="project.features"
          :img-src="project.mobileImgSrc"
          class="w-full"
        />
      </div>
    </section>

    <section :id="CONTACT_ID" class="bg-secondary section">
      <div class="flex flex-col gap-10 md:flex-row">
        <div class="flex w-full flex-col gap-10">
          <TheTitle
            :text="['Tem um projeto', 'em mente?']"
            class="text-white"
          />

          <p class="w-3/4 text-justify text-lg text-white">
            Entre em contato comigo por qualquer um dos meios abaixo, ou me
            mande uma mensagem pelo formulário ao lado.
          </p>

          <div class="flex w-max flex-col gap-1">
            <a
              v-for="contact of contacts"
              :href="contact.link.ref"
              target="_blank"
              class="flex items-center gap-2"
            >
              <Icon :name="contact.icon" class="text-primary h-16 w-16" />

              <p class="text-md italic text-white">{{ contact.link.title }}</p>
            </a>
          </div>
        </div>

        <BaseForm
          :validation-schema="contactSchema"
          :loading="loading"
          @submit="onContactFormSubmit"
          class="w-full"
        >
          <div class="bg-secondary-light flex flex-col gap-5 rounded-3xl p-8">
            <div class="lg:(flex-row) flex flex-col gap-5">
              <FieldText placeholder="Nome" name="name" />

              <FieldText placeholder="Email" name="email" />
            </div>

            <FieldTextArea placeholder="Mensagem" name="message" />

            <BaseButton
              type="submit"
              :loading="loading"
              class="w-max rounded-xl text-white"
              >Enviar</BaseButton
            >
          </div>
        </BaseForm>
      </div>
    </section>
  </div>
</template>
