
class Sun {
    constructor(P5) {
        this.p5 = P5;
        this.red = 255;
        this.green = 204;
        this.blue = 0;
    }
    draw() {
        this.p5.fill(this.red, this.green, this.blue);
        this.p5.noStroke();
        this.p5.ellipse(100, 100, 80, 80);
    }
}

//task-1: create a class for ground from the sun class
//Ground class
class Ground {
    constructor(P5) {
        this.p5= this.p5;
        this.color = [0, 128, 0]; //green ground ew 
    }
    draw() {
        this.p5.fill(...this.color);
        this.p5.noStroke();
        this.p5.rect(0, 150, this.p5.width, this.p5.height - 150); // this is for the ground area 
    }
}

class Fuel {
        // type: Diesel, CNG, Petrol
        constructor(type, volume)  
        {
            this.type = type; 
            this.volume = volume;
        }
        consume(amount) {
            this.volume = this.volume - amount; 
        }
        hasFuel() {
            return this.volume > 0; 
        }
        }
        class Car {
            constructor(P5, x, y) {
                this.p5 = P5;
                this.x = x;
                this.y = y;
                this.speed = 5;
                this.bodyColor = [255, 0, 0]; // Red car body
                this.wheelColor =(50, 0, 0);       // Dark gray wheels
                this.distanceTravelled = 0;
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
        move(fuel)
        {
            if (fuel.hasFuel()) {
                const moveDistance = this.speed;
                this.x= this.x + moveDistance;
                fuel.consume(1);
                this.distanceTravelled = this.distanceTravelled + moveDistance;
            }
            else {
                console.log("No more fuel car cannot move");
            }

        }
        distanceTravelled()
        {
            return this.distanceTravelled;
        }
    
//using classes
let p5;
let car;
let fuel;
let ground;
function setup()
{
    createCanvas(400,400);
    car = new Car(p5, 50,100);
    fuel = new Fuel("Petrol", 50);
    ground= new Ground(p5);
}
function draw() {
    background(200); 
    ground.draw();
    car.draw();
    car.move(Fuel);
console.log(car.distanceTravelled());
}
    

