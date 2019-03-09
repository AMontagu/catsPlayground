<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex v-for="cat in cats" :key="cat.id" xs12 sm6 md4 lg3>
        <CatCard :breed="cat.name"></CatCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CatCard from '@/components/CatCard.vue'

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
  	...mapGetters("cats/", ["cats"])
  },
  async created() {
    await this.fetchCats();
  },
  methods: {
    ...mapActions("cats/", ["fetchCats"])
  }
};
</script>
