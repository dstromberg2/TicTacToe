$(document).ready(function(){

    // Setup slide effects for each page
    $('.backbtn').click(function() { $(this).parent().slideout(); });
    $('#startgame').click(function() { $('.app').slidein(); });
    $('#stats').click(function() { $('.statpage').slidein(); });        
    $('#opts').click(function() { $('.optpage').slidein(); });
    $('#credits').click(function() { $('.optpage').slidein(); });

    // Setup display of game grid based upon device screen size
    if ($(window).width() < $(window).height()) {
        var size = Math.round($(window).width()/4);
    } else {
        var size = Math.round($(window).height()/4);
    }
    $('.grid').width(size);
    $('.grid').height(size);
    $('.grid').css('line-height', Math.round(size/50)+"em");
    $('.playtbl').css('margin-left', Math.round(size/2)+"px");
    
    // Start it up, and assign click trigger for squares
    playgrid.initialize();

    $('.grid').click(function() {
        playgrid.choose($(this).attr('id'));
    });

});

