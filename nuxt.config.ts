// https://nuxt.com/docs/api/configuration/nuxt-config
import { NAME } from "./constants/constants";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-windicss", "nuxt-icon"],
  runtimeConfig: {
    public: {
      emailjsPublicKey: "dFGn733wqoa0EvKeD",
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: `Portfolio - ${NAME}`,
    },
  },
});
