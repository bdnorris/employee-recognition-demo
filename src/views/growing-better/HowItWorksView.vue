<template>
	<section class="container container--wider">
		<StandardHeader>
			<h1>How It Works</h1>
		</StandardHeader>
		<DotItems :items="itemData" color-scheme="better-way" size="small" />
		<TraitWheel />
		<FooterNext to="/growing-better/nominate" title="Nomination" />
	</section>
</template>

<script setup>
import TraitWheel from "@/components/TraitWheel.vue";
import StandardHeader from "@/components/content/StandardHeader.vue";
import DotItems from "@/components/content/DotItems.vue";
import FooterNext from "@/components/FooterNext.vue";

const itemData = [
	{
		image: "/icons/icon-notice.png",
		imageAlt: "",
		heading: "Notice",
		description: `Keep your eyes peeled for teammates who exemplify one of our key character traits (noted below).`,
	},
	{
		image: "/icons/icon-nominate.png",
		imageAlt: "",
		heading: "Nominate",
		description: `<button data-to="/growing-better/nominate">Nominate your teammates</button> to be recognized for their hard work. Nominate anyone, anytime, for as many traits as you wish.`,
	},
	{
		image: "/icons/icon-watch.png",
		imageAlt: "",
		heading: "Watch",
		description: `Check out <button data-to="/growing-better/tree">the tree</button> to see how our character grows.`,
	},
	{
		image: "/icons/icon-celebrate.png",
		imageAlt: "",
		heading: "Celebrate",
		description: `Each quarter, the FS Leadership Team will celebrate six individuals who best exemplified one of the six character traits.`,
	},
];
</script>
