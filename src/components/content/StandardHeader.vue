<script setup>
// import GreenBrush from "@/components/svg/GreenBrush.vue";
import LittleLeaf from "@/components/svg/LittleLeaf.vue";

const props = defineProps({
	size: {
		type: String,
		default: "",
	},
});
</script>

<template>
	<div
		:class="{
			'standard-header': true,
			'standard-header--wide': props.size === 'wide',
			'standard-header--narrow': props.size === 'narrow',
		}"
	>
		<LittleLeaf />
		<slot></slot>
	</div>
</template>