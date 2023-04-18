
// Get the canvas element and its 2D context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


// Define an array to hold the asteroids
const asteroids = [];

// Define a function to generate a random number within a specified range
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Define a function to create a new asteroid object
function createAsteroid() {
    const asteroid = {
        x: getRandomNumber(0, canvas.width), // Random x position within the canvas width
        y: -50, // Start the asteroid above the canvas
        size: getRandomNumber(20, 50), // Random size of the asteroid
        speed: getRandomNumber(1, 5), // Random speed of the asteroid
    };
    asteroids.push(asteroid); // Add the asteroid to the array
}

// Define a function to update the asteroids' positions
function updateAsteroids() {
    for (let i = 0; i < asteroids.length; i++) {
        const asteroid = asteroids[i];
        asteroid.y += asteroid.speed; // Update the y position based on the speed

        // If the asteroid goes below the canvas, remove it from the array
        if (asteroid.y > canvas.height) {
            asteroids.splice(i, 1);
            i--; // Decrement the index to account for the removed asteroid
        }
    }
}

// Define a function to render the asteroids on the canvas
function renderAsteroids() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    for (let i = 0; i < asteroids.length; i++) {
        const asteroid = asteroids[i];
        ctx.fillStyle = 'gray'; // Set the fill color for the asteroid
        ctx.beginPath();
        ctx.arc(asteroid.x, asteroid.y, asteroid.size / 2, 0, Math.PI * 2); // Draw a circular shape for the asteroid
        ctx.closePath();
        ctx.fill(); // Fill the shape
    }
}

// Create an image object for the spaceship sprite
const spaceshipImg = new Image();
spaceshipImg.src = 'spaceship.png';

// Define the spaceship object with its initial position and size
const spaceship = {
    x: canvas.width / 2 - 25, // Initial x position
    y: canvas.height - 75, // Initial y position
    width: 50, // Width of the spaceship sprite
    height: 50, // Height of the spaceship sprite
};

function gameLoop() {
    renderGraphics()
    requestAnimationFrame(gameLoop);
}

function updateGameState() {
    // Update game state logic here
}

function renderGraphics() {
    // Render graphics logic here
    createAsteroid(); // Create a new asteroid in each frame
    updateAsteroids(); // Update the asteroids' positions
    renderAsteroids(); // Render the asteroids on the canvas
    // Load the spaceship image and draw it on the canvas
    ctx.drawImage(spaceshipImg, spaceship.x, spaceship.y, spaceship.width, spaceship.height);
}

// Start the game loop
gameLoop();

