// Object oriented programming

const circle = {
    radius: 1,
    location:{
        x:1,
        y:1
    },
    isVisible: true,
    draw: function(){
        console.log('draw');
    }
};

circle.draw(); // considered as method as it's declared within an object.


