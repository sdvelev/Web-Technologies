/*
window.onload = function () {
    // Get the canvas element
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart2 = new Chart(ctx, {
        type: "line",
        data: {
            labels: [
                "Януари",
                "Февруари",
                "Март",
                "Април",
                "Май",
                "Юни",
                "Юли",
            ],
            datasets: [
                {
                    label: "Посещения на проект Chart.js",
                    data: [8, 10, 10, 14, 19, 19, 15],
                    borderColor: "rgb(255, 99, 132)",
                    fill: false,
                },
            ],
        },
        options: {},
    });
};
*/

window.onload = function () {

    new Chart(document.getElementById("mixedChart"), {
        type: 'bar',
        data: {
            labels: ["Януари", "Февруари", "Март",  "Април", "Май", "Юни", "Юли"],
            datasets: [{
                label: 'Посетители',
                type:'line',
                data: [500, 750, 670, 900, 1200, 1050, 1020],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
            }, {
                label: 'Поръчки',
                type:'bar',
                data: [50, 75, 58, 125, 80, 160, 180],
                backgroundColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Брой посетители на уебсайт и покупки'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

};