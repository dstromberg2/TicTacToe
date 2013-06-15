$(document).ready(function(){
    if ($(window).width() < $(window).height()) {
        var size = Math.round($(window).width()/4);
    } else {
        var size = Math.round($(window).height()/4);
    }
    $('.grid').width(size);
    $('.grid').height(size);
    $('.grid').css('line-height', Math.round(size/50)+"em");
    $('.playtbl').css('margin-left', Math.round(size/2)+"px");
    
    playgrid.initialize();

    $('.grid').click(function() {
        playgrid.choose($(this).attr('id'));
    });

});


var playgrid = {
    initialize: function() {
        this.gridval = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0 );
        this.turn = 1;
        $('#p1').animate({backgroundColor: 'rgba(247, 230, 83, 1)', color: '#862500'}, 500);
        $('.grid').empty();
    },
    
    choose: function(id) {
        var chosen = parseInt(id.replace("grid", ""))-1;
        if (this.gridval[chosen] == 0) {
            this.gridval[chosen] = this.turn;
            if (this.turn == 1) { var disp = "X"; }
            else { var disp = "O"; }
            $('#'+id).text(disp);
            if (this.checkwin() == 0) { this.nextturn(); }
        } else {
            $('#'+id).animate({ backgroundColor: '#F55C5C'}, 100);
            $('#'+id).animate({ backgroundColor: 'rgba(245, 92, 92, 0)'}, 500);
        }
    },
    
    nextturn: function() {
        if (this.turn == 1) {
            this.turn = 2;
            $('#p2').animate({backgroundColor: 'rgba(247, 230, 83, 1)', color: '#862500'}, 500);
            $('#p1').animate({backgroundColor: 'rgba(247, 230, 83, 0)', color: '#000'}, 500);
        } else {
            this.turn = 1;
            $('#p1').animate({backgroundColor: 'rgba(247, 230, 83, 1)', color: '#862500'}, 500);
            $('#p2').animate({backgroundColor: 'rgba(247, 230, 83, 0)', color: '#000'}, 500);
        }
    },
    
    checkwin: function() {
        if (this.gridval[0] != 0 && this.gridval[0] == this.gridval[1] && this.gridval[1] == this.gridval[2]) { return this.done(this.gridval[0]); }
        else if (this.gridval[3] != 0 && this.gridval[3] == this.gridval[4] && this.gridval[4] == this.gridval[5]) { return this.done(this.gridval[3]); }
        else if (this.gridval[6] != 0 && this.gridval[6] == this.gridval[7] && this.gridval[7] == this.gridval[8]) { return this.done(this.gridval[6]); }
        else if (this.gridval[0] != 0 && this.gridval[0] == this.gridval[3] && this.gridval[3] == this.gridval[6]) { return this.done(this.gridval[0]); }
        else if (this.gridval[1] != 0 && this.gridval[1] == this.gridval[4] && this.gridval[4] == this.gridval[7]) { return this.done(this.gridval[1]); }
        else if (this.gridval[2] != 0 && this.gridval[2] == this.gridval[5] && this.gridval[5] == this.gridval[8]) { return this.done(this.gridval[2]); }
        else if (this.gridval[0] != 0 && this.gridval[0] == this.gridval[4] && this.gridval[4] == this.gridval[8]) { return this.done(this.gridval[0]); }
        else if (this.gridval[2] != 0 && this.gridval[2] == this.gridval[4] && this.gridval[4] == this.gridval[6]) { return this.done(this.gridval[2]); }
        else { return 0; }
    },
    
    done: function(winner) {
        alert(winner);
        $('#p1').animate({backgroundColor: 'rgba(247, 230, 83, 0)', color: '#000'}, 500);
        $('#p2').animate({backgroundColor: 'rgba(247, 230, 83, 0)', color: '#000'}, 500);
        this.initialize();
        return 1;
    }
};


