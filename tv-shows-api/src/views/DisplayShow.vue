<template>
  <v-container fluid>
    <div sm="6" md="4" lg="3" xs="12">
      <v-tabs
        v-model="tab"
        background-color="black"
        class="elevation-2"
        dark
        center-active
        fixed-tabs
      >
        <v-tab href="#main">MAIN</v-tab>
        <v-tab href="#episode">EPISODES</v-tab>
        <v-tab href="#cast">CAST</v-tab>
        <v-tab href="#crew">CREW</v-tab>
        <v-tab href="#gallery">GALLERY</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item :key="1" value="main">
          <v-row justify="center" align="center" v-if="showData">
            <div>
              <v-card>
                <v-list-item>
                  <v-flex sm="6" md="4" lg="3" xs="12" v-if="showData.image">
                    <v-list-item-avatar tile size="300">
                      <v-img
                        :src="showData.image.original"
                        aspect-ratio=".8"
                      ></v-img>
                    </v-list-item-avatar>
                  </v-flex>
                  <v-flex
                    sm="6"
                    md="4"
                    lg="3"
                    xs="12"
                    v-else-if="!showData.image"
                  >
                    <v-list-item-avatar tile size="300">
                      <v-img
                        src="@/assets/no-image-icon-11.png"
                        aspect-ratio=".8"
                      ></v-img>
                    </v-list-item-avatar>
                  </v-flex>
                  <v-flex>
                    <v-list-item-content
                      v-html="showData.summary"
                      class="justfy-center"
                    ></v-list-item-content>
                  </v-flex>
                </v-list-item>
                <v-list-item>
                  <v-flex>
                    <v-list-item-title>
                      <b>Show Info</b>
                    </v-list-item-title>
                    <div v-if="showData.schedule">
                      <div
                        v-if="showData.schedule.days && showData.schedule.time"
                      >
                        <b>Schedule:</b>
                        <span
                          v-for="days in showData.schedule.days"
                          :key="days"
                          >{{ days }}</span
                        >
                        at {{ showData.schedule.time }}
                      </div>
                    </div>
                    <div v-if="showData.status">
                      <b>Status:</b>
                      {{ showData.status }}
                    </div>
                    <div v-if="showData.type">
                      <b>Show Type:</b>
                      {{ showData.type }}
                    </div>
                    <div v-if="showData.genres">
                      <b id="genre" v-if="showData.genres.length > 0"
                        >Genres:</b
                      >
                      <span v-for="show in showData.genres" :key="show">{{
                        show
                      }}</span>
                    </div>
                  </v-flex>
                </v-list-item>
              </v-card>
            </div>
          </v-row>
        </v-tab-item>
        <v-tab-item :key="2" value="episode">
          <v-data-table
            :headers="headers"
            :items="episode"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </v-tab-item>
        <v-tab-item :key="3" value="cast" v-if="cast">
          <v-row justify="center" align="center" v-if="cast.length > 0">
            <div v-for="(castData, i) in cast" :key="i">
              <v-col>
                <PersonCard :personData="castData" />
              </v-col>
            </div>
          </v-row>
          <div v-else-if="cast.length == 0">
            <v-img
              class="mx-auto"
              src="@/assets/noresultfound.png"
              max-width="500"
              max-height="500"
            ></v-img>
          </div>
        </v-tab-item>
        <v-tab-item :key="4" value="crew" v-if="crew">
          <v-row justify="center" align="center" v-if="crew.length > 0">
            <div v-for="(crewData, i) in crew" :key="i">
              <v-col>
                <PersonCard :personData="crewData" />
              </v-col>
            </div>
          </v-row>
          <div v-else-if="crew.length == 0">
            <v-img
              class="mx-auto"
              src="@/assets/noresultfound.png"
              max-width="500"
              max-height="500"
            ></v-img>
          </div>
        </v-tab-item>
        <v-tab-item :key="5" value="gallery">
          <v-row justify="center" align="center">
            <div v-for="(image, i) in images" :key="i">
              <v-col v-if="image.resolutions">
                <v-card
                  class="mx-auto"
                  v-if="image.resolutions.original"
                  max-height="200"
                  max-width="200"
                >
                  <v-img
                    max-height="200"
                    max-width="200"
                    :src="image.resolutions.original.url"
                  ></v-img>
                </v-card>
              </v-col>
            </div>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-container>
</template>

<script>
import PersonCard from "@/components/PersonCard";
import { showsActions } from "@/store/showModule";
export default {
  name: "DisplayShow",
  components: {
    PersonCard
  },
  data() {
    return {
      tab: "MAIN",
      showId: this.$route.params.id,
      headers: [
        {
          text: "NUMBER",
          align: "start",
          value: "number"
        },
        { text: "DATE", value: "date" },
        { text: "NAME", value: "name" },
        { text: "SEASON", value: "season" }
      ]
    };
  },
  computed: {
    showData() {
      let show = this.$store.state.showModule.showById;
      return show;
    },
    cast() {
      let c = this.$store.state.showModule.showEmbedded.cast;
      return c;
    },
    crew() {
      return this.$store.state.showModule.showEmbedded.crew;
    },

    episode() {
      let episode = [];
      let episodes = this.$store.state.showModule.showEmbedded.episodes;

      if (episodes) {
        episodes.forEach(element => {
          const data = {
            name: element.name,
            season: element.season,
            number: element.number,
            date: element.airdate
          };
          episode.push(data);
        });
      }
      return episode;
    },
    images() {
      return this.$store.state.showModule.showEmbedded.images;
    }
  },
  created() {
    this.getShowDetails();
  },
  methods: {
    getShowDetails() {
      return this.$store.dispatch(showsActions.getShowById, this.showId);
    }
  }
};
</script>
