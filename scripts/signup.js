let S_btn=document.getElementById("signup_submit");
let f_name=document.getElementById("Full_Name");
let l_name=document.getElementById("Last_Name");
let gender=document.getElementsByName("gender");
  let phone=document.getElementById("Phone");
  let zipcode=document.getElementById("Zip_Code")
let warning_data=document.querySelectorAll(".warning-below");
 console.log(warning_data)
let User_Data=JSON.parse(localStorage.getItem("user_data"))||[];
let login_alert=document.getElementById("Login_password_alert")
let baseurl="https://colambia-api.onrender.com";
let c=0;
for (let index = 0; index < warning_data.length; index++) {
  console.log(warning_data[index].value,warning_data[index])
        if(warning_data[index].value==undefined){
          c++;
        }
  
}
 S_btn.addEventListener("click",(e)=>{ 
  e.preventDefault();
  let g_value="";
  for(i = 0; i < gender.length; i++) {
    if(gender[i].checked){
  
            console.log("Gender: "+gender[i].value);
            g_value=gender[i].value;
    }
  }   
    for (let index = 0; index < warning_data.length; index++) {
      console.log(warning_data[index].value)
            if(warning_data[index].value==undefined){
              c++;
            }
      
    }
  console.log(c);
  if(email.value!="" && pass.value!="" && phone.value!="" && g_value!=""  && f_name.value!="" && l_name.value!=""){
         console.log("hii");
              fetch(`${baseurl}/users`,{
                  method:'POST',
                  headers: {
                      'Content-Type': 'application/json'
                      
                    },
                    body: JSON.stringify({
                        "email":email.value,
                        "Password":pass.value,
                        "name":f_name.value+" "+l_name.value,
                        "gender":g_value ,
                        "Phone":phone.value,
                        "zipcode":zipcode.value,
                      })
              }) .then((response) => response.json())
              .then((data) => {
                console.log('Success:', data);
                getData();
                document.getElementById("success").style.display="block";
              })
              .catch((error) => {
                console.log('Error:', error);
              });

                  
      }
    }
    )
  
      

 
 async function getData() {
   let res=await fetch(`${baseurl}/users`) 
   let data=await res.json();
     console.log(data);
    localStorage.setItem("user_data",JSON.stringify(data))
 }

 getData();
 function login(){
   let email=document.getElementById("L-email").value;
   let pass=document.getElementById("L-password").value;
   let is=false;
   console.log(email,pass);
   User_Data.filter((el)=>{
     console.log("hii",el.email,el.Password);
     if(el.email===email && el.Password===pass){
        is=true;
      localStorage.setItem("user_login",JSON.stringify(el));
      console.log(is);
     }
     console.log(is);
     
   })
   if(is){
     if(email==='admin@mountainwear.com'){
         document.getElementById("para").innerText=`Welcome ${email}`
      document.getElementById("login_success").style.display="block"
      document.getElementById("Login_password_alert").style.display="none";
      window.location.href="./Admin_Home.html"
        }
        else{document.getElementById("para").innerText=`Welcome ${email}`
        document.getElementById("login_success").style.display="block"
        document.getElementById("Login_password_alert").style.display="none";}
   }
   else
    document.getElementById("Login_password_alert").style.display="flex"
 }
 email.addEventListener("focusout",(e)=>{
      User_Data.filter((el)=>{
        if(el.email===email.value){
          document.getElementById(`${e.target.id}_warning`).innerText = `Already Login`;
        }
      })
 })