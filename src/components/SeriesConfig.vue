<template>
  <div>
    <v-card>
      <v-card-text>
        <v-select v-model="series.valueKey" :items="valueFields" label="valueKey"/>
        <v-switch label="stacked" v-model="series.stacked"></v-switch>
        <v-slider
          v-model="series.overlapping"
          min="-200"
          max="200"
          label="overlapping"
          step="1"
          thumb-label="always"
          ticks
          ></v-slider>
        <!-- <v-text-field label="overlapping" v-model="series.overlapping"></v-text-field> -->
        <v-select label="overlappingType" v-model="series.overlappingType" :items="['percentsPrevious', 'percentsCurrent', 'pixels']"></v-select>
        <v-text-field label="order" v-model="series.order"></v-text-field>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'series-config',
    props: ['series'],

    data: () =>({
    }),

    computed: {
      valueFields: function () {
        let catlist = {}
        // { month: "Jan", airC: 16, airF: 61, highAirC: 15, highAirF: 59, lowC: 5, lowF: 41, rainMM: 50, rainD: 11, sunH: 5, seaC: 15, seaF: 59},
        //
        // let set1 = this.series.data.map(e => ({month: e.month, type: "air", unit: "Centigrade", ulabel: "°C", temp: e.airC, high: e.highAirC, low:e.lowC}))
        // let set2 = this.series.data.map(e => ({month: e.month, type: "air", unit: "Fahrenheit", ulabel: "°F", temp: e.airF, high: e.highAirF, low:e.lowF}))
        // let set3 = this.series.data.map(e => ({month: e.month, type: "sea", unit: "Centigrade", ulabel: "°C", temp: e.seaC}))
        // let set4 = this.series.data.map(e => ({month: e.month, type: "sea", unit: "Fahrenheit", ulabel: "°F", temp: e.seaF}))
        // let set4 = this.series.data.map(e => ({month: e.month, type: "sea", unit: "Fahrenheit", ulabel: "°F", temp: e.seaF}))
        this.series.data.forEach(el => {
          Object.keys(el).forEach( function(cat) {
            // only valueFields that have numbers as their value
            if (!Number.isNaN(+el[cat])) catlist[cat] = ''
          })
        })
        // console.log('catlist', catlist)
        return Object.keys(catlist)
      }
    },

    mounted() {
      console.log('seriesconfig', this.series)
      this.valueFields
    }
  }
</script>

<style scoped>

</style>
