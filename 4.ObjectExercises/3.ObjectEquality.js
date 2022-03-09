

// constructor function 
function Address(street, zipCode, city){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;   
}

// areSame  - checks the value
function areSame(address1, address2){
  return address1 === address2;
}

// are Equal - checks property
function areEqual(address1, address2){
    return address1.street === address2.street 
        && address1.zipCode === address2.zipCode
        && address1.city === address2.city
}


let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;
console.log(areSame(address1, address2));  // returns false as they refer to different address in memory
console.log(areEqual(address1, address2));// returns true as the properties are same.

