<template>
  <v-container fluid>
    <div class="text-center">
      <v-row align="center" justify="center">
        <v-col v-for="(shows, i) in tvShows[id]" :key="i">
          <router-link
            style="text-decoration:none"
            :to="{ name: 'DisplayShow', params: { id: shows.id } }"
          >
            <Cards :shows="shows" />
          </router-link>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
import Cards from "@/components/Cards";
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  components: {
    Cards
  },
  computed: {
    tvShows() {
      return this.$store.getters["showModule/tvShows"];
    }
  }
};
</script>
