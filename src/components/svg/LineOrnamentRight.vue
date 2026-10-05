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
		width="106"
		height="22"
		viewBox="0 0 106 22"
	>
		<g
			data-id="Way_Finder_Line"
			data-name="Way Finder Line"
			transform="translate(0 22) rotate(-90)"
		>
			<line
				data-id="Line_1"
				data-name="Line 1"
				y2="86.5"
				transform="translate(11.5)"
				fill="none"
				:stroke="color"
				stroke-width="4"
			/>
			<g
				data-id="Ellipse_1"
				data-name="Ellipse 1"
				transform="translate(0 84)"
				:fill="color"
				:stroke="color"
				stroke-width="1"
			>
				<circle cx="11" cy="11" r="11" stroke="none" />
				<circle cx="11" cy="11" r="10.5" fill="none" />
			</g>
		</g>
	</svg>
</template>