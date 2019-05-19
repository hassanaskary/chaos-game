class sierpinskiTriangle {
    constructor() {
        this.currentPoint = createVector(0, 0);
        this.vertices = [];
        for (let i = 0; i < 3; i++) {
            let angle = i * TWO_PI / 3;
            let v = p5.Vector.fromAngle(angle);
            v.mult(width / 2.5);
            v.add(width / 2.3, height / 2);
            this.vertices.push(v);
        }
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
        let percent = 0.5;
        this.currentPoint.x = lerp(this.currentPoint.x, choice.x, percent);
        this.currentPoint.y = lerp(this.currentPoint.y, choice.y, percent);
        point(this.currentPoint.x, this.currentPoint.y);
    }
}

class sierpinskiHexagon {
    constructor() {
        this.currentPoint = createVector(0, 0);
        this.vertices = [];
        for (let i = 0; i < 6; i++) {
            let angle = i * TWO_PI / 6;
            let v = p5.Vector.fromAngle(angle);
            v.mult(width / 2.5);
            v.add(width / 2, height / 2);
            this.vertices.push(v);
        }
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
        let percent = 0.65;
        this.currentPoint.x = lerp(this.currentPoint.x, choice.x, percent);
        this.currentPoint.y = lerp(this.currentPoint.y, choice.y, percent);
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
    if(windowWidth > windowHeight) {
        createCanvas(windowHeight, windowHeight);
    } else {
        createCanvas(windowWidth, windowWidth);
    }
    background(0);
    const infoDiv = createDiv();
    const p = createP("Select a fractal to generate:");
    p.style("margin", "10px 10px 0px 10px");
    selectElement = createSelect();
    selectElement.style("margin", "10px");
    selectElement.option("None");
    selectElement.option("Sierpinski Triangle");
    selectElement.option("Sierpinski Hexagon");
    selectElement.option("Sierpinski Carpet");
    selectElement.changed(changeSelection);
    p.parent(infoDiv);
    selectElement.parent(infoDiv);
    triangle = new sierpinskiTriangle();
    hexagon = new sierpinskiHexagon();
}

function draw() {
    strokeWeight(1);
    stroke(255, 255, 255, 150);
    for(let i = 0; i < 50; i++) {
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
}

function changeSelection() {
    selection = selectElement.value();
    token = 1;
    reset();
}

function reset() {
    background(0);
}
