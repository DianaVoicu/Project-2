let myDate = document.getElementById('date');
let today = (new Date()).toLocaleDateString('en-GB');
myDate.innerHTML = today;