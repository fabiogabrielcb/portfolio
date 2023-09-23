<script setup lang="ts">
import {IMAGE_LOGO} from '../assets';
const categories = ['Home', 'Sobre', 'Serviços', 'Projetos']
</script>

<template>
	<div class="flex flex-row items-center justify-between bg-secondary text-white p-5 px-20">
		<div class="text-lg flex flex-row items-center gap-3">
			<img :src="IMAGE_LOGO" alt="Logo" class="w-12">

			<p>Akiva</p>
		</div>

		<div>
			<ul class="flex flex-row">
				<li v-for="category of categories"
				class="cursor-pointer px-5 hover:text-primary"
				>{{ category }}</li>
			</ul>
		</div>

		<BaseButton>Fale comigo</BaseButton>
	</div>
</template>
