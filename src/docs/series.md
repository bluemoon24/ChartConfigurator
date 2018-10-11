# Series

## How to use

```
roiCharts.chart({
    ...chartConfig,
    series: [
        config,
        {
            name: 'group',
            series: [
                config,
            ],
        },
    ],
});
```

#### `config` is an object specifying series properties

### Mandatory fields:
- **data** _(array)_ - array with series data, in form of:
```
[
    { temp: 32, month: 'January' },
    { temp: 38, month: 'February' },
    { temp: 47, month: 'March' },
    { temp: 59, month: 'April' },
]
```
where keys' names can be anything - chart configuration enables to select which name represents data, and which represents categories.<br>
Data entries also have a few additional options:
    - **labelSize** _(number)_ - the size of a label of data representation, it overwrites the global labels size
    - **labelBold** _(boolean)_ - defines whether the label of data representation should be bold.<br>
    Default value - `false`
    - _(only for waterfall series)_ **pillar** _(boolean)_ - described in optional fields for waterfall series

### Optional fields:
- **name** _(string)_ - name of series
- **cut** _(number / array)_ - cuts data representations above a given value and adds a triangle indicator to labels of cut data. Cut data is not taken into account in domain calculations. It can be passed as a:<br>
    - **number** - cuts the values between `-number` and `number`
    - **array** - cuts the values in the given range where `['start of the range', 'end of the range']`
- **dataLabelsThreshold** _(number / array)_ - show threshold label instead of a full label when value is above a given value. It can be passed as a:<br>
    - **number** - cuts the values between `-number` and `number`
    - **array** - cuts the values in the given range where `['start of the range', 'end of the range']`
- **type** _(string)_ - type of data representation, possible values: `bar`, `bullet`, `inset`, `candlestick`, `dot`, `line`, `target`, `waterfall`, `number`<br>
Default value - `bar`
- **valueKey** _(string)_ - key of fields series data that should be treated as values<br>
- **assignTo** _(string)_ - assigns a series to a particular values axis, possible values: `primary`, `secondary`<br>
    - for the vertical chart, the `primary` axis is the **left** one, and the `secondary` axis is the **right** one
    - for the horizontal chart, the `primary` axis is the **bottom** one, and the `secondary` axis is the **top** one
- **neutralInterval** _(number / array)_ - interval for neutral values, used for assigning colors of data representation in `dataColor` and `fixedColors` options. It could be passed as a:<br>
    - **number** - values between `-value` and `value`
    - **array** - values where `['minimal value', 'maximal value']`
- **dataColorsScheme** _(string / array / delegate)_ - name of the one of default color schemes for series that is included in the library, or custom color scheme passed as an array of color values. At the series level, the next color from the provided colors array or the default scheme is assigned to every data in the series. It overrides `dataColorsScheme` used at chart level.<br>
Available default color schemes: `schemeCategory10`, `schemeSet3` 
- **dataColor** _(string / array / object)_ - color of series data representation. It overrides `dataColorsScheme` used at chart level and series level. It could be passed as a:<br>
    - for the _line_ type, it could be passed as a:
        - **string** - color of the line
    - for the rest of the series types, it could be passed as a:
        - **string** - color for every value
        - **array**<br>
            - when there are 3 elements:<br>
                `['color for positive values', 'color for negative values', 'color for values in neutral interval']`
            - when there are 2 elements:<br>
                `['color for positive values', 'color for negative values']`
            - when there is 1 element:<br>
                `['color for every value']`
        - **object**
            - **refValues** _(string)_ - name of the key in series data set that should be treated as a base to apply negative/positive/neutral color<br>
            Default value - field used as a `value` for calculating series
            - **colors** _(string / array)_ - color for values, see `string` and `array` variations of `dataColor`

    Default value - color taken from used color scheme, see `dataColorsScheme` in [chart](/chart) tab
- **fixedColors** _(array)_ - array of objects representing categories that should have fixed colors regardless of used `dataColor` or `dataColorsScheme` settings, every object could have following fields:
    - **refCategory** _(string)_ - name of the category that should have fixed color
    - **refValues** _(string)_ - name of the key in series that should be as a base to apply negative/positive/neutral color<br>
    Default value - field used as a `value` for calculating series
    - **colors** _(string / array)_ - color for values, see `string` and `array` variations of `dataColor`
- **size** _(number)_ - data representation size, if in percents then it refers to the allowed bandwidth<br>
Default values:
    - bar type - `50 [%]`
    - bullet type - `18 [%]`
    - inset type - `40 [%]`
    - candlestick type - `18 [%]`
    - dot type - `10 [%]`
    - line type - `12 [%]`
    - target type - `50 [%]`
    - waterfall type - `50 [%]`
    - number type - `12 [px]`
- **dataLabels** _(object)_ - configuration for data labels.<br>
Options:
    - **visible** - _(boolean)_ - defined whether the data labels for the data representations should be rendered.<br>
    Default value - `false`
    - **color** - _(string)_ - the color of data labels.<br>
    Default value - `#000000`
    - **colorFromData** - _(boolean)_ - defines whether the labels color should be inherited from the data representation. It overwrites the **color** setting.<br>
    Default value - `false`
    - **showPlusSign** - _(boolean)_ - defines whether the labels for the positive values should have a plus sign rendered before the values.<br>
    Default value - `false`
    - **decimals** - _(number)_ - the number of decimals to be rendered in a data label.<br>
    Default value - `0`
    - **separators** _(object)_ - defines which separators should be used for data labels. It overwrites the default, small multiple's, and series' ones.<br>
    Options:
        - **decimal** - _(string)_ - decimal separator for labels, example for "x" string: `12345678.9` -> `12345678x9`
        - **thousands** - _(string)_ - thousands separator for labels, example for "x" string: `12345678.9` -> `12x345x678.9`
    - **particularLabels** - _(array)_ - array of objects containing configuration for separate labels.<br>
    Label configuration fields:<br>
        - **refCategory** _(string)_ - name of the category of label to which the options should be applied
        - **labelSize** and **labelBold** options work as described above
- **categoriesSetter** _(boolean)_ - defines whether only the categories from the current series should be shown on the graph<br>
Default value - `false`
- **order** _(number)_ - defines in what order the data series should be rendered - series with lower value will be drawn on top of the ones with a higher value<br>
This parameter can also take negative values.<br>
Default behavior - series that occur after another in `series` array are rendered on top.
- **overallResultVisualization** _(object)_ - configuration for special overall result visualization.<br>
Total and Remaining visualizations are rendered only if the appropriate value is passed to the library.<br>
Options:
    - **total** - _(number)_ - the total value in visualization, it is rendered as the first category.
    - **remaining** - _(number)_ - the remaining value in visualization, it is rendered as the last category.
    - **totalSpecial** - _(boolean)_ - defines whether the total visualization is rendered as an arrow. If false, then it is rendered as a normal data representation and is taken into account in domains calculations.<br>
    Default value - `false`
    - **remainingSpecial** - _(boolean)_ - defines whether the remaining visualization is rendered as an arrow. If false, then it is rendered as a normal data representation and is taken into account in domains calculations.<br>
    Default value - `false`
    - **totalLabel** - _(string)_ - the label of total visualization category.<br>
    Default value - `Total`
    - **remainingLabel** - _(string)_ - the label of remaining visualization category.<br>
    Default value - `Remaining`

#### Optional fields for candlestick series:
- **lineSize** _(number)_ - width of the line in "two-piece" data representations<br>
Default value for `candlestick` - `1 [px]`
- **bodyType** _(string)_ - shape of the main piece of two-piece data representations, possible values: `square`, `circle`<br>
Default value - `square`
- **candlestickLineColor** _(string / array / object)_ - color for candlestick line, see `dataColor` 

#### Optional fields for line series:
- **lineSize** _(number)_ - width of the line in "two-piece" data representations<br>
Default value for `line` - `2 [px]`
- **noBreaks** _(boolean)_ - defines whether the line connecting data points should break when there is no value for a given category<br>
Default value - `false`
- **dashed** _(boolean)_ - defines whether the line connecting data points should be dashed<br>
Default value - `false`
- **undecorated** _(boolean)_ - defines whether the line should not have dots in data points<br>
Default value - `false`

#### Optional fields for target series:
- **lineSize** _(number)_ - width of the line in "two-piece" data representations<br>
Default value for `target` - `2 [px]`

#### Optional fields for waterfall series:
- **lines** _(boolean)_ - defines whether the lines connecting bars should be rendered<br>
Default value - `false`
- data entries option **pillar** _(boolean)_ - describes whether the data entry should be a pillar (a normal value starting from 0).

#### Optional fields for number series:
- **align** _(string)_ - defines where the number labels should be aligned. Possible values: `left`, `center`, `right`. It works only for horizontal charts.<br>
Default value - `right`
