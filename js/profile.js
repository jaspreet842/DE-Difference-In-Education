var mydata = [0, 10, 5, 2, 20, 30, 45];
var newdata = [10, 20, 30, 40, 50, 45, 60];
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'september', 'october', 'November', 'December'],
        datasets: [{
            label: 'Frequency',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: mydata
        }]
    },
    // Configuration options go here
    options: {}
});
function updatechart() {
    chart.data.datasets[0].data = newdata;
    chart.update();
};