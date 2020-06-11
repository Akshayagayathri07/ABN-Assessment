<template>
  <v-app>
    <header>
      <app-header />
    </header>
    <v-content>
      <router-view></router-view>
    </v-content>
    <footer>
      <app-footer />
    </footer>
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
