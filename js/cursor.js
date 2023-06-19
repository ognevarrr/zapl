$(document).mousemove(function(e){
  $(".cursor").css({
    left: e.clientX,
    top: e.clientY,
    opacity: "100%",
  })
  setTimeout(function(){
    $(".cursor_label").css({
      left: e.clientX,
      top: e.clientY,
      opacity: "100%",
    })
  }, 20)
})
$(document).ready(function(){
  // КЛИК
  $(".for_click").hover(function(){
    $(".cursor_label").addClass("cursor_label_click");
  },function(){
    $(".cursor_label").removeClass("cursor_label_click");
  });
  $(".for_click").hover(function(){
    $(".cursor").addClass("cursor_click");
  },function(){
    $(".cursor").removeClass("cursor_click");
  });
})
