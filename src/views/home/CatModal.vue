<template>
  <v-dialog :max-width="maxWidth" :value="currentCat" @input="goToHome">
    <v-card>
      <v-layout
        :row="$vuetify.breakpoint.smAndUp"
        :column="$vuetify.breakpoint.xsOnly"
      >
        <v-flex xs4 pa-3>
          <v-img :src="currentCat.thumbnail" height="200" contain />
        </v-flex>
        <v-flex x8 pa-3>
          <v-layout column>
            <v-flex xs12>
              <h1 style="font-size: 5vh">{{ currentCat.name }}</h1>
            </v-flex>
            <v-flex xs12 mt-3>
              <p style="font-size: 1.55vh">
                {{ currentCat.descriptionFromWiki }}
              </p>
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
      default: "70%"
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
      const cat = this.catById(this.catId);
      if (!cat) {
        return false;
      }
      return this.catById(this.catId);
    }
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
