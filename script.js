const cat = document.getElementById('catContainer');
let catPosition = 0;
let direction = 1;

function moveCat() {
    const maxPosition = document.body.clientWidth - cat.offsetWidth;
    if (catPosition >= maxPosition || catPosition <= 0) {
        direction *= -1; // Change direction
    }
    catPosition += 5 * direction; // Move cat
    cat.style.left = `${catPosition}px`; // Update position

    requestAnimationFrame(moveCat); // Continue the animation
}

requestAnimationFrame(moveCat); // Start the animation
