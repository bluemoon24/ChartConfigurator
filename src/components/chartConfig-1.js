export default {
  chartConfig: {
    noDataMessage: function noDataMessage() {
      return "error, no data";
    },
    categoriesTitle: "Month",
    xLabelsResponsiveness: [
      {
        extendTicks: function extendTicks() {
          return { value: true };
        },
        truncateLabels: function truncateLabels() {
          return { value: 3, consistent: true };
        },
        hideLabels: function hideLabels() {
          return {};
        }
      },
      {
        minWidth: 600,
        truncateLabels: function truncateLabels(
          _primaryAxisLabels,
          _secondaryAxisLabels
        ) {
          return { value: 3, consistent: true };
        }
      }
    ],
    separators: {
      decimal: "~"
    },
    dataLabelsDecimals: 2,
    valuesAxesDecimals: 2,
    primaryValuesAxis: {
      decimals: 3
    },
    secondaryValuesAxis: {
      decimals: 4
    },
    primaryValuesTitle: "Fahrenheit",
    secondaryValuesTitle: "Something else",
    forecastStart: "September",
    gridlines: true,
    background: "#f0f0f0",
    legend: {
      visible: true,
      margin: {
        right: 30
      }
    },
    series: [
      {
        name: "Sth",
        data: [
          {
            data: 32,
            temp: 23,
            month: "January"
          },
          {
            data: -38,
            temp: -21,
            month: "February"
          },
          {
            data: 47,
            temp: 32,
            month: "March"
          },
          {
            data: -59,
            temp: -43,
            month: "April"
          },
          {
            data: 70,
            temp: 45,
            month: "May"
          },
          {
            data: 80,
            temp: 65,
            month: "June"
          },
          {
            data: 88,
            temp: 36,
            month: "July"
          },
          {
            data: 83,
            temp: 75,
            month: "August"
          },
          {
            data: 76,
            temp: 76,
            month: "September"
          },
          {
            data: 64,
            temp: 32,
            month: "October"
          },
          {
            data: 49,
            temp: 12,
            month: "November"
          },
          {
            data: 37,
            temp: 33,
            month: "December"
          }
        ],
        type: "bar",
        valueKey: "temp",
        order: 2
      },
      {
        name: "group 1",
        stacked: true,
        overlapping: 30,
        overlappingType: "percentsPrevious",
        order: 1,
        series: [
          {
            name: "Sth else",
            data: [
              {
                temp: 12.1,
                month: "January"
              },
              {
                temp: -38,
                month: "February"
              },
              {
                temp: 57,
                month: "March"
              },
              {
                temp: -25,
                month: "April"
              },
              {
                temp: 40,
                month: "May"
              },
              {
                temp: 12,
                month: "June"
              },
              {
                temp: 42,
                month: "July"
              },
              {
                temp: 43,
                month: "August"
              },
              {
                temp: 16,
                month: "September"
              },
              {
                temp: 84,
                month: "October"
              },
              {
                temp: 30,
                month: "November"
              },
              {
                temp: 0,
                month: "December"
              }
            ],
            neutralInterval: [-4, 40],
            type: "bar",
            size: 20,
            dataColor: {
              colors: ["blue", "#ffc0cb", "yellow"]
            }
          },
          {
            name: "Misc.",
            data: [
              {
                temp: 22.1,
                month: "January"
              },
              {
                temp: -18,
                month: "February"
              },
              {
                temp: 27,
                month: "March"
              },
              {
                temp: -45,
                month: "April"
              },
              {
                temp: 10,
                month: "June"
              },
              {
                temp: 72,
                month: "July"
              },
              {
                temp: 53,
                month: "August"
              },
              {
                temp: 36,
                month: "September"
              },
              {
                temp: 64,
                month: "October"
              },
              {
                temp: 30,
                month: "November"
              },
              {
                temp: 37,
                month: "December"
              }
            ],
            type: "bar",
            size: 40
          },
          {
            name: "Rand",
            data: [
              {
                temp: 1200.1,
                month: "January"
              },
              {
                temp: -380.1,
                month: "February"
              },
              {
                temp: 570,
                month: "March"
              },
              {
                temp: -250,
                month: "April"
              },
              {
                temp: 400,
                month: "May"
              },
              {
                temp: 120,
                month: "June"
              },
              {
                temp: 820,
                month: "July"
              },
              {
                temp: -530,
                month: "August"
              },
              {
                temp: 160,
                month: "September"
              },
              {
                temp: 840,
                month: "October"
              },
              {
                temp: 300,
                month: "November"
              },
              {
                temp: 0,
                month: "December"
              }
            ],
            type: "line",
            size: 10,
            cut: 400,
            dataLabels: {
              visible: true,
              decimals: 2
            },
            assignTo: "secondary",
            dataColor: "#d742f4"
          }
        ]
      }
    ],
  }
};
