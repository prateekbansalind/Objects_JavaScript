function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(1);

// for in loop 
for (let key in circle) {
    console.log(key);
}

for (let key in circle) {
    console.log(key, circle[key]);
}

// for of loop 
// for (let key of circle){
//     console.log(key);
// } // ouptut will create an error.

// for of loop doesn't directly work on the object
// we need to use this below way of iterating object wit the for of loop

// for of object.keys
for (let key of Object.keys(circle)) {
    console.log(key, circle[key]);
}

for (let entry of Object.entries(circle)) {
    console.log(entry);
}

