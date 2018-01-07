
function setup() {
    createCanvas(screen.width, screen.height);
}

function draw() {
    background(255, 255, 204);

    //This is used for creating the back panels behind the controls
    stroke(179, 255, 255);
    fill(179, 255, 255);
    rect(10, 448, 200, 150, 20);
    rect(230, 448, 395, 150, 20);
    rect(710, 448, 100, 100, 20);
}