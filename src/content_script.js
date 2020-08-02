$(function () {
  $('.status-button-1.viewing > span').on("click", function(){
    // $('.video-arrow.next')[0].click();
    if(!$('.status-button-1.viewing').hasClass('active')){
      window.location.href = $('.video-arrow.next')[0].href;
    }
  });
});

$(window).on('message', function(ev){
// copy from medilink
  var org_data = ev.originalEvent.data;
  if(typeof(org_data) != "string" || org_data.indexOf("videog_player_event") < 0){
    return;
  }

  var ev_strings = org_data.split("&");
  var ev_data = {};
  for(var i = 0; i < ev_strings.length; i++){
    var parts = ev_strings[i].split("=", 2);
    var label = parts[0];
    var data = decodeURIComponent(parts[1]);
    ev_data[label] = data;
  }
// copy end

  if (ev_data.name === "complete") {
    if(!$('.status-button-1.viewing').hasClass('active')){
      $('.status-button-1.viewing > span').click();
    }
    setTimeout(function(){
      window.location.href = $('.video-arrow.next')[0].href;
    }, 500);
      // let videoFrame = $(".video-container > iframe")[0];
      // videoFrame.contentWindow.postMessage({
      //     signature: 'videog_player_command',
      //     name: 'play',
      // }, '*');
  }
});