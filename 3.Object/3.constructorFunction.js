// Constructor Function 
// Naming Convention to declare constructor function is Pascal case.

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(10);
circle.draw();
console.log(circle.radius);