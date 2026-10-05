<template>
	<div class="the-tree" aria-controls="nominee-list">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			width="1223.668"
			height="932.956"
			viewBox="0 0 1223.668 932.956"
		>
			<defs>
				<Patterns />
			</defs>
			<g id="tree-illustration" transform="translate(-822.712 -168.678)">
				<g data-id="Trunk" transform="translate(822.712 204.365)">
					<path
						data-id="Trunk"
						data-name="Trunk"
						d="M0,897.269s84.144-71.806,199.669-62.83c105.886,8.218,241.732-86.868,246.445-278.156-8.291-3.552-32.21-7.7-49.9-11.77-26.382-5.9-51.7-16.222-74.6-28.421-80.119-43.527-148.847-105.41-206.751-174.968-12.08-15.464-24.3-31.188-32.565-49.117a62.933,62.933,0,0,1-2.936-7.864c9.023,20.415,25.2,36.685,40.164,52.884A764.893,764.893,0,0,0,276.449,458.877c39.267,22.427,82.062,41.375,126.466,48.17,27.59,4.24,45.969-1.751,45.969-1.751,1.467-24.727,6.208-64.979-17.264-100.8-57.723-88.069-145.745-169-197.682-166.985,114.433-7.191,198.983,119.927,222.618,148.417l1.35,1.635c-3.2-56.577,1.138-113.157,19.988-166.988,25.293-66.857,62.31-129.64,110.6-182.358C605.357,20.673,625.914,3.764,650.542,0c-42.935,12.171-72.041,68.608-92.29,105.625A581.661,581.661,0,0,0,514.011,222c-1.017,4.17-2.864,12.623-3.647,16.84-7.934,42.345-6.418,85.872.616,128.243C533.644,332.742,597.41,254.6,650.058,227.515c4.974-2.509,16.6-8.953,21.553-11.2a268.152,268.152,0,0,1,38.033-14.377c80.026-22.663,166.111-14.47,245.022,7.983-85.091-12.054-183.755-8.006-258.639,36.258-6.891,4-16.648,11.343-23.258,16.009-3.34,2.3-7.672,6.345-10.846,8.927-7.152,5.686-13.712,12.623-20.107,19.041-24.535,27.259-93.087,118.68-95.692,155.34,0,0-3.127,21.268-3.694,31.1a183.533,183.533,0,0,1,54.423-14.232c3.055-.308,7.53-.8,10.515-.923,5.66-.285,21.856-1.534,27.779-1.9,25.956-1.578,44.285,3.878,105.6-7.869,24.251-4.76,48.6-10.254,71.878-18.141,12.243-4.31,46.055-22.342,52.9-28.271,28.7-24.877,85.7-71.164,85.7-71.164S918.62,376.067,888,404.133c-8.071,7.4-53.732,41.949-67.514,48.556C785.224,468.983,748.821,482.631,711,490.606c-30.081,6.343-39.011,8.257-97.808,23.332-26.641,6.834-52.907,17.1-71.71,36.97C545.06,652.981,588.75,743.36,661,778.654c73.834,36.065,47.263,55.651,562.665,87.4-6.211-.383-1085.691-21.5-1223.668,31.214"
						fill="url(#trunk-pattern)"
					/>
				</g>
				<g
					v-if="count > 0"
					data-name="Orange L"
					transform="matrix(0.875, -0.485, 0.485, 0.875, 982.925, 445.918)"
				>
					<Leaf
						v-if="filtered(0)"
						:trait="allNominees[0].fields.Trait"
						direction="left"
						@leafSelect="leafSelect"
						:index="0"
						:is-selected="isSelected(0)"
					/>
				</g>
				<g
					v-if="count > 1"
					data-name="Orange L"
					transform="matrix(0.875, -0.485, 0.485, 0.875, 1061.302, 717.565)"
				>
					<Leaf
						v-if="filtered(1)"
						:trait="allNominees[1].fields.Trait"
						direction="left"
						@leafSelect="leafSelect"
						:index="1"
						:is-selected="isSelected(1)"
					/>
				</g>
				<g
					v-if="count > 2"
					data-name="Orange L"
					transform="translate(1448.69 604.054) rotate(22)"
				>
					<Leaf
						v-if="filtered(2)"
						:trait="allNominees[2].fields.Trait"
						direction="left"
						@leafSelect="leafSelect"
						:index="2"
						:is-selected="isSelected(2)"
					/>
				</g>
				<g
					v-if="count > 3"
					data-name="Orange R"
					transform="translate(1424.302 220.693) rotate(21)"
				>
					<Leaf
						v-if="filtered(3)"
						:trait="allNominees[3].fields.Trait"
						direction="right"
						@leafSelect="leafSelect"
						:index="3"
						:is-selected="isSelected(3)"
					/>
				</g>
				<g
					v-if="count > 4"
					data-name="Orange R"
					transform="translate(972.783 540.614) rotate(-9)"
				>
					<Leaf
						v-if="filtered(4)"
						:trait="allNominees[4].fields.Trait"
						direction="right"
						@leafSelect="leafSelect"
						:index="4"
						:is-selected="isSelected(4)"
					/>
				</g>
				<g
					v-if="count > 5"
					data-name="Orange R"
					transform="translate(1697.665 385.432) rotate(62)"
				>
					<Leaf
						v-if="filtered(5)"
						:trait="allNominees[5].fields.Trait"
						direction="right"
						@leafSelect="leafSelect"
						:index="5"
						:is-selected="isSelected(5)"
					/>
				</g>
				<g
					v-if="count > 6"
					data-name="Orange R"
					transform="translate(1709.993 611.027) rotate(62)"
				>
					<Leaf
						v-if="filtered(6)"
						:trait="allNominees[6].fields.Trait"
						direction="right"
						@leafSelect="leafSelect"
						:index="6"
						:is-selected="isSelected(6)"
					/>
				</g>
				<g
					v-if="count > 7"
					data-name="Teal L"
					transform="translate(842.914 539.236) rotate(-41)"
				>
					<Leaf
						v-if="filtered(7)"
						:trait="allNominees[7].fields.Trait"
						direction="left"
						@leafSelect="leafSelect"
						:index="7"
						:is-selected="isSelected(7)"
					/>
				</g>
				<g
					v-if="count > 8"
					data-name="Teal L"
					transform="translate(1668.259 522.574) rotate(17)"
				>
					<Leaf
						v-if="filtered(8)"
						:trait="allNominees[8].fields.Trait"
						direction="left"
						@leafSelect="leafSelect"
						:index="8"
						:is-selected="isSelected(8)"
					/>
				</g>
				<g
					v-if="count > 9"
					data-name="Teal L"
					transform="matrix(0.766, -0.643, 0.643, 0.766, 1061.302, 494.217)"
				>
					<Leaf
						v-if="filtered(9)"
						:trait="allNominees[9].fields.Trait"
						direction="left"
						@leafSelect="leafSelect"
						:index="9"
						:is-selected="isSelected(9)"
					/>
				</g>
				<g
					v-if="count > 10"
					data-name="Teal L"
					transform="matrix(0.53, 0.848, -0.848, 0.53, 1376.138, 424.95)"
				>
					<Leaf
						v-if="filtered(10)"
						:trait="allNominees[10].fields.Trait"
						direction="left"
						@leafSelect="leafSelect"
						:index="10"
						:is-selected="isSelected(10)"
					/>
				</g>
				<g
					v-if="count > 11"
					id="Teal_R"
					data-name="Teal R"
					transform="matrix(0.809, 0.588, -0.588, 0.809, 1783.758, 385.432)"
				>
					<Leaf
						v-if="filtered(11)"
						:trait="allNominees[11].fields.Trait"
						direction="right"
						@leafSelect="leafSelect"
						:index="11"
						:is-selected="isSelected(11)"
					/>
				</g>
				<g
					v-if="count > 12"
					id="Teal_R-4"
					data-name="Teal R"
					transform="matrix(0.809, 0.588, -0.588, 0.809, 1391.87, 290)"
				>
					<Leaf
						v-if="filtered(12)"
						:trait="allNominees[12].fields.Trait"
						direction="right"
						@leafSelect="leafSelect"
						:index="12"
						:is-selected="isSelected(12)"
					/>
				</g>
				<g
					v-if="count > 13"
					id="Teal_R-7"
					data-name="Teal R"
					transform="translate(1020.615 614.408) rotate(-41)"
				>
					<Leaf
						v-if="filtered(13)"
						:trait="allNominees[13].fields.Trait"
						direction="right"
						@leafSelect="leafSelect"
						:index="13"
						:is-selected="isSelected(13)"
					/>
				</g>
				<g
					v-if="count > 14"
					id="Burgundy_L"
					data-name="Burgundy L"
					transform="translate(1305 245.063)"
				>
					<Leaf
						v-if="filtered(14)"
						:trait="allNominees[14].fields.Trait"
						direction="left"
						@leafSelect="leafSelect"
						:index="14"
						:is-selected="isSelected(14)"
					/>
				</g>
				<g
					v-if="count > 15"
					data-name="Burgundy L"
					transform="translate(1736.584 338.241) rotate(41)"
				>
					<Leaf
						v-if="filtered(15)"
						:trait="allNominees[15].fields.Trait"
						direction="left"
						@leafSelect="leafSelect"
						:index="15"
						:is-selected="isSelected(15)"
					/>
				</g>
				<g
					v-if="count > 16"
					data-name="Burgundy L"
					transform="translate(1448.585 355.3) rotate(41)"
				>
					<Leaf
						v-if="filtered(16)"
						:trait="allNominees[16].fields.Trait"
						direction="left"
						@leafSelect="leafSelect"
						:index="16"
						:is-selected="isSelected(16)"
					/>
				</g>
				<g
					v-if="count > 17"
					data-name="Burgundy L"
					transform="translate(1126.391 553.428) rotate(-39)"
				>
					<Leaf
						v-if="filtered(17)"
						:trait="allNominees[17].fields.Trait"
						direction="left"
						@leafSelect="leafSelect"
						:index="17"
						:is-selected="isSelected(17)"
					/>
				</g>
				<g
					v-if="count > 18"
					data-name="Burgundy R"
					transform="translate(911.827 493.633) rotate(-21)"
				>
					<Leaf
						v-if="filtered(18)"
						:trait="allNominees[18].fields.Trait"
						direction="right"
						@leafSelect="leafSelect"
						:index="18"
						:is-selected="isSelected(18)"
					/>
				</g>
				<g
					v-if="count > 19"
					data-name="Burgundy R"
					transform="translate(1576.153 674.515) rotate(73)"
				>
					<Leaf
						v-if="filtered(19)"
						:trait="allNominees[19].fields.Trait"
						direction="right"
						@leafSelect="leafSelect"
						:index="19"
						:is-selected="isSelected(19)"
					/>
				</g>
				<g
					v-if="count > 20"
					data-name="Burgundy R"
					transform="matrix(0.819, -0.574, 0.574, 0.819, 1184.407, 685.922)"
				>
					<Leaf
						v-if="filtered(20)"
						:trait="allNominees[20].fields.Trait"
						direction="right"
						@leafSelect="leafSelect"
						:index="20"
						:is-selected="isSelected(20)"
					/>
				</g>
				<g
					v-if="count > 21"
					data-name="Green L"
					transform="translate(1360.911 209.814) rotate(-21)"
				>
					<Leaf
						v-if="filtered(21)"
						:trait="allNominees[21].fields.Trait"
						direction="left"
						@leafSelect="leafSelect"
						:index="21"
						:is-selected="isSelected(21)"
					/>
				</g>
				<g
					v-if="count > 22"
					data-name="Green L"
					transform="translate(953.601 633.317) rotate(-21)"
				>
					<Leaf
						v-if="filtered(22)"
						:trait="allNominees[22].fields.Trait"
						direction="left"
						@leafSelect="leafSelect"
						:index="22"
						:is-selected="isSelected(22)"
					/>
				</g>
				<g
					v-if="count > 23"
					data-name="Green L"
					transform="translate(1532.298 580.609) rotate(52)"
				>
					<Leaf
						v-if="filtered(23)"
						:trait="allNominees[23].fields.Trait"
						direction="left"
						@leafSelect="leafSelect"
						:index="23"
						:is-selected="isSelected(23)"
					/>
				</g>
				<g
					v-if="count > 24"
					data-name="Green R"
					transform="matrix(0.921, 0.391, -0.391, 0.921, 1407.403, 551.592)"
				>
					<Leaf
						v-if="filtered(24)"
						:trait="allNominees[24].fields.Trait"
						direction="right"
						@leafSelect="leafSelect"
						:index="24"
						:is-selected="isSelected(24)"
					/>
				</g>
				<g
					v-if="count > 25"
					data-name="Green R"
					transform="matrix(0.921, 0.391, -0.391, 0.921, 1781.403, 503.672)"
				>
					<Leaf
						v-if="filtered(25)"
						:trait="allNominees[25].fields.Trait"
						direction="right"
						@leafSelect="leafSelect"
						:index="25"
						:is-selected="isSelected(25)"
					/>
				</g>
				<g
					v-if="count > 26"
					data-name="Green R"
					transform="matrix(0.993, -0.122, 0.122, 0.993, 1143.025, 430.081)"
				>
					<Leaf
						v-if="filtered(26)"
						:trait="allNominees[26].fields.Trait"
						direction="right"
						@leafSelect="leafSelect"
						:index="26"
						:is-selected="isSelected(26)"
					/>
				</g>
				<g
					v-if="count > 27"
					data-name="Green R"
					transform="translate(1117.843 635.815) rotate(6)"
				>
					<Leaf
						v-if="filtered(27)"
						:trait="allNominees[27].fields.Trait"
						direction="right"
						@leafSelect="leafSelect"
						:index="27"
						:is-selected="isSelected(27)"
					/>
				</g>
				<g
					v-if="count > 28"
					data-name="Red L"
					transform="matrix(0.899, -0.438, 0.438, 0.899, 883.601, 577.377)"
				>
					<Leaf
						v-if="filtered(28)"
						:trait="allNominees[28].fields.Trait"
						direction="left"
						@leafSelect="leafSelect"
						:index="28"
						:is-selected="isSelected(28)"
					/>
				</g>
				<g
					v-if="count > 29"
					data-name="Red L"
					transform="matrix(0.914, 0.407, -0.407, 0.914, 1588.704, 577.906)"
				>
					<Leaf
						v-if="filtered(29)"
						:trait="allNominees[29].fields.Trait"
						direction="left"
						@leafSelect="leafSelect"
						:index="29"
						:is-selected="isSelected(29)"
					/>
				</g>
				<g
					v-if="count > 30"
					data-name="Red L"
					transform="translate(1253.546 331.863)"
				>
					<Leaf
						v-if="filtered(30)"
						:trait="allNominees[30].fields.Trait"
						direction="left"
						@leafSelect="leafSelect"
						:index="30"
						:is-selected="isSelected(30)"
					/>
				</g>
				<g
					v-if="count > 31"
					data-name="Red R"
					transform="translate(1543.623 415.941) rotate(42)"
				>
					<Leaf
						v-if="filtered(31)"
						:trait="allNominees[31].fields.Trait"
						direction="right"
						@leafSelect="leafSelect"
						:index="31"
						:is-selected="isSelected(31)"
					/>
				</g>
				<g
					v-if="count > 32"
					data-name="Red R"
					transform="translate(1465.046 170.678)"
				>
					<Leaf
						v-if="filtered(32)"
						:trait="allNominees[32].fields.Trait"
						direction="right"
						@leafSelect="leafSelect"
						:index="32"
						:is-selected="isSelected(32)"
					/>
				</g>
				<g
					v-if="count > 33"
					data-name="Red R"
					transform="translate(1196.868 471.795) rotate(-9)"
				>
					<Leaf
						v-if="filtered(33)"
						:trait="allNominees[33].fields.Trait"
						direction="right"
						@leafSelect="leafSelect"
						:index="33"
						:is-selected="isSelected(33)"
					/>
				</g>
				<g
					v-if="count > 34"
					data-name="Red R"
					transform="translate(1516.207 693.195) rotate(91)"
				>
					<Leaf
						v-if="filtered(34)"
						:trait="allNominees[34].fields.Trait"
						direction="right"
						@leafSelect="leafSelect"
						:index="34"
						:is-selected="isSelected(34)"
					/>
				</g>
				<g
					v-if="count > 35"
					data-name="Dark Green L"
					transform="translate(834.101 460.062)"
				>
					<Leaf
						v-if="filtered(35)"
						:trait="allNominees[35].fields.Trait"
						direction="left"
						@leafSelect="leafSelect"
						:index="35"
						:is-selected="isSelected(35)"
					/>
				</g>
				<g
					v-if="count > 36"
					data-name="Dark Green L"
					transform="translate(1624.13 320) rotate(41)"
				>
					<Leaf
						v-if="filtered(36)"
						:trait="allNominees[36].fields.Trait"
						direction="left"
						@leafSelect="leafSelect"
						:index="36"
						:is-selected="isSelected(36)"
					/>
				</g>
				<g
					v-if="count > 37"
					data-name="Dark Green L"
					transform="translate(1230 390.679)"
				>
					<Leaf
						v-if="filtered(37)"
						:trait="allNominees[37].fields.Trait"
						direction="left"
						@leafSelect="leafSelect"
						:index="37"
						:is-selected="isSelected(37)"
					/>
				</g>
				<g
					v-if="count > 38"
					data-name="Dark Green L"
					transform="translate(1397.046 397.7)"
				>
					<Leaf
						v-if="filtered(38)"
						:trait="allNominees[38].fields.Trait"
						direction="left"
						@leafSelect="leafSelect"
						:index="38"
						:is-selected="isSelected(38)"
					/>
				</g>
				<g
					v-if="count > 39"
					data-name="Dark Green R"
					transform="matrix(0.809, -0.588, 0.588, 0.809, 1043.111, 413.703)"
				>
					<Leaf
						v-if="filtered(39)"
						:trait="allNominees[39].fields.Trait"
						direction="right"
						@leafSelect="leafSelect"
						:index="39"
						:is-selected="isSelected(39)"
					/>
				</g>
				<g
					v-if="count > 40"
					data-name="Dark Green R"
					transform="matrix(0.809, -0.588, 0.588, 0.809, 1084.546, 642.584)"
				>
					<Leaf
						v-if="filtered(40)"
						:trait="allNominees[40].fields.Trait"
						direction="right"
						@leafSelect="leafSelect"
						:index="40"
						:is-selected="isSelected(40)"
					/>
				</g>
				<g
					v-if="count > 41"
					data-name="Dark Green R"
					transform="translate(1782.816 559.497) rotate(85)"
				>
					<Leaf
						v-if="filtered(41)"
						:trait="allNominees[41].fields.Trait"
						direction="right"
						@leafSelect="leafSelect"
						:index="41"
						:is-selected="isSelected(41)"
					/>
				</g>
			</g>
		</svg>
	</div>
</template>

<script setup>
import Patterns from "@/components/Patterns.vue";
import Leaf from "@/components/Leaf.vue";

import { computed } from "vue";

const props = defineProps({
	allNominees: Array,
	nomineesFiltered: Array,
	selectedNominee: Object,
});
const emit = defineEmits({
	leafSelectFromTree: "leafSelectFromTree",
});

const isSelected = function (index) {
	if (props.selectedNominee) {
		// console.log('selected nominee', props.selectedNominee.fields.Nominee - 1, props.selectedNominee.fields.Trait)
		// console.log('the nominee that matches that index', props.nomineesFiltered[index].fields.Nominee, props.nomineesFiltered[index].fields.Trait)
		let isItSelected =
			props.selectedNominee.fields.Nominee ===
			props.allNominees[index].fields.Nominee;
		// console.log('isSelected determine', index, isItSelected)
		return isItSelected;
	} else {
		// console.log('isSelected false', index)
		return false;
	}
};
const filtered = function (index) {
	let isItFiltered = false;
	props.nomineesFiltered.map((nominee) => {
		// console.log('filtered', nominee.fields.Nominee, props.allNominees[index].fields.Nominee)
		if (nominee.fields.Nominee === props.allNominees[index].fields.Nominee) {
			isItFiltered = true;
		}
	});
	return isItFiltered;
};

const count = computed(() => {
	return props.allNominees.length;
});

function leafSelect(e, index) {
	// console.log('leafSelect from Tree.vue', e, index)
	emit("leafSelectFromTree", index);
}
</script>