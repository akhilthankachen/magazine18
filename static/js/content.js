var clickCount = 0;
var animationSpeed = 200;
var pageNumber = $("#pageNumber");
var rightArrow = $("#rightArrow");
var leftArrow = $("#leftArrow");
var one = $("#one");
var two = $("#two");
var three = $("#three");
var four = $("#four");
var five = $("#five");
var pages = $(".pages");

var widthPageThree = 0;
var widthPageTwo = 0;
var widthPageOne = 0;
//function init css of one
function initOne(){
    var pageHeight = $(".pages").height();
    var pageWidth = ((pageHeight * 1.043) * 2480) / 3508;
    widthPageOne = pageWidth;
    $("#one").css({
        "height":"100%",
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
//function init css of two
function initTwo(){
    var pageHeight = $(".pages").height();
    var pageTwoWidth = ((pageHeight * .69) * 2480) / 3508;
    widthPageTwo = pageTwoWidth;
    $("#two").css({
        "width":pageTwoWidth,
        "display":"inline-block",
        "position":"absolute",
        "border-radius":"5%",
        "margin":"auto",
        "overflow":"hidden",
        "height":"65%",
        "right":"18%",
        "left":"",
        "top":"0",
        "bottom":"0",
        "z-index":"66",
        "opacity":"0.7"
    });
    $("#imgTwo").attr('src','./static/img/pages/magazine18-2.jpg');
}
//function init css of three
function initThree(){
    var pageHeight = $(".pages").height();
    var pageThreeWidth = ((pageHeight * .35) * 2480) / 3508;
    widthPageThree = pageThreeWidth;
    $("#three").css({
        "height":"35%",
        "width":pageThreeWidth,
        "display":"inline-block",
        "position":"absolute",
        "margin":"auto",
        "right":"8%",
        "left":"",
        "top":"0",
        "bottom":"0",
        "overflow":"hidden",
        "z-index":"33",
        "border-radius":"5%",
        "opacity":"0.4"
    });
    $("#imgThree").attr('src','./static/img/pages/magazine18-3.jpg');
}
//init all pages
function init(){
    $("#four").css({"display":"none"});
    $("#five").css({"display":"none"});
}
//function executes when dom is ready
$( document ).ready(function() {
    //init
    init();
    initOne();
    initTwo();
    initThree();
});


//button handle

function animateFiveToFour(id,order){
    if(order == 1){
        id.animate({
            height: "65%",
            right: "18%",
            left:"",
            opacity:"0.7",
            width: widthPageTwo
        });
        id.css({"z-index":"66"});
    }else{
        id.animate({
            height: "35%",
            right: "8%",
            left:"",
            opacity:"0.4",
            width: widthPageThree
        });
        id.css({"z-index":"33"});
    }
}

function animateFourToThree(id,order){
    if(order == 1){
        id.animate({
            height: "100%",
            right: "0",
            left: "0",
            opacity:"1",
            width: widthPageOne
        });
        id.css({"z-index":"66"});
    }else{
        id.animate({
            height: "65%",
            right: "18%",
            left:"",
            opacity:"0.7",
            width:widthPageTwo
        });
        id.css({"z-index":"33"});
    }
}

function rightArrowClick(){

}
function leftArrowClick(){

}

rightArrow.click(rightArrowClick);
leftArrow.click(leftArrowClick);