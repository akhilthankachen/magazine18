//init all pages
function init(){

}

//function init css of one
function initOne(){

    var pageHeight = $(".pages").height();
    var pageWidth = ((pageHeight * 1.043) * 2480) / 3508;
    $("#one").css({
        "background-color":"red",
        "height":"95%",
        "width":pageWidth ,
        "display":"inline-block",
        "position":"absolute",
        "margin":"auto",
        "left":"0",
        "right":"0",
        "top":"0",
        "bottom":"0",
        "overflow":"hidden",
        "border-radius":"5%",
        "z-index":"99"
    });

    $("#imgOne").attr('src','./static/img/pages/magazine18-1.jpg');

}

function resizeOne(){
    var pageHeight = $("#one").height();
    var pageWidth = (pageHeight * 2480) / 3508;
    $("#one").css({"width":pageWidth});
}

//window resize function
$(window).on('resize', function(){
    //setting image size equalent page
    resizeOne();
});

//function executes when dom is ready
$( document ).ready(function() {
    //init
    init();
    initOne();

    var pageHeight = $(".pages").height();
    var pageTwoWidth = ((pageHeight * .69) * 2480) / 3508;
    $("#two").css({
        "background-color":"red",
        "height":"65%",
        "width":pageTwoWidth,
        "display":"inline-block",
        "position":"absolute",
        "margin":"auto",
        "left":"18%",
        "top":"0",
        "bottom":"0",
        "overflow":"hidden",
        "z-index":"66",
        "border-radius":"5%",
        "opacity":"0.7"
    });
    $("#imgTwo").attr('src','./static/img/pages/magazine18-1.jpg');

    var pageHeight = $(".pages").height();
    var pageThreeWidth = ((pageHeight * .69) * 2480) / 3508;
    $("#three").css({
        "background-color":"red",
        "height":"65%",
        "width":pageThreeWidth,
        "display":"inline-block",
        "position":"absolute",
        "margin":"auto",
        "right":"18%",
        "top":"0",
        "bottom":"0",
        "overflow":"hidden",
        "z-index":"66",
        "border-radius":"5%",
        "opacity":"0.7"
    });
    $("#imgThree").attr('src','./static/img/pages/magazine18-1.jpg');

    var pageHeight = $(".pages").height();
    var pageThreeWidth = ((pageHeight * .35) * 2480) / 3508;
    $("#four").css({
        "background-color":"red",
        "height":"35%",
        "width":pageThreeWidth,
        "display":"inline-block",
        "position":"absolute",
        "margin":"auto",
        "left":"8%",
        "top":"0",
        "bottom":"0",
        "overflow":"hidden",
        "z-index":"33",
        "border-radius":"5%",
        "opacity":"0.4"
    });
    $("#imgFour").attr('src','./static/img/pages/magazine18-1.jpg');

    var pageHeight = $(".pages").height();
    var pageThreeWidth = ((pageHeight * .35) * 2480) / 3508;
    $("#five").css({
        "background-color":"red",
        "height":"35%",
        "width":pageThreeWidth,
        "display":"inline-block",
        "position":"absolute",
        "margin":"auto",
        "right":"8%",
        "top":"0",
        "bottom":"0",
        "overflow":"hidden",
        "z-index":"33",
        "border-radius":"5%",
        "opacity":"0.4"
    });
    $("#imgFive").attr('src','./static/img/pages/magazine18-1.jpg');
});