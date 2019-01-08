class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    sayHello() {
        console.log(`Hey! My name is ${this.name}, I am ${this.age} years old and live in ${this.city}.`);
    }
}

let person1 = new Person('James', 'Miami', '30');
let person2 = new Person('Madie', 'Boston', '28');
let person3 = new Person('Lizzy', 'Boston', '30');
let person4 = new Person('Nadia', 'Somerville', '30');
let person5 = new Person('Lisa', 'Boston', '29');

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

class Vehicle {
    constructor(manufacturer, wheels) {
        this.manufacturer = manufacturer;
        this.wheels = wheels;
        this.doors = '4';
    }
}

class Truck extends Vehicle {
    constructor(manufacturer, wheels, doors) {
        super(manufacturer, wheels)
        this.doors = doors;
        this.type = 'truck';
    }

    aboutVehicle() {
        console.log(`This is a ${this.wheels} wheel ${this.manufacturer} ${this.type} with ${this.doors} doors.`);
    }
}

class Sedan extends Vehicle {
    constructor(manufacturer, wheels, size, mpg) {
        super(manufacturer, wheels)
        this.type = 'sedan';
        this.size = size;
        this.mpg = mpg;
    }

    aboutVehicle() {
        console.log(`This is a ${this.wheels} wheel ${this.manufacturer} ${this.type}. The size is ${this.size} and it gets ${this.mpg}mpg.`);
    }
}

class Motorcycle extends Vehicle {
    constructor(manufacturer, wheels, doors, steering) {
        super(manufacturer, wheels)
        this.type = 'motorcycle';
        this.doors = doors;
        this.steering = steering;
    }

    aboutVehicle() {
        console.log(`This is a ${this.wheels} wheel ${this.manufacturer} ${this.type}. It has ${this.doors} doors and its method of steering is ${this.steering}.`);
    }
}

let truck = new Truck('Ford','4','2');
let sedan = new Sedan('Honda','4','small','40');
let motorcycle = new Motorcycle('Suzuki','2','0','handlebars');

truck.aboutVehicle();
sedan.aboutVehicle();
motorcycle.aboutVehicle();
