
let firstname = document.querySelector('.bar[data-tab="0"]');
firstname.addEventListener('keydown', function(event) {console.log('keydown:', event.key)});
firstname.addEventListener('mouseover', function(event) {event.target.style.color = "blue";});
firstname.addEventListener('mouseout', function(event) {event.target.style.color = "black";});
firstname.addEventListener('keyup', function(event) {console.log('keydown:', event.key)});

let lastname = document.querySelector('.bar[data-tab="1"]');
lastname.addEventListener('keydown', function(event) {console.log('keydown:', event.key)});
lastname.addEventListener('mouseover', function(event) {event.target.style.color = "blue";});
lastname.addEventListener('mouseout', function(event) {event.target.style.color = "black";});
lastname.addEventListener('keyup', function(event) {console.log('keydown:', event.key)});

let email = document.querySelector('.bar[data-tab="2"]');
email.addEventListener('keydown', function(event) {console.log('keydown:', event.key)});
email.addEventListener('mouseover', function(event) {event.target.style.color = "blue";});
email.addEventListener('mouseout', function(event) {event.target.style.color = "black";});
email.addEventListener('keyup', function(event) {console.log('keydown:', event.key)});

let phone = document.querySelector('.bar[data-tab="3"]');
phone.addEventListener('keydown', function(event) {console.log('keydown:', event.key)});
phone.addEventListener('mouseover', function(event) {event.target.style.color = "blue";});
phone.addEventListener('mouseout', function(event) {event.target.style.color = "black";});
phone.addEventListener('keyup', function(event) {console.log('keydown:', event.key)});

let address = document.querySelector('.bar[data-tab="4"]');
address.addEventListener('keydown', function(event) {console.log('keydown:', event.key)});
address.addEventListener('mouseover', function(event) {event.target.style.color = "blue";});
address.addEventListener('mouseout', function(event) {event.target.style.color = "black";});
address.addEventListener('keyup', function(event) {console.log('keydown:', event.key)});

let gender = document.querySelector('.bar[data-tab="5"]');
gender.addEventListener('keydown', function(event) {console.log('keydown:', event.key)});
gender.addEventListener('mouseover', function(event) {event.target.style.color = "blue";});
gender.addEventListener('mouseout', function(event) {event.target.style.color = "black";});
gender.addEventListener('keyup', function(event) {console.log('keydown:', event.key)});

let navbar = document.querySelector('.nav')
navbar.addEventListener('mouseover', (event) => {event.target.style.color = "#FFEBCD";});

let navbarleave = document.querySelector('.nav')
navbarleave.addEventListener('mouseout', (event) => {event.target.style.color = "black";});
