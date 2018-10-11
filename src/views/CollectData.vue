<template>
  <v-container fluid fill-height>
    <v-layout
      justify-center
    >
      <!-- <v-card>
        <v-card-title>Data Collection</v-card-title>
        <v-card-text>
          <v-text-field label="Api endpoint"></v-text-field>
        </v-card-text>
      </v-card> -->
      <v-flex xs6>
        <v-card >
          <v-card-title v-html><v-spacer/><h1>Chart 1</h1><v-spacer/></v-card-title>
          <v-flex class='ma-1 pa-0' ref='chart1' style="height: 600px"/>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card >
          <v-card-title v-html><v-spacer/><h1>Chart 2</h1><v-spacer/></v-card-title>
          <v-flex class='ma-1 pa-0' ref='chart2' style="height: 600px"/>
        </v-card>
      </v-flex>

  </v-layout>
</v-container>
</template>

<script>
import roiCharts from 'roi-charts'
import config from '@/components/chartConfig'

  export default {
    name:"collect-data",
    data: () => ({
    }),

    mounted() {
      let chartInstance = roiCharts.chart({...config.chartConfig, container: this.$refs.chart1})
      // chartInstance.settableProperties.series[0].data = chartInstance.settableProperties.series[0].data.map(e => ({ }))
      let obj = chartInstance.settableProperties
      obj.series[0].valueKey = 'airF'
      obj.series[0].data = config.chartConfig.series[0].data
      obj.primaryValuesTitle = "Fahrenheit"
      roiCharts.chart({...obj, container: this.$refs.chart2})
    }
  }
</script>

<style scoped>

</style>
