<template>
	<div class="traitwheel traitwheel--mobile">
		<h2 v-if="!props.selects" class="h3">Our Traits</h2>
		<p v-if="!props.selects" class="p--sans">
			Select a character trait to learn more about it.
		</p>
		<swiper
			:slides-per-view="1"
			:space-between="10"
			navigation
			:loop="false"
			:pagination="{
				clickable: true,
			}"
			:modules="modules"
			@swiper="onSwiper"
			@slideChange="onSlideChange"
		>
			<template v-if="props.selects">
				<swiper-slide>
					<div class="traitwheel__brush-lockup">
						<ThickBrush color="#4C3327" />
						<h3>All Traits</h3>
					</div>
				</swiper-slide>
			</template>
			<swiper-slide v-for="(trait, index) in traits" :key="index">
				<div class="traitwheel__brush-lockup">
					<ThickBrush :color="trait.color" />
					<h3>{{ trait.name }}</h3>
				</div>
				<p v-if="!props.selects" :style="`color: ${trait.color};`">
					{{ trait.description }}
				</p>
			</swiper-slide>
		</swiper>
		<ul class="traitwheel__slider-controls">
			<li v-if="props.selects">
				<LeafStroke
					:color="'#4C3327'"
					:faded="activeIndex < 0 ? false : true"
					@click="handleLeafClick(0)"
				/>
			</li>
			<li v-for="(trait, index) in traits" :key="index">
				<LeafStroke
					:color="trait.color"
					:key="index"
					:faded="activeIndex === index ? false : true"
					@click="handleLeafClick(props.selects ? index + 1 : index)"
				/>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref } from "vue";
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import { useSwiper } from "swiper/vue";

import LeafStroke from "@/components/svg/LeafStroke.vue";
import ThickBrush from "@/components/svg/ThickBrush.vue";

import "swiper/css";

const modules = [Navigation, Pagination, A11y];

const props = defineProps({
	traits: {
		type: Array,
		required: true,
	},
	selects: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits({
	select: "select",
});

const mySwiper = ref(null);

const activeIndex = ref(props.selects ? -1 : 0);

const onSwiper = function (swiper) {
	mySwiper.value = swiper;
	// console.log(mySwiper.value)
};

const onSlideChange = function (swiper) {
	// console.log('slide change', swiper.activeIndex - 1)
	activeIndex.value = props.selects
		? swiper.activeIndex - 1
		: swiper.activeIndex;
	if (props.selects) {
		if (swiper.activeIndex === 0) {
			emit("select", "");
		} else {
			emit("select", props.traits[swiper.activeIndex - 1].slug);
		}
	}
	// mySwiper.value.slideTo(swiper.activeIndex)
};

function handleLeafClick(index) {
	mySwiper.value.slideTo(index);
}
</script>