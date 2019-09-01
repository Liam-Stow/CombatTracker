class MouseManager {
    constructor() {
        if (!MouseManager.instance) {

            // First time creating, set up vars
            this.prevMouseIsPressed = false;

            MouseManager.instance = this;
        }

        // Not first time creating, give existing stuff
        return MouseManager.instance;
    }

    beginUpdate() {

    }

    getMouseDown() {
        return mouseIsPressed;
    }

    getMouseDownStarted() {
        return !this.prevMouseIsPressed && mouseIsPressed;
    }

    getMouseReleased() {
        return this.prevMouseIsPressed && !mouseIsPressed;
    }

    getMouseStillDown() {
        return this.prevMouseIsPressed && mouseIsPressed;
    }

    getMouseXOffset() {
        return mouseX - pmouseX;
    }

    getMouseYOffset() {
        return mouseY - pmouseY;
    }

    endUpdate() {
        this.prevMouseIsPressed = mouseIsPressed;
    }
}
