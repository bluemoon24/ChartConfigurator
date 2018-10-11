<tree-panel>
</tree-panel>

<script>
import TreePanel from '@/components/TreePanel'
  export default {
    name: 'tree-panel',

    components: {
      TreePanel
    },

    props: {
      uitype: {
        type: Function,
        default: () => ('v-text-field')
      },
      tree: {
        type: Object,
        required: false,
        default: {}
      },
      header: {
        type: String,
        default: 'root'
      },
      ignore: {
        type: Array
      },
      level: {
        type: Number,
        default: 1
      }
    },

    data: () => ({
    }),

    computed: {
      caption () {
        // console.log('***tree', this.tree)
        return this.tree.text
      }
    },

    methods: {

      genChild: function (field) {
        // console.log('genChild child', field, this.tree[field])
        return this.tree[field] && this.$createElement(TreePanel, {
          props: {
            ignore: this.ignore,
            level: this.level + 1,
            header: field,
            tree: this.tree[field],
            uitype: this.uitype,
            value: this.value
          }
        }) || null
      },

      getOptionElements: function (subtree) {
        if (!subtree) return []
        // console.log('getOptionElements', subtree)
        let options = []
        for (let opt in subtree) {
          // // console.log('getOptionElements', this.ignore, opt)
          if (this.ignore && this.ignore.includes(opt)) {
            // console.log('TreePanel ignored', opt)
            continue
          }
          // console.log('getOptionElements type',opt, subtree[opt], typeof subtree[opt], subtree[opt] !== null && !Array.isArray(subtree[opt]) && typeof subtree[opt] === 'object')
          if (subtree[opt] !== null && !Array.isArray(subtree[opt]) && typeof subtree[opt] === 'object') options.push(this.genChild(opt))
          else {
            let vm = this
            let ele = this.uitype(subtree, opt)
            // console.log('type of uitype return', ele, typeof ele.el)
            if (typeof ele.el !== 'string')
              options.push(ele.el)
            else {
              options.push(this.$createElement(ele.el, {
                on: {
                  input: function(event) {
                    // console.log('input event', event, vm)
                    subtree[opt] = event
                    // vm.$emit('input', {value: event})
                  },
                  change: function(event) {
                    // console.log('change event', event)
                    subtree[opt] = event
                    // vm.$emit('input', {value: event})
                  }
                },
                props: {
                  ...ele.props,
                  value: subtree[opt]
                }
              }, [`${opt}: ${subtree[opt]}`]))
            }
          }
        }
        // console.log('treepanel options', options)
        return options
      },

      genRoot: function (level) {
        // generate root node. This is a new expansion-panel -> expansion-panel-content
        // console.log('generating root node', this.header)
        let expan = this.$createElement('v-expansion-panel', {}, [
          this.$createElement('v-expansion-panel-content', {}, [
            this.$createElement('div', {slot: "header"}, [this.$createElement(`h${this.level+1}`, this.header)]),
            // this.$createElement('div', {slot: "default"}, this.getOptionElements(this.tree))
            ...this.getOptionElements(this.tree)
          ])
        ])
        return expan
      },


      // genChildren: function () {
      //   let childElements = []
      //   Object.keys(this.tree).forEach(field => {
      //     if (typeof this.tree[field] === 'object') childElements.push(this.genChild(field))
      //   })
      //   return childElements
      // }
    },

    render (h) {
      return (h('div', {class: {'v-expansion-panel': true}}, [this.genRoot()]))
    }
  }
</script>

<style scoped>

</style>
