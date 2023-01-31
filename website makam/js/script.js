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
function newTab(param){

  if (param == 'maps'){
    window.open('https://goo.gl/maps/Ur5odF5VvWxATwqs5', '_blank');
  }

  if (param == 'chat'){
    window.open('https://api.whatsapp.com/send/?phone=6281804339653&text&type=phone_number&app_absent=0', '_blank');
  }
  
}

async function fetchReview(){
  let dataReview = await fetchData()
  updateReview(dataReview)
}

async function fetchData(){
  const response = await fetch ('https://script.google.com/macros/s/AKfycbxj7N8t8zVRpdJhX4syene3sc103tzlkK21OBjrJcD4n6jxns_fJPECM25-MhmYHP2V7Q/exec')
  const data = await response.json()

  return data
} 

function parseNama (nama,waktu){
  return nama + " - " + waktu;
}

function updateReview(dataReview){
  //  membuat mudifikasi pada inner html 
  const kolomReview = document.getElementById("kolomReview")
  
  // menambahkan secara iteratif data yang ada 
  let panjang = dataReview.length
  let konten = ' '
  for ( let i = 0 ; i < panjang ; i++){

    // kesan, nama, tanggal
    let kesan = dataReview[i]['kesan']
    let review = dataReview[i]['review']
    let namaTanggal = parseNama(dataReview[i]['nama'],dataReview[i]['waktu'])

    let card1 = `<div class="carousel-item `
    let card1a =`active">`
    let card1b = '">'

    let card2 = 
    `<div class="card">
      <div class="card-body">
        <h5 class="card-title">`

    let card3 = `</h5>
    <p class="card-text">`

    let card4 = `</p>
    <p class="card-text"><small class="text-muted">`

    let card5 = `</small></p>
        </div>
      </div>
    </div>`
    
    if (i == 0) {
      let card = card1 + card1a + card2 + kesan + card3 + review + card4 + namaTanggal + card5
      konten += card
    }
    else {
      let card = card1 + card1b + card2 + kesan + card3 + review + card4 + namaTanggal + card5
      konten += card
    }
  } 
  kolomReview.innerHTML= konten
  
}



