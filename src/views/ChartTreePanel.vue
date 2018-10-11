<template>
  <div class="chart">
    <v-container fluid fill-height >
      <v-layout
        justify-center
      >
      <!-- <v-container class="scroll-y ma-0 pa-0" id="scroll-target" style="max-height: 678px">
        <v-layout class="ma-0"
        v-scroll:#scroll-target="onScroll"
           column
           align-center
           style="height: 678px"
        >
    </v-layout>
  </v-container> -->
      <!-- <v-card>
      <v-card-title><h2>Dynamically inserted:</h2></v-card-title>
      <div ref="container">
        <button @click="onClick">Click to insert</button>
      </div>
    </v-card> -->

        <v-flex xs4 >

          <v-container class="scroll-y ma-0 pa-0" id="scroll-target" style="max-height: 678px">
            <v-layout class="ma-0"
            v-scroll:#scroll-target="onScroll"
               column
               align-center
               style="height: 678px"
            >

            <tree-panel
              header="Config"
              :tree="docs"
              :ignore="['meta']"
              >
          </tree-panel>

          </v-layout>
          </v-container>
          <!-- </v-card-text> -->
          <!-- <config-controls :config="chartConfig"/> -->
          </v-flex>
          <v-flex xs8>
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
// import {
//   // Vuetify,
//   VTextField
// } from 'vuetify';

// import ConfigControls from '@/components/ConfigControls'
//
// Memo: Creating Vue components dynamically, see: https://css-tricks.com/creating-vue-js-component-instances-programmatically/
//
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
    rcvsn: roiCharts.version,
    colors: '#194d33',
    chartConfig: config.chartConfig,
    wrapper: '',
    docs: docs,
    chartInstance: {},
    configUI: {},
  }),

  created () {
    console.log('sections', this.sections)
  },

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
    console.log('mounted......', docs)
    // this.walk(this.chartConfig)
    console.log('mounted...')
    this.chartInstance = roiCharts.chart(this.chartConfig)
    // this.createConfigUI()
    let obj = this.chartInstance.settableProperties
    obj.series[0].data = config.chartConfig.series[0].data
    obj.container = this.chartConfig.container

    this.chartConfig = {...obj}
    console.log('created...', this.chartConfig)

    // this.renderChart()
  },

  methods: {
    onClick() {
      var ComponentClass = Vue.extend(SeriesConfig)
      var instance = new ComponentClass({
          propsData: { series: this.series }
      })
      // instance.$slots.default = ['Click me!']
      instance.$mount() // pass nothing
            // console.log(this.$refs)
      this.$refs.container.appendChild(instance.$el)
    },

    onScroll (e) {
        console.log('scrooll')
    },

    updateColor: function (newval) {
      this.chartConfig.background = newval.hex
      console.log('new color', newval)
    },

    changeConfig: function (obj, newval) {
      console.log('new value', obj, newval)
    },

    mousemove: function () {
      // const x0 = x.invert(d3.mouse(this)[0]);
      let ovl = d3.select('.chart-svg')
        console.log('mousemove', d3.mouse(this.$refs.chart))
    },

    findSection: function (option) {
      for (let key in docs) {
        if (docs[key][option]) {
          console.log('findSection found', option, key)
          return key
        }
      }
    },

    findConfigOption: function(option, root = null) {
      let settables = this.chartConfig // root || this.chartInstance && this.chartInstance.settableProperties
      if (!this.chartConfig) {
        console.log('No settables, maybe no chart chartInstance')
        return
      }
      // this.walk(option, settables)
      let opt = Object.keys(settables).filter((e) => (e === option))
      // console.log('findConfigOption', option, opt)

      if (opt.length > 1) console.log('More than 1 option found for ', option)

      if (opt.length === 1) {
        console.log(`findConfigOption for ${option} ${settables[opt[0]]} is ${typeof settables[opt[0]]}`)
        // if (!Array.isArray(settables[opt[0]]) && typeof settables[opt[0]] === 'object') {
          // for (let optn in settables[opt[0]]) {
            // console.log(`findConfigOption searching for ${optn} -> ${this.findConfigOption(optn, settables[opt[0]])}`)
            // opt = this.findConfigOption(optn, settables[opt[0]])
         // }
        // }
        console.log(`***findConfigOption returns ${settables[opt[0]]} for ${option}`)
        return settables[opt[0]]
      }
      console.log(`***findConfigOption (2) returns ${opt} for ${option}`)
      return opt
    },

    createConfigUI: function () {
      // let config = docs
      let enums = {
        dataColorsScheme: ['schemeCategory10', 'schemeSet3']
      }
      for (let section in docs) {
        for (let option in docs[section]) {
          console.log('createConfigUI 1', `${section}.${option}`)
          let object = this.findConfigOption(option)
          console.log('createConfigUI 2', option, object, typeof object)
          if (typeof object === 'undefined') continue
          if (Object.keys(enums).includes(option)) docs[section][option].meta.control = 'options'
          else if (Array.isArray(object)) docs[section][option].meta.control = 'array'
          else docs[section][option].meta.control = typeof object
          docs[section][option].meta.model = object
        }
      }
      console.log('createConfigUI', docs)
    },

    walk: function (obj) {
      if(obj && typeof obj === 'object') {
        // console.log('object in this.walk', obj)
        for(let i in obj) {
          if(obj.hasOwnProperty(i)) {
            obj[i] = this.walk(obj[i])
            obj[i] = !Number.isNaN(obj[i]) && +obj[i] || obj[i] // convert strings to numbers (requested for chartlib)
            // console.log('this.walk', obj[i])
          }
        }
      }
      return obj
    },


    renderChart: function () {
      console.log('config in renderChart', this.chartConfig)
      // this.$refs.chart.style = `height: ${this.$refs.chart.height}px`
      // let config = {
      //   ...this.chartConfig,
      //   container:  this.$refs.chart,
      //   series: this.chartConfig.series
      // }
      // this.walk(this.chartConfig)
      roiCharts.chart({...this.chartConfig, container:  this.$refs.chart})
      // this.createConfigUI()
      // let settables = this.chartInstance.settableProperties
      // config = settables
      // this.findConfigOption('categoriesAxis')
      // this.findConfigOption('labels')
       //chartData.config //instance.settableProperties
      // console.log('settables', JSON.parse(JSON.stringify(settables)))
      // this.walk(JSON.parse(JSON.stringify(settables)))
      // console.log('optionsdoc', docs)
      // for (let key in settables) {
      //   let section = this.findSection(key)
      //   console.log('setting', key, settables[key], section)
      // }
      // let configjs = JSON.stringify(settables, replacer , 2)
      // let conf = JSON.parse(configjs)
      // console.log('restored', JSON.stringify(restorer(conf)))




      function restorer(obj) {
        let parsed = {}
        try {
          parsed = JSON.parse(obj)
        } catch (err) {
          if(typeof obj !== 'object') {
            return obj
          }
          parsed = obj
          for(let i in parsed) {
            if(parsed.hasOwnProperty(i)) {
              parsed[i] = restorer(parsed[i]);
            }
          }
        }
        return parsed;
      }
            // console.log('chart configs', conf)
      function replacer(key, val) {
        // console.log('replacer key', key, 'val', val)
        if (['series', 'container', 'config', 'initialize', 'data', 'chartAPI',
        'smallMultiplesAPI', 'seriesById','seriesWithIndices'].includes(key)) return
        if (typeof val === 'object') return val
        return JSON.stringify({type: typeof val, default: val})
      }
      // console.log('chart instance data', instance.chartData.config)
      // let settings = Object.keys(instance.chartData.config)
      // for (let s of settings) {
      //   // let obj = createObjectTypes(s)
      //   console.log('setting', s, Array.isArray(instance.chartData.config[s]) && 'Array' || typeof(instance.chartData.config[s]))
      // }
      // function createObjectTypes(root) {
      //   if ()
      // }
    }
  }
}
</script>
