export default {
  chartConfig: {
    noDataMessage: function noDataMessage() {
      return "error, no data";
    },
    categoriesTitle: "Month",
    orientation: "vertical",
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
    // separators: {
    //   decimal: "~"
    // },
    dataLabelsDecimals: 2,
    valuesAxesDecimals: 2,
    primaryValuesAxis: {
      decimals: 3
    },
    secondaryValuesAxis: {
      decimals: 4
    },
    primaryValuesTitle: "Centigrade",
    secondaryValuesTitle: "",
    forecastStart: "",
    gridlines: true,
    background: "#f0f0f0",
    legend: {
      visible: true,
      margin: {
        right: 30
      }
    },
    categoriesKey: "month",
    series: [
      {
        name: "Average Weather Conditions Palma de Mallorca",
        data: [
          { month: "Jan", airC: 16, airF: 61, highAirC: 15, highAirF: 59, lowC: 5, lowF: 41, rainMM: 50, rainD: 11, sunH: 5, seaC: 15, seaF: 59},
          { month: "Feb", airC: 15, airF: 59, highAirC: 15, highAirF: 59, lowC: 5, lowF: 41, rainMM: 40, rainD: 8, sunH: 7, seaC: 15, seaF: 59},
          { month: "Mar", airC: 15, airF: 59, highAirC: 17, highAirF: 63, lowC: 6, lowF: 43, rainMM: 40, rainD: 8, sunH: 7, seaC: 15, seaF: 59},
          { month: "Apr", airC: 16, airF: 61, highAirC: 19, highAirF: 66, lowC: 7, lowF: 45, rainMM: 50, rainD: 9, sunH: 9, seaC: 16, seaF: 61},
          { month: "May", airC: 18, airF: 64, highAirC: 23, highAirF: 73, lowC: 10, lowF: 50, rainMM: 30, rainD: 7, sunH: 9, seaC: 18, seaF: 64},
          { month: "Jun", airC: 22, airF: 72, highAirC: 27, highAirF: 81, lowC: 15, lowF: 59, rainMM: 20, rainD: 5, sunH: 11, seaC: 21, seaF: 70},
          { month: "Jul", airC: 22, airF: 72, highAirC: 31, highAirF: 88, lowC: 17, lowF: 63, rainMM: 10, rainD: 3, sunH: 11, seaC: 24, seaF: 75},
          { month: "Aug", airC: 24, airF: 75, highAirC: 31, highAirF: 88, lowC: 18, lowF: 64, rainMM: 10, rainD: 4, sunH: 10, seaC: 26, seaF: 79},
          { month: "Sep", airC: 25, airF: 77, highAirC: 28, highAirF: 82, lowC: 16, lowF: 61, rainMM: 40, rainD: 8, sunH: 7, seaC: 25, seaF: 77},
          { month: "Oct", airC: 23, airF: 73, highAirC: 24, highAirF: 75, lowC: 13, lowF: 55, rainMM: 70, rainD: 11, sunH: 7, seaC: 22, seaF: 72},
          { month: "Nov", airC: 19, airF: 66, highAirC: 19, highAirF: 66, lowC: 8, lowF: 46, rainMM: 50, rainD: 12, sunH: 6, seaC: 19, seaF: 66},
          { month: "Dec", airC: 16, airF: 61, highAirC: 16, highAirF: 61, lowC: 6, lowF: 43, rainMM: 40, rainD: 12, sunH: 5, seaC: 17, seaF: 63}
        ],
        valueKey: "airC"
      }
    ]
  }
};
