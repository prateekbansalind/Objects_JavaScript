// address object 

// street
// city
// zipCode
// showAddress(address)

const address = {
    street : 'Brougham Street',
    zipCode : 8056,
    city : 'Warren'
}

function showAddress(address){
  for (let key in address)
  console.log(key, address[key]);
}

showAddress(address);