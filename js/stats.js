var stats = {

    // Retrieve saved stats, if none exist, create empty stats
    initialize: function() {
        this.getstats = window.localStorage.getItem('allstats');
        
        if (null == this.getstats || this.getstats == "null") {
            this.reset();
        } else {
            this.allstats = jQuery.parseJSON(this.getstats);
        }
    },
    
    // Set all stats to zero
    reset: function() {
        if (typeof(window[this.allstats]) == 'undefined' || window[this.allstats] == null) { this.allstats = new Object(); }
        this.allstats.winx = this.allstats.losex = this.allstats.drawx = 0;
        this.allstats.wino = this.allstats.loseo = this.allstats.drawo = 0;
        this.update();
    },
    
    // Save current stats to local storage
    update: function() {
        window.localStorage.setItem('allstats', JSON.stringify(this.allstats));
    },
    
    // Add a completed game result o the stats
    setNew: function(player, result) {
        if (player == 1) {
            if (result == 0) { this.allstats.drawx++; }
            else if (result == 1) { this.allstats.winx++; }
            else if (result == 2) { this.allstats.losex++; }
        } else {
            if (result == 0) { this.allstats.drawo++; }
            else if (result == 1) { this.allstats.loseo++; }
            else if (result == 2) { this.allstats.wino++; }
        }
        this.update();
        console.log(this.allstats);
    },
    
    getStats: function() {
    
    }


};
