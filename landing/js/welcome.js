$(document).ready(function(){
    $(".main").onepage_scroll({
       sectionContainer: "section",    
       easing: "ease",                     
       animationTime: 1000,             
       pagination: true,                
       updateURL: true,                
       beforeMove: function(index) {},  
       afterMove: function(index) {},  
       loop: false,                   
       keyboard: true,                
       responsiveFallback: 900       
   });
    $('.go-to').click(function(){
        var target = $(this).attr('go-to');
        $('.main').moveTo(target);
    });
});