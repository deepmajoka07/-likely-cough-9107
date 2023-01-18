let G_Detail = document.getElementById("G_Detail");
let Category_d = document.getElementById("Category_d");
let Prod_image = document.getElementById("image");
let Prod_details = document.getElementById("details");
let data = JSON.parse(localStorage.getItem("product")) || [];

Category_d.innerText = data[0].Category;
G_Detail.innerText = data[0].Gender;
showImag(data[0]);


function showImag(data) {
    Prod_image.innerHTML = null;

    let div = document.createElement("div");
    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "imgDiv")

    let mainImg = document.createElement("img");
    mainImg.setAttribute("src", data.image_1)
    imgDiv.append(mainImg);

    let otherImg = document.createElement("div");
    otherImg.setAttribute("class", "otherImg");

    let img1 = document.createElement("img")
    img1.setAttribute("src", data.image_1)

    let img2 = document.createElement("img")
    img2.setAttribute("src", data.image_2)

    let img3 = document.createElement("img")
    img3.setAttribute("src", data.image_3)

    let img4 = document.createElement("img")
    img4.setAttribute("src", data.image_4)

    let img5 = document.createElement("img")
    img5.setAttribute("src", data.image_5)

    let img6 = document.createElement("img")
    img6.setAttribute("src", data.image_6)

    otherImg.append(img1, img2, img3, img4, img5, img6);
    
    div.append(imgDiv, otherImg);
    Prod_image.append(div);
}


function showDetails(data) {
    Prod_details.innerHTML = null;
    let title = document.createElement("h2");
    title.innerText = data.title;

    let box1 = document.createElement("div");

    let price = document.createElement("h4");
    price.innerText = data.price;

    let rateBox = document.createElement("div");

    let star1 = document.createElement("i")
    star1.setAttribute("class", "fa-sharp fa-solid fa-star");

    let star2 = document.createElement("i")
    star2.setAttribute("class", "fa-sharp fa-solid fa-star");

    let star3 = document.createElement("i")
    star3.setAttribute("class", "fa-sharp fa-solid fa-star");

    let star4 = document.createElement("i")
    star4.setAttribute("class", "fa-sharp fa-solid fa-star");

    let half_star = document.createElement("span")
    half_star.setAttribute("class", "fa-solid fa-star-half-stroke");

    if (data.rating == 5.0) {
        half_star.setAttribute("class", "fa-sharp fa-solid fa-star");
    }
    let rate = document.createElement("span")
    rate.innerText = data.rating
    rateBox.append(star1,star2,star3,star4,half_star,rate)
    box1.append(price,rateBox);

    let quality = document.createElement("div");

    let std = document.createElement("a");
    std.innerText = "Standerd";

    let big = document.createElement("a");
    big.innerText = "Big";
    quality.append(std,big);


}
