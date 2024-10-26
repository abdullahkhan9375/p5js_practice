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