// Mauvaise pratique : modification du code pour chaque nouveau type de forme
class AreaCalculator {
  calculate(shape: any): number {
    if (shape.type === "rectangle") {
      return shape.width * shape.height;
    } else if (shape.type === "circle") {
      return Math.PI * shape.radius * shape.radius;
    } else return 0;
  }
}

// Bonne pratique : extension sans modification
interface ShapeOCP {
  areaOCP(): number;
}

class RectangleOCP implements ShapeOCP {
  constructor(
    public width: number,
    public height: number,
  ) {}
  areaOCP(): number {
    return this.width * this.height;
  }
}

class CircleOCP implements ShapeOCP {
  constructor(public radius: number) {}
  areaOCP(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class AreaCalculatorOCP {
  calculate(shapes: ShapeOCP[]): number {
    let area = 0;
    for (const shape of shapes) {
      area += shape.areaOCP();
    }
    return area;
  }
}
