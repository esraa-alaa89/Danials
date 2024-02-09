// Handle transition in navigation-bar
let navScrollTop = $(".navbar").offset().top ;

$(window).scroll(function () {

    let windowSrollTop = $(window).scrollTop() ;
    if(windowSrollTop == 0)
    {
        $(".bg-nav").css("background-color" , "transparent") ;
        $(".bg-nav a").css("color" , "#fff") ;
    }
    if( windowSrollTop > 0 ){
        $(".bg-nav").css("background-color" , "white") ;
        $(".bg-nav a").css("color" , "#343434") ;
    }

});

//transfer with smoothing to the selected section
$("a[href^='#']").click(function (e) {
    console.log($('a[href^="#"]'));
    let linkHref= $(e.target).attr('href');
    let currentSectionOffeset= $(linkHref).offset().top;
    console.log(currentSectionOffeset);
    $('html,body').animate({scrollTop:currentSectionOffeset}, 500);
})