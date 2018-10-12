# Chart Configurator

### How to use

Once the application is running, navigate to the relevant page by **clicking the `Chart` button** on the left menu.

Note: this is not a polished application, hence some pages that can be navigated to currently make no sense for this purpose. Maybe I will remove them later.

### How it works
We first instantiate a roi-chart with a minimum configuration, which is imported from `chartConfig.js` in the `components` directory.
After instatiation we call the `settableProperties` getter from roi-charts library to retrieve the complete  configuration object (i.e. all API options, except `series.data` and `container`).

From this object we generate a tree-like UI dynamically for the whole object tree. Each option name is shown as label or header on the UI control. In order to choose an appropriate UI control (e.g. text field, switch, etc) and to display some hints, we use an object (`OptionsDoc.js`), which is created from the .md files in the roi-charts `doc` directory.

To create/update the `OptionsDoc.js` file, use the perl script in the `bin` folder like so (assuming you are in the top level directory of this project):

`perl bin/exopt.pl path/to/docs/*.md >src/components/OptionsDoc.js`

The created file looks like this:

    export default {

    	chart: {
    		axesTitlesSize: { type: "number / delegate", help: "axes titles font sizes" },
        ...
        xLabelsResponsiveness: { type: "array", help: "defines how the responsiveness of x axes labels should behave." }
      },

      events: {
        chartData: { type: "object", help: "chart data object that is used internally by the chart library" },
        ...
      },
      ...
    }
The toplevel keys of this object are created from the respective (.md)-filenames and have been camel cased for compilations. Actually these are currently not used, but could serve as grouping structure for UI controls in the future.

### ToDos
- Support functional options (delegates)
- Support other chart types: SmallMultiples, Sankey, etc.
- Make the `textarea` field of the config editable (currently I don't see a need for this)

### Known bugs
The `OptionsDoc` keys are not unique, hence a type and help may not be allocated correctly (although the binding of the control should be fine). Expample: `visible` is in `chart` as well as in `legend`. As the `OptionsDoc` is flat, we cannot resolve this ambiguity for now.
