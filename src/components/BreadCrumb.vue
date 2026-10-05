<template>
	<nav aria-label="breadcrumbs">
		<ul class="breadcrumb">
			<li
				class="breadcrumb-item"
				v-for="(breadcrumb, index) in breadcrumbs"
				:key="index"
			>
				<router-link :to="breadcrumb.path">{{ breadcrumb.name }}</router-link>
			</li>
		</ul>
	</nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const breadcrumbs = computed(() => {
	return route.matched.map((match) => {
		return match["meta"]["breadcrumb"];
	})[0];
});
</script>