# Events

The roi chart library is providing a set of events that are emitted upon certain user interactions. They abstract away different DOM events, unify them in common API and allow the library user to add custom behavior.

Chart library is providing its own, default set of event subscribers that are invoked by following events:

Currently supported events:
```
CONTAINER_RESIZED
DATA_ENTRY_TOOLTIP_SHOWN
DATA_ENTRY_HIGHLIGHTED
DATA_ENTRY_UNHIGHLIGHTED
LEGEND_HIGHLIGHTED
LEGEND_UNHIGHLIGHTED
LEGEND_SERIES_FILTERED
TOOLTIP_HIDDEN
```
You can also access them in:
```
roiCharts.events
```

## How to use
```
roiCharts.chart({
    ...chartConfig,
    eventSubscribers: [
        {
            event: 'LEGEND_HIGHLIGHTED',
            handler: props => console.log('highlighted')
        }
    ]
});
```
#### `props` is an object specifying properties that are passed to event subscriber handler
- **chartData** _(object)_ - chart data object that is used internally by the chart library
- **eventData** _(object)_ - dynamic event data, it depends on event type
- **event** _(object)_ - information about emitted event, it consists of:
    - **source** _(object)_ - DOM event that caused roi chart event
    - **type** _(string)_ - type of registered roi chart event
    - **element** _(string)_ - type of registered roi chart element
- **services** _(object)_ - object with public services that are used inside chart library, it consists of:
    - **pubSub** _(object)_ - service that allows publishing and subscribing to the roi chart events
    - **tooltipManager** _(object)_ - service that handles state of the tooltips
    - **interactionsEventManager** _(object)_ - service that handles chart interactions, used version of interaction manager depends on the `eventsTypes` set in the chart config, see more in [Chart](/chart)
- **html** _(function)_ - rendering function provided by [hyperHTML](https://viperhtml.js.org/hyper.html). `html` will render given template at the event position. <br>
Usage:
```
{
    event: 'LEGEND_HIGHLIGHTED',
    handler: ({ html }) => {
        const title = html`
            <h2>some title</h2>
        `

        return html`
            <div>
                ${title}
                <span>content</span>
            </div>
        `
    }
}
```