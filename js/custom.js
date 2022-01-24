$( document ).ready(function() {
    $(".fa-search").click(function(){
        $(".search-bar").show(1000);
    });
    $("#search-bar-times").click(function(){
        $(".search-bar").hide(1000);
    });

    
    $( "#onnanno" ).hover(function(){
        $(".hide-content").toggle();
    });
    $(".hide-content").hover(function(){
        $(this).toggle();
    });
    $(".navbar-toggler").click(function(){
        $(".collapse").toggleClass("d-none")
    });
    
    $('.go-top').hide(); //default hide.
    $(window).scroll(function() {
        var sumon = $(window).scrollTop(); 
        if (sumon > 500) {
            $('.go-top').fadeIn(); 
        } else {
            $('.go-top').fadeOut(); 
        }
    });
});
