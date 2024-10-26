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
};

class Car {
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

    // Task 5: implement move function...
    // move(fuel) {
    // if fuel object has fuel the car can move.
        // this.x += speed
    // use rate of consumption to see how far you can go given the volume in litres...
    // what happens if fuel is no more?
    // }
    
    // Task 6: i need to know how much distance the car travelled...
}

// Task 3: create the fuel class.

// once created, the car class will accept a fuel class parameter. This fuel object will be used to determine
// if the car can move or not and how far it can go.
// just implement the Fuel class first.

class Fuel {
    // type: Diesel, CNG, Petrol
    // rateOfConsumption: 5, 10, 15 l / km
    // km = x coordinate. 1 km => 1 x-pixel
    // rateOfConsumption => litres / km
   
    // methods:
    // constructor(type, litres)
    // getRateOfConsumption() => int
    // getFuel() => int 
    // setFuel(litres)

}


const sketch = (p5) =>
{
    p5.windowResized = () => {
        p5.resizeCanvas(window.innerWidth, window.innerHeight);
    };
    
    let car;
    p5.setup = () => {
        p5.createCanvas(window.innerWidth, window.innerHeight);
        car = new Car(p5, 50, p5.height * 2/3); 
        p5.frameRate(60);
    };

    p5.draw = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        p5.background(135, 206, 235);
       
        // the sun class
        new Sun(p5).draw()

        // Task 1: reem create a class for the ground. Follow example from the sun class.
        // ground
        p5.fill(34, 139, 10); 
        p5.noStroke();
        p5.rect(0, height * 2 / 3, width, height / 3);

        // Task 2: create a new file for the car class and import car.
        car.draw();
        
        // look at Task 3. Scroll up...
        // Task 4:
        // create a fuel object here.
        // const fuel = new Fuel("petrol", 50)
        // and then .move(fuel)
        // .move should a
        car.move(0);
    };
};

new p5(sketch);