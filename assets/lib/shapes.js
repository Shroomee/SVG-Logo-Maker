//class for circle
var svg = ''
class Circle {
    constructor(text, textColor, shapeColor) {
        var svg = 
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${shapeColor}" />
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`
    }
}
//class for square
class Square {
    constructor(text, textColor, shapeColor) {
        var svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" height="200" width="200" fill="${shapeColor}" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`
    }
}
//class for triangle
class Triangle {
    constructor(text, textColor, shapeColor) {
        var svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,0 275,200 25,200" fill="${shapeColor}" />
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`
    }
}
//export objects
module.exports = 
module.exports = {Circle, Square, Triangle, svg}