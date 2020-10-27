$(document) .ready(function (){
    $(".box").on("mouseover", function(){
        var val= $(this).attr("sound-val");
        $("."+val)[0].play();
    })
})