var playgrid = {
    // All startup values for a new game
    initialize: function() {
        this.gridval = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0 );
        this.turn = 1;
        this.moves = 0;
        $('#p1').animate({backgroundColor: 'rgba(247, 230, 83, 1)', color: '#862500'}, 500);
        $('.grid').empty();
    },
    
    // When a square is pressed...
    choose: function(id) {
        var chosen = parseInt(id.replace("grid", ""))-1;
        
        // ...check if it is available
        if (this.gridval[chosen] == 0) {
        
            // assign the square
            this.gridval[chosen] = this.turn;
            if (this.turn == 1) { var disp = "X"; }
            else { var disp = "O"; }
            $('#'+id).text(disp);
            this.moves++;
            // check for victory conditions, if no win, move to the next player
            if (this.checkwin() == 0) { this.nextturn(); }
            
        } else {
        
            // if it is not available, flash the square
            $('#'+id).animate({ backgroundColor: '#F55C5C'}, 100);
            $('#'+id).animate({ backgroundColor: 'rgba(245, 92, 92, 0)'}, 500);
        }
    },
    
    // When it is the next player's turn, set the variable and highlight the appropriate player
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
    
    // Conditions to check for victory. Checks values in array for all 8 possible wins (better way to do this?)
    checkwin: function() {
        if (this.moves == 9) { return this.done(0); }
        else if (this.gridval[0] != 0 && this.gridval[0] == this.gridval[1] && this.gridval[1] == this.gridval[2]) { return this.done(this.gridval[0]); }
        else if (this.gridval[3] != 0 && this.gridval[3] == this.gridval[4] && this.gridval[4] == this.gridval[5]) { return this.done(this.gridval[3]); }
        else if (this.gridval[6] != 0 && this.gridval[6] == this.gridval[7] && this.gridval[7] == this.gridval[8]) { return this.done(this.gridval[6]); }
        else if (this.gridval[0] != 0 && this.gridval[0] == this.gridval[3] && this.gridval[3] == this.gridval[6]) { return this.done(this.gridval[0]); }
        else if (this.gridval[1] != 0 && this.gridval[1] == this.gridval[4] && this.gridval[4] == this.gridval[7]) { return this.done(this.gridval[1]); }
        else if (this.gridval[2] != 0 && this.gridval[2] == this.gridval[5] && this.gridval[5] == this.gridval[8]) { return this.done(this.gridval[2]); }
        else if (this.gridval[0] != 0 && this.gridval[0] == this.gridval[4] && this.gridval[4] == this.gridval[8]) { return this.done(this.gridval[0]); }
        else if (this.gridval[2] != 0 && this.gridval[2] == this.gridval[4] && this.gridval[4] == this.gridval[6]) { return this.done(this.gridval[2]); }
        else { return 0; }
    },
    
    // If someone has won, throw up a message, and reset the game board
    done: function(winner) {
        if (winner == 0) { alert("Draw!"); }
        else { alert("Player "+winner+" wins!"); }
        $('#p1').animate({backgroundColor: 'rgba(247, 230, 83, 0)', color: '#000'}, 500);
        $('#p2').animate({backgroundColor: 'rgba(247, 230, 83, 0)', color: '#000'}, 500);
        this.initialize();
        return 1;
    }
};


