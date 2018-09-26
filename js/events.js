$(document).ready(function(){
  $('.contbotonmenu').click(function(){
    $('.cont-menuresponsiv').slideToggle();
  });
  $('.cont-menuresponsiv__header__close').click(function(){
    $('.cont-menuresponsiv').slideToggle();
  });
  /*------------------------------------------------------------------*/
  function tamano(){
  var tamanoo = window.innerWidth;

    if(tamanoo < 800){
      $('.lione').appendTo(".ull");
        $('li:not(.click)').css("padding-left","20px");
      $('.footerflex li:not(.click)').hide();
      console.log(tamanoo);
    }
    else{
        $('.lione').appendTo(".ulll");
        $('li:not(.click)').css("padding-left","0");
        $('li').show();
    }
  }
  window.addEventListener('load', tamano);
  window.addEventListener('resize', tamano);


function checartamano(){
  var ancho = window.innerWidth;
  if(ancho < 800){
    return true;
  }
  else{
    return false;
  }
}

  $('#click1').click(function(){
    if(checartamano()){ $('#click1 ~ li:not(.click)').slideToggle();}
  });

  $('#click2').click(function(){
      if(checartamano()){  $('#click2 + li:not(.click)').slideToggle();}
  });

  $('#click3').click(function(){
    if(checartamano()){  $('#click3 ~ li:not(.click)').slideToggle();}
  });

  $('#click4').click(function(){
    if(checartamano()){  $('#click4 ~ li:not(.click)').slideToggle();}
  });
/*----------------------------------------------------------------------------------------------------------------------------------*/

$('#productos1').mouseover(function(){
  $('#productos1 .container-productos__div').hide();
  $('#productos1 .container-productos__div--div').fadeIn();
});
$('#productos1').mouseout(function(){
  $('#productos1 .container-productos__div').fadeIn();
  $('#productos1 .container-productos__div--div').hide();
});

$('#productos2').mouseover(function(){
  $('#productos2 .container-productos__div').hide();
  $('#productos2 .container-productos__div--div').fadeIn();
});
$('#productos2').mouseout(function(){
  $('#productos2 .container-productos__div').fadeIn();
  $('#productos2 .container-productos__div--div').hide();
});

$('#productos3').mouseover(function(){
  $('#productos3 .container-productos__div').hide();
  $('#productos3 .container-productos__div--div').fadeIn();
});
$('#productos3').mouseout(function(){
  $('#productos3 .container-productos__div').fadeIn();
  $('#productos3 .container-productos__div--div').hide();
});

$('#productos4').mouseover(function(){
  $('#productos4 .container-productos__div').hide();
  $('#productos4 .container-productos__div--div').fadeIn();
});
$('#productos4').mouseout(function(){
  $('#productos4 .container-productos__div').fadeIn();
  $('#productos4 .container-productos__div--div').hide();
});

$('#productos5').mouseover(function(){
  $('#productos5 .container-productos__div').hide();
  $('#productos5 .container-productos__div--div').fadeIn();
});
$('#productos5').mouseout(function(){
  $('#productos5 .container-productos__div').fadeIn();
  $('#productos5 .container-productos__div--div').hide();
});

$('#productos6').mouseover(function(){
  $('#productos6 .container-productos__div').hide();
  $('#productos6 .container-productos__div--div').fadeIn();
});
$('#productos6').mouseout(function(){
  $('#productos6 .container-productos__div').fadeIn();
  $('#productos6 .container-productos__div--div').hide();
});

$('#productos7').mouseover(function(){
  $('#productos7 .container-productos__div').hide();
  $('#productos7 .container-productos__div--div').fadeIn();
});
$('#productos7').mouseout(function(){
  $('#productos7 .container-productos__div').fadeIn();
  $('#productos7 .container-productos__div--div').hide();
});

$('#productos8').mouseover(function(){
  $('#productos8 .container-productos__div').hide();
  $('#productos8 .container-productos__div--div').fadeIn();
});
$('#productos8').mouseout(function(){
  $('#productos8 .container-productos__div').fadeIn();
  $('#productos8 .container-productos__div--div').hide();
});



$('#productos3').click(function(){
 window.location = "aboutvital.php";
 });

 $('.cont7').click(function(){
  window.location = "https://www.facebook.com/vitalfertilizers/";
  });
  $('.cont8').click(function(){
   window.location = "https://www.instagram.com/vitalfertilizers/";
   });
});
