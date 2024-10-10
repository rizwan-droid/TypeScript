class Car {
  //property
  color: string = "";
  price: number = 0;

  //constructor
  constructor(c: string, p: number) {
    console.log("constructir called");
    this.color = c;
    this.price = p;
  }
  // function if needed
  getValue() {
    console.log("color", this.color);
  }
}

const car1 = new Car("red", 100);
const car2 = new Car("blue", 200);
console.log(car1);
console.log(car2);

car1.getValue();

// const car1 = new Car();
// car1.color = "red";
// car1.price = 100;

// console.log(car1);
