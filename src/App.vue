<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">THE CAT WEBSITE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>
        <span class="mr-2">FILTRE</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  }
};
</script>
