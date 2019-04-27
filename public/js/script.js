/*----- Slider -----*/
$(document).ready(function(){ 

$(function() {
    $('.chart').easyPieChart({
        scaleColor: false,
        lineWidth: 10,
        lineCap: 'circle',
        animate: 5000,
    });
    setInterval(function() {
      $('.chart').data('easyPieChart').update(0);
      $('.chart').data('easyPieChart').update($('.chart').attr('data-percent'));
      $('#chart2').data('easyPieChart').update(0);
      $('#chart2').data('easyPieChart').update($('#chart2').attr('data-percent'));
      $('#chart3').data('easyPieChart').update(0);
      $('#chart3').data('easyPieChart').update($('#chart3').attr('data-percent'));
      $('#chart4').data('easyPieChart').update(0);
      $('#chart4').data('easyPieChart').update($('#chart4').attr('data-percent'));
      $('#chart5').data('easyPieChart').update(0);
      $('#chart5').data('easyPieChart').update($('#chart5').attr('data-percent'));
    }, 7000);	
});



/*----- Scroll Top ----- */

  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('.pokeball').fadeIn(); 
      } else { 
          $('.pokeball').fadeOut(); 
      } 
  }); 
  $('.pokeball').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 900); 
      return false; 
  }); 












  
});