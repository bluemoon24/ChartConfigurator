# Setting value keys

## How to use

#### Value keys can be set in chart or series configs:

```
roiCharts.chart({
    ...config,
    valueKeys: [key, key],
    series: [
        {
            valueKey: key,
        },
    ],
});
```

#### `key` is a string specifying a key of a field in data that contains a value.

### How the value keys for each series are set (list ordered by priority):
1. If the **series** has a field `valueKey` set, then the library treats fields with that key in data as values.
2. If the **chart** has a field `valueKeys` set, then the library searches for the first key in `valueKeys` array that occurs in keys of fields in data of the series. If it finds it, then it becomes the `valueKey` of that series.
3. The library searches for the first field with a numeric value in the first data entry of a series, then its key becomes the `valueKey` of that series.
