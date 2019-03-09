<template>
  <v-card>
    <v-img :src="thumbnail" />
    <v-card-title>
      {{ name }}
    </v-card-title>
    <v-card-text>
      {{ origin }}
    </v-card-text>
    <v-card-actions>
      <v-btn color="success" @click="openCatModal(id)">Details</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CatCard",
  props: {
    name: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    origin: {
      type: String,
      required: true
    },
	  id: {
		  type: String,
		  required: true
	  }
  },
  data() {
    return {};
  },
	methods: {
		openCatModal(catId) {
			console.log("catId: ", catId)
			this.$router.push({name: "Description", params: { catId }})
		}
	}
};
</script>
