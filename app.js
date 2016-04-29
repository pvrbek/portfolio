var main = function () {
    $(".content-top-spock").click(function(){
        $('.menu').animate({left:"0px"}, 200);
    });
    $(".menu-icon-close").click(function(){
        $(".menu").animate({left:"-285px"}, 200);
    });
};
$(document).ready(main);
