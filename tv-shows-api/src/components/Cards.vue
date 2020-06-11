<template>
  <v-container>
    <v-hover v-slot:default="{ hover }" open-delay="200">
      <v-card
        class="mx-auto"
        width="200"
        v-if="shows"
        :elevation="hover ? 16 : 2"
        dark
      >
        <div v-if="shows.image">
          <v-img aspect-ratio=".8" contain :src="shows.image.original">
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out teal darken-2 v-card--reveal display-3 white--text"
                style="height: 100%;"
              >
                <div>
                  <span>
                    <i style="font-size:20px" color="purple">{{
                      shows.name
                    }}</i>
                  </span>
                  <br />
                  <span>
                    <v-rating
                      :value="convertRating(shows.rating.average)"
                      medium
                      background-color="black"
                      color="black"
                      half-increments
                      readonly
                    ></v-rating>
                  </span>
                </div>
              </div>
            </v-expand-transition>
          </v-img>
        </div>
      </v-card>
    </v-hover>
  </v-container>
</template>
<script>
export default {
  props: {
    shows: Object
  },

  methods: {
    convertRating(value) {
      return value / 2;
    }
  }
};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.7;
  position: absolute;
  width: 100%;
}
</style>
