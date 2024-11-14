// Define a base class 'Shape' with a common method 'area'
abstract class Shape {
  abstract area(): number;
}

// Define a 'Rectangle' class that extends the base class 'Shape'
class Rectangle extends Shape {
  constructor(
    private width: number,
    private height: number,
  ) {
    super();
  }

  // Override the 'area' method for 'Rectangle'
  area(): number {
    return this.width * this.height;
  }
}

// Define a 'Circle' class that extends the base class 'Shape'
class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  // Override the 'area' method for 'Circle'
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Create instances of 'Rectangle' and 'Circle'
const rect: Shape = new Rectangle(5, 4);
const circle: Shape = new Circle(3);

// Define a function to use the common interface for calculating the total area of an array of shapes
function getTotalArea(shapes: Shape[]): number {
  return shapes.reduce((totalArea, shape) => totalArea + shape.area(), 0);
}

// Use the getTotalArea function with an array of different shape objects
const totalArea = getTotalArea([rect, circle]);
console.log(`Total area of shapes: ${totalArea}`);
