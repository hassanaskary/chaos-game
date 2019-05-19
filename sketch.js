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

let selectElement;
let selection;
let token;
let triangle;
let hexagon;
let carpet;

function setup() {
    createCanvas(windowWidth, windowHeight - 50);
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
