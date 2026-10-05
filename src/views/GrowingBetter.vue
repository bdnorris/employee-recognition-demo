<template>
	<section class="container">
		<StandardHeader>
			<h1>Growing Better</h1>
		</StandardHeader>
		<div class="growth-text">
			<p>Growth takes time.</p>
			<LittleLeaf />
			<p>And optimism.</p>
			<LittleLeaf />
			<p>And care.</p>
			<LittleLeaf />
			<p class="growth-text_p">
				<strong>Growing Together</strong> is our way of recognizing each other
				for embodying our core character traits and nurturing our business. Bit
				by bit, we’ll watch our collective character take shape into something
				bigger and better.
			</p>
			<p class="growth-text_p">
				We wanted to find a way to celebrate all the things our team does to
				nurture our business. So we came up with
				<strong>Growing Better</strong>&mdash;an employee-led employee
				recognition program. Now you can shout out your colleagues by adding a
				&ldquo;leaf&rdquo; to our character tree. Bit by bit, we&rsquo;ll watch
				our collective character take shape into something bigger and better.
			</p>
			<LittleLeaf />
			<div class="growth-text__ornament">
				<LineOrnament />
			</div>
			<div class="growth-text__logo growth-text__logo--mobile">
				Logo
			</div>
			<div class="growth-text__logo growth-text__logo--desktop">
				Logo
			</div>
		</div>
		<FooterNext to="/growing-better/how-it-works" title="How it Works" />
	</section>
</template>

<script setup>
import StandardHeader from "@/components/content/StandardHeader.vue";
import LittleLeaf from "@/components/svg/LittleLeaf.vue";
import LineOrnament from "@/components/svg/LineOrnament.vue";
import FooterNext from "@/components/FooterNext.vue";
import { onMounted } from "vue";

onMounted(() => {
	const logo = document.querySelector(".growth-text__logo--desktop");
	if (typeof logo !== "undefined") {
		function obCallback(payload) {
			if (payload[0].isIntersecting) {
				logo.classList.add("is-visible");
			} else {
				logo.classList.remove("is-visible");
			}
		}
		const ob = new IntersectionObserver(obCallback, {
			threshold: 0.1,
		});
		ob.observe(logo);
	}
});
</script>