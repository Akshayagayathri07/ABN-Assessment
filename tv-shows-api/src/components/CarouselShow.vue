<template>
  <v-carousel cycle>
    <v-carousel-item v-for="i in 6" :key="i">
      <v-card
        class="mx-auto"
        v-if="shows[i - 1]"
        :to="{ name: 'DisplayShow', params: { id: shows[i - 1].id } }"
      >
        <v-list-item>
          <v-avatar tile size="500" sm="6" md="4" lg="3" xs="12">
            <v-img :src="shows[i - 1].image.original" contain></v-img>
          </v-avatar>
          <v-list-item-content>
            <v-list-item-title style="font-size:50px">
              <i>{{ shows[i - 1].name }}</i>
            </v-list-item-title>
            <v-list-item-subtitle>
              <div v-if="shows[i - 1].genres" style="font-size:20px">
                <span v-for="show in shows[i - 1].genres" :key="show">{{
                  show
                }}</span>
              </div>
              <div>
                <v-rating
                  :value="convertRating(shows[i - 1].rating.average)"
                  medium
                  background-color="white"
                  color="white"
                  half-increments
                  readonly
                ></v-rating>
              </div>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  computed: {
    shows() {
      return this.$store.getters["showModule/sortedShows"];
    }
  },
  methods: {
    convertRating(value) {
      return value / 2;
    }
  }
};
</script>
