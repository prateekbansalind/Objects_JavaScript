const website = 'https://rahulshettyacademy.com/maps/api/place/get/json?key=qaclick123&place_id=386b0058172d836f2b8c0bcee28045d6';

const websiteArray = website.split('?');
console.log(websiteArray);

const paramArray = websiteArray[1].split('&');
console.log(paramArray);
console.log(paramArray[0]);
console.log(paramArray[1]);

