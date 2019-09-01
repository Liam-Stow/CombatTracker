class Token {
    constructor(texturePath) {
        this.texture = loadImage(texturePath);
        this.x = 20;
        this.y = 20;
        this.width = 30;
        this.height = 30;
        this.selected = false;
        this.selectionPadding = 2;
    }

    update() {
        if (this.selected) {
            this.x = mouseX;
            this.y = mouseY;    
        }
    }

    select() {
        this.selected = true;
    }

    deselect() {
        this.selected = false;
    }

    mouseIsHovering(mouseX, mouseY) {
        let xMax = this.x + this.width;
        let yMax = this.y + this.height;
        return (mouseX > this.x && mouseX < xMax && mouseY > this.y && mouseY < yMax);
    }

    render() {
        image(this.texture, this.x, this.y, this.width, this.height);
        if (this.selected) {
            rect(this.x, this.y, this.width + this.selectionPadding, this.height + this.selectionPadding);
        }
    }
}