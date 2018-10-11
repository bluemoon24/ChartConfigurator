export default {

	events: {
		chartData: { type: "object", help: "chart data object that is used internally by the chart library" },
		pubSub: { type: "object", help: "service that allows publishing and subscribing to the roi chart events" },
		tooltipManager: { type: "object", help: "service that handles state of the tooltips" },
		html: { type: "function", help: "rendering function provided by [hyperHTML](https://viperhtml.js.org/hyper.html). `html` will render given template at the event position. " },
		interactionsEventManager: { type: "object", help: "service that handles chart interactions, used version of interaction manager depends on the `eventsTypes` set in the chart config, see more in [Chart](/chart)" },
		source: { type: "object", help: "DOM event that caused roi chart event" },
		services: { type: "object", help: "object with public services that are used inside chart library, it consists of:" },
		type: { type: "string", help: "type of registered roi chart event" },
		eventData: { type: "object", help: "dynamic event data, it depends on event type" },
		element: { type: "string", help: "type of registered roi chart element" },
		event: { type: "object", help: "information about emitted event, it consists of:" }
	},

	sunburstDiagram: {
		d: { type: "", help: "" }
	},

	sankeyDiagram: {
		d: { type: "", help: "" }
	},

	series: {
		colors: { type: "string / array", help: "color for values, see `string` and `array` variations of `dataColor`" },
		neutralInterval: { type: "number / array", help: "interval for neutral values, used for assigning colors of data representation in `dataColor` and `fixedColors` options. It could be passed as a:" },
		lineSize: { type: "number", help: "width of the line in "two-piece" data representations" },
		totalLabel: { type: "string", help: "the label of total visualization category." },
		decimal: { type: "string", help: "decimal separator for labels, example for "x" string: `12345678.9` -> `12345678x9`" },
		overallResultVisualization: { type: "object", help: "configuration for special overall result visualization." },
		refCategory: { type: "string", help: "name of the category of label to which the options should be applied" },
		order: { type: "number", help: "defines in what order the data series should be rendered - series with lower value will be drawn on top of the ones with a higher value" },
		undecorated: { type: "boolean", help: "defines whether the line should not have dots in data points" },
		noBreaks: { type: "boolean", help: "defines whether the line connecting data points should break when there is no value for a given category" },
		lines: { type: "boolean", help: "defines whether the lines connecting bars should be rendered" },
		remainingSpecial: { type: "boolean", help: "defines whether the remaining visualization is rendered as an arrow. If false, then it is rendered as a normal data representation and is taken into account in domains calculations." },
		type: { type: "string", help: "type of data representation, possible values: `bar`, `bullet`, `inset`, `candlestick`, `dot`, `line`, `target`, `waterfall`, `number`" },
		dashed: { type: "boolean", help: "defines whether the line connecting data points should be dashed" },
		fixedColors: { type: "array", help: "array of objects representing categories that should have fixed colors regardless of used `dataColor` or `dataColorsScheme` settings, every object could have following fields:" },
		thousands: { type: "string", help: "thousands separator for labels, example for "x" string: `12345678.9` -> `12x345x678.9`" },
		showPlusSign: { type: "boolean", help: "defines whether the labels for the positive values should have a plus sign rendered before the values." },
		dataLabels: { type: "object", help: "configuration for data labels." },
		visible: { type: "boolean", help: "defined whether the data labels for the data representations should be rendered." },
		remainingLabel: { type: "string", help: "the label of remaining visualization category." },
		name: { type: "string", help: "name of series" },
		refValues: { type: "string", help: "name of the key in series that should be as a base to apply negative/positive/neutral color" },
		assignTo: { type: "string", help: "assigns a series to a particular values axis, possible values: `primary`, `secondary`" },
		valueKey: { type: "string", help: "key of fields series data that should be treated as values" },
		data: { type: "array", help: "array with series data, in form of:" },
		align: { type: "string", help: "defines where the number labels should be aligned. Possible values: `left`, `center`, `right`. It works only for horizontal charts." },
		separators: { type: "object", help: "defines which separators should be used for data labels. It overwrites the default, small multiple's, and series' ones." },
		totalSpecial: { type: "boolean", help: "defines whether the total visualization is rendered as an arrow. If false, then it is rendered as a normal data representation and is taken into account in domains calculations." },
		decimals: { type: "number", help: "the number of decimals to be rendered in a data label." },
		cut: { type: "number / array", help: "cuts data representations above a given value and adds a triangle indicator to labels of cut data. Cut data is not taken into account in domain calculations. It can be passed as a:" },
		size: { type: "number", help: "data representation size, if in percents then it refers to the allowed bandwidth" },
		dataColorsScheme: { type: "string / array / delegate", help: "name of the one of default color schemes for series that is included in the library, or custom color scheme passed as an array of color values. At the series level, the next color from the provided colors array or the default scheme is assigned to every data in the series. It overrides `dataColorsScheme` used at chart level." },
		labelSize: { type: "number", help: "the size of a label of data representation, it overwrites the global labels size" },
		labelBold: { type: "boolean", help: "defines whether the label of data representation should be bold." },
		total: { type: "number", help: "the total value in visualization, it is rendered as the first category." },
		bodyType: { type: "string", help: "shape of the main piece of two-piece data representations, possible values: `square`, `circle`" },
		candlestickLineColor: { type: "string / array / object", help: "color for candlestick line, see `dataColor` " },
		particularLabels: { type: "array", help: "array of objects containing configuration for separate labels." },
		categoriesSetter: { type: "boolean", help: "defines whether only the categories from the current series should be shown on the graph" },
		dataLabelsThreshold: { type: "number / array", help: "show threshold label instead of a full label when value is above a given value. It can be passed as a:" },
		remaining: { type: "number", help: "the remaining value in visualization, it is rendered as the last category." },
		dataColor: { type: "string / array / object", help: "color of series data representation. It overrides `dataColorsScheme` used at chart level and series level. It could be passed as a:" },
		color: { type: "string", help: "the color of data labels." },
		colorFromData: { type: "boolean", help: "defines whether the labels color should be inherited from the data representation. It overwrites the **color** setting." }
	},

	groups: {
		name: { type: "string", help: "name of a group" },
		series: { type: "array", help: "array of series to be rendered on a chart" }
	},

	chart: {
		ticks: { type: "object", help: "ticks configuration object" },
		secondaryValuesTitle: { type: "string / delegate", help: "title of the secondary values axis" },
		valuesAxesLabelsSize: { type: "number / delegate", help: "values axes labels' font size" },
		primaryValuesTitle: { type: "string / delegate", help: "title of the the primary values axis" },
		categoriesLabels: { type: "delegate", help: "a function which is being applied one by one for every categories axis label. It takes the current **label** and the **value** of the first chart's entry connected to the category as parameters, and expects the updated label as a return value." },
		labelsSize: { type: "number", help: "size of legend labels in px." },
		eventsTypes: { type: "string", help: "events types used by interaction manager, see more in [Events](/events). Currently supported `eventTypes` implemented by the library:" },
		valuesAxesDecimals: { type: "number", help: "the number of decimals to be rendered in data labels of both values axes. It has a lower priority than a similar setting for particular labels and is ignored by default." },
		xLabelsResponsiveness: { type: "array", help: "defines how the responsiveness of x axes labels should behave." },
		showVersion: { type: "boolean / delegate", help: "defines whether the library version should be rendered at the bottom right of the chart" },
		valueKeys: { type: "array / delegate", help: "array of keys of fields in series data that should be treated as values" },
		eventSubscribers: { type: "array", help: "custom events subscribers, see more in [Events](/events)" },
		visible: { type: "boolean", help: "defines whether the legend should be rendered." },
		centerOrigin: { type: "boolean / delegate", help: "defines whether the origin (zero line) should be at the center of the chart." },
		forecastStart: { type: "string / number / delegate", help: "column value at which the forecast starts" },
		noDataMessage: { type: "string / delegate", help: "message displayed when there is no data in series" },
		dataOuterPadding: { type: "number / delegate", help: "padding of the first and last data representations in percents" },
		background: { type: "string / delegate", help: "background of the chart area" },
		line: { type: "boolean", help: "defines whether the line should be rendered" },
		valuesAxesSeparators: { type: "object", help: "defines which separators should be used for values axes labels. It overwrites the default ones, but has got a lower priority than similar settings for axes." },
		position: { type: "string", help: "it can be set either to `top` or `bottom` and it sets the position of legend on the chart." },
		series: { type: "array", help: "array of series or groups of series to be rendered on a chart" },
		dataLabelsMargin: { type: "number / delegate", help: "data labels' margin from data representation" },
		categoriesTitle: { type: "string / delegate", help: "title for the categories axis" },
		axesTitlesSize: { type: "number / delegate", help: "axes titles font sizes" },
		thumbnail: { type: "boolean", help: "defines whether the chart should be drawn as a thumbnail. It is a shortcut for setting the following chart options:" },
		shapesSize: { type: "number", help: "width and height of a graphical shape in legend entry." },
		marksVisible: { type: "boolean", help: "defines whether the ticks marks should be rendered" },
		categoriesAxis: { type: "object", help: "defines which elements (line and labels) of the category chart axis should be rendered" },
		fixedInterval: { type: "boolean / number", help: "defines a fixed interval between ticks." },
		labelsMargin: { type: "number", help: "margin of legend labels from shapes in px." },
		mergeSeriesCategories: { type: "boolean / delegate", help: "defines whether the categories from every series should be shown on the graph." },
		legend: { type: "object / delegate", help: "configuration for chart legend." },
		categoriesKey: { type: "string / delegate", help: "key of categories in series data objects" },
		labelHighlightColor: { type: "stirng", help: "color of highlighted legend label." },
		secondaryValuesAxis: { type: "object", help: "defines ticks adjustments options and which elements (line and labels) of the secondary (right or top) chart axis should be rendered." },
		overlappingType: { type: "string", help: "defines the type of overlapping. It’s applied when `overlapping` is set." },
		labels: { type: "boolean", help: "defines whether the labels should be rendered" },
		primaryValuesAxis: { type: "object", help: "defines ticks adjustments options and which elements (line and labels) of the primary (left or bottom) chart axis should be rendered" },
		dataLabelsSize: { type: "number / delegate", help: "data labels' font size" },
		matchStackTo100: { type: "boolean", help: "defines whether the stacked series should be extended to fill the full size of a container. Data labels are rendered at the center of data representations in this case, and show percentage of the value in a stack instead of the actual value." },
		gridlines: { type: "boolean / delegate", help: "defines whether the grid lines for values should be rendered" },
		labelColor: { type: "stirng", help: "color of legend labels." },
		dataLabelsDecimals: { type: "number", help: "the number of decimals to be rendered in data labels of all series. It has a lower priority than similar setting for specific series." },
		orientation: { type: "string / delegate", help: "chart orientation, either vertical or horizontal" },
		dataColorsScheme: { type: "string / array", help: "name of the one of default color schemes for the chart that is included in the library, or custom color scheme passed as an array of color values. At the chart level the next color from the provided colors array or the default scheme is assigned for every series" },
		categoryAxisLabelsSize: { type: "number / delegate", help: "category axis labels' font size" },
		forecastOpacity: { type: "number / delegate", help: "opacity of forecasted data representation in percents" },
		margin: { type: "object", help: "legend margins, it is an object containing fields `top`, `right`, `bottom` and `left`." },
		dataLabelsSeparators: { type: "object", help: "defines which separators should be used for data labels. It overwrites the default ones and small multiple's, but has got a lower priority than similar settings for series." },
		clustered: { type: "boolean / delegate", help: "defines whether the data representations should start at the end of the previous ones in categories axis" },
		decimals: { type: "number", help: "the number of decimals to be rendered in data labels of a particular axis. It is ignored by default." },
		stacked: { type: "boolean / delegate", help: "defines whether the data representations should start at the end of the previous ones in values axis" },
		separators: { type: "object", help: "it works the same as **separators** option for [Series](/series), but is applied for particular values axis' labels." },
		truncateTitles: { type: "boolean / delegate", help: "defines whether the horizontal axes titles should be truncated (or hidden) if there is not enough space to render them." },
		overlapping: { type: "number", help: "defines whether and by how much the data representations should overlap the previous ones in categories axis" },
		clusterScalingSize: { type: "number", help: "defines the total width of a whole cluster in percents of a bandwidth (the whole category width)" }
	},

	forecastColumns: {
		c: { type: "", help: "" }
	},

	xAxesLabelsResponsiveness: {
		r: { type: "", help: "" }
	},

	smallMultiples: {
		m: { type: "", help: "" }
	}
}
