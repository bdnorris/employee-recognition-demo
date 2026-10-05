<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
	active: {
		type: Boolean,
		default: false,
	},
});
</script>


<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		width="46"
		height="42"
		viewBox="0 0 46 42"
	>
		<defs>
			<clipPath data-id="clip-menu-toggle">
				<rect width="46" height="42" />
			</clipPath>
		</defs>
		<g data-id="menu-toggle" clip-path="url(#clip-menu-toggle)">
			<rect width="46" height="42" fill="transparent" />
			<g
				data-id="Group_23582"
				data-name="Group 23582"
				transform="translate(0 0.5)"
			>
				<g class="moveout left">
					<line
						data-id="bread"
						x2="34"
						transform="translate(6 5.5)"
						fill="none"
						stroke="#4c3327"
						stroke-linecap="round"
						stroke-width="6"
					/>
				</g>
				<g class="rotate left" transform="translate(6 20.5)">
					<line
						data-id="cheese"
						x2="34"
						fill="none"
						stroke="#4c3327"
						stroke-linecap="round"
						stroke-width="6"
					/>
				</g>
				<g class="rotate right" transform="translate(6 20.5)">
					<line
						data-id="meat"
						x2="34"
						fill="none"
						stroke="#4c3327"
						stroke-linecap="round"
						stroke-width="6"
					/>
				</g>
				<g class="moveout right">
					<line
						data-id="bread-2"
						data-name="bread"
						x2="34"
						transform="translate(6 35.5)"
						fill="none"
						stroke="#4c3327"
						stroke-linecap="round"
						stroke-width="6"
					/>
				</g>
			</g>
		</g>
	</svg>
</template>