<template>
  <v-dialog :max-width="maxWidth" :value="currentCat" @input="goToHome">
    <v-card>
      <v-layout column>
        <v-flex xs4>
          <v-img :src="currentCat.thumbnail" />
        </v-flex>
        <v-flex x8>
          <v-layout row>
            <v-flex xs12>
              {{ currentCat.name }}
            </v-flex>
            <v-flex xs12>
              {{ currentCat.descriptionFromWiki }}
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CatModal",
  props: {
    maxWidth: {
      type: String,
      default: "500px"
    },
    catId: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("cats/", ["catById"]),
    currentCat() {
      return this.catById(this.catId);
    },
  },
	methods: {
		goToHome() {
			this.$router.push({name: "Home"});
		}
	}
};
</script>
