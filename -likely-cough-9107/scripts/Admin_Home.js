
let baseURL = " https://colambia-api.onrender.com";

let product = 0;
let users = 0;
let order = 0;

fetchData("AllProduct")
fetchData("users")
fetchData("Orders")
setTimeout(() => {
    console.log(product)
    showGraph()
}, 2000)

function fetchData(Query) {
   
    fetch(`${baseURL}/${Query}`)
        .then((Response) => {
            return Response.json()
        })
        .then((data) => {
            console.log(data);
            Query == "AllProduct" ? product = data.length :Query == "users" ? users = data.length :order = data.length ;
            
        })

}






function showGraph() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Contry', 'Mhl'],
            ['Product',product ],
            ['Users',users ],
            ['Order',order ]
        ]);

        var options = {
            title: 'Company Growth Chart',
            is3D: true
        };

        var chart = new google.visualization.PieChart(document.getElementById('myChart'));
        chart.draw(data, options);
    }
}