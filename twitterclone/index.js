var scrollPosition = 0;
var yon;
var kenar_mrg;
$(window).scroll(function () {
    var currenPosition = $(this).scrollTop();
    var cubukboyu = $(".kenar-cubugu-govde").innerHeight();

    if (currenPosition > scrollPosition) {
        if (yon == null) {
            yon = "yukari";
        }
        if (yon == "yukari") {
                kenar_mrg = Math.floor(currenPosition);
                $(".kenar-mrg").css("margin-top", kenar_mrg);
  

            $(".kenar-cubugu-govde").removeAttr("style");
            $(".kenar-cubugu-govde").css("top", "-763px");
        }
        yon = "asagi";
    } else {
        if (yon == null) {
            yon = "asagi";
        }
        if (yon == "asagi") {

                kenar_mrg = Math.floor(currenPosition);
                $(".kenar-mrg").css("margin-top", kenar_mrg);
        


            $(".kenar-cubugu-govde").removeAttr("style");
            $(".kenar-cubugu-govde").css("bottom", "-772px");
        }
        yon = "yukari";
    }
    scrollPosition = currenPosition;
});
