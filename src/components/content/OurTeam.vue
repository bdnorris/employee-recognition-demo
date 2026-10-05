<template>
	<div :class="['our-team', 'our-team--' + props.page]">
		<h2 v-if="props.page !== 'form'">
			We are
		</h2>
		<ul>
			<li v-for="(trait, index) in traits" :key="index">
				<div class="character-trait" :style="`animation-delay: calc(200ms * ${index})`">
					<div class="character-trait__title">
						<ThickBrush :color="trait.color" />
						<h2 class="h3">{{ trait.name }}</h2>
					</div>
					<div class="standard-box">
						<LeafStroke v-if="props.page === 'form'" :color="trait.color" />
						<LittleLeaf v-else />
						<p class="p--sans">{{ trait.description }}</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

import LittleLeaf from "@/components/svg/LittleLeaf.vue";
import LeafStroke from "@/components/svg/LeafStroke.vue";
import ThickBrush from "@/components/svg/ThickBrush.vue";

const store = useStore();

const traits = computed(() => store.getters["traits/allTraits"]);

const props = defineProps({
	page: {
		type: String,
		default: "",
	},
});
</script>