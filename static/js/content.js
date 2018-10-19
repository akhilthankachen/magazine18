//init all pages
function init(){
    $("#two").css({"display":"none"});
    $("#three").css({"display":"none"});
    $("#four").css({"display":"none"});
    $("#five").css({"display":"none"});
}

//function init css of one
function initOne(){
    $("#one").css({
        "background-color":"red",
        "height":"100%",
        "width":"50%",
        "display":"block",
        "position":"absolute",
        "margin":"auto",
        "left":"0",
        "right":"0",
        "top":"0",
        "bottom":"0",
        "z-index":"99"
    });
}


//function executes when dom is ready
$( document ).ready(function() {
    //init
    init();
    initOne();
});