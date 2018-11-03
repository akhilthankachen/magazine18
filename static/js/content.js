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
var imgIdOne = $("#imgOne");
var imgIdTwo = $("#imgTwo");
var imgIdThree = $("#imgThree");
var imgIdFour = $("#imgFour");
var imgIdFive = $("#imgFive");
var pages = $(".pages");

var widthPageThree = 0;
var widthPageTwo = 0;
var widthPageOne = 0;

var rightOnePos;
var rightTwoPos;
var rightThreePos;
var rightFourPos;
var rightFivePos;
var leftOnePos;
var leftTwoPos;
var leftThreePos;
var leftFourPos;
var leftFivePos;

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

    var pageHeight = $(".pages").height();
    var pageWidth = ((pageHeight * 1.043) * 2480) / 3508;
    widthPageOne = pageWidth;
    var pageTwoWidth = ((pageHeight * .69) * 2480) / 3508;
    widthPageTwo = pageTwoWidth;
    var pageThreeWidth = ((pageHeight * .35) * 2480) / 3508;
    widthPageThree = pageThreeWidth;

    rightOnePos = ((92/100)*pages.width()) - widthPageThree;
    rightTwoPos = ((82/100)*pages.width()) - widthPageTwo;
    rightThreePos = 0;
    rightFourPos = (18/100)*pages.width();
    rightFivePos = (8/100)*pages.width();

    leftOnePos = (8/100)*pages.width();
    leftTwoPos = (18/100)*pages.width();
    leftThreePos = 0;
    leftFourPos = ((82/100)*pages.width()) - widthPageTwo; 
    leftFivePos = ((92/100)*pages.width()) - widthPageThree;
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
            left: leftFourPos,
            right: rightFourPos,
            opacity:"0.7",
            width: widthPageTwo
        },animationSpeed);
        id.css({"z-index":"66"});
    }else{
        id.animate({
            height: "35%",
            right: rightFivePos,
            left: leftFivePos,
            opacity:"0.4",
            width: widthPageThree
        },animationSpeed);
        id.css({"z-index":"33"});
    }
}

function animateFourToThree(id,order){
    if(order == 1){
        id.animate({
            height: "100%",
            right: rightThreePos,
            left: leftThreePos,
            opacity:"1",
            width: widthPageOne
        },animationSpeed);
        id.css({"z-index":"99"});
    }else{
        id.animate({
            height: "65%",
            right: rightFourPos,
            left: leftFourPos,
            opacity:"0.7",
            width:widthPageTwo
        },animationSpeed);
        id.css({"z-index":"66"});
    }
}

function animateThreeToTwo(id,order){
    if(order == 0){
        id.animate({
            height: "100%",
            right: rightThreePos,
            left: leftThreePos,
            opacity:"1",
            width: widthPageOne
        },animationSpeed);
        id.css({"z-index":"66"});
    }else{
        id.animate({
            height: "65%",
            left: leftTwoPos,
            right: rightTwoPos,
            opacity:"0.7",
            width:widthPageTwo
        },animationSpeed);
        id.css({"z-index":"66"});
    }
}

function animateTwoToOne(id,order){
    if(order == 0){
        id.animate({
            height: "65%",
            left: leftTwoPos,
            right: rightTwoPos,
            opacity:"0.7",
            width: widthPageTwo
        },animationSpeed);
        id.css({"z-index":"66"});
    }else{
        id.animate({
            height: "35%",
            left: leftOnePos,
            right: rightOnePos,
            opacity:"0.4",
            width: widthPageThree
        },animationSpeed);
        id.css({"z-index":"33"});
    }
}

function animateOneToFive(id,order,imgId,newImg){
    if(order == 1){
        id.animate({
            opacity:"0"
        },animationSpeed/2);
        id.animate({
            opacity:"0.4",
            right: rightFivePos,
            left: leftFivePos
        },animationSpeed/2);
        id.css({"z-index":"33"});
    }else{
        id.animate({
            opacity:"0"
        },animationSpeed/2);
        id.animate({
            opacity:"0.4",
            left: leftOnePos,
            right: rightOnePos
        },animationSpeed/2);
        id.css({"z-index":"33"});
    }
}


function rightArrowClick(){
    animateThreeToTwo(one,1);
    animateFourToThree(two,1);
    animateFiveToFour(three,1);
}
function leftArrowClick(){

}

rightArrow.click(rightArrowClick);
leftArrow.click(leftArrowClick);