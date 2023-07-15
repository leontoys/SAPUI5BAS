function onMagic(){
    $(".box-title").css("background-color", "black")
                   .css("color","white")
                   .css("font-weight","bold")
                   .css("font-family","cursive");

}
function onHide(){
    //$(".box").hide();
    $(".box").fadeOut(5000);
}
function onShow(){
    //$(".box").show();
    $(".box").fadeIn(5000);
}
function onAnimate(){
    $("img").animate({
        width : "+=40px",
        height : "+=40px"
    });
}