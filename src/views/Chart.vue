<template>
  <div class="chart">
    <v-toolbar>
      <v-dialog  :dialog="configDialog">
      <v-btn slot="activator">Show Config</v-btn>
        <v-card>
          <v-card-title><h4>Current Chart Configuration</h4></v-card-title>
          <v-textarea rows="40" :value="JSON.stringify(chartConfig, null, 4)"></v-textarea>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-container fluid fill-height >
      <v-layout
        justify-center
      >
        <v-flex xs6 >

          <v-container class="scroll-y ma-0 pa-0" id="scroll-target" style="max-height: 678px">
            <v-layout
            v-scroll:#scroll-target="onScroll"
               column
               align-center
            >

            <tree-panel
              header="Config"
              :tree="chartConfig"
              :ignore="['container', 'width', 'height']"
              :uitype="uitype"
              ></tree-panel>
          </v-layout>
          </v-container>
          </v-flex>

          <v-flex xs6>
            <v-card >
              <v-card-title v-html><v-spacer/><h1>Chart</h1><v-spacer/></v-card-title>
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
  </div>
</template>
<script>
// import TouchEmulator from 'touch-emulator'
import roiCharts from 'roi-charts'
import config from '@/components/chartConfig'
import docs from '@/components/OptionsDoc'
import SeriesConfig from '@/components/SeriesConfig'
import TreePanel from '@/components/TreePanel'
import * as d3 from 'd3'
import Vue from 'vue'
import { Chrome } from 'vue-color'
export default {

  components: {
    SeriesConfig, TreePanel,
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
        console.log('watcher', newval)
        this.chartConfig = newval
        this.renderChart()
      },
      deep: true
    }
  },

  data: () => ({
    configDialog: false,
    rcvsn: roiCharts.version,
    colors: '#194d33',
    chartConfig: config.chartConfig,
    wrapper: '',
    docs: docs,
    chartInstance: {},
    configUI: {},
  }),

  computed: {
    sections: () => (
      Object.keys(docs).sort((a,b) => (a > b))
    ),

    categegoryFields: function () {
      let catlist = {}
      this.chartConfig.series[0].data.forEach(el => {
        Object.keys(el).forEach( function(cat) {
          // only fields that have strings as their value
          if (typeof el[cat] === 'string' && Number.isNaN(+el[cat])) catlist[cat] = ''
        })
      })
      // console.log('catlist', catlist)
      return Object.keys(catlist)
    },

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

    this.chartConfig.eventSubscribers =
        [
          {
            event: 'DATA_ENTRY_TOOLTIP_SHOWN',
            handler: props => console.log('highlighted', props)
          }
        ]

    this.chartConfig = {
      ...config.chartConfig,
      container: this.$refs.chart,
    }
    this.chartInstance = roiCharts.chart(this.chartConfig)
    let obj = this.chartInstance.settableProperties
    for (let i = 0; i < this.chartConfig.series.length; i++)
      obj.series[i].data = config.chartConfig.series[i].data
    obj.container = this.chartConfig.container

    this.chartConfig = {...obj}

  },

  methods: {

    uitype: function (obj, option) {
      // console.log('uitype', obj, option, typeof obj[option])
      let doc = this.findDoc(option)
      // console.log('uitype doc found', option, doc)
      let optype = doc && doc.type.split(/\s?\W\s?/)
      // console.log('uitype doc types found', optype)
      let eltype
      if (!optype) eltype = 'v-text-field'
      else if (optype.includes('boolean')) eltype = 'v-switch'
      // else if (optype.includes('array')) eltype = 'tree-panel'
      else eltype = 'v-text-field'
      if (option !== 'series') return eltype

      let el = []
      for (let i = 0; i < obj[option].length; i++)
        el.push(this.$createElement('tree-panel', {
          props: {
            level: 2,
            header: `${obj[option][i].name.substr(0,20)}...${obj[option][i].name.substr(-10)}`,
            tree: obj[option][i],
            uitype: this.uitype,
            ignore: ['container', 'width', 'height', 'data']
          }
        }, [`${option}: ${obj[option]}`]))
        // console.log('uitype returned for series', el)
      return el
    },

    onScroll (e) {
        // console.log('scrooll')
    },

    updateColor: function (newval) {
      this.chartConfig.background = newval.hex
      console.log('new color', newval)
    },

    findDoc: function (option) {
      for (let section in docs) {
        let found = Object.keys(docs[section]).find(e => e === option)
        // return found ? docs[section][found] : ''
        return found && docs[section][found]
      }
    },


    renderChart: function () {
      console.log('config in renderChart', this.chartConfig)
      roiCharts.chart({...this.chartConfig, container:  this.$refs.chart})
    }
  }
}
</script>
