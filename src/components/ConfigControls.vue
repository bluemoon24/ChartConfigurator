<template>
  <div>
    <v-card   >
      <v-card-title>Hello</v-card-title>
      <v-card-text>
      <v-text-field label="No data error message " :value="config.noDataMessage()"></v-text-field>
      <v-text-field label="Categories Title " :value="config.categoriesTitle"></v-text-field>

      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'config-controls',
    props: {
      config: {
        type: Object,
        default: {}
      }
    },
  }
</script>

<style scoped>

</style>
