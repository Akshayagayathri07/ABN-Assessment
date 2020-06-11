<template>
  <v-container fluid>
    <v-text-field
      v-model="showName"
      placeholder="Search Show"
      rounded
      solo-inverted
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>
    <v-layout row align="center">
      <div
        class="mx-auto"
        v-if="showResults.length > 0 && showName"
        sm="6"
        md="4"
        lg="3"
      >
        <v-col>
          <v-expand-transition>
            <v-list>
              <v-list-item-group>
                <div v-for="(show, i) in showResults" :key="i">
                  <router-link
                    style="text-decoration:none"
                    :to="{ name: 'DisplayShow', params: { id: show.show.id } }"
                  >
                    <v-list-item>
                      <v-list-item-avatar
                        tile
                        size="100"
                        v-if="show.show.image"
                      >
                        <v-img :src="show.show.image.original"></v-img>
                      </v-list-item-avatar>
                      <v-list-item-avatar tile size="100" v-else>
                        <v-img src="@/assets/no-image-icon-11.png"></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>{{
                        show.show.name
                      }}</v-list-item-content>
                    </v-list-item>
                  </router-link>
                </div>
              </v-list-item-group>
            </v-list>
          </v-expand-transition>
        </v-col>
      </div>
      <div v-else-if="showResults.length == 0 && showName" class="mx-auto">
        <v-img
          src="@/assets/noresultfound.png"
          max-width="500"
          max-height="500"
        ></v-img>
      </div>
    </v-layout>
  </v-container>
</template>
<script>
import { showsActions } from "@/store/showModule";
export default {
  data() {
    return {
      showName: ""
    };
  },
  watch: {
    showName() {
      this.getShow();
    }
  },
  computed: {
    showResults() {
      return this.$store.state.showModule.showByName;
    }
  },

  methods: {
    getShow() {
      return this.$store.dispatch(showsActions.getShowsByName, this.showName);
    }
  }
};
</script>
