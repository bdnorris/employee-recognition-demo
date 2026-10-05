<template>
	<div :class="['dot-items', 'dot-items--' + props.colorScheme, 'dot-items--' + props.size]">
		<ul>
			<li v-for="(item, index) in props.items" :key="index">
				<div class="dot-items__image">
					<img :src="item.image" :alt="item.imageAlt" />
				</div>
				<h2 class="h3">
					{{ item.heading }}
				</h2>
				<p class="p--sans" @click="handleButton" v-html="item.description"></p>
			</li>
		</ul>
	</div>
</template>

<script setup>
// import { h, computed } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
	items: {
		type: Array,
		default: () => [],
	},
	colorScheme: {
		type: String,
		default: "",
	},
	size: {
		type: String,
		default: "normal",
	},
});

const handleButton = (e) => {
	if (e.target.tagName === "BUTTON") {
		e.preventDefault();
		const href = e.target.getAttribute("data-to");
		if (href) {
			router.push(href);
		}
	}
};
</script>

<style lang="scss">
@import "../../assets/styles/_variables.scss";
@import "../../assets/styles/_colors.scss";

button[data-to] {
	text-decoration: underline;
	cursor: pointer;
	font-weight: 600;
	color: $text;
}
</style>
