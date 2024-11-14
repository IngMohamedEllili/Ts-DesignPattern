/* // Shapes
// Area, Perimeter
// Simple - single Function calculateTotalAre

// Interaface a Shape
interface Shape {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape {
  constructor(private readonly radius: number) {}
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(
    private readonly height: number,
    private readonly width: number,
  ) {}
  area(): number {
    return this.height * this.width;
  }
  perimeter(): number {
    return 2 * (this.height + this.width);
  }
}

function calculateTotalArea(shape: Shape): number {
  return shape.area();
}

let circle: Circle = new Circle(5);
let rectangle: Rectangle = new Rectangle(6, 4);
console.log("this is area of the circle", calculateTotalArea(circle));
console.log("this is area of the rectangle", calculateTotalArea(rectangle));
 */

const now = new Date();
const currentYear = now.getFullYear();
console.log("👊 ~ file: index.ts:46 ~ currentYear:", currentYear);
const currentMonth = now.getMonth() + 1;
console.log("👊 ~ file: index.ts:48 ~ currentMonth:", currentMonth);
const currentDate = now.getDate();
console.log("👊 ~ file: index.ts:50 ~ currentDate:", currentDate);
