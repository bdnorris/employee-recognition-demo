<template>
	<nav aria-label="footer navigation to next item">
		<ul class="breadcrumb">
			<li class="breadcrumb-item">
				<router-link :to="to">Go to {{ title }} ></router-link>
			</li>
		</ul>
	</nav>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps(
	{
		to: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	},
);
</script>

<style scoped>
nav {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
}
</style>