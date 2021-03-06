new Chart(document.getElementById("bar-chart-bysex"), {
    type: 'bar',
    data: {
      labels: ["Male", "Female"],
      datasets: [
        {
          barPercentage: 0.5,
          barThickness: 1,
          maxBarThickness: 1,
          label: "Fatality By Sex (number of deaths/number of cases) in percentage",
          backgroundColor: ["#8B0000", "#B22222"],
          data: [4.7,2.8]
        }
      ]
    },
    options: {
      legend: { display: true },
      title: {
        display: false,
        text: 'Number of deaths/Number of cases in percentage'
      }
    }
});

