//class for circle
class Circle {
    color;
    constructor(color) {
        this.color = color;     
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<circle cx="150" cy="100" r="75" fill="${this.color}" />`;
    }
    }

//class for square
class Square {
    color;
    constructor(color) {
        this.color = color;     
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<polygon points="50,50 250,50 250,150 50,150" fill="${this.color}" />`;
    }
}
//class for triangle
class Triangle {
    color;
    constructor(color) {
        this.color = color;     
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}
//export objects
module.exports = {Circle, Square, Triangle}