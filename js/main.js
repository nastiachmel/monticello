
  $('.js-slider').slick({
    dots:true,
    slidesToShow: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 4000
  });


$(document).ready(function(){
  $('.slider-news').slick({
    dots:true,
    slidesToShow: 3,
    // infinite: true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    responsive: [
      {
      breakpoint: 1600,
      settings: {
      arrows:true
      } 
    },
    {
      breakpoint: 1295,
      settings: {
      arrows:false
      } 
    },
    {
      breakpoint: 1060,
      settings: {
        slidesToShow: 2
      } 
    },
    
    {
      breakpoint: 681,
      settings: {
        slidesToShow: 1,
        arrows:true,
        dots:false
        // adaptiveHeight: true,
        // variableWidth: true
      } 
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        arrows:false
        // adaptiveHeight: true,
        // variableWidth: true
      } 
    }
    
    
  ]
  });
});




//map
function initMap() {
 
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
  
    center: {lat:40.6895341, lng:-73.9182189}
  });

  var image = 'img/marker.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 40.6956512, lng: -73.9283756},
    map: map,
    title: 'Our office',
    icon: image
  });

  
}
//details
document.querySelector('.button').onclick = function() {
 document.querySelector('.project-block__modal').style.display = "block";
}
document.querySelector('.button--new').onclick = function() {
  document.querySelector('.project-block__modal--fix').style.display = "block";
 }


document.querySelector('.close').onclick = function() {
  document.querySelector('.project-block__modal').style.display = "none";

}
document.querySelector('.close--fix').onclick = function() {
 
  document.querySelector('.project-block__modal--fix').style.display = "none";
}


window.onclick = function(event) {
  if (event.target == document.querySelector('.project-block__modal--fix')) {
    document.querySelector('.project-block__modal--fix').style.display = "none";
  }
  if (event.target == document.querySelector('.project-block__modal')) {
    document.querySelector('.project-block__modal').style.display = "none";
  }
}
//




    //contact

   
document.querySelector('.button--contact').onclick = function() {
  console.log('fdjf');
  console.log( document.querySelector('.contact__mail').value)
  if( document.querySelector('.contact__mail').value!='' &&  document.querySelector('.contact__name').value!=''){
    document.querySelector('.contact__mail').value='';
    document.querySelector('.contact__name').value='';
  }else{
    alert('Fill in all the fields');
  
  }

}



///
document.querySelector('.button--fix').onclick=function(){
  document.querySelector('.gallery__row-disable').style.display='flex';
}

function active(elem, link) {
  // active=(elem ,link)=>{
    console.log(link);
   //  var list = document.querySelectorAll('.menu__item-link');
    let a= Array.prototype.slice.call(document.querySelectorAll(".menu__item-link"), 0);
  console.log( Array.prototype.slice.call(document.querySelectorAll(".menu__item-link"), 0));

    a.forEach(function(element)  {
  element.classList.remove('active');   
  console.log('dfsv')
});

    //  for(let item of list){
      
    //    item.classList.remove('active');   
    //  }
     elem.classList.add('active');
     
      var position = $(link).offset().top;
      $("HTML, BODY").animate({scrollTop: position}, 10000, 'linear');
  }