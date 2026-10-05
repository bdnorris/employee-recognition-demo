<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
	color: {
		type: String,
		default: "red",
	},
});
</script>

<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16.037"
		height="24.439"
		viewBox="0 0 16.037 24.439"
	>
		<path
			data-id="Chevron"
			d="M14.219,18.037,2,5.681,5.64,2l8.58,8.676L22.8,2l3.64,3.681Z"
			transform="translate(-2 26.439) rotate(-90)"
			:fill="color"
		/>
	</svg>
</template>