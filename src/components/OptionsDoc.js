export default {

	chart: {
		axesTitlesSize: { type: "number / delegate", help: "axes titles font sizes" },
		background: { type: "string / delegate", help: "background of the chart area" },
		categoriesAxis: { type: "object", help: "defines which elements (line and labels) of the category chart axis should be rendered" },
		categoriesKey: { type: "string / delegate", help: "key of categories in series data objects" },
		categoriesLabels: { type: "delegate", help: "a function which is being applied one by one for every categories axis label. It takes the current **label** and the **value** of the first chart's entry connected to the category as parameters, and expects the updated label as a return value." },
		categoriesTitle: { type: "string / delegate", help: "title for the categories axis" },
		categoryAxisLabelsSize: { type: "number / delegate", help: "category axis labels' font size" },
		centerOrigin: { type: "boolean / delegate", help: "defines whether the origin (zero line) should be at the center of the chart." },
		clusterScalingSize: { type: "number(int)", help: "defines the total width of a whole cluster in percents of a bandwidth (the whole category width)" },
		clustered: { type: "boolean / delegate", help: "defines whether the data representations should start at the end of the previous ones in categories axis" },
		dataColorsScheme: { type: "string / array", help: "name of the one of default color schemes for the chart that is included in the library, or custom color scheme passed as an array of color values. At the chart level the next color from the provided colors array or the default scheme is assigned for every series" },
		dataLabelsDecimals: { type: "number", help: "the number of decimals to be rendered in data labels of all series. It has a lower priority than similar setting for specific series." },
		dataLabelsMargin: { type: "number / delegate", help: "data labels' margin from data representation" },
		dataLabelsSeparators: { type: "object", help: "defines which separators should be used for data labels. It overwrites the default ones and small multiple's, but has got a lower priority than similar settings for series." },
		dataLabelsSize: { type: "number / delegate", help: "data labels' font size" },
		dataOuterPadding: { type: "number(int) / delegate", help: "padding of the first and last data representations in percents" },
		decimals: { type: "number", help: "the number of decimals to be rendered in data labels of a particular axis. It is ignored by default." },
		eventSubscribers: { type: "array", help: "custom events subscribers, see more in [Events](/events)" },
		eventsTypes: { type: "string", help: "events types used by interaction manager, see more in [Events](/events). Currently supported \`eventTypes\` implemented by the library: " },
		fixedInterval: { type: "boolean / number", help: "defines a fixed interval between ticks." },
		forecastOpacity: { type: "number(int) / delegate", help: "opacity of forecasted data representation in percents" },
		forecastStart: { type: "string / number / delegate", help: "column value at which the forecast starts" },
		gridlines: { type: "boolean / delegate", help: "defines whether the grid lines for values should be rendered" },
		labelColor: { type: "stirng", help: "color of legend labels." },
		labelHighlightColor: { type: "stirng", help: "color of highlighted legend label." },
		labels: { type: "boolean", help: "defines whether the labels should be rendered" },
		labelsMargin: { type: "number", help: "margin of legend labels from shapes in px." },
		labelsSize: { type: "number", help: "size of legend labels in px." },
		legend: { type: "object / delegate", help: "configuration for chart legend." },
		line: { type: "boolean", help: "defines whether the line should be rendered" },
		logEvents: { type: "string / delegate", help: "enable logging of the events" },
		margin: { type: "object", help: "legend margins, it is an object containing fields \`top\`, \`right\`, \`bottom\` and \`left\`." },
		marksVisible: { type: "boolean", help: "defines whether the ticks marks should be rendered" },
		matchStackTo100: { type: "boolean / delegate", help: "defines whether the stacked series should be extended to fill the full size of a container. Data labels are rendered at the center of data representations in this case, and show percentage of the value in a stack instead of the actual value." },
		mergeSeriesCategories: { type: "boolean / delegate", help: "defines whether the categories from every series should be shown on the graph." },
		noDataMessage: { type: "string / delegate", help: "message displayed when there is no data in series" },
		orientation: { type: "string / delegate", help: "chart orientation, either vertical or horizontal" },
		overlapping: { type: "number", help: "defines whether and by how much the data representations should overlap the previous ones in categories axis" },
		overlappingType: { type: "string", help: "defines the type of overlapping. It’s applied when \`overlapping\` is set." },
		position: { type: "string", help: "it can be set either to \`top\` or \`bottom\` and it sets the position of legend on the chart." },
		primaryValuesAxis: { type: "object", help: "defines ticks adjustments options and which elements (line and labels) of the primary (left or bottom) chart axis should be rendered" },
		primaryValuesTitle: { type: "string / delegate", help: "title of the the primary values axis" },
		resize: { type: "method", help: "allows resizing of the chart" },
		secondaryValuesAxis: { type: "object", help: "defines ticks adjustments options and which elements (line and labels) of the secondary (right or top) chart axis should be rendered." },
		secondaryValuesTitle: { type: "string / delegate", help: "title of the secondary values axis" },
		separators: { type: "object", help: "it works the same as **separators** option for [Series](/series), but is applied for particular values axis' labels." },
		series: { type: "array", help: "array of series or groups of series to be rendered on a chart" },
		settableProperties: { type: "attribute", help: "returns settable properties with applied defaults" },
		shapesSize: { type: "number", help: "width and height of a graphical shape in legend entry." },
		showVersion: { type: "boolean / delegate", help: "defines whether the library version should be rendered at the bottom right of the chart" },
		stacked: { type: "boolean / delegate", help: "defines whether the data representations should start at the end of the previous ones in values axis" },
		thumbnail: { type: "boolean", help: "defines whether the chart should be drawn as a thumbnail. It is a shortcut for setting the following chart options:" },
		ticks: { type: "object", help: "ticks configuration object" },
		truncateTitles: { type: "boolean / delegate", help: "defines whether the horizontal axes titles should be truncated (or hidden) if there is not enough space to render them." },
		valueKeys: { type: "array / delegate", help: "array of keys of fields in series data that should be treated as values" },
		valuesAxesDecimals: { type: "number", help: "the number of decimals to be rendered in data labels of both values axes. It has a lower priority than a similar setting for particular labels and is ignored by default." },
		valuesAxesLabelsSize: { type: "number / delegate", help: "values axes labels' font size" },
		valuesAxesSeparators: { type: "object", help: "defines which separators should be used for values axes labels. It overwrites the default ones, but has got a lower priority than similar settings for axes." },
		visible: { type: "boolean", help: "defines whether the legend should be rendered." },
		xLabelsResponsiveness: { type: "array", help: "defines how the responsiveness of x axes labels should behave." }
	},

	events: {
		chartData: { type: "object", help: "chart data object that is used internally by the chart library" },
		element: { type: "string", help: "type of registered roi chart element" },
		event: { type: "object", help: "information about emitted event, it consists of:" },
		eventData: { type: "object", help: "dynamic event data, it depends on event type" },
		html: { type: "function", help: "rendering function provided by [hyperHTML](https://viperhtml.js.org/hyper.html). \`html\` will render given template at the event position. Tooltip won't be rendered if event doesn't come with any positions, like in \`SETTABLE_PROPERTIES_CHANGED\`." },
		interactionsEventManager: { type: "object", help: "service that handles chart interactions, used version of interaction manager depends on the \`eventsTypes\` set in the chart config, see more in [Chart](/chart)" },
		pubSub: { type: "object", help: "service that allows publishing and subscribing to the roi chart events" },
		services: { type: "object", help: "object with public services that are used inside chart library, it consists of:" },
		source: { type: "object / null", help: "DOM event that caused roi chart event. It's set to \`null\` for events that doesn't come from DOM." },
		tooltipManager: { type: "object", help: "service that handles state of the tooltips" },
		type: { type: "string", help: "type of registered roi chart event" }
	},

	forecastColumns: {
		forecastOpacity: { type: "number", help: "opacity of forecasted bars in percents" },
		forecastStart: { type: "string / number", help: "column value at which the forecast starts" }
	},

	groups: {
		name: { type: "string", help: "name of a group" },
		series: { type: "array", help: "array of series to be rendered on a chart" }
	},

	sankeyDiagram: {
		data: { type: "object", help: "object containing information about nodes and links between them." },
		links: { type: "array", help: "an array containing links objects which are described below." },
		name: { type: "string", help: "name of the node, it is used as a label" },
		noDataMessage: { type: "string / delegate", help: "message displayed when there is no data in links or nodes" },
		node: { type: "number", help: "id of the node, it is used to identify the node while making links" },
		nodePadding: { type: "number", help: "spacing between neighboring nodes in px" },
		nodeWidth: { type: "number", help: "width of nodes in px" },
		nodes: { type: "array", help: "an array containing nodes objects which are described below." },
		pathOpacity: { type: "number", help: "opacity of paths between nodes in percents" },
		source: { type: "number", help: "id of the starting node of a link" },
		target: { type: "number", help: "id of the target node of a link" },
		value: { type: "number", help: "size of a link - sum of all values of links starting from a node is 100% of node's height" }
	},

	series: {
		align: { type: "string", help: "defines where the number labels should be aligned. Possible values: \`left\`, \`center\`, \`right\`. It works only for horizontal charts." },
		assignTo: { type: "string", help: "assigns a series to a particular values axis, possible values: \`primary\`, \`secondary\`" },
		bodyType: { type: "string", help: "shape of the main piece of two-piece data representations, possible values: \`square\`, \`circle\`" },
		candlestickLineColor: { type: "string / array / object", help: "color for candlestick line, see \`dataColor\` " },
		categoriesSetter: { type: "boolean", help: "defines whether only the categories from the current series should be shown on the graph" },
		color: { type: "string", help: "the color of data labels." },
		colorFromData: { type: "boolean", help: "defines whether the labels color should be inherited from the data representation. It overwrites the **color** setting." },
		colors: { type: "string / array", help: "color for values, see \`string\` and \`array\` variations of \`dataColor\`" },
		cut: { type: "number / array", help: "cuts data representations above a given value and adds a triangle indicator to labels of cut data. Cut data is not taken into account in domain calculations. It can be passed as a:" },
		dashed: { type: "boolean", help: "defines whether the line connecting data points should be dashed" },
		data: { type: "array", help: "array with series data, in form of:" },
		dataColor: { type: "string / array / object", help: "color of series data representation. It overrides \`dataColorsScheme\` used at chart level and series level. It could be passed as a:" },
		dataColorsScheme: { type: "string / array / delegate", help: "name of the one of default color schemes for series that is included in the library, or custom color scheme passed as an array of color values. At the series level, the next color from the provided colors array or the default scheme is assigned to every data in the series. It overrides \`dataColorsScheme\` used at chart level." },
		dataLabels: { type: "object", help: "configuration for data labels." },
		dataLabelsThreshold: { type: "number / array", help: "show threshold label instead of a full label when value is above a given value. It can be passed as a:" },
		decimal: { type: "string", help: "decimal separator for labels, example for \"x\" string: \`12345678.9\` -> \`12345678x9\`" },
		decimals: { type: "number", help: "the number of decimals to be rendered in a data label." },
		fixedColors: { type: "array", help: "array of objects representing categories that should have fixed colors regardless of used \`dataColor\` or \`dataColorsScheme\` settings, every object could have following fields:" },
		labelBold: { type: "boolean", help: "defines whether the label of data representation should be bold." },
		labelSize: { type: "number", help: "the size of a label of data representation, it overwrites the global labels size" },
		lineSize: { type: "number", help: "width of the line in \"two-piece\" data representations" },
		lines: { type: "boolean", help: "defines whether the lines connecting bars should be rendered" },
		name: { type: "string", help: "name of series" },
		neutralInterval: { type: "number / array", help: "interval for neutral values, used for assigning colors of data representation in \`dataColor\` and \`fixedColors\` options. It could be passed as a:" },
		noBreaks: { type: "boolean", help: "defines whether the line connecting data points should break when there is no value for a given category" },
		order: { type: "number", help: "defines in what order the data series should be rendered - series with lower value will be drawn on top of the ones with a higher value" },
		overallResultVisualization: { type: "object", help: "configuration for special overall result visualization." },
		particularLabels: { type: "array", help: "array of objects containing configuration for separate labels." },
		refCategory: { type: "string", help: "name of the category of label to which the options should be applied" },
		refValues: { type: "string", help: "name of the key in series that should be as a base to apply negative/positive/neutral color" },
		remaining: { type: "number", help: "the remaining value in visualization, it is rendered as the last category." },
		remainingLabel: { type: "string", help: "the label of remaining visualization category." },
		remainingSpecial: { type: "boolean", help: "defines whether the remaining visualization is rendered as an arrow. If false, then it is rendered as a normal data representation and is taken into account in domains calculations." },
		separators: { type: "object", help: "defines which separators should be used for data labels. It overwrites the default, small multiple's, and series' ones." },
		showPlusSign: { type: "boolean", help: "defines whether the labels for the positive values should have a plus sign rendered before the values." },
		size: { type: "number", help: "data representation size, if in percents then it refers to the allowed bandwidth" },
		thousands: { type: "string", help: "thousands separator for labels, example for \"x\" string: \`12345678.9\` -> \`12x345x678.9\`" },
		total: { type: "number", help: "the total value in visualization, it is rendered as the first category." },
		totalLabel: { type: "string", help: "the label of total visualization category." },
		totalSpecial: { type: "boolean", help: "defines whether the total visualization is rendered as an arrow. If false, then it is rendered as a normal data representation and is taken into account in domains calculations." },
		type: { type: "string", help: "type of data representation, possible values: \`bar\`, \`bullet\`, \`inset\`, \`candlestick\`, \`dot\`, \`line\`, \`target\`, \`waterfall\`, \`number\`" },
		undecorated: { type: "boolean", help: "defines whether the line should not have dots in data points" },
		valueKey: { type: "string", help: "key of fields series data that should be treated as values" },
		visible: { type: "boolean", help: "defined whether the data labels for the data representations should be rendered." }
	},

	smallMultiples: {
		background: { type: "string / delegate", help: "background of the small multiples area. It has a lower priority than chessboardBackground option and backgrounds of separate subcharts." },
		categoriesAxis: { type: "object", help: "works as described in [Chars](charts)." },
		centerOrigins: { type: "boolean", help: "defines whether the origins (zero lines) of charts in a small multiple should be centered." },
		charts: { type: "2D array", help: "two-dimensional (rows and columns) array of charts to be rendered in small multiples." },
		chessboardBackground: { type: "array", help: "an array containing colors of subcharts - the first color is used for charts with odd indices, and the last one for charts with even indices. It has a lower priority than backgrounds of separate subcharts." },
		dataLabelsDecimals: { type: "number", help: "the number of decimals to be rendered in data labels of all charts' series. It has a lower priority than similar settings for specific charts and series." },
		dataLabelsSeparators: { type: "object", help: "defines which separators should be used for data labels. It has got a lower priority than similar settings for a chart or series." },
		gridSizing: { type: "object", help: "object containing information about the sizing of charts in small multiples." },
		margin: { type: "object", help: "works as described in [Chart](/chart), but for all charts in small multiples." },
		noDataMessage: { type: "string / delegate", help: "message displayed on any of the sub charts when there is no data in it's series" },
		separators: { type: "object", help: "defines which separators should be used for both data labels and axes labels. It has got a lower priority than similar settings for a chart or series." },
		truncateTitles: { type: "boolean", help: "works as described in [Chart](/chart), but for all charts in small multiples. It has a lower priority than the same option for particular sub-charts." },
		valuesAxesDecimals: { type: "number", help: "the number of decimals to be rendered in data labels of both values axes in every chart. It has a lower priority than a similar setting for the particular chart or particular labels and is ignored by default." }
	},

	sunburstDiagram: {
		children: { type: "array", help: "an array containing child nodes, it should be provided if there is no \`size\` in current node" },
		data: { type: "object", help: "object with tree structure that contains nodes" },
		name: { type: "string", help: "name of the node" },
		noDataMessage: { type: "string / delegate", help: "message displayed when there is no data in root node" },
		size: { type: "number", help: "size of node - the sum of the size of all children's nodes is 100% of current node's size. It should be provided if current node doesn't have \`children\`" },
		sunburstLabels: { type: "boolean", help: "defines whether the labels on the sunburst diagram should be rendered" },
		sunburstLabelsSize: { type: "number / delegate", help: "sunburst labels' font size" },
		sunburstZoomTransition: { type: "number / delegate", help: "transition time in [ms] of zooming in/out afer clicking on the node" }
	},

	xAxesLabelsResponsiveness: {
		consistent: { type: "boolean", help: "defines whether the option should apply to all labels in an axis" },
		extendTicks: { type: "object / delegate", help: "defines whether the ticks with even indices should be longer than the others" },
		hideLabels: { type: "object / delegate", help: "defines whether the overflowing labels should be hidden" },
		minWidth: { type: "number / delegate", help: "defines the minimal width of the chart that is required to apply responsiveness settings from the current object" },
		primaryAxisLabels: { type: "array", help: "axis labels of the primary axis" },
		secondaryAxisLabels: { type: "array", help: "axis labels of the secondary axis" },
		truncateLabels: { type: "object / delegate", help: "the length to which the overflowing labels are truncated" },
		value: { type: "boolean", help: "triggers the option" }
	}
}
