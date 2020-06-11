<template>
  <div>
    <v-card
      class="mx-auto"
      v-if="personData.person.image"
      max-height="400"
      max-width="200"
    >
      <v-img
        max-height="200"
        max-width="200"
        :src="personData.person.image.original"
      ></v-img>

      <v-card-text v-if="personData.person"
        >Name:{{ personData.person.name }}</v-card-text
      >
      <v-card-text v-if="personData.character">
        <span>Character:{{ personData.character.name }}</span>
      </v-card-text>
      <v-card-text v-if="personData.type">
        <span>Type:{{ personData.type }}</span>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    personData: Object
  }
};
</script>
