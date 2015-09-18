$(document).ready(function() {
    
    $('#lister, #link_list_head, #footer, #sharelist').hide();
    $('body').queryLoader2({barColor:"#000",backgroundColor: "#FFF",minimumTime:500});
});

$(window).load(function(){

    $('#welcome').delay(2500).fadeOut("slow");
    $('#lister, #link_list_head, #footer, #sharelist').delay(3600).fadeIn("slow");
    
    $(window).scroll(function () { 
        var offset = $(document).scrollTop();
        $("#sharelist").animate({top:offset},{duration:500,queue:false});
    });
});