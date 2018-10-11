# Small multiples

## How to use

```
const chart = roiCharts.smallMultiples(config);
```

#### `config` is an object specifying small multiples' properties

Variable **chart** works similarly to corresponding variable in [Chart](/chart) tab.

### Mandatory fields:
- **container** _(DOM node / delegate)_ - container in which a chart should be rendered
- **charts** _(2D array)_ - two-dimensional (rows and columns) array of charts to be rendered in small multiples.<br>
Option should be provided in the following form:
```
[  // column 1   // column 2   // column 3
    [chartConfig1, chartConfig2, chartConfig3], // row 1
    [chartConfig4, chartConfig5, chartConfig6], // row 2
]
```
Charts are described in [Chart](/chart) tab.

#### Small multiples charts' _primaryValuesAxis_, _secondaryValuesAxis_, _dataOuterPadding_ and _orientation_ options are being set according to the settings of the first chart in small multiples.

#### Small multiples charts' _categories_ for all charts are set according to the algorithm described in [Categories](/categories) tab, applied for the first chart in a small multiple.

### Optional fields:
- **width** and **height** _(number)_ - works as described in [Chars](charts), but for the whole small multiples.
- **margin** _(object)_ - works as described in [Chart](/chart), but for all charts in small multiples.
- **categoriesAxis** _(object)_ - works as described in [Chars](charts).<br>
Only the first chart in a row (for horizontal orientation) or column (for vertical orientation) can have the option **labels** of **categoriesAxis** object customized - charts "inside" the small multiples have got it set to `false` by default.<br>
The same behavior applies for chart's **categoriesTitle** option - it is set to `null` by default for charts "inside" the small multiples.
- **centerOrigins** _(boolean)_ - defines whether the origins (zero lines) of charts in a small multiple should be centered.<br>
Default value - `false`
- **noDataMessage** _(string / delegate)_ - message displayed on any of the sub charts when there is no data in it's series<br>
Default value - `No data in series`
- **background** _(string / delegate)_ - background of the small multiples area. It has a lower priority than chessboardBackground option and backgrounds of separate subcharts.<br>
Default value - `#ffffff`
- **chessboardBackground** _(array)_ - an array containing colors of subcharts - the first color is used for charts with odd indices, and the last one for charts with even indices. It has a lower priority than backgrounds of separate subcharts.

- **gridSizing** _(object)_ - object containing information about the sizing of charts in small multiples.<br>
If not set, then the available size is distributed equally between the charts.<br>
Object can contain two fields:
    - **width** _(array)_ - list of widths of small multiples charts in percents of available width. First value applies for the first chart in a row etc.
    - **height** _(array)_ - list of heights of small multiples charts in percents of available height. First value applies for the first chart in a column etc.

    Arrays of sizes have got a few restraints:
    - if there is a zero value in-between, then the appropriate row/column is not rendered
    - if there is not enough sizes in any array, then the remaining space (if there is any) is divided equally between the remaining columns/rows
    - if there there is too much data in any array, the unnecessary values are ignored
    - if the total sum of the sizes in any array is above or below 100, then it is scaled to match the sum of 100

- **dataLabelsSeparators** _(object)_ - defines which separators should be used for data labels. It has got a lower priority than similar settings for a chart or series.<br>
It has got the same fields as **separators** option for [Series](/series).
- **separators** _(object)_ - defines which separators should be used for both data labels and axes labels. It has got a lower priority than similar settings for a chart or series.<br>
It has got the same fields as **separators** option for [Series](/series).
- **dataLabelsDecimals** _(number)_ - the number of decimals to be rendered in data labels of all charts' series. It has a lower priority than similar settings for specific charts and series.<br>
Default value - `0`
- **valuesAxesDecimals** _(number)_ - the number of decimals to be rendered in data labels of both values axes in every chart. It has a lower priority than a similar setting for the particular chart or particular labels and is ignored by default.
- **truncateTitles** _(boolean)_ - works as described in [Chart](/chart), but for all charts in small multiples. It has a lower priority than the same option for particular sub-charts.
