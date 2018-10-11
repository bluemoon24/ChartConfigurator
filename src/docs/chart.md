# Chart

## How to use

```
const chart = roiCharts.chart(config);
```

#### `config` is an object specifying graph's properties

Variable **chart** is an instance of a chart - it is returned by roiCharts `chart` method. It contains the resize method which allows chart resizing.<br>
Usage:
```
const newWidth = 500;
const newHeight = 400;
chart.resize(newWidth, newHeight);
```

### Mandatory fields:
- **container** _(DOM node / delegate)_ - container in which a chart should be rendered
- **series** _(array)_ - array of series or groups of series to be rendered on a chart<br>
These elements are described in [Series](/series) and [Groups](/groups) tabs.

### Optional fields:
- **categoriesKey** _(string / delegate)_ - key of categories in series data objects<br>
Default value - data entry's first string field's key
- **eventSubscribers** _(array)_ - custom events subscribers, see more in [Events](/events)
- **eventsTypes** _(string)_ - events types used by interaction manager, see more in [Events](/events). Currently supported `eventTypes` implemented by the library:
```
MOUSE_INTERACTIONS
```
Default value - `MOUSE_INTERACTIONS`
- **dataColorsScheme** _(string / array)_ - name of the one of default color schemes for the chart that is included in the library, or custom color scheme passed as an array of color values. At the chart level the next color from the provided colors array or the default scheme is assigned for every series<br>
Available default color schemes: `schemeCategory10`, `schemeSet3`<br>
Default value - `schemeCategory10`
- **valueKeys** _(array / delegate)_ - array of keys of fields in series data that should be treated as values<br>
Default behavior is described in [Setting value keys](/value-keys) tab.
- **noDataMessage** _(string / delegate)_ - message displayed when there is no data in series<br>
Default value - `No data in series`
- **separators** _(object)_ - it works the same as **separators** option for [Series](/series), but is applied for values axes' labels and data labels. It has the lowest priority of all separators settings.
- **primaryValuesAxis** _(object)_ - defines ticks adjustments options and which elements (line and labels) of the primary (left or bottom) chart axis should be rendered<br>
Default value:
```
{
    line: true,
    labels: true,
    ticks: {
        marksVisible: true,
        fixedInterval: false,
    },
    separators: {
        decimal: ',',
        thousands: '.',
    },
}
```
Options:
    - **line** _(boolean)_ - defines whether the line should be rendered
    - **labels** _(boolean)_ - defines whether the labels should be rendered
    - **ticks** _(object)_ - ticks configuration object
        - **fixedInterval** _(boolean / number)_ - defines a fixed interval between ticks.<br>
        Default value - `false` for dynamic ticks placing.<br>
        If exists, ticks on the opposite values axis are recalulated to fit this axis' domain. If both `primaryValuesAxis` and `secondaryValuesAxis` have `fixedInterval` set, only the `fixedInterval` on the `primaryValuesAxis` is being taken into account.<br>
        If the fixed interval passed is too small, this option is omitted in order to preserve the correct chart rendering.
        - **marksVisible** - _(boolean)_ - defines whether the ticks marks should be rendered
    - **separators** _(object)_ - it works the same as **separators** option for [Series](/series), but is applied for particular values axis' labels.
    - **decimals** _(number)_ - the number of decimals to be rendered in data labels of a particular axis. It is ignored by default.

  [155c2865]: #categoriesKeys "categoriesKeys"
  [eb5f318b]: #categoriesKeys "categoriesKeys"

- **secondaryValuesAxis** _(object)_ - defines ticks adjustments options and which elements (line and labels) of the secondary (right or top) chart axis should be rendered.<br>
Default value and options descriptions are the same as for **primaryValuesAxis** above.
- **categoriesAxis** _(object)_ - defines which elements (line and labels) of the category chart axis should be rendered<br>
Default value:
```
{
    line: true,
    labels: true,
}
```
- **categoriesLabels** _(delegate)_ - a function which is being applied one by one for every categories axis label. It takes the current **label** and the **value** of the first chart's entry connected to the category as parameters, and expects the updated label as a return value.<br>
- **categoriesTitle** _(string / delegate)_ - title for the categories axis
- **primaryValuesTitle** _(string / delegate)_ - title of the the primary values axis
- **secondaryValuesTitle** _(string / delegate)_ - title of the secondary values axis
- **valuesAxesDecimals** _(number)_ - the number of decimals to be rendered in data labels of both values axes. It has a lower priority than a similar setting for particular labels and is ignored by default.
- **orientation** _(string / delegate)_ - chart orientation, either vertical or horizontal<br>
Default value - `vertical`
- **width** _(number / delegate)_ - total chart width<br>
Default value - width of a container
- **height** _(number / delegate)_ - total chart height<br>
Default value - height of a container
- **margin** _(object / delegate)_ - chart inner margins, it is an object containing fields `top`, `right`, `bottom` and `left`.<br>
User does not have to provide every margin, only the ones provided will override the appropriate ones.<br>
Default value:
```
{
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
}
```
- **legend** _(object / delegate)_ - configuration for chart legend.<br>
Every skipped value is replaced with a one from the defaults.<br>
Default values:
```
{
    visible: false,
    position: 'bottom',
    margin: {
        /* depending on position */
        top: {
            top: 2,
            right: 10,
            bottom: 8,
            left: 10,
        },
        bottom: {
            top: 8,
            right: 10,
            bottom: 2,
            left: 10,
        },
    },
    labelColor: '#000000',
    labelHighlightColor: '#1831cc',
    inactiveColor: '#e0e0e0',
    shapesSize: 10,
    labelsSize: 10,
    labelsMargin: 8,
}
```
Options:
    - **visible** - _(boolean)_ - defines whether the legend should be rendered.
    - **position** - _(string)_ - it can be set either to `top` or `bottom` and it sets the position of legend on the chart.
    - **margin** - _(object)_ - legend margins, it is an object containing fields `top`, `right`, `bottom` and `left`.
    _ **inactiveColor** - _(string)_ - color of series that are currently not displayed on the chart.
    - **labelColor** - _(stirng)_ - color of legend labels.
    - **labelHighlightColor** - _(stirng)_ - color of highlighted legend label.
    - **shapesSize** - _(number)_ - width and height of a graphical shape in legend entry.
    - **labelsSize** - _(number)_ - size of legend labels in px.
    - **labelsMargin** - _(number)_ - margin of legend labels from shapes in px.<br>
- **stacked** _(boolean / delegate)_ - defines whether the data representations should start at the end of the previous ones in values axis<br>
Default value - `false`
- **matchStackTo100** - _(boolean)_ - defines whether the stacked series should be extended to fill the full size of a container. Data labels are rendered at the center of data representations in this case, and show percentage of the value in a stack instead of the actual value.<br>
Default value - `false`
- **clustered** _(boolean / delegate)_ - defines whether the data representations should start at the end of the previous ones in categories axis<br>
Default value - `false`
- **clusterScalingSize** _(number)_ - defines the total width of a whole cluster in percents of a bandwidth (the whole category width)<br>
If set, the series sizes are multiplied or divided to give a sum of 100.
- **overlapping** _(number)_ - defines whether and by how much the data representations should overlap the previous ones in categories axis<br>
Setting it to `0` results in getting a normal `clustered` group.
- **overlappingType** _(string)_ - defines the type of overlapping. It’s applied when `overlapping` is set.<br>
Possible values:
    - `percentsPrevious` - the shift of elements is **overlapping** / 100 * width of element before the current one
    - `percentsCurrent` - the shift of elements is **overlapping** / 100 * width of the current element
    - `pixels` - the shift of elements is **overlapping**<br>
Default value - `pixels`
- **centerOrigin** _(boolean / delegate)_ - defines whether the origin (zero line) should be at the center of the chart.<br>
Default value - `false`
- **gridlines** _(boolean / delegate)_ - defines whether the grid lines for values should be rendered<br>
Default value - `false`
- **mergeSeriesCategories** _(boolean / delegate)_ - defines whether the categories from every series should be shown on the graph.<br>
First categories are the ones from the series with the biggest order value, then the next one etc.<br>
Default value - `false`
- **forecastStart** _(string / number / delegate)_ - column value at which the forecast starts<br>
The behavior is described in [Forecast columns](/forecast-columns) tab.
- **forecastOpacity** _(number / delegate)_ - opacity of forecasted data representation in percents<br>
Default value - `30`
- **dataLabelsMargin** _(number / delegate)_ - data labels' margin from data representation<br>
Default value - `6`
- **dataLabelsSize** _(number / delegate)_ - data labels' font size<br>
Default value - `12`
- **dataLabelsDecimals** _(number)_ - the number of decimals to be rendered in data labels of all series. It has a lower priority than similar setting for specific series.<br>
Default value - `0`
- **dataOuterPadding** _(number / delegate)_ - padding of the first and last data representations in percents<br>
Default value - `30`
- **axesTitlesSize** _(number / delegate)_ - axes titles font sizes<br>
Default value - `14`
- **valuesAxesLabelsSize** _(number / delegate)_ - values axes labels' font size<br>
Default value - `10`
- **categoryAxisLabelsSize** _(number / delegate)_ - category axis labels' font size<br>
Default value - `10`
- **background** _(string / delegate)_ - background of the chart area<br>
Default value - `#ffffff`
- **truncateTitles** _(boolean / delegate)_ - defines whether the horizontal axes titles should be truncated (or hidden) if there is not enough space to render them.<br>
Default value - `true`
- **showVersion** _(boolean / delegate)_ - defines whether the library version should be rendered at the bottom right of the chart<br>
Default value - `false`
- **xLabelsResponsiveness** _(array)_ - defines how the responsiveness of x axes labels should behave.<br>
The usage and the default behavior are described in [X Axes labels responsiveness](/x-axes-labels-responsiveness) tab.
- **dataLabelsSeparators** _(object)_ - defines which separators should be used for data labels. It overwrites the default ones and small multiple's, but has got a lower priority than similar settings for series.<br>
It has got the same fields as **separators** option for [Series](/series).
- **valuesAxesSeparators** _(object)_ - defines which separators should be used for values axes labels. It overwrites the default ones, but has got a lower priority than similar settings for axes.
It has got the same fields as **separators** option for [Series](/series).
- **thumbnail** _(boolean)_ - defines whether the chart should be drawn as a thumbnail. It is a shortcut for setting the following chart options:
```
{
    primaryValuesAxis: {
        line: false,
        labels: false,
    },
    secondaryValuesAxis: {
        line: false,
        labels: false,
    },
    categoriesAxis: {
        line: false,
        labels: false,
    },
    primaryValuesTitle: null,
    secondaryValuesTitle: null,
    categoriesTitle: null,
    legend: {
        visible: false,
    },
    showVersion: false,
}
```
