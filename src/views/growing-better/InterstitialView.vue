<template>
	<section class="container container--wide">
		<div class="interstitial">
			<div class="interstitial__content">
				<video playslinline muted autoplay ="letsGo" poster="/video/GrowingBetter-LeafAnimation_mobile_c.png" @ended="letsGo">
					<source
						src="/video/GrowingBetter-LeafAnimation_mobile_c.mp4"
						type="video/mp4"
					/>
				</video>
				<video playslinline muted autoplay ="letsGo" poster="/video/GrowingBetter-LeafAnimation_c.png" @ended="letsGo">
					<source
						src="/video/GrowingBetter-LeafAnimation_c.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
			<router-link class="skip-link" to="/growing-better/tree"
				>Skip Video</router-link
			>
		</div>
	</section>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function letsGo() {
	router.push({ name: "tree" });
}
</script>

<style>
a.skip-link {
	font-size: 12px;
	font-weight: 500;
	text-align: center;
	padding: 0.5em;
	display: block;
}
</style>