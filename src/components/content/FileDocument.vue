<template>
	<div class="documents__document">
		<div class="documents__document__thumbnail">
			<img :src="icon" alt="" />
		</div>
		<a :href="'/documents/' + document.file" target="_blank" v-if="document.file">
			<DownloadIcon />
			{{ props.document.title }}
		</a>
		<span v-else>
			<DownloadIcon />
			{{ props.document.title }}
		</span>
	</div>
</template>

<script setup>
import DownloadIcon from "@/components/svg/DownloadIcon.vue";
import { computed } from "vue";

const props = defineProps({
	document: {
		type: Object,
		required: true,
		default: () => ({
			title: "test",
		}),
	},
})

const icon = computed(() => {
	if (props.document.thumbnail) {
		return `/documents/${props.document.thumbnail}`;
	} else {
		return `/documents/doc-coming_soon.png`;
	}
})
</script>