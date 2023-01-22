let orderid=document.getElementById("Order_Number").value;
async function getId(){
    let res=await fetch("https://colambia-api.onrender.com/Orders")
   let data=await res.json();
     data.map((el)=>{
                if(el.Order_Id==orderid){
                    display(el);
                }
     })
    console.log(data);
}
getId();
function display(data) {
    data.map((el)=>{
        let div=document.createElement("div");
        let name=document.createElement("p")
          name.text="Name:-"+el.Name;
          let zip=document.createElement("p");
           zip.innerText="Zip Code"+el.Zip_code;
        let add=document.createElement("p");
         add.innerText="Addresss"+el.Address;
        let order=document.createElement("p");
          order.innerText=`You have ${el.cart_data.length} order`;
            
    })
   
}
