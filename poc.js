var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
                label: 'Scatter Dataset',
                data: [{
                    x: 40,
                    y: 70
                }, {
                    x: 94,
                    y: 30
                }, {
                    x: 85,
                    y: 85
                }, {
                    x: 30,
                    y: 40
                }],
                backgroundColor: 'rgb(255, 99, 132)'
            },
            {
                type: 'line',
                label: 'Data',
                data: [{
                        x: 100,
                        y: 50
                    },
                    {
                        x: 0,
                        y: 50
                    }
                ],
                fill: false,
                backgroundColor: "rgba(218,83,79, .7)",
                borderColor: "rgba(218,83,79, .7)",
                pointRadius: 0
            },
            {
                type: 'line',
                label: 'Data',
                data: [{
                        x: 60,
                        y: 0
                    },
                    {
                        x: 60,
                        y: 100
                    }
                ],
                fill: false,
                backgroundColor: "rgba(218,83,79, .7)",
                borderColor: "rgba(218,83,79, .7)",
                pointRadius: 0
            }


        ],
    },
    options: {
        plugins: {
            datalabels: {
                display: false
            }
        },
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            }
        }
    }
});