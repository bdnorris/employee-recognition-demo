<template>
	<section class="container container--wide">
		<StandardHeader>
			<h1>Thank you for your nomination.</h1>
			<p class="tree-message tree-message__mobile">
				Use the arrows to see how your teammates have been nurturing our
				collective character.
			</p>
			<p class="tree-message tree-message__desktop">
				Click on a leaf or a trait to see how your teammates have been nurturing
				our collective character.
			</p>
		</StandardHeader>
		<div class="tree">
			<div class="tree__tree">
				<Tree
					:nominees-filtered="nomineesFiltered"
					:all-nominees="allNominees"
					:selected-nominee="selectedNominee"
					@leafSelectFromTree="selectNomineeFromLeafClick"
				/>
			</div>
			<div class="tree__filter-and-list">
				<div class="tree__desktop-header">
					<LittleLeaf />
					<h1>Thank you for your nomination</h1>
					<p class="p--sans">
						Click on a leaf or a trait to see how your teammates have been
						nurturing our collective character.
					</p>
				</div>
				<div class="tree__filter-and-list-wrapper">
					<TraitSlider
						:traits="traits"
						:selects="true"
						@select="selectFromSlider"
					/>
					<NomineeList
						:nominees-filtered="nomineesFiltered"
						:selected-nominee="selectedNominee"
						:passed-trait="passOpenAccordionAsProp"
						@selectTrait="selectTraitFromNomineeList"
						@selectNominee="selectNomineeFromNomineeList"
					/>
				</div>
				<div
					class="page-button"
					v-if="nomineeTotalCount - 42 * nomineePage > 0"
				>
					<button @click="previousNominees" class="button">
						Previous
						{{
							nomineePage === 1
								? 42
								: nomineeTotalCount - 42 * (nomineePage - 1)
						}}
						Nominees of
						{{ nomineeTotalCount - 42 * (nomineePage - 1) }} Nominees
					</button>
				</div>
			</div>
		</div>
		<!-- <div class="ground" aria-hidden="true"></div> -->
	</section>
</template>

<script>
import { mapGetters } from "vuex";

import NomineeList from "@/components/NomineeList.vue";
import Tree from "@/components/Tree.vue";
import StandardHeader from "@/components/content/StandardHeader.vue";
import TraitSlider from "@/components/TraitSlider.vue";
// import GreenBrush from "@/components/svg/GreenBrush.vue";
import LittleLeaf from "@/components/svg/LittleLeaf.vue";

export default {
	name: "TreeView",
	components: {
		StandardHeader,
		Tree,
		NomineeList,
		TraitSlider,
		LittleLeaf,
	},
	data() {
		return {
			filteredBy: "",
			selectedNominee: null,
			// nominees: this.$store.getters('nominees/allNominees'),
			passOpenAccordionAsProp: "", // this is not reactive all the time, only if you click a leaf on the tree
			nomineePage: 1,
		};
	},
	computed: {
		...mapGetters("nominees", [
			"firstFortyTwoNonSuspendedNominees",
			"nonSuspendedNomineesByIndex",
			"nomineeCount",
			// ...
		]),
		traits() {
			return this.$store.getters["traits/allTraits"];
		},
		nomineesFiltered() {
			if (this.nomineePage === 1) {
				if (this.filteredBy === "") {
					return this.firstFortyTwoNonSuspendedNominees;
				} else {
					return this.firstFortyTwoNonSuspendedNominees.filter((nominee) => {
						return nominee.fields.Trait === this.filteredBy;
					});
				}
			} else if (this.nomineePage > 1) {
				if (this.filteredBy === "") {
					// console.log('ba', this.nonSuspendedNomineesByIndex(this.pageRangeForSlice[0], this.pageRangeForSlice[1]))
					return this.nonSuspendedNomineesByIndex(
						this.pageRangeForSlice[0],
						this.pageRangeForSlice[1]
					);
				} else {
					// console.log('bb', this.nonSuspendedNomineesByIndex(this.pageRangeForSlice[0], this.pageRangeForSlice[1]).filter((nominee) => {
					//   return nominee.fields.Trait === this.filteredBy;
					// }))
					return this.nonSuspendedNomineesByIndex(
						this.pageRangeForSlice[0],
						this.pageRangeForSlice[1]
					).filter((nominee) => {
						return nominee.fields.Trait === this.filteredBy;
					});
				}
			} else {
				return [];
			}
		},
		allNominees() {
			if (this.nomineePage === 1) {
				return this.$store.getters[
					"nominees/firstFortyTwoNonSuspendedNominees"
				];
			} else if (this.nomineePage > 1) {
				return this.$store.getters["nominees/nonSuspendedNomineesByIndex"](
					this.pageRangeForSlice[0],
					this.pageRangeForSlice[1]
				);
			} else {
				return [];
			}
		},
		nomineeTotalCount() {
			return this.nomineeCount;
		},
		pageRangeForSlice() {
			return [42 * (this.nomineePage - 1), 42 * this.nomineePage];
		},
	},
	methods: {
		filterByTrait(trait) {
			// console.log("filterByTrait", trait);
			this.filteredBy = trait;
			this.selectedNominee = null;
		},
		selectNomineeFromLeafClick(index) {
			// console.log("selectNomineeFromLeafClick", index);
			this.selectedNominee = this.allNominees[index];
			// pass this nominees trait to the nominee list so the thing will be open
			// console.log("FFF", this.selectedNominee.fields.Trait);
			this.passOpenAccordionAsProp = this.selectedNominee.fields.Trait;
		},
		selectNomineeFromNomineeList(nomineeId) {
			// console.log("selectNomineeFromNomineeList", nomineeId)
			this.selectedNominee = this.allNominees.find((nominee) => {
				return nominee.fields.Nominee === nomineeId;
			});
		},
		selectFromSlider(trait) {
			// console.log("selectFromSlider", trait);
			this.filterByTrait(trait);
		},
		selectTraitFromNomineeList(trait) {
			// console.log("selectFromNomineeList", trait);
			this.filterByTrait(trait);
		},
		previousNominees() {
			this.nomineePage++;
		},
	},
};
</script>

<style scoped>
.page-button {
	padding: 1em 0 0 0;
}
</style>