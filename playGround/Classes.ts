class Point {
    // x: number;
    // y: number;

    // constructor(x: number, y: number) {
    //     this.x = x;
    //     this.y = y;
    // }

    private color: string;
    //mira un constructor con azucar
    constructor(public x: number = 0, public y: number = 0) {
        this.color = "red";
    }

    //methods
    dist() { return Math.sqrt(this.x * this.x + this.y * this.y);}

    static origin = new Point(0, 0);
}

class Point3D extends Point{
    constructor(x: number, y: number, public z: number) {
        super(x, y);
    }
    dist() {
        var d = super.dist();
        return Math.sqrt(d * d + this.z * this.z);
    }
}

var p = new Point(10, 20);
console.log("ss9");
// let label = document.createElement('label');

// label.textContent = "x:"+ String(p.x) + ", y:"+ String(p.y);
String(p.x);
 
// document.body.appendChild(label);
 