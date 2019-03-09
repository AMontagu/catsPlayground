<template>
	<v-toolbar app>
		<v-toolbar-title class="headline text-uppercase">
			<span class="font-weight-light">THE CAT WEBSITE</span>
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<div style="width: 250px">
			<v-select
				:items="catOrigins"
				label="Filtre"
				@input="setCatOriginFilter"
			></v-select>
		</div>
	</v-toolbar>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
	name: 'Toolbar',
	data() {
		return {};
	},
	computed: {
		...mapGetters('cats/', ['catOrigins']),
	},
	methods: {
		...mapMutations('cats/', ['setCatOriginFilter'])
	}
};
</script>
