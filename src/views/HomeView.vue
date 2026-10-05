<script setup>
import StandardHeader from "@/components/content/StandardHeader.vue";
</script>

<template>
	<section class="container">
		<StandardHeader>
			<h1>Welcome, Team Obfuscated Company!</h1>
			<p>
				This is a place just for us. It&rsquo;s where we&rsquo;ll find out the
				latest about our customers and ourselves.
			</p>
		</StandardHeader>
		<div class="highlight">
			<ul>
				<li>
					<router-link to="/growing-better" aria-labelledby="erp">
						<div class="standard-box">
							<div class="highlight__header">
								<span id="erp">Employee Recognition Program</span>
							</div>
							<div class="highlight__content">
								Logo
							</div>
						</div>
						<!-- <router-link to="/growing-better" class="link--arrow">
							Shout out your teammates for making us better.
						</router-link> -->
					</router-link>
					<router-link to="/growing-better/nominate" class="button">Recognize Your Teammates</router-link>
					<router-link to="/growing-better/tree" class="button">See Recognition Tree</router-link>
				</li>
			</ul>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
@import "../assets/styles/_colors.scss";
</style>
