<template>
	<div class="navigation-border" aria-hidden="true"></div>
	<div class="navigation">
		<div>
			<div class="navigation__logo">
				<RouterLink to="/" aria-label="Home">
					Logo
				</RouterLink>
			</div>
			<div
				class="navigation__mobile-toggle"
				:class="{ active: navigationToggle }"
			>
				<button type="button" @click="toggleMenu">
					<MenuToggle :active="navigationToggle" />
				</button>
			</div>
		</div>
		<nav :class="{ active: navigationToggle }">
			<div class="navigation__group">
				<button
					type="button"
					:class="{
						active: $route.path.includes('growing-better'),
						open: navigationState.active === 'growing-better',
					}"
					@click="toggleNavGroup('growing-better')"
				>
					<span>
						<span>Growing Better</span>
						<ThinStroke />
					</span>
				</button>
				<Transition>
					<ul
						v-if="
							navigationState.active === 'growing-better' ||
							navigationState.active === 'both'
						"
						v-click-outside="onClickOutside"
					>
						<li>
							<RouterLink to="/growing-better">
								<LittleLeaf />
								<span>What Is It?</span>
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/growing-better/how-it-works">
								<LittleLeaf />
								<span>How it Works</span>
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/growing-better/nominate">
								<LittleLeaf />
								<span>Nomination</span>
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/growing-better/tree">
								<LittleLeaf />
								<span>Tree</span>
							</RouterLink>
						</li>
					</ul>
				</Transition>
			</div>
		</nav>
	</div>
	<BreadCrumb />
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { debounce } from "throttle-debounce";

import BreadCrumb from "@/components/BreadCrumb.vue";
import LittleLeaf from "@/components/svg/LittleLeaf.vue";
import ThinStroke from "@/components/svg/ThinStroke.vue";
import MenuToggle from "@/components/svg/MenuToggle.vue";

const router = useRouter();
// console.log(router)

const navigationState = ref({
	active: false,
});
const navigationToggle = ref(false);

const toggleNavGroup = (id) => {
	if (id === "both") {
		navigationState.value.active = "both";
	} else if (navigationState.value.active === id) {
		navigationState.value.active = false;
	} else {
		navigationState.value.active = id;
	}
};

const toggleMenu = () => {
	if (navigationToggle.value) {
		navigationToggle.value = false;
	} else {
		navigationToggle.value = true;
		toggleNavGroup("both");
	}
};

watch(router.currentRoute, () => {
	// console.log("router changed");
	navigationState.value.active = false;
	navigationToggle.value = false;
});

let viewportWidth = null

onMounted(() => {
	viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
})

const debounceFunc = debounce(500, false, () => {
	viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
	console.log('viewportWidth', viewportWidth);
})

window.addEventListener("resize", debounceFunc);

const onClickOutside = () => {
	if (viewportWidth > 768) {
		console.log("onClickOutside");
		navigationState.value.active = false;
		navigationToggle.value = false;
	}
};


</script>

<style lang="scss">
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>