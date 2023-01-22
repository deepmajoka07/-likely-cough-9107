fetch ("https://colambia-api.onrender.com/Orders")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data)

    creatingTable(data)
   
})

let table=document.getElementById("table_details")

let arr=[1,2,3];
console.log(arr.length);
function creatingTable(data){
    console.log(data);
   for (let i=0;i<data.length;i++){
       console.log(data[i].cart_data);
    var rows=
    `
   <tr>
    <td>${data[i].Order_Id}</td>
    <td>${data[i].id}</td>
    <td>${data[i].Name}</td>
    <td>${data[i].Email_Id}</td>
    <td>${data[i].Mob_No}</td>
    <td>${data[i].cart_data.length}</td>
    <td>${data[i].Address}</td>
    <td>${data[i].Date}</td>
    <td>${data[i].Zip_code}</td>
    </tr>
    `
    table.innerHTML+=rows
   }
    
}





  
