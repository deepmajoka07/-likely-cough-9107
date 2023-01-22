
let container = document.getElementById("Product_Container")
let Jackets = document.getElementById("Jackets")
let Pants = document.getElementById("Pants")
let Boots = document.getElementById("Boots")
let Other_Filter = document.getElementById("Other_Filter")
let GenderFilter = document.getElementsByClassName("gender");
let product = JSON.parse(localStorage.getItem("product"))||[]
let AllProduct = [];
let filter_data = [];

// FILTER ACCORDING TO GENDER 

for(let k of GenderFilter){
    k.addEventListener("click",(e)=>{
        let value = e.target.value;
        filter_data = AllProduct.filter((el)=>el.Gender === value)
        showProduct(filter_data)
    })
}

// FILTER ACCORDING TO SELECT SECTION 

Other_Filter.addEventListener("change",()=>{
    let data = filter_data.length == 0 ? [...AllProduct] : filter_data ;
    let value = Other_Filter.value;
    if(value === "Newest"){
        data = AllProduct.reverse()
    }else if(value == "Rate"){
        data.sort((a,b)=>b.rating - a.rating)
    }else if(value == "L2H"){
        data.sort((a,b)=>a.price.slice(1)-b.price.slice(1));
    }else if(value == "H2L"){
        data.sort((a,b)=>b.price.slice(1)-a.price.slice(1));
    }
    console.log(data)
    showProduct(data);
})

// FILTER JACKET 

Jackets.addEventListener("click",()=>{
    let data = filter_data.length == 0 ? AllProduct : filter_data ;
    let newData = data.filter((el)=>el.Category === "Jacket")
    console.log(newData)
    showProduct(newData)
})

// FILTER PANTS   

Pants.addEventListener("click",()=>{
    let data = filter_data.length == 0 ? AllProduct : filter_data ;
    let newData = data.filter((el)=>el.Category === "Pants")
    console.log(newData)
    showProduct(newData)
})

// FILTER BOOTS 

Boots.addEventListener("click",()=>{
    let data = filter_data.length == 0 ? AllProduct : filter_data ;
    let newData = data.filter((el)=>el.Category === "Boots")
    console.log(newData)
    showProduct(newData)
})
fetchData()

// DATA FETCHING FROM API 

function fetchData() {
    fetch("https://colambia-api.onrender.com/AllProduct")
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            AllProduct = [...result]
            showProduct(result);
        })
        .catch((error) => {
            console.log(error)
        })
}

// APPENDING DATA TO THE PAGE 

function showProduct(data) {
    container.innerHTML = null;
    data.forEach((element) => {
        let div = document.createElement("div");
        div.setAttribute("class", "product")

        let img = document.createElement("img")
        img.setAttribute("src", element.image_1);

        let details = document.createElement("p");
        element.details = element.details || "A thermal-reflective lining and plenty of insulation in these waterproof-breathable boots keep toes toasty all day."
        details.innerText = element.details.substring(0, 80) ;
        
        let title = document.createElement("p")
        title.innerText = element.title;

        let price = document.createElement("h4");
        price.innerText = element.price;

        let shopBtn = document.createElement("button")
        shopBtn.innerText = "Quick Shop"
        let color = document.createElement("div")

        let c1 = document.createElement("span");
        let c2 = document.createElement("span");
        let c3 = document.createElement("span");
        let c4 = document.createElement("span");

        color.append(c1, c2, c3, c4);

        let star1 = document.createElement("i")
        star1.setAttribute("class","fa-sharp fa-solid fa-star");

        let star2 = document.createElement("i")
        star2.setAttribute("class","fa-sharp fa-solid fa-star");

        let star3 = document.createElement("i")
        star3.setAttribute("class","fa-sharp fa-solid fa-star");

        let star4 = document.createElement("i")
        star4.setAttribute("class","fa-sharp fa-solid fa-star");
        
        let half_star = document.createElement("span")
        half_star.setAttribute("class","fa-solid fa-star-half-stroke");
        
        if(element.rating == 5.0){
            half_star.setAttribute("class","fa-sharp fa-solid fa-star");
        }
        let rate = document.createElement("span")
        rate.innerText = `(${element.rating})`
        
    div.addEventListener("click",()=>{
        product = [element];
        localStorage.setItem("product",JSON.stringify(product));
        setTimeout(()=>{
            window.location.href = "./details.html"
        },1000)
    })

        div.addEventListener("mouseenter", () => {
            img.setAttribute("src", element.image_2);
            shopBtn.style.display = "block"
            details.style.display = "block"
            div.append(img, shopBtn, details, color, title, price,star1,star2,star3,star4,half_star,rate)
        })
        div.addEventListener("mouseleave", () => {
            img.setAttribute("src", element.image_1);
            shopBtn.style.display = "none"
            details.style.display = "none"
            div.append(img, color, title, price,star1,star2,star3,star4,half_star,rate);
        })
        div.append(img,color, title, price,star1,star2,star3,star4,half_star,rate);
        container.append(div);
    });
