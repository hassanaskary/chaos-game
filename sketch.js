class sierpinskiTriangle {
    constructor() {
        this.currentPoint = {
            x: 0,
            y: 0
        };
        this.vertices = [
            {
                x: 50/100 * width,
                y: 25/100 * height
            },
            {
                x: 25/100 * width, 
                y: 75/100 * height
            },
            {
                x: 75/100 * width,
                y: 75/100 * height
            }
        ];
    }

    setup() {
        for(const p of this.vertices) {
            point(p.x, p.y);
        }
        this.currentPoint.x = random(width);
        this.currentPoint.y = random(height);
        point(this.currentPoint.x, this.currentPoint.y);
    }

    draw() {
        const choice = random(this.vertices);
        this.currentPoint.x = (this.currentPoint.x + choice.x) / 2;
        this.currentPoint.y = (this.currentPoint.y + choice.y) / 2;
        point(this.currentPoint.x, this.currentPoint.y);
    }
}

class sierpinskiHexagon {
    constructor() {
        this.currentPoint = {
            x: 0,
            y: 0
        };
        this.vertices = [
            {
                x: 25/100 * width,
                y: 30/100 * height 
            },
            {
                x: 50/100 * width ,
                y: 15/100 * height
            },
            {
                x: 75/100 * width,
                y: 30/100 * height
            },
            {
                x: 25/100 * width,
                y: 70/100 * height
            },
            {
                x: 50/100 * width,
                y: 85/100 * height
            },
            {
                x: 75/100 * width,
                y: 70/100 * height
            }
        ];
    }

    setup() {
        for(const p of this.vertices) {
            point(p.x, p.y);
        }
        this.currentPoint.x = random(width);
        this.currentPoint.y = random(height);
        point(this.currentPoint.x, this.currentPoint.y);
    }

    draw() {
        const choice = random(this.vertices);
        this.currentPoint.x = (max(this.currentPoint.x, choice.x) -
        min(this.currentPoint.x, choice.x)) / 4;
        this.currentPoint.y = (max(this.currentPoint.y, choice.y) -
        min(this.currentPoint.y, choice.y)) / 4;
        console.log(this.currentPoint.x);
        point(this.currentPoint.x, this.currentPoint.y);
    }
}

let selectElement;
let selection;
let token;
let triangle;
let hexagon;
let carpet;

function setup() {
    createCanvas(400, 400);
    background(220);
    const p = createP("Select a fractal to generate:");
    p.style("margin", "10px 10px 0px 10px");
    selectElement = createSelect();
    selectElement.style("margin", "10px");
    selectElement.option("None");
    selectElement.option("Sierpinski Triangle");
    selectElement.option("Sierpinski Hexagon");
    selectElement.option("Sierpinski Carpet");
    selectElement.changed(changeSelection);
    triangle = new sierpinskiTriangle();
    hexagon = new sierpinskiHexagon();
}

function draw() {
    strokeWeight(3);
    switch(selection) {
        case "Sierpinski Triangle":
            if(token == 1) {
                triangle.setup();
                token = 0;
            }
            triangle.draw();
            break;
        case "Sierpinski Hexagon":
            if(token == 1) {
                hexagon.setup();
                token = 0;
            }
            hexagon.draw();
            break;
    }
}

function changeSelection() {
    selection = selectElement.value();
    token = 1;
    reset();
}

function reset() {
    background(220);
}
