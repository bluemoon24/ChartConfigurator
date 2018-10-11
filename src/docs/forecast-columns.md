# Forecast Columns

## How to use

#### Forecast columns can be set in chart config:

```
roiCharts.chart({
    ...config,
    ...forecastConfig,
});
```

#### `config` is an object specifying graph's properties whereas `forecastConfig` is an object specifying forecast properties

### Mandatory field to set the forecast:
- **forecastStart** _(string / number)_ - column value at which the forecast starts<br>

### Optional field:
- **forecastOpacity** _(number)_ - opacity of forecasted bars in percents<br>
Default value - `30`
