class Token {
    constructor(texturePath) {
        this.texture = loadImage(texturePath);
        this.x = 20;
        this.y = 20;
        this.radius = 15;
        this.selected = false;
        this.selectionPadding = 2;
        this.mouseManager = new MouseManager();
    }

    update() {
        if (this.mouseManager.getMouseDownStarted()) {
            if (this.mouseIsHovering()) {
                this.select();
            } else {
                this.deselect();
            }
        }
        
        if (this.mouseManager.getMouseStillDown() && this.selected) {
            this.x += this.mouseManager.getMouseXOffset();
            this.y += this.mouseManager.getMouseYOffset();
        }
    }

    select() {
        this.selected = true;
        console.log('selected');
    }
  
    deselect() {
        this.selected = false;
    }

    mouseIsHovering() {
        return (dist(mouseX, mouseY, this.x, this.y) < this.radius);
    }

    render() {
        image(this.texture, 
              this.x, 
              this.y, 
              2*this.radius, 
              2*this.radius
             );

        if (this.selected) {
            noFill()
            rect(this.x,
                 this.y, 
                 2*this.radius + this.selectionPadding, 
                 2*this.radius + this.selectionPadding
                );
        }
    }
}