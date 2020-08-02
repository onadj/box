$(window).scroll(function () {
    $('.animation2').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).addClass("move-left-to-right");
        } else {
            $(this).removeClass("move-left-to-right");
            console.log(imageHeight)
        }
    });
});
