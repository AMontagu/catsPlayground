<template>
  <v-container fluid>
    <v-layout row wrap v-if="ready">
      <v-flex v-for="cat in catByOrigin" :key="cat.id" xs12 sm6 md4 lg3 pa-2>
        <CatCard
          :name="cat.name"
          :thumbnail="cat.thumbnail"
          :description="cat.descriptionFromWiki"
          :origin="cat.origin"
          :id="cat.id"
        ></CatCard>
      </v-flex>
    </v-layout>
    <v-layout v-else align-content-center justify-center>
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </v-layout>

    <router-view />
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CatCard from "@/components/CatCard.vue";

export default {
  name: "home",
  components: {
    CatCard
  },
  data: function() {
    return {
      ready: false
    };
  },
  computed: {
    ...mapGetters("cats/", ["catByOrigin"])
  },
  async created() {
    await this.fetchCats();
    this.ready = true;
  },
  methods: {
    ...mapActions("cats/", ["fetchCats"])
  }
};
</script>
