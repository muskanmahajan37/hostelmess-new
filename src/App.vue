<template>
  <v-app>
    <AppBar />
    <v-content>
      <v-container fluid>
        <v-slide-y-reverse-transition>
          <router-view v-show="show" />
        </v-slide-y-reverse-transition>
      </v-container>
    </v-content>
    <BottomNav />
  </v-app>
</template>

<script>
import AppBar from "./components/core/appBar";
import BottomNav from "./components/core/bottomNav";

export default {
  name: "App",

  components: {
    AppBar,
    BottomNav
  },

  data: () => ({
    show: false
  }),
  created() {
    this.show = true;
  },
  methods: {},
  beforeCreate() {
    localStorage.getItem("darkMode") == "true"
      ? (this.$vuetify.theme.dark = true)
      : (this.$vuetify.theme.dark = false);
  }
};
</script>
<style>
</style>
