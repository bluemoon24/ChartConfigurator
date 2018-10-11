# Sunburst diagram

## How to use

```
roiCharts.sunburstDiagram(config);
```

#### `config` is an object specifying diagram's properties

### Mandatory fields:
- **container** _(DOM node)_ - container in which a diagram should be rendered
- **data** _(object)_ - object with tree structure that contains nodes<br>
Options:
    - **name** _(string)_ - name of the node
    - **children** _(array)_ - an array containing child nodes, it should be provided if there is no `size` in current node
    - **size** _(number)_ - size of node - the sum of the size of all children's nodes is 100% of current node's size. It should be provided if current node doesn't have `children`

**data** example:
```
{
    name: 'TOPICS',
    children: [
        {
            name: 'Topic A',
            children: [
                { name: 'Sub A1', size: 4 }, 
                { name: 'Sub A2', size: 4 }
            ],
        },
        {
            name: 'Topic B',
            children: [
                { name: 'Sub B1', size: 3 },
                { name: 'Sub B2', size: 3 },
                { name: 'Sub B3', size: 3 },
            ],
        },
    ],
}
```

### Optional fields:
- **width**, **height**, **background** and **margin** options work as described in [Chars](charts) tab.
- **sunburstLabels** _(boolean)_ - defines whether the labels on the sunburst diagram should be rendered<br>
Default value - `false`
- **sunburstLabelsSize** _(number / delegate)_ - sunburst labels' font size<br>
Default value - `11`
- **sunburstZoomTransition** _(number / delegate)_ - transition time in [ms] of zooming in/out afer clicking on the node<br>
Default value - `750` 
- **noDataMessage** _(string / delegate)_ - message displayed when there is no data in root node<br>
Default value - `No data in series`
