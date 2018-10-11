# X Axes labels responsiveness

## How to set

```
roiCharts.chart({
    ...config,
    xLabelsResponsiveness,
});
```

#### `xLabelsResponsiveness` is an array specifying how the responsiveness of x axes labels should behave.

##### It is triggered when the labels overflow their allowed width.

The array contains objects in a form described below. One object is being selected by the library depending on the current chart width and `minWidth`s of objects in array.

##### How the responsiveness config object is being selected (list ordered by priority):
    1. If there is one or more objects which has `minWidth` field set to a value greater than the current chart width, then the one with the value closer to chart width is selected.
    2. If there are any objects without `minWidth` field set, then the first one is selected.
    3. If there are no objects, then the responsiveness is not being applied.
    4. If the option is not set, then the default config is applied.

Options of objects:
- **minWidth** _(number / delegate)_ - defines the minimal width of the chart that is required to apply responsiveness settings from the current object<br>
- **extendTicks** _(object / delegate)_ - defines whether the ticks with even indices should be longer than the others<br>
Options:
    - **value** - _(boolean)_ - triggers the option<br>
    Default value - `false`
    - **consistent** - _(boolean)_ - defines whether the option should apply to all labels in an axis<br>
    Default value - `false`
- **truncateLabels** _(object / delegate)_ - the length to which the overflowing labels are truncated<br>
A delegate takes the current `primaryAxisLabels` and `secondaryAxisLabels` as parameters.<br>
Options:
    - **value** - _(boolean)_ - triggers the option<br>
    Default value - `3`
    - **consistent** - _(boolean)_ - defines whether the option should apply to all labels in an axis<br>
    Default value - `false`
    - **primaryAxisLabels** - _(array)_ - axis labels of the primary axis<br>
    Default behavior - labels are truncated by the library
    - **secondaryAxisLabels** - _(array)_ - axis labels of the secondary axis<br>
    Default behavior - labels are truncated by the library
- **hideLabels** _(object / delegate)_ - defines whether the overflowing labels should be hidden<br>
Options:
    - **value** - _(boolean)_ - triggers the option<br>
    Default value - `false`
    - **consistent** - _(boolean)_ - defines whether the option should apply to all labels in an axis<br>
    Default value - `false`

Default config:
```
xLabelsResponsiveness: [
    {
        minWidth: 600,
        extendTicks: {
            value: true,
            consistent: true,
        },
        truncateLabels: {
            value: false,
            consistent: false,
        },
        hideLabels: {
            value: false,
            consistent: false,
        },
    },
    {
        minWidth: 300,
        extendTicks: {
            value: true,
            consistent: true,
        },
        truncateLabels: {
            value: 3,
            consistent: true,
        },
        hideLabels: {
            value: false,
            consistent: false,
        },
    },
    {
        extendTicks: {
            value: true,
            consistent: true,
        },
        truncateLabels: {
            value: 1,
            consistent: true,
        },
        hideLabels: {
            value: false,
            consistent: false,
        },
    },
]
```
