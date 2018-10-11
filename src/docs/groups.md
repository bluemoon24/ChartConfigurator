# Groups

## How to use

```
roiCharts.chart({
    ...chartConfig,
    series: [
        ...series,
        config,
    ],
});
```

#### `config` is an object specifying group properties

### Mandatory fields:
- **series** _(array)_ - array of series to be rendered on a chart<br>
This field is described in a [Series](/series) tab.

### Optional fields:
- **name** _(string)_ - name of a group
- **stacked**, **clustered**, **clusterScalingSize**, **overlapping**, **overlappingType** - these fields are described in a [Chart](/chart) tab, but for groups they do not take delegates as parameters.
