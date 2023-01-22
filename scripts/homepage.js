
function responsiveSlider() {
  const slider = document.querySelector('.slide-container');
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



let a = document.getElementById('hamburger')
let slidebar = document.getElementById('slider-bar')


a.addEventListener('click', ()=> {
    slidebar.style.display='block';
    console.log('hello')
})

slidebar.addEventListener('focusout', () => {
  slidebar.style.display='none';
  console.log('hello')
})
