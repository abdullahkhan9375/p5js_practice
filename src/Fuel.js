export default class Fuel {
    constructor(type, volume)  
    {
        this.type = type; 
        this.volume = volume;
        this.inefficiency = this.setRateOfConsumption();
    }

    consume() {
        this.volume = this.volume - this.inefficiency; 
    }

    hasFuel() {
        return this.volume > 0; 
    }

    setRateOfConsumption() {
        let i;
        if (this.type == "Petrol") {
            i = 15;
        } else if (this.type == "CNG") {
            i = 10;
        } else if (this.type == "Diesel") {
            i = 5;
        } else {
            throw Error("fuel not defined");
        }
        return i;
    }
}