let G_Detail = document.getElementById("G_Detail");
let Category_d = document.getElementById("Category_d");
let Prod_image = document.getElementById("image");
let Prod_details = document.getElementById("details");
let data = JSON.parse(localStorage.getItem("product")) || [];
let Cartdata = JSON.parse(localStorage.getItem("cartData")) || [];

Category_d.innerText = data[0].Category;
G_Detail.innerText = data[0].Gender;
showImag(data[0]);
showDetails(data[0]);

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
    img1.setAttribute("data-id", 1);
    img1.setAttribute("class", "allImg")
    img1.setAttribute("src", data.image_1)

    let img2 = document.createElement("img")
    img2.setAttribute("data-id", 2);
    img2.setAttribute("class", "allImg")
    img2.setAttribute("src", data.image_2)

    let img3 = document.createElement("img")
    img3.setAttribute("data-id", 3);
    img3.setAttribute("class", "allImg")
    img3.setAttribute("src", data.image_3)

    let img4 = document.createElement("img")
    img4.setAttribute("data-id", 4);
    img4.setAttribute("class", "allImg")
    img4.setAttribute("src", data.image_4)

    let img5 = document.createElement("img");
    img5.setAttribute("data-id", 5);
    img5.setAttribute("class", "allImg")
    img5.setAttribute("src", data.image_5)

    let img6 = document.createElement("img")
    img6.setAttribute("data-id", 6);
    img6.setAttribute("class", "allImg")
    img6.setAttribute("src", data.image_6)


    otherImg.append(img1, img2, img3, img4, img5, img6);

    div.append(imgDiv, otherImg);
    Prod_image.append(div);

    let allimage = document.getElementsByClassName("allImg");
    for (let k of allimage) {
        k.addEventListener("click", (e) => {
            let id = e.target.dataset.id;
            let value = data["image_" + id]
            mainImg.setAttribute("src", value)
        })
    }
}


function showDetails(data) {
    Prod_details.innerHTML = null;
    let box = document.createElement("div");
    let title = document.createElement("h2");
    title.innerText = data.title;

    let box1 = document.createElement("div");
    box1.setAttribute("class", "priceContainer")
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
    rateBox.append(star1, star2, star3, star4, half_star, rate)
    box1.append(price, rateBox);

    let quality = document.createElement("div");
    quality.setAttribute("class", "quality")

    let std = document.createElement("a");
    std.innerText = "Standerd";
    std.setAttribute("id", "std")


    let big = document.createElement("a");
    big.innerText = "Big";
    big.setAttribute("id", "big")
    quality.append(std, big);

    let box2 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.innerText = "Klarna."

    let span2 = document.createElement("span");
    span2.innerText = "4 interest-free payments of $35.00."
    box2.append(span1, span2);

    let color = document.createElement("span");
    color.innerText = "Colore: Compass-"

    let colorVal = document.createElement("span");
    colorVal.innerText = "Red";

    let box3 = document.createElement("div");
    box3.setAttribute("class", "colorBox")
    let c1 = document.createElement("span");
    c1.setAttribute("data-name", "Red");
    c1.setAttribute("class", "color");

    let c2 = document.createElement("span");
    c2.setAttribute("data-name", "Blue");
    c2.setAttribute("class", "color");

    let c3 = document.createElement("span");
    c3.setAttribute("data-name", "Voilet");
    c3.setAttribute("class", "color");

    let c4 = document.createElement("span");
    c4.setAttribute("data-name", "Grey");
    c4.setAttribute("class", "color");
    box3.append(c1, c2, c3, c4)


    let sizeError = document.createElement("p");
    sizeError.setAttribute("class", "sizeError")
    let size = document.createElement("span");
    size.innerText = "Size"

    let sizeVal = document.createElement("span");
    sizeVal.innerText = "";

    let box4 = document.createElement("div");
    box4.setAttribute("class", "sizeBox")
    if (data.Category == "Jacket" || data.Category == "Pants") {
        let S = document.createElement("a");
        S.innerText = "S";
        S.setAttribute("id", "S")
        S.setAttribute("href", "#S")
        S.setAttribute("class", "size");

        let M = document.createElement("a");
        M.innerText = "M";
        M.setAttribute("id", "M")
        M.setAttribute("href", "#M")
        M.setAttribute("class", "size");

        let L = document.createElement("a");
        L.innerText = "L";
        L.setAttribute("id", "L")
        L.setAttribute("href", "#L")
        L.setAttribute("class", "size");
        box4.append(S, M, L)
    } else {
        let S = document.createElement("a");
        S.innerText = "7";
        S.setAttribute("id", "S")
        S.setAttribute("href", "#S")
        S.setAttribute("class", "size");

        let M = document.createElement("a");
        M.innerText = "8";
        M.setAttribute("id", "M")
        M.setAttribute("href", "#M")
        M.setAttribute("class", "size");

        let L = document.createElement("a");
        L.innerText = "9";
        L.setAttribute("id", "L")
        L.setAttribute("href", "#L")
        L.setAttribute("class", "size");
        box4.append(S, M, L);
    }

    let addtoCart = document.createElement("button");
    addtoCart.innerText = "Add To Cart"

    let line = document.createElement("hr");

    let heading = document.createElement("h3");
    heading.innerText = "Details"

    let detailHead = document.createElement("h4");
    detailHead.innerText = data.details_head;

    let detail = document.createElement("p");
    detail.innerText = data.details;

    box.append(title, box1, box2, quality, color, colorVal, box3, sizeError, size, sizeVal, box4, addtoCart, line, heading, detailHead, detail)
    Prod_details.append(box);

    let colorTarget = document.getElementsByClassName("color");
    for (let k of colorTarget) {
        k.addEventListener("mouseenter", (e) => {
            let val = e.target.dataset.name;
            colorVal.innerText = val;

        })
        k.addEventListener("mouseleave", () => {
            colorVal.innerText = "Red";

        })

    }
    let Sizevalue = null
    let sizeTarget = document.getElementsByClassName("size");
    for (let k of sizeTarget) {
        k.addEventListener("mouseenter", (e) => {
            let val = e.target.innerText;
            sizeVal.innerText = ":-" + val;

        })


        k.addEventListener("click", (e) => {
            let val = e.target.innerText;
            Sizevalue = val;
            sizeError.innerText = "";
            sizeVal.innerText = ":-" + val;

        })

    }
    addtoCart.addEventListener("click", () => {
        if (Sizevalue == null) {
            sizeError.innerText = "Select Size";
        } else {
            
            data.size = Sizevalue
            let unique = true;
            Cartdata.forEach((el) => {
                if (data.id == el.id) {
                    unique = false;
                }

            })
            if (unique) {
                Cartdata.push(data);
            } else {
                alert("Already in cart")
            }
            localStorage.setItem("cartData", JSON.stringify(Cartdata));
            window.location.href = "cart.html";
        }
        console.log(1)
    })
}
