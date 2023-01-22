

let signin = document.getElementById("signin");
let cartPage = document.getElementById("cartPage");


signin.addEventListener("click",()=>{
  window.location.href = "./Signup.html"
})

cartPage.addEventListener("click",()=>{
  window.location.href = "./cart.html"
})

function productPage(){
    window.location.href = "./product.html"
}

function responsiveSlider() {
    const slider = document.querySelector('.container');
    let sliderWidth = slider.offsetWidth / 3;
    const sliderList = document.querySelector('ul');
    let items = sliderList.querySelectorAll('li').length -2 ;
    let count = 1;
    
    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });
    
    function prevSlide() {
        console.log('left')
      if(count > 1) {
        count = count - 2;
        sliderList.style.left = '-' + count * sliderWidth + 'px';
        count++;
      }else if(count == 1) {
        count = items - 1;
        sliderList.style.left = '-' + count * sliderWidth + 'px';
        count++;
      }
      
    }
    function nextSlide() {
        console.log('right')
      if(count < items) {
        sliderList.style.left = '-' + count * sliderWidth + 'px';
        count++;
        
      }else if(count == items) {
        sliderList.style.left = '0px';
        count = 1;
        
      }
    }
    prev.addEventListener('click', prevSlide);
    next.addEventListener('click', nextSlide);
    setInterval(function() {
      nextSlide();
    }, 4000);
  }
  
  window.onload = function() {
    responsiveSlider();
  }