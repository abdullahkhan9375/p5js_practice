import Car from "./Car.js";
import Fuel from "./Fuel.js";

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
        this.p5 = P5;
        this.color = [0, 128, 0]; //green ground ew 
    }

    draw() {
        this.p5.fill(...this.color);
        this.p5.noStroke();
        this.p5.rect(0, 150, this.p5.width, this.p5.height - 150); // this is for the ground area 
    }
}

//using classes
let car;
let fuel;
let ground;

function setup(p5)
{
    p5.createCanvas(400,400);
    car = new Car(p5, 50,100);
    fuel = new Fuel("CNG", 100);
    ground= new Ground(p5);
    p5.setFrameRate(10);
}

function draw(p5) {
    p5.background(200); 
    ground.draw();
    car.draw();
    car.move(fuel);
    console.log(car.getDistanceTravelled());
}

const sketch = (p5) =>
{
    p5.windowResized = () => {
        p5.resizeCanvas(window.innerWidth, window.innerHeight);
    };

    p5.setup = () => { setup(p5); };

    p5.draw = () => { draw(p5); };
};

new p5(sketch);