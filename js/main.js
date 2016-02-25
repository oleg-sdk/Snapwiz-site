$(document).on('touchend click', '#edulastic .link1', function(){
  $('#edulastic').attr('class','stage1');
  $('#edulastic .link1').addClass('active');
  $('#edulastic .link2').removeClass('active');
  $('#edulastic .link3').removeClass('active');
});

$(document).on('touchend click', '#edulastic .link2', function(){
  $('#edulastic').attr('class','stage2');
  $('#edulastic .link1').removeClass('active');
  $('#edulastic .link2').addClass('active');
  $('#edulastic .link3').removeClass('active');
});

$(document).on('touchend click', '#edulastic .link3', function(){
  $('#edulastic').attr('class','stage3');
  $('#edulastic .link1').removeClass('active');
  $('#edulastic .link2').removeClass('active');
  $('#edulastic .link3').addClass('active');
});
