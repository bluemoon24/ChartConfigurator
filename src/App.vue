<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>roi-charts demo</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
        >
          <v-flex xs4>
            <!-- <v-card-text> -->
              <v-expansion-panel>

                <v-expansion-panel-content expand-icon="mdi-menu-down" >
                  <div slot="header">Chart</div>
                  <v-card>
                    <v-card-text>
                      <v-text-field label="No data error message " v-model="chartConfig.noDataMessage()"></v-text-field>
                      <v-switch label="gridlines" v-model="chartConfig.gridlines"></v-switch>
                      <!-- <v-text-field label="background" v-model="chartConfig.background"></v-text-field> -->
                      <v-card-title>Background color</v-card-title>
                      <chrome-picker :value="chartConfig.background" @input="updateColor"></chrome-picker>
                      <v-switch label="legend" v-model="chartConfig.legend.visible"></v-switch>
                      <v-text-field label="legend margin right" v-model="chartConfig.legend.margin.right"></v-text-field>
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>

                <v-expansion-panel-content expand-icon="mdi-menu-down" >
                  <div slot="header">Axes</div>
                  <v-card>
                    <v-card-text>
                      <v-text-field label="primaryValuesAxis" v-model="chartConfig.primaryValuesAxis.decimals"></v-text-field>
                      <v-text-field label="secondaryValuesAxis" v-model="chartConfig.secondaryValuesAxis.decimals"></v-text-field>
                      <v-text-field label="primaryValuesTitle" v-model="chartConfig.primaryValuesTitle"></v-text-field>
                      <v-text-field label="secondaryValuesTitle" v-model="chartConfig.secondaryValuesTitle"></v-text-field>
                      <v-text-field label="Categories Title" v-model="chartConfig.categoriesTitle"></v-text-field>
                      <v-text-field label="Decimal separator" v-model="chartConfig.separators.decimal"></v-text-field>
                      <v-text-field label="dataLabelsDecimals" v-model="chartConfig.dataLabelsDecimals"></v-text-field>
                      <v-text-field label="valuesAxesDecimals" v-model="chartConfig.valuesAxesDecimals"></v-text-field>
                      <v-text-field label="forecastStart" v-model="chartConfig.forecastStart"></v-text-field>
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>

                <v-expansion-panel-content expand-icon="mdi-menu-down" v-for="(series, i) in chartConfig.series">
                  <div slot="header">Data Series "{{ series.name }}"</div>
                  <v-card>
                    <v-card-text>
                      <v-switch label="stacked" v-model="chartConfig.series[i].stacked"></v-switch>
                      <v-slider
                        v-model="chartConfig.series[i].overlapping"
                        min="-200"
                        max="200"
                        label="overlapping"
                        step="1"
                        thumb-label="always"
                        ticks
                        ></v-slider>
                      <!-- <v-text-field label="overlapping" v-model="chartConfig.series[i].overlapping"></v-text-field> -->
                      <v-select label="overlappingType" v-model="chartConfig.series[i].overlappingType" :items="['percentsPrevious', 'percentsCurrent', 'pixels']"></v-select>
                      <v-text-field label="order" v-model="chartConfig.series[i].order"></v-text-field>
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              <!-- <v-divider />
              <v-expansion-panel-content expand-icon="mdi-menu-down" v-for="(series, i) in allSeries">
                <div slot="header">Data Series "{{ series.name }}"</div>
                <v-card>
                </v-card>
              </v-expansion-panel-content> -->
              </v-expansion-panel>
            <!-- </v-card-text> -->
            <!-- <config-controls :config="chartConfig"/> -->
            </v-flex>
            <v-flex xs8 >
              <v-card  >
                <v-card-title>chart</v-card-title>
                <v-flex class='ma-1 pa-0' ref='chart' style="height: 600px"/>
                <!-- <v-data-table
                   :headers="headers"
                   :items="desserts"
                   hide-actions
                   class="elevation-1"
                 >
                   <template slot="items" slot-scope="props">
                     <td>{{ props.item.name }}</td>
                     <td class="text-xs-right">{{ props.item.calories }}</td>
                     <td class="text-xs-right">{{ props.item.fat }}</td>
                     <td class="text-xs-right">{{ props.item.carbs }}</td>
                     <td class="text-xs-right">{{ props.item.protein }}</td>
                     <td class="text-xs-right">{{ props.item.iron }}</td>
                   </template>
                 </v-data-table>    -->
              </v-card>
            </v-flex>

        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import roiCharts from '@/components/roi-charts'
  import config from '@/components/chartConfig'
  // import ConfigControls from '@/components/ConfigControls'
  import { Chrome } from 'vue-color'
  export default {
    components: {
      // 'material-picker': Material,
      // 'compact-picker': Compact,
      // 'swatches-picker': Swatches,
      // 'slider-picker': Slider,
      // 'sketch-picker': Sketch,
      'chrome-picker': Chrome
      // 'photoshop-picker': Photoshop
    },

    watch: {
      chartConfig: {
        handler: function (newval) {
          this.renderChart()
        },
        deep: true
      }
    },

    data: () => ({
      colors: '#194d33',
      drawer: null,
      chartConfig: config.chartConfig
    }),

    computed: {
      allSeries: function () {
        let series = this.chartConfig.series
        function children(parent, allseries) {
          if (!parent || !parent.series) return null
          for (let s of parent.series) {
            allseries.push(s)
            console.log('children', parent, s)
            children(s, allseries)
          }
        }
        for (let s of this.chartConfig.series) children(s, series)
        console.log('all Series', series)
        return series
      }
    },

    mounted () {
      console.log('***** mounted roi-chart component ******', this.$refs)
      console.log('roiCharts version:', roiCharts.version)
      console.log('roiChart config:', this.chartConfig)
      // this.chartConfig = config.chartConfig
      // console.log('portlet style', this.$refs.portlet.height)
      // this.$refs.portlet.style = `height: 300}`
      // this.$refs.portlet.style = `height: ${(window.innerHeight * this.maxHeight / 100)}px;`
      // this.divSize = { x: this.$refs.chart.clientWidth, y: this.$refs.chart.clientHeight }
      this.renderChart()
    },

    methods: {
      updateColor: function (newval) {
        this.chartConfig.background = newval.hex
        console.log('new color', newval)
      },

      changeConfig: function (obj, newval) {
        console.log('new value', obj, newval)
      },

      renderChart: function () {
        console.log('config', this.chartConfig)
        // this.$refs.chart.style = `height: ${this.$refs.chart.height}px`
        let config = {
          ...this.chartConfig,
          container:  this.$refs.chart,
          series: this.chartConfig.series
        }
        // console.log('chart config', JSON.stringify(config))
        return roiCharts.chart(config)
      }
    }
  }
</script>
