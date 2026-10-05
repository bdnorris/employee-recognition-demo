<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";

import RightChevron from "@/components/svg/RightChevron.vue";
import ThickBrush from "@/components/svg/ThickBrush.vue";

export default {
	props: {
		nomineesFiltered: {
			type: Array,
			default: () => [],
		},
		selectedNominee: {
			type: Object,
			default: () => ({}),
		},
		passedTrait: {
			type: String,
			default: "",
		},
	},
	emits: ["selectNominee", "selectTrait"],
	components: {
		RightChevron,
		ThickBrush,
	},
	setup(props, context) {
		const store = useStore();
		const allTraits = computed(() => store.getters["traits/allTraits"]);
		const selectedTrait = ref(null);

		const color = function (currTrait) {
			return allTraits.value.find((trait) => trait.slug === currTrait).color;
		};

		const selectNominee = function (nomineeId) {
			// console.log("selectNominee", nomineeId);
			context.emit("selectNominee", nomineeId);
		};
		const selectTrait = function (trait) {
			if (trait) {
				context.emit("selectTrait", trait.slug);
			} else {
				context.emit("selectTrait", "");
			}
		};

		const nomineesByTrait = computed(() => {
			const nomineesByTrait = {};
			allTraits.value.forEach((trait) => {
				nomineesByTrait[trait.slug] = [];
			});
			props.nomineesFiltered.forEach((nominee) => {
				nomineesByTrait[nominee.fields.Trait].push(nominee);
			});
			return nomineesByTrait;
		});

		function selectTraitFromList(trait) {
			if (selectedTrait.value === trait) {
				selectedTrait.value = null;
				selectTrait(null);
			} else {
				selectedTrait.value = trait;
				selectTrait(trait);
			}
		}

		watch(
			() => props.selectedNominee,
			(newNominee) => {
				if (newNominee) {
					selectedTrait.value = allTraits.value.find(
						(trait) => trait.slug === newNominee.fields.Trait
					);
					// selectTrait(selectedTrait.value);
				}
			}
		);

		return {
			selectNominee,
			allTraits,
			color,
			ThickBrush,
			RightChevron,
			nomineesByTrait,
			selectTrait,
			selectedTrait,
			selectTraitFromList,
			...props,
		};
	},
};
</script>

<template>
	<div class="nominee-list" aria-live="polite" id="nominee-list">
		<transition>
			<div class="nominee-list__loader" v-if="nomineesFiltered.length < 1">
				<span>Growing Leaves...</span>
			</div>
		</transition>
		<ul class="nominee-list__accordion">
			<li
				v-for="(trait, index) in allTraits"
				:key="index"
				:style="`border-bottom: 1px solid ${trait.color};`"
			>
				<button
					class="traitwheel__brush-lockup"
					:aria-expanded="selectedTrait && selectedTrait === trait"
					@click="selectTraitFromList(trait)"
				>
					<div class="traitwheel__chevron">
						<RightChevron :color="trait.color" />
					</div>
					<ThickBrush :color="trait.color" />
					<h2 class="h3">{{ trait.name }}</h2>
				</button>
				<ul
					:hidden="!selectedTrait || (selectedTrait && selectedTrait !== trait)"
					class="nominee-list__list"
				>
					<li
						v-for="(nominee, index) in nomineesByTrait[trait.slug]"
						:key="index"
					>
						<button
							class="nominee-list__name"
							:style="
								nominee === selectedNominee
									? `color: ${color(nominee.fields.Trait)}; font-weight: 700`
									: ``
							"
							@click="selectNominee(nominee.fields.Nominee)"
						>
							{{ nominee.fields["First Name"] }}
							{{ nominee.fields["Last Name"] }}
							<!-- {{ nominee.fields["Nominee"] }} -->
						</button>
						<div v-if="nominee === selectedNominee">
							{{ nominee.fields.Reason }}
						</div>
					</li>
				</ul>
			</li>
		</ul>
		<ul class="nominee-list__list-mobile">
			<li v-for="(nominee, index) in nomineesFiltered" :key="index">
				<div
					class="nominee-list__name"
					:style="`color: ${color(nominee.fields.Trait)}`"
				>
					{{ nominee.fields["First Name"] }} {{ nominee.fields["Last Name"] }}
				</div>
				<p
					class="nominee-list__reason"
					:style="`color: ${color(nominee.fields.Trait)}`"
				>
					{{ nominee.fields.Reason }}
				</p>
				<!-- <button class="button" @click="selectNominee(nominee.fields.Nominee)" type="button">
					Select
				</button> -->
			</li>
		</ul>
	</div>
</template>

<style>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
