<template>
  <NuxtPage />
</template>

<style>
html {
  font-family: "Ubuntu", sans-serif;
}

* {
  transition: all 0.2s ease-in-out;
  transition: background-color 0.1s ease-in-out;
  transition: box-shadow 0.1s ease-in-out;
}

/* Page */
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: absolute;
}

/* Page */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* Slide fade Next */
.slide-fade-next-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-next-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-next-enter,
.slide-fade-next-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

/* Slide fade Back */
.slide-fade-back-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-back-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-back-enter,
.slide-fade-back-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
