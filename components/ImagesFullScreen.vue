<script setup lang="ts">
const props = defineProps<{
  images: string[];
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

//
const projectTransition = ref("");
const currentImgIdx = ref(0);

const hasNextImg = computed(
  () => currentImgIdx.value < props.images.length - 1,
);
const hasPreviousImg = computed(() => currentImgIdx.value > 0);

const onNextImg = () => {
  projectTransition.value = "slide-fade-next";
  currentImgIdx.value++;
};
const onPreviousImg = () => {
  projectTransition.value = "slide-fade-back";
  currentImgIdx.value--;
};
</script>

<template>
  <div
    class="fixed bottom-0 left-0 z-50 flex h-full w-full flex-col items-center justify-center gap-5 bg-black p-10 backdrop-blur"
  >
    <RoundedIcon
      icon="bytesize:close"
      @click="emit('close')"
      class="bg-secondary self-start"
    />

    <div class="flex w-full items-center justify-between gap-5">
      <RoundedIcon
        icon="formkit:arrowleft"
        @click="hasPreviousImg ? onPreviousImg() : null"
        :class="{
          'bg-primary': hasPreviousImg,
          'bg-secondary': !hasPreviousImg,
        }"
      />

      <transition :name="projectTransition" mode="out-in">
        <img
          :key="currentImgIdx"
          :src="images[currentImgIdx]"
          class="border-gray w-4/6 rounded-lg border-8"
        />
      </transition>

      <RoundedIcon
        icon="formkit:arrowright"
        @click="hasNextImg ? onNextImg() : null"
        :class="{
          'bg-primary': hasNextImg,
          'bg-secondary': !hasNextImg,
        }"
      />
    </div>
  </div>
</template>
