<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

import NominationForm from "@/components/NominationForm.vue";
import StandardHeader from "@/components/content/StandardHeader.vue";
import OurTeam from "@/components/content/OurTeam.vue";
import TraitSlider from "@/components/TraitSlider.vue";

const traits = computed(() => store.getters["traits/allTraits"]);
</script>

<template>
	<section class="container">
		<StandardHeader>
			<h1>Nominate</h1>
			<p>
				Tell us about a co-worker who demonstrated a core Obfuscated Company character
				trait.
			</p>
		</StandardHeader>
		<div class="columns">
			<section>
				<TraitSlider :traits="traits" :selects="false" />
				<NominationForm />
			</section>
			<aside>
				<OurTeam page="form" />
			</aside>
		</div>
	</section>
</template>
