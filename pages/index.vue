<script setup lang="ts">
import { IMAGE_PERSON } from "~/assets";
</script>

<template>
  <div>
    <section class="flex h-screen flex-col">
      <TheHeader />

      <div class="flex grow items-center justify-between px-20">
        <div class="w-1/2">
          <p class="mb-10 w-max rounded-full border border-2 border-black p-3">
            Olá, tudo bem ?
          </p>

          <div class="flex flex-col gap-5 text-5xl">
            <p class="text-primary">Eu sou o Akiva</p>
            <p>Programador Fullstack</p>
            <p>Situado no Brasil</p>
          </div>
        </div>

        <img :src="IMAGE_PERSON" alt="Person" class="w-2/6 rounded" />
      </div>
    </section>
  </div>
</template>
