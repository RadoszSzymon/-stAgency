$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('#who');
    var offset = startchange.offset();
    if (startchange.length){
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {
                $(".navbar-default").css('background-color', '#BEBEBE');
                $('.navbar-nav').css('background-color', '#BEBEBE');
            } else {
                $('.navbar-default').css('background-color', 'transparent');
                $('.navbar-nav').css('background-color', '#000');
            }
        });
    }
});
