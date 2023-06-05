//class for shapes
class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    
}

//class for circle
class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
}
//class for square
class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
}
//class for triangle
class Triangle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
}
//export objects

module.exports = {Shapes, Circle, Square, Triangle}