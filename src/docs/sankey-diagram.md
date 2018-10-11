# Sankey diagram

## How to use

```
roiCharts.sankeyDiagram(config);
```

#### `config` is an object specifying diagram's properties

### Mandatory fields:
- **container** _(DOM node)_ - container in which a diagram should be rendered
- **data** _(object)_ - object containing information about nodes and links between them.<br>
Options:
    - **nodes** _(array)_ - an array containing nodes objects which are described below.<br>
    **node** object fields:
        - **node** _(number)_ - id of the node, it is used to identify the node while making links
        - **name** _(string)_ - name of the node, it is used as a label
        - _(optional)_ **color** _(string)_ - color of the node
    - **links** _(array)_ - an array containing links objects which are described below.<br>
        **link** object fields:
        - **source** _(number)_ - id of the starting node of a link
        - **target** _(number)_ - id of the target node of a link
        - **value** _(number)_ - size of a link - sum of all values of links starting from a node is 100% of node's height

**data** example:
```
nodes: [
    { node: 0, name: 'node0' },
    { node: 1, name: 'node1', color: '#000' },
    { node: 2, name: 'node2' },
    { node: 3, name: 'node3' },
    { node: 4, name: 'node4' },
],
links: [
    { source: 0, target: 2, value: 2 },
    { source: 1, target: 2, value: 2 },
    { source: 1, target: 3, value: 2 },
    { source: 0, target: 4, value: 2 },
    { source: 2, target: 3, value: 2 },
    { source: 2, target: 4, value: 2 },
    { source: 3, target: 4, value: 4 },
],
```

### Optional fields:
- **width**, **height**, **background** and **margin** options work as described in [Chars](charts) tab.
- **noDataMessage** _(string / delegate)_ - message displayed when there is no data in links or nodes<br>
Default value - `No data in series`
- **nodeWidth** _(number)_ - width of nodes in px<br>
Default value - `15`
- **nodePadding** _(number)_ - spacing between neighboring nodes in px<br>
Default value - `80`
- **pathOpacity** _(number)_ - opacity of paths between nodes in percents<br>
Default value - `40`
