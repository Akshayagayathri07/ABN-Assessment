<template>
  <v-app-bar color="teal lighten-2" app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      absolute
      class="teal lighten-3"
      dark
    >
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-btn text :to="'/'">TV MAZE</v-btn>
    <v-spacer></v-spacer>
    <v-btn text :to="'/search'">SEARCH</v-btn>
    <v-btn text :to="'/about'">ABOUT</v-btn>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "mdi-home",
          text: "Home",
          link: "/"
        },
        {
          icon: "mdi-magnify",
          text: "Search",
          link: "/search"
        },
        {
          icon: "mdi-star",
          text: "About",
          link: "/about"
        }
      ]
    };
  }
};
</script>
