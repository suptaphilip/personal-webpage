$(document).ready(function(){
  $(".main").onepage_scroll({
   sectionContainer: "section",    
   easing: "ease",                     
   animationTime: 500,             
   pagination: true,                
   updateURL: true,                
   beforeMove: function(index) {},  
   afterMove: function(index) {},  
   loop: false,                   
   keyboard: true,                
   responsiveFallback: 1025       
 });
  $('.go-to').click(function(){
    var target = $(this).attr('go-to');
    $('.main').moveTo(target);
  });
  $('.fui-arrow-down').click(function(){
    var target = $('.main').children().index($(this).parent())+2;
    console.log(target);
    $('.main').moveTo(target);
    return false;
  });
  $('.samantha').click(function(){
    speechRecognition();
  });

});

function giveVoiceResponce(){
 var msg = new SpeechSynthesisUtterance('sure, honey!');
 window.speechSynthesis.speak(msg);
}

function speechRecognition(){
  var rec = new webkitSpeechRecognition();
  var trial = 0;
  rec.continuous = true;
  rec.interimResults = true;
  
  rec.onresult = function(e){ 
    var results = e.results[e.results.length-1];
    last_result = results[results.length-1];
    console.log(results);
    last_result = last_result.transcript;
    console.log(last_result);

    if (results.isFinal){
      if (last_result.indexOf(' up')>0 || last_result.indexOf(' above')>0){
        giveVoiceResponce();
        $(".main").moveUp();
        trial ++;
      }
      if (last_result.indexOf(' down')>0 || last_result.indexOf(' below')>0){
        giveVoiceResponce();
        $(".main").moveDown();
        trial ++;
      }

    }
  };

  rec.onstart = function(e){ console.log('start') };
  rec.onerror = function(e){ console.log(e); };
  rec.onend  = function(e){ console.log('end') };
  rec.onspeechstart = function(e){ console.log('speechStart') };
  rec.start();
}