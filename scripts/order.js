fetch ("https://colambia-api.onrender.com/Orders")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data)

    creatingTable(data)
   
})

let table=document.getElementById("table_details")


function creatingTable(data){
   for (let i=1;i<data.length;i++){
    // console.log(data[i].cart_Items.length)
    // lengths= cart_Items.length
    var rows=
        
    `
   <tr>
    <td>${data[i].Order_Id}</td>
    <td>${data[i].Name}</td>
    <td>${data[i].cart_data.length}</td>
    <td>${data[i].Email_Id}</td>
    <td>${data[i].Mob_No}</td>
    <td>${data[i-1].id}</td>
    <td>${data[i].cart_data.length}</td>
    <td>${data[i].Address}</td>
    </tr>
    `
    table.innerHTML+=rows
   }
    
   
  
//    return tableRows 
//    makingTd(tableRows)
}

function makingTd(tableData){
    table.innerHTML=tableData
    console.log(384)
}



  
