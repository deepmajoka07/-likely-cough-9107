
let baseURL = " https://colambia-api.onrender.com";

let product = fetchData("AllProduct");
let users = fetchData("users");
let order = fetchData("Orders");
console.log(product)




showGraph()


async function fetchData(Query) {

    let Response = await fetch(`${baseURL}/${Query}`)
    let data = await Response.json
    // Query == "AllProduct" ? product = data.length : Query == "users" ? users = data.length : order = data.length;
    // console.log(product)
    return data.length
}






function showGraph() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Contry', 'Mhl'],
            ['Product', product],
            ['Users', users],
            ['Order', order]
            // ,
            // ['USA', 0],
            // ['Argentina', 1]
        ]);

        var options = {
            title: 'Company Growth Chart',
            is3D: true
        };

        var chart = new google.visualization.PieChart(document.getElementById('myChart'));
        chart.draw(data, options);
    }
}