<script setup lang="ts">
const props = defineProps<{
  images: string[];
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const currentImgIdx = ref(0);

const hasNextImg = computed(
  () => currentImgIdx.value < props.images.length - 1,
);
const hasPreviousImg = computed(() => currentImgIdx.value > 0);

const onNextImg = () => currentImgIdx.value++;
const onPreviousImg = () => currentImgIdx.value--;
</script>

<template>
  <div
    class="fixed bottom-0 left-0 z-50 flex h-full w-full flex-col items-center justify-center gap-5 bg-black p-10 backdrop-blur"
  >
    <Icon
      name="bytesize:close"
      color="white"
      @click="emit('close')"
      class="h-14 w-14 self-start bg-secondary rounded-icon"
    />

    <div class="flex w-full items-center justify-between">
      <Icon
        name="formkit:arrowleft"
        color="white"
        @click="hasPreviousImg ? onPreviousImg() : null"
        class="rounded-icon"
        :class="{
          'bg-primary': hasPreviousImg,
          'bg-secondary': !hasPreviousImg,
        }"
      />

      <transition name="slide-fade" mode="out-in">
        <img
          :key="currentImgIdx"
          :src="images[currentImgIdx]"
          class="w-4/6 rounded-lg border-8 border-gray"
        />
      </transition>

      <Icon
        name="formkit:arrowright"
        color="white"
        @click="hasNextImg ? onNextImg() : null"
        class="rounded-icon"
        :class="{
          'bg-primary': hasNextImg,
          'bg-secondary': !hasNextImg,
        }"
      />
    </div>
  </div>
</template>
