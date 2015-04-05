var xhr = new XMLHttpRequest();
xhr.open("GET", "www.stereomood.com", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);