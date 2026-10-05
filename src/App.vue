<script setup>
// import { RouterLink, RouterView } from "vue-router";
import { useStore } from "vuex";
import { onMounted } from "vue";

import Navigation from "@/components/TheNavigation.vue";
import Footer from "@/components/TheFooter.vue";

const store = useStore();

onMounted(() => {
	store.dispatch("nominees/getAllNominees");
});
</script>

<template>
	<header>
		<Navigation />
	</header>
	<main>
		<RouterView />
	</main>
	<Footer />
</template>
