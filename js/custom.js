$(function(){
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop()
        if(scrolling > 50){
          $(".nav_back").addClass("nav_color")
        }else{ $(".nav_back").removeClass("nav_color")}
      })
      $('body').vidbacking({
        'masked': true
    });
    $(window).on("load",function(){
      $(".preloader").delay(1000).fadeOut(500)
  })
  new WOW().init();
  $('.slide_img').slick({
    dots: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed:2000,
    arrows:false,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        speed:2000,
        arrows:false,
        dots:false,
        autoplay:true,
        }
      },
      {
        breakpoint: 991.98,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        speed:2000,
        arrows:false,
        dots:false,
        autoplay:true,
        }
      },
      {
        breakpoint: 576.98,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed:2000,
        arrows:false,
        dots:false,
        autoplay:true,
        }
      }
    ]
  });
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  $(".send").click(function(){
    $(".drop_mail").toggle(500)
  })
  $(".close").click(function(){
    $(".drop_mail").fadeOut(500)
  })
 
  $(document).mouseup(function(e)
  {
    var container = $(".drop_mail");
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
      container.hide(500)
    }
  });



})



$('.percent').percentageLoader({
  valElement: 'p',
  strokeWidth: 12,
  bgColor: '#d9d9d9',
  ringColor: '#d53f3f',
  textColor: '#9a9a9a',
  fontSize: '30px',
  fontWeight: 'normal'
});