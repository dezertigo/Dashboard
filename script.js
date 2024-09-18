const firstChart = document.getElementById('firstChart');

new Chart(firstChart, {
  type: 'bar',
            data: {
                labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
                datasets: [{
                    label: 'Survey Topics Scores',
                    data: [4.5, 2, 2, 4.5, 1.5, 4.5, 4.5, 2, 1.5, 4.5, 1.5, 4.5],
                    backgroundColor: 'rgba(241, 140, 92)',
                    borderWidth: 0,
                    borderRadius: 6,
                    barThickness: 20,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 1,
                        max: 5,
                        ticks: {
                            stepSize: 1,
                        }
                    },
                    x: {
                      grid: {
                        display: false,
                      }
                    },
                },
                plugins: {
                  legend: {
                    display: false,
                  }
                },
                responsive: true,
                maintainAspectRatio: false
            }
});

const secondChart = document.getElementById('secondChart');
new Chart(secondChart, {
    type: 'bar',
    data: {
      labels: ['KP 1', 'KP 2', 'KP 3', 'KP 4', 'KP 5'],
        datasets: [
          {
            data:[90, 72, 23, 60, 23],
            backgroundColor: ['#5155C3', '#597DBE', '#5F99BB','#65B8B7', '#6CDDB1'],
            borderRadius: 6,
          }
      ]
    },
    options: {
      barThickness: 50,
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    stepSize: 25,
                    callback: function(value) {return value + "%";} // Підпис %
                }
            },
            x: {
              grid: {
                display: false,
              },
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                  boxWidth: 12, 
                  boxHeight: 12,
                  useBorderRadius: true,
                  generateLabels: function(chart) {
                      let labels = chart.data.labels;
                      let colors = chart.data.datasets[0].backgroundColor;
                      return labels.map((label, index) => {
                          return {
                              text: label,
                              fillStyle: colors[index],
                              strokeStyle: 'transparent',
                          };
                      });
                  }
              },
            },   
        }
    }
});


