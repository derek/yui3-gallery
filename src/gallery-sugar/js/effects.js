
    /*
        Effects sugar
    */

    // Display effects
    Y.Node.prototype.toggle = function(){
        if (this.getStyle("display") == "none"){
            this.show();
        }
        else {
            this.hide();
        }
    }

    // Sliding effects
    Y.Node.prototype.slideUp = function(){
        var anim = new Y.Anim({
            node: this,
            to: { height:this.origHeight },
            easing: 'easeOut'
        }).run();
    }

    Y.Node.prototype.slideDown = function(){
        var anim = new Y.Anim({
            node: this,
            to: { height: 0, display: "none" },
            easing: 'easeOut'
        }).run();
    }

    Y.Node.prototype.slideToggle = function(){
        if (this.getStyle("height") === "0px"){
            this.slideUp();
        }
        else {
            this.origHeight = this.get('scrollHeight'); //This sucks, fix
            this.slideDown();
        }
    }

    // Fade effects
    Y.Node.prototype.fadeIn = function(){
        this.show(true);
    }

    Y.Node.prototype.fadeOut = function(){
        this.hide(true);
    }

    Y.Node.prototype.fadeToggle = function(){
        if (this.getStyle("display") == "none"){
            this.fadeIn();
        }
        else {
            this.fadeOut();
        }
    }
    