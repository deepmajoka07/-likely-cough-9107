let Tbody = document.getElementById("Tbody");

getProduct()
function getProduct(){
    fetch("https://colambia-api.onrender.com/AllProduct")
    .then((Response)=>{
        return Response.json()
    })
    .then((data)=>{
        showData(data)
    })
}

// function showData(data){
    // Tbody.innerText = null;
    // data.forEach((element,ind) => {
    //     let tr = document.createElement("tr");
    //     let td1 = document.createElement("td")

    //     let id = document.createElement("p")
    //     id.innerText = element.id;
    //     td1.append(id)
       
    //     let td2 = document.createElement("td")
    //     let img = document.createElement("p")
    //     img.innerText = element.image_1;
    //     td2.append(img)

    //     let td3 = document.createElement("td")
    //     let name = document.createElement("p")
    //     name.innerText = element.title;
    //     td3.append(name)

    //     let td4 = document.createElement("td")
    //     let Category = document.createElement("p")
    //     Category.innerText = element.Category;
    //     td4.append(Category)

    //     let td5= document.createElement("td")
    //     let Gender = document.createElement("p")
    //     Gender.innerText = element.Gender;
    //     td5.append(Gender)

    //     let td6 = document.createElement("td")
    //     let rating = document.createElement("p")
    //     rating.innerText = element.rating;
    //     td6.append(rating);

    //     let td7 = document.createElement("td")
    //     let price = document.createElement("p")
    //     price.innerText = element.price
    //     td7.append(price)

    //     let td9 = document.createElement("td")
    //     let DeleteBtn = document.createElement("p")
    //     DeleteBtn.innerText = "Delete"
    //     td9.append(DeleteBtn)

    //     let td8 = document.createElement("td")
    //     let edit = document.createElement("span")
    //     edit.innerText = "Edit"
    //     td8.append(edit)
        
    //     tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
    //     Tbody.append(tr)
    // });

// }


function showData(data){
    Tbody.innerHTML = null;
    let htmlData = data.map((el)=>getCard(el.id,el.image_1,el.title,el.Category,el.Gender,el.rating,el.price))
    Tbody.innerHTML = htmlData.join(" ");
    
    let tr = document.getElementsByClassName("edit");
    let deletebtn = document.getElementsByClassName("delete");
     
    for(let k of tr){
        k.addEventListener("click",(e)=>{
            let rowId = e.target.dataset.id;

            toggleBilling(rowId,e.target)
        })
    }

    for(let btn of deletebtn){
        btn.addEventListener("click",(e)=>{
            let id = e.target.dataset.id;
            deleteProduct(id)
            // alert(id)
        })
    }

}
function toggleBilling(rowId,element) {
    // Select the billing text fields
    const billingItems = document.querySelectorAll(`#ID${rowId} input[type="text"]`);
    
    let obj= {}
    // Toggle the billing text fields
    billingItems.forEach((item) => {
        item.disabled = !item.disabled;
        let el = item.getAttribute("id")
        
        if(!item.disabled){
            element.innerText = "Save"
            item.style.border ="1px solid black"  
            item.style.width ="100%"   
        }else{
            obj[el] = item.value
            // console.log(1)
            // console.log(obj);
            element.innerText = "Edit"
            item.style.border ="none"  
            item.style.width ="100%"
            
        }
    });
    // console.log(obj)
    // console.log(billingItems[0].disabled == undefined)
    if(Object.keys(obj).length !== 0){
        updateData(obj,rowId)
    }
  }

 function updateData(obj,id){
    console.log(obj)
    fetch(`https://colambia-api.onrender.com/AllProduct/${id}`,{
        method : "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(obj)
      })
      setTimeout(()=>{
        getProduct()
    },1200)
  }

  function deleteProduct(id){
    fetch(`https://colambia-api.onrender.com/AllProduct/${id}`,{
        method : "DELETE"
    })
    setTimeout(()=>{
        getProduct()
    },1200)
  }

function getCard(id,imgURL,title,Category,Gender,rating,price){
    return `
    <tr id=ID${id}>
        <td>${id}</td>
        <td><img class = "Poster" src=${imgURL} alt=""></td>
        <td><input type="text" id="title" value=${title}  disabled></td>
        <td><input type="text" id="Category" value=${Category}  disabled></td>
        <td><input type="text" id="Gender" value=${Gender}  disabled></td>
        <td><input type="text" id="rating" value=${rating}  disabled></td>
        <td><input type="text" id="price" value=${price}  disabled></td>
        <td class="edit" data-id=${id} >Edit</td>
        <td class="delete" data-id=${id}>Delete</td>
    </tr>
    `
}

