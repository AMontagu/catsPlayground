<template>
	<v-card>
		<v-img
			src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
		></v-img>
		<v-card-title>
			{{ breed }}
		</v-card-title>
		<v-card-text>
			gfdsgsfgdfds
		</v-card-text>
		<v-card-actions>
			<v-btn color="success" @click="" >Details</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	name: 'CatCard',
	props: {
		breed: {
			type: String,
			required: true,
		}
	},
	data() {
		return {};
	},
};
</script>
