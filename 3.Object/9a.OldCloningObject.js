const circle = {
    radius: 1,
    draw: function(){
        console.log('draw');
    }
};

const anotherCircle = {};

for (let key in circle){
    anotherCircle[key] = circle[key];
}

console.log(anotherCircle);
