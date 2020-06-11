<template>
  <v-container fluid>
    <div class="text-center" sm="6" md="4" lg="3" xs="12">
      <carousel-show />
      <div v-for="(shows, i) in tvShows" :key="i">
        <h2 style="text-align:left" class="purple--text">
          {{ categories[i] }}
        </h2>
        <v-layout row wrap>
          <v-col sm="6" md="4" lg="3" v-for="k in 6" :key="k">
            <router-link
              v-if="shows[k - 1]"
              style="text-decoration:none"
              :to="{ name: 'DisplayShow', params: { id: shows[k - 1].id } }"
            >
              <Cards :shows="shows[k - 1]" />
            </router-link>
          </v-col>
        </v-layout>
        <router-link
          :to="{ name: 'Shows', params: { id: i } }"
          style="text-decoration:none"
          class="purple--text"
          >Click here for more shows on {{ categories[i] }}</router-link
        >
      </div>
    </div>
  </v-container>
</template>
<script>
import CarouselShow from "@/components/CarouselShow";
import Cards from "@/components/Cards";
import { showsActions } from "@/store/showModule";
export default {
  name: "Dashboard",
  components: {
    CarouselShow,
    Cards
  },

  data() {
    return {
      categories: [
        "Romance",
        "Action",
        "Comedy",
        "Science-Fiction",
        "Horror",
        "Drama"
      ]
    };
  },

  computed: {
    tvShows() {
      return this.$store.getters["showModule/tvShows"];
    }
  },

  created() {
    this.getAllShows();
  },
  methods: {
    getAllShows() {
      return this.$store.dispatch(showsActions.getAllTvShows);
    },
    //convert the 10 point rating to 5 star rating
    convertRating(value) {
      return value / 2;
    }
  }
};
</script>
