let cartData= JSON.parse(localStorage.getItem('cartData')) || []


let container = document.getElementById('container')
let quantity = document.getElementById('quantity')
let subTotal = document.getElementById('subtotalforsummry')
let totalEst = document.getElementById('totalestimate')


// giving functionallity part

RenderData(cartData);


function valueAppend(data){
    let total = 0;

    data.forEach((el) => {
        if(el.count !== undefined){
            total+= +el.price.slice(1)*Number(el.count);
        }else{
            total+= +el.price.slice(1);
        }
    });
    total = total.toFixed(1)
    subTotal.innerText = "$"+total;
    totalEst.innerText = "$"+(+total+ 45);

}

function RenderData(cartData) {
    let htmlData = cartData.map((element,ind) => {
        return `
        <div class="main_container">
    
        <div id="image" style="height: 99%;width: 95%;">
            <img src=${element.image}
                alt="" style="height: 100%;width: 100%;">
        </div>
    
        <div id="information" >
            <h3 id="title">${element.title}</h3>
            <p id="color">Color: Black </p>
            <p>Size:${element.size}</p>
            <p>Style_No: 1556961</p>
            <p>In Stock</p>
            <label><a class = "remove" >Edit</a> | <a class = "remove removeBtn" data-id = ${ind}>Remove</a> </label>
        </div>
    
        <div id="priceDiv">
            <h3 id="price">${element.price}</h3>
        </div>
    
        <div id="quantitys">
            <select class="quantity" data-id = ${ind} style="margin-top: 20%;width: 60%;height: 15%;">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
    
    
            </select>
        </div>
    
        <div id="subtotal">
            <h3 id="subtotalValue">${element.price}</h3>
        </div>
    
    </div>
        `
    });
    appendCartData(htmlData);
}

function appendCartData(Data){
    let mainContainer = `
    <div id="main_container">
    ${Data.join(" ")}
    </div>`


    container.innerHTML = mainContainer

    valueAppend(cartData);
    let removebtn = document.getElementsByClassName('removeBtn');
    for(let k of removebtn){
        k.addEventListener("click",(e)=>{
            let i = e.target.dataset.id;
            cartData.splice(i,1)
            let newdata = cartData
            localStorage.setItem("cartData",JSON.stringify(newdata));
            RenderData(newdata);
        })
    }

    let quantity = document.getElementsByClassName("quantity");

    for(let k of quantity){
        k.addEventListener("change",(e)=>{
            let i = e.target.dataset.id;
            cartData[i].count = k.value;
            console.log(cartData[i])
            localStorage.setItem("cartData",JSON.stringify(cartData));
            RenderData(cartData);
           
        })
    }
}









































// mai
