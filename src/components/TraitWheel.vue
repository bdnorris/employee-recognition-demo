<template>
	<TraitSlider :traits="traits" :selects="false" />
	<div class="traitwheel traitwheel--desktop">
		<h2>Our Traits</h2>
		<p>Select a character trait to learn more about it.</p>
		<div class="traitwheel__columns">
			<div class="traitwheel__traits">
				<ul>
					<li v-for="(trait, index) in traits" :key="index">
						<button
							class="traitwheel__brush-lockup"
							@click="selectTrait(trait, index)"
						>
							<div class="traitwheel__chevron">
								<RightChevron :color="trait.color" />
							</div>
							<ThickBrush :color="trait.color" />
							<h3>{{ trait.name }}</h3>
						</button>
						<div
							class="traitwheel__ornament"
							v-if="selectedTrait && trait.slug === selectedTrait.slug"
						>
							<LineOrnamentRight :color="trait.color" />
						</div>
					</li>
				</ul>
			</div>
			<div class="traitwheel__wheel">
				<div v-if="selectedTrait" class="traitwheel__content">
					<h3 :style="`color: ${selectedTrait.color};`">
						{{ selectedTrait.name }}
					</h3>
					<p :style="`color: ${selectedTrait.color};`">
						{{ selectedTrait.description }}
					</p>
				</div>
				<TrainWheelSVG
					@handleLeafClick="handleLeafClickFromWheel"
					:trait="selectedTrait ? selectedTrait.slug : ''"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

import TrainWheelSVG from "@/components/svg/TrainWheelSVG.vue";
import ThickBrush from "@/components/svg/ThickBrush.vue";
import RightChevron from "@/components/svg/RightChevron.vue";
import LineOrnamentRight from "@/components/svg/LineOrnamentRight.vue";

import TraitSlider from "@/components/TraitSlider.vue";

const store = useStore();

const traits = computed(() => store.getters["traits/allTraits"]);

const selectedTrait = ref(null);

function selectTrait(trait) {
	// console.log('selecting trait', trait, index)
	selectedTrait.value = trait;
}

function handleLeafClickFromWheel(trait) {
	// console.log('handleLeafClickFromWheel', trait)
	selectedTrait.value = traits.value.find((t) => t.slug === trait);
}
</script>