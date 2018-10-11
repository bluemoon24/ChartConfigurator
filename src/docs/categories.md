# Categories

### How the categories are set (list ordered by priority):
1. If the series has an option `categoriesSetter` set to `true`, then only the categories from this particular series are shown on the graph.
2. If the chart has an option `mergeSeriesCategories` set to `true`, then all the categories from every series are shown on the graph.<br>
First categories are the ones from the series with the biggest order value, then the next one etc.
3. Categories are taken from the series with the biggest order value (the first drawn).
4. Categories are taken from the first series in an array.
