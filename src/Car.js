export class Car {
    constructor(P5, x, y) {
        this.p5 = P5;
        this.x = x;
        this.y = y;
        this.speed = 5;
        this.bodyColor = [255, 0, 0]; // Red car body
        this.wheelColor =(50, 0, 0);       // Dark gray wheels
        // some hints for the fuel object.
        // this.fuel = undefined.
    }
    draw() {
        // Draw car body
        this.p5.fill(...this.bodyColor);
        this.p5.noStroke();
        this.p5.rect(this.x, this.y, 100, 30);        // Main body
        this.p5.rect(this.x + 15, this.y - 20, 70, 20); // Top part of the car

        // Draw wheels
        this.p5.fill(this.wheelColor);
        this.p5.ellipse(this.x + 20, this.y + 30, 20, 20); // Left wheel
        this.p5.ellipse(this.x + 80, this.y + 30, 20, 20); // Right wheel
    }
}