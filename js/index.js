// Your code goes here
let navbar = document.querySelector('.nav')
navbar.addEventListener('mouseover', (event) => {event.target.style.color = "#FFEBCD";});

let navbarleave = document.querySelector('.nav')
navbarleave.addEventListener('mouseout', (event) => {event.target.style.color = "black";});

let emailButton = document.querySelector('.content-pick')
emailButton.addEventListener('click', (event) => {prompt('Please input your email adress');});


