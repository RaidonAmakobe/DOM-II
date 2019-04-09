// Your code goes here
//mouseover

let navbar = document.querySelector('.nav')
navbar.addEventListener('mouseover', (event) => {event.target.style.color = "blue";});

let navbarleave = document.querySelector('.nav')
navbarleave.addEventListener('mouseout', (event) => {event.target.style.color = "black";});
//keydown

let emailButton = document.querySelector('.btn')
emailButton.addEventListener('click', (event) => {prompt('Please input your email adress');});

let keydown = document.querySelector('.btn')
keydown.addEventListener('keydown', (event) => {console.log('keydown:', event.target.value);});

//wheel

//let wheel = document.querySelector('.nav');
//wheel.addEventListener('wheel', (event) => {event.target.})
//drag / drop

// load

//focus

//resize

//scroll

//select

//dblclick

