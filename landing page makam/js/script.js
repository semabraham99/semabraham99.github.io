	$(document).ready(function(){
		
   
      $('.items').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    });


(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

})(jQuery); // End of use strict

// tambahan script 
function test(){
  console.log("bisa")
  const text1 = "makasi"
  const text2 = "apapun makananny, minumnya air"
  const text3 = "nama" + "tanggal"
  update(1,text1,text2,text3)

}

function newTab(param){

  if (param == 'maps'){
    window.open('https://goo.gl/maps/Ur5odF5VvWxATwqs5', '_blank');
  }

  if (param == 'chat'){
    window.open('https://api.whatsapp.com/send/?phone=6281804339653&text&type=phone_number&app_absent=0', '_blank');
  }
  
}

function updateAll(){
   
  const request = new Request("https://script.google.com/macros/s/AKfycbwFrmdYISbWTx-13kv0zdiG-l2pxwOKn5EIwDhDqIOpkZCT716c0lPVVojtSOxJJtGsUw/exec")

  const response = fetch(request).then((Response)=> Response.json()).then((data)=>{
    waktu = [(data[0].waktu),(data[1].waktu),(data[2].waktu),(data[3].waktu),(data[4].waktu),(data[5].waktu),(data[6].waktu)]
    kesan = [(data[0].kesan),(data[1].kesan),(data[2].kesan),(data[3].kesan),(data[4].kesan),(data[5].kesan),(data[6].kesan)]
    nama = [(data[0].nama),(data[1].nama),(data[2].nama),(data[3].nama),(data[4].nama),(data[5].nama),(data[6].nama)]
    review = [(data[0].review),(data[1].review),(data[2].review),(data[3].review),(data[4].review),(data[5].review),(data[6].review)]
    
    for (let i = 0; i < 6; i++) {
      namaTanggal = parseNama(nama[i],waktu[i])
      updateReview (i,kesan[i],review[i],namaTanggal)
    }
    console.log("succes")
    
  })
}

function parseNama (nama,waktu){
  const stringA = waktu
  let a = stringA.search("T")
  let waktuFinal = stringA.slice(0,a)
  return nama + " - " + waktuFinal;
}


function updateReview(num,text1,text2,text3){
  console.log("kesan" + String(num+1))
  const kesan = document.getElementById("kesan" + String(num+1))
  kesan.innerText= text1

  const review = document.getElementById("review" + String(num+1))
  review.innerText= text2

  const namaTanggal = document.getElementById("namaTanggal" + String(num+1))
  namaTanggal.innerText= text3

}


