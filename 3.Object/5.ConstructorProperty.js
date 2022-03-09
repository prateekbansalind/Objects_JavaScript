// Factory Setting

function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('draw');
        }
    };
}

const cirle1 = createCircle(1);
console.log(cirle1);
// circle1.constructor         // run this command on console to see how constructor property works

// Constructor Setting 

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle2 = new Circle(1);

// circle2.constructor         // run this command on console to see how constructor property works