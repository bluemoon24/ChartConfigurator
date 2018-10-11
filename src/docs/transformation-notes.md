# Old portlet format transformation notes

`- think about the way of translating the portlet with small multiples (2166) into the format understandable by the roi-chart library`:

In `portlet config -> views -> view array` there are configurations for multiple views, each of them is one small multiple.
View config contains *desiredColumnWidths* field, which is in form of a string with widths of charts in %, e.g. ‘50,25,25’.<br>
This can be easily translated to roi-charts’ *gridSizing* option, e.g. `gridSizing: { width: [50] }` (only 50 is passed because the library distributes the remaining space equally).<br>
View config also contains *chart* array which consists information about charts in a small multiple.<br>
Each chart config contains a string field *pos* indicating its position, e.g. “1.0” which means that it is placed in the second column (1) and the first row (0). Roi-charts is positioning the charts in a small multiple based on their positions in a grid - 2d array containing chart configuration objects. It means that the only thing that we have to do to transform the old positioning format into the new one is to put the configurations in the correct order in a nested array, e.g.:
```
chart: [
    { id: 1, pos: 0.0 },
    { id: 2, pos: 1.0 },
    { id: 3, pos: 2.0 },
    { id: 4, pos: 0.1 },
    { id: 5, pos: 1.1 },
    { id: 6, pos: 2.1 },
]
```
has to be changed to:
```
charts: [
    [{ id: 1 }, { id: 2 }, { id: 3 }],
    [{ id: 4 }, { id: 5 }, { id: 6 }]
]
```
The portlet configuration itself has got an object *axes*, which can be partly translated into roi-charts format by using the fields *hide*, *hideTitle*, *hideAxisLabel* and *hideLine* used in configurations for vertical and horizontal axes.<br>
We will have once again think about the importancy of each color setting in the whole config to map it to our extensive colors API created by Grzegorz.<br>
Fields like `hideGridLines, deviationCols -> showDataLabels` which work similarly to what we already have in roi-charts can be easily mapped to the new format. Also some of the functionality will be easy to implement, like `hideOrigin` option.
