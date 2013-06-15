$(document).ready(function(){

    // Setup slide effects for each page
    slider.initialize();
    $('.backbtn').click(function() { slider.slideout(); });
    $('#startgame').click(function() { slider.slidein('app'); });
    $('#stats').click(function() { slider.slidein('statpage'); });        
    $('#opts').click(function() { slider.slidein('optpage'); });
    $('#credits').click(function() { slider.slidein('creditpage'); });

    // Setup display of game grid based upon device screen size
    if ($(window).width() < $(window).height()) {
        var size = Math.round($(window).width()/4);
    } else {
        var size = Math.round($(window).height()/4);
    }
    $('.grid').width(size);
    $('.grid').height(size);
    $('.grid').css('line-height', Math.round(size/73)+"em");
    $('.playtbl').css('margin-left', Math.round(size/2)+"px");
    
    // Start it up, and assign click trigger for squares
    playgrid.initialize();

    $('.grid').click(function() {
        playgrid.choose($(this).attr('id'));
    });

});

