// street
// city
// zipCode
// showAddress(address)

// const address = {
//     street : 'Brougham Street',
//     zipCode : 8056,
//     city : 'Warren'
// }


let address = createAddress('a', 'b', 'c')
console.log(address);

// factory Settings
function createAddress(street, zipCode, city){
    return {
        street,
        zipCode,
        city
    }
}

// constructor function 
function CreateAddress(street, zipCode, city){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
    this.address = {street, city, zipCode}
    this.showAddress = function(){
        for (let key in this.address){
            console.log(key, this.address[key]);
        }
    }
}

let newAddress = new CreateAddress('a', 'b', 'c');
newAddress.showAddress();
