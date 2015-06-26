function mobMenu() {
    if ($('.mobNav').is(':visible')) {
        $('.mobNav').hide();
    }
    else {
        $('.mobNav').show();
    }
}

$(document).ready(function () {
    $(".smallAddress").hide();
    $(".mobNav").hide();
    var logoHeight = $(".logo").height();
    var addrHeight = $(".address").height();
    var naviHeight = $(".navi").height();
    var menuHeight = $(".top-menu").height();
    var topHeight = $(".top").height();
    var nOffset = logoHeight - naviHeight;
    var aOffset = logoHeight - addrHeight;
    $(".content").css("margin-top", logoHeight - 20);

    if ($(window).width() < 710) {
        $(".hotdogs").show();
        $("#fullNav").hide();
        $(".address").hide();
        $(".smallAddress").show();
        //$(".navi").css("font-size", "1.35em");
        $(".content").css("margin-top", logoHeight - 20);
       
        $("#mobNav").css("margin-top", menuHeight - (menuHeight / 2));
        if ($(window).width() < 600) {
            //nOffset = 0;
            //aOffset = 0;
            //$(".navi").css("margin-top", nOffset);
            //$(".navig li").css("margin-right", "2em");
        }
    }

    //else if ($(window).width() < 1100) {
    //    //    //$(".content").css("margin", "8.5em 0 0 0"); $(".navi").css("margin-top", nOffset + 40);
    //    $(".address").css("margin", "100");
    //}

    else {
        $(".hotdogs").hide();
        $(".mobNav").hide();
        $("#fullNav").show();
        $(".navi").css("margin-top", nOffset);
        $(".address").css("margin-top", aOffset - 10);
    }




    //$(".hoverable").children(".over").hide();
    //$(".hoverable").hover(function () {
    //    var over = $(this).children(".over");
    //    over.show();
    //    over.siblings(".normal").hide();
    //}, function () {
    //    var normal = $(this).children(".normal");
    //    normal.show();
    //    normal.siblings(".over").hide();
    //});

    //$("#email").focus(function () {
    //    $("#email").val(" ");
    //}
    //    )

    //$("#submitEmail").click(function () {
    //    submitEmail();
    //}
    //   )


});