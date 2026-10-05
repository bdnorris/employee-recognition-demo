<template>
	<div>
		<FormKit
			type="form"
			v-model="form"
			@submit="submit"
			submit-label="Nominate"
			:form-class="submitted ? 'hide' : 'show'"
		>
			<FormKit
				type="text"
				name="nominatedByFName"
				label="Your First Name"
				validation="required"
				:validation-messages="{
					required: 'Please indicate your first name',
					alpha: 'Please enter a valid name',
				}"
				autocomplete="given-name"
			/>
			<FormKit
				type="text"
				name="nominatedByLName"
				label="Your Last Name"
				validation="required"
				:validation-messages="{
					required: 'Please indicate your last name',
					alpha: 'Please enter a valid name',
				}"
				autocomplete="family-name"
			/>
			<FormKit
				type="text"
				name="nomineeFName"
				label="Nominee First Name"
				validation="required"
				:validation-messages="{
					required: 'Please indicate who you are nominating',
					alpha: 'Please enter a valid name',
				}"
			/>
			<FormKit
				type="text"
				name="nomineeLName"
				label="Nominee Last Name"
				validation="required"
				:validation-messages="{
					required: 'Please indicate who you are nominating',
					alpha: 'Please enter a valid name',
				}"
			/>
			<FormKit
				type="select"
				name="trait"
				label="Trait"
				validation="required"
				:validation-messages="{ required: 'Please select a trait' }"
				placeholder="Select a trait"
				:options="traitOptions"
			/>
			<FormKit
				type="textarea"
				name="reason"
				label="Reason for Nomination"
				maxlength="500"
				rows="10"
				:validation-messages="{
					required: 'Please include a reason for your nomination',
					maxlength: 'Please limit your reason to 500 characters',
				}"
				validation="required"
			/>
			<div class="character-count">Characters: {{ reasonCount }}/500</div>
			<vue-recaptcha
				sitekey="6LdY9cceAAAAACyONkzKmSuV3SS3ECRoGjxwMNEI"
				@verify="onVerify"
				@expired="onExpired"
				ref="recaptcha"
				size="invisible"
			></vue-recaptcha>
			<!-- <pre wrap>{{ form }}</pre> -->
		</FormKit>
		<div v-if="submitted">
			<!-- <h2>Submission successful!</h2> -->
			<!-- removing this since I'm adding the interstitial page instead -->
		</div>
		<div class="errors">
			<ul>
				<li v-for="(error, index) in errors" :key="index">{{ error }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { VueRecaptcha } from "vue-recaptcha";

export default {
	components: {
		VueRecaptcha,
	},
	data() {
		return {
			form: {
				nomineeFName: "",
				nomineeLName: "",
				trait: "",
				reason: "",
				nominatedByFName: "",
				nominatedByLName: "",
			},
			submitted: true,
			errors: [],
			traits: this.$store.getters["traits/allTraits"],
		};
	},
	computed: {
		reasonCount() {
			return this.form.reason.length;
		},
		traitOptions() {
			return this.traits.map((trait) => {
				return {
					label: trait.name,
					value: trait.slug,
				};
			});
		},
	},
	methods: {
		async submit() {
			// console.log("form", this.form);
			await this.$refs.recaptcha.execute();
		},
		onVerify(token) {
			// console.log("onVerify", token);
			if (token) {
				this.sendData();
			}
		},
		onExpired() {
			// console.log("onExpired");
			this.$refs.recaptcha.reset();
		},
		async sendData() {
			await this.$store.dispatch("nominees/addNominee", { ...this.form });
			this.submitted = true;
			this.$router.push({ path: "/growing-better/interstitial" });
		},
	},
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";
@import "../assets/styles/_colors.scss";

.hide {
	display: none;
}

.character-count {
	color: $primary;
	font-size: 0.8rem;
	margin-top: -1em;
	margin-bottom: 2em;
	font-weight: 700;
	text-align: right;
}
</style>