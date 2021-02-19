$('.pushpin-demo-nav').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });


  $(() => {
    $('.datepicker').datepicker();
  });
  
  $(document).ready(function (){
    $("#click").click(function (){
        $('html, body').animate({
            scrollTop: $("#div1").offset().top
        }, 'slow');
    });
});
  