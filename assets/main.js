$(window).scroll(function () {
    $('.animation1').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).addClass("droneimage");
        } else {
            $(this).removeClass("droneimage");
            console.log(imageHeight)
        }
    });
});

$(window).scroll(function () {
    $('.animation2').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).addClass("specification");
        } else {
            $(this).removeClass("specification");
            console.log(imageHeight)
        }
    });
});

$(window).scroll(function () {
    $('.animation3').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).addClass("review");
        } else {
            $(this).removeClass("review");
            console.log(imageHeight)
        }
    });
});

$(window).scroll(function () {
    $('.animation4').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).addClass("wheretobuy");
        } else {
            $(this).removeClass("wheretobuy");
            console.log(imageHeight)
        }
    });
});