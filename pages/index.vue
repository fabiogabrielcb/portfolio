<script setup lang="ts">
import {
  IMAGE_PERSON,
  IMAGE_CODE,
  IMAGE_MOBILE,
  IMAGE_WEBSITE,
} from "~/assets";
import { HOME_ID, ABOUT_ID, SERVICES_ID } from "~/constants";
</script>

<template>
  <div>
    <TheHeader ref="header" />

    <section :id="HOME_ID" class="section">
      <div class="pt-22 flex grow items-center justify-between">
        <div class="flex w-1/2 flex-col gap-10">
          <p class="w-max rounded-full border p-3">Olá, tudo bem ?</p>

          <div class="flex flex-col gap-5 text-5xl">
            <p class="text-primary">Eu sou o Akiva</p>
            <p>Programador Fullstack</p>
            <p>Situado no Brasil</p>
          </div>

          <p class="text-gray w-3/5 text-justify text-lg">
            Com anos de programação, já tive a oportunidade de trabalhar em
            muitos projetos, com as mais diferentes pessoas, e em cada projeto
            tirar um aprendizado incrível.
          </p>
        </div>

        <img :src="IMAGE_PERSON" alt="Person" class="w-2/6 rounded" />
      </div>
    </section>

    <section :id="SERVICES_ID" class="section bg-secondary">
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
          title="Automaçöes"
          description="Soluções para automatizar processos repetitivos como ler emails, buscar por determindas coisas."
          :img-src="IMAGE_CODE"
        />
      </div>
    </section>
  </div>
</template>
