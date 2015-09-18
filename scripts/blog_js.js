$(document).ready(function(){  
    $("body").queryLoader2({minimumTime : 1000});
});
$(window).load(function(){
    $(window).scroll(function () { 
    var offset = $(document).scrollTop();    
    $("#sharelist_b").animate({top:offset},{duration:500,queue:false});});
});