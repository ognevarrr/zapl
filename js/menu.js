let container = document.querySelector('.container');
let canvas = document.querySelector('.canvas');
container.addEventListener('mousemove', (e) => {
  let x = e.clientX - container.getBoundingClientRect().left;
  let y = e.clientY - container.getBoundingClientRect().top;
  canvas.style.transform = `translate(-${x}px, -${y*1}px)`;
});
$(document).ready(function(){
  $(".hover_1").hover(function(){
     $(".merch").css('display','block');
     $(".main").css('display','none');
  },function(){
     $(".merch").css("display","none");
     $(".main").css('display','block');
  });
  // $(".hover_1").click(function(){
  //    $(".merch").css('display','block').css('transition','12s');
  // }
  $(".hover_2").hover(function(){
     $(".posters").css("display","block");
     $(".main").css('display','none');
  },function(){
     $(".posters").css("display","none");
     $(".main").css('display','block');
  });
  $(".hover_3").hover(function(){
     $(".book").css("display","block");
     $(".main").css('display','none');
  },function(){
     $(".book").css("display","none");
     $(".main").css('display','block');
  });
  $(".hover_4").hover(function(){
     $(".space").css("display","block");
     $(".main").css('display','none');
  },function(){
     $(".space").css("display","none");
     $(".main").css('display','block');
  });
});
