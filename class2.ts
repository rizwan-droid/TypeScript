/*
 Public - available -  in own class -  in child class - outside class
 private- available - in own class only
 protectedd - available - in own class - in child class
 */

class Shape {
  //   private color: string = "red";
  protected color: string = "red";
  constructor(c: string) {
    this.color = c;
  }
}

class Square extends Shape {
  constructor(myColor: string) {
    super(myColor);
  }
  getValue() {
    console.log(this.color, "color");
  }
}

const obj = new Square("black");
// obj.getValue();

//outside the class accessible by default public hota hai
// console.log(obj.color);
