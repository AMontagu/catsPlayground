<template>
  <v-card elevation="5">
    <v-img :src="thumbnail" height="200" contain/>
    <v-card-title primary-title>
	    <div>
		    <h3 class="headline mb-0">{{ name }}</h3>
		    <p>{{ origin }}</p>
	    </div>
    </v-card-title>
    <v-card-actions>
	    <v-layout justify-end>
		    <v-btn flat color="secondary" @click="openCatModal(id)">Details</v-btn>
	    </v-layout>
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
      console.log("catId: ", catId);
      this.$router.push({ name: "Description", params: { catId } });
    }
  }
};
</script>
