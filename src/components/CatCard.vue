<template>
  <v-card>
    <v-img :src="thumbnail"/>
    <v-card-title>
      {{ breed }}
    </v-card-title>
    <v-card-text>
      {{origin}}
    </v-card-text>
    <v-card-actions>
      <v-btn color="success" @click="">Details</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CatCard",
  props: {
    breed: {
      type: String,
      required: true
    },
	  thumbnail: {
		  type: String,
		  required: true
	  },
	  description: {
		  type: String,
		  required: true
	  },
	  origin: {
		  type: String,
		  required: true
	  },
  },
  data() {
    return {};
  }
};
</script>
