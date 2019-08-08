class Token {
    constructor(texturePath) {
        this.texture = loadImage(texturePath);
        this.x = 20;
        this.y = 20;
        this.width = 30;
        this.height = 30;
    }

    update() {
        this.x = mouseX;
        this.y = mouseY;
    }

    render() {
        image(this.texture, this.x, this.y, this.width, this.height);
    }
}