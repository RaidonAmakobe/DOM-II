let thisKeydown = document.querySelector('input.youbwoi')
thisKeydown.addEventListener('keydown', function(event) {console.log('keydown:', event.key)});
thisKeydown.addEventListener('mouseover', function(event) {event.target.style.backgroundcolor = "#FFEBCD";});
thisKeydown.addEventListener('mouseout', function(event) {event.target.style.backgroundcolor = "#FFEBCD";});
thisKeydown.addEventListener('keyup', function(event) {console.log('keydown:', event.key)});

let navbar = document.querySelector('.nav')
navbar.addEventListener('mouseover', (event) => {event.target.style.color = "#FFEBCD";});

let navbarleave = document.querySelector('.nav')
navbarleave.addEventListener('mouseout', (event) => {event.target.style.color = "black";});
