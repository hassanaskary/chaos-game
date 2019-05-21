class sierpinskiTriangle {
    constructor() {
        this.currentPoint = createVector(0, 0);
        this.vertices = [];
        this.n = 3;
        for (let i = 0; i < this.n; i++) {
            let angle = i * TWO_PI / this.n;
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
        if(isColorful) {
            stroke(50 * this.vertices.indexOf(choice), 100, 100, 0.5);
        }
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
        this.n = 6;
        for (let i = 0; i < this.n; i++) {
            let angle = i * TWO_PI / this.n;
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
        if(isColorful) {
            stroke(50 * this.vertices.indexOf(choice), 100, 100, 0.5);
        }
        let percent = 0.65;
        this.currentPoint.x = lerp(this.currentPoint.x, choice.x, percent);
        this.currentPoint.y = lerp(this.currentPoint.y, choice.y, percent);
        point(this.currentPoint.x, this.currentPoint.y);
    }
}

class sierpinskiCarpet {
    constructor() {
        this.currentPoint = createVector(0, 0);
        this.vertices = [];

        this.vertices.push(createVector(15/100 * width, 15/100 * height));
        this.vertices.push(createVector(15/100 * width, 50/100 * height));
        this.vertices.push(createVector(15/100 * width, 85/100 * height));

        this.vertices.push(createVector(50/100 * width, 15/100 * height));
        this.vertices.push(createVector(50/100 * width, 85/100 * height));

        this.vertices.push(createVector(85/100 * width, 15/100 * height));
        this.vertices.push(createVector(85/100 * width, 50/100 * height));
        this.vertices.push(createVector(85/100 * width, 85/100 * height));
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
        if(isColorful) {
            stroke(50 * this.vertices.indexOf(choice), 100, 100, 0.5);
        }
        let percent = 0.65;
        this.currentPoint.x = lerp(this.currentPoint.x, choice.x, percent);
        this.currentPoint.y = lerp(this.currentPoint.y, choice.y, percent);
        point(this.currentPoint.x, this.currentPoint.y);
    }
}

class pentagonEH1 {
    constructor() {
        this.currentPoint = createVector(0, 0);
        this.vertices = [];
        this.n = 5;
        this.previouslyChosen = createVector(0, 0);
        for (let i = 0; i < this.n; i++) {
            let angle = i * TWO_PI / this.n;
            let v = p5.Vector.fromAngle(angle);
            v.mult(width / 2);
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
        if(choice != this.previouslyChosen) {
            if(isColorful) {
                stroke(50 * this.vertices.indexOf(choice), 100, 100, 0.5);
            }
            let percent = 0.5;
            this.currentPoint.x = lerp(this.currentPoint.x, choice.x, percent);
            this.currentPoint.y = lerp(this.currentPoint.y, choice.y, percent);
            if(this.previouslyChosen.x != this.currentPoint.x && this.previouslyChosen.y != this.currentPoint.y) {
                point(this.currentPoint.x, this.currentPoint.y);
                this.previouslyChosen = this.currentPoint;
            }
            this.previouslyChosen = choice;
        }
    }
}

class barnsleyFern {
    constructor() {
        this.currentPoint = createVector(0, 0);
        this.previousPoint = createVector(0, 0);
        this.probability = 0;
        this.a = 0;
        this.b = 0;
    }

    setup() {
        point(this.currentPoint.x, this.currentPoint.y);
    }

    draw() {
        stroke(100, 100, 100, 0.5);
        this.probability = random(1);
        if(this.probability < 0.01) {
            this.currentPoint.x =  0;
            this.currentPoint.y =  0.16 * this.previousPoint.y;
        } else if(this.probability < 0.86) {
            this.currentPoint.x =  0.85 * this.previousPoint.x + 0.04 * this.previousPoint.y;
            this.currentPoint.y = -0.04 * this.previousPoint.x + 0.85 * this.previousPoint.y + 1.6;
        } else if(this.probability < 0.93) {
            this.currentPoint.x =  0.20 * this.previousPoint.x - 0.26 * this.previousPoint.y;
            this.currentPoint.y =  0.23 * this.previousPoint.x + 0.22 * this.previousPoint.y + 1.6;
        } else {
            this.currentPoint.x = -0.15 * this.previousPoint.x + 0.28 * this.previousPoint.y;
            this.currentPoint.y =  0.26 * this.previousPoint.x + 0.24 * this.previousPoint.y + 0.44;
        }
        this.previousPoint = this.currentPoint;
        let mappedX = map(this.currentPoint.x, -2.1820, 2.6558, 0, width);
        let mappedY = map(this.currentPoint.y, 0, 9.9983, height, 0);
        if(isColorful) {
            stroke(mappedY, 100, 100, 0.5);
        }
        point(mappedX, mappedY);
    }
}

let infoDiv;
let p;
let isColorfulButton;
let selectElement;

let selection;
let isColorful;

let token;
let triangle;
let hexagon;
let carpet;
let pentaEH1;
let barnsley;

function setup() {
    if(windowWidth > windowHeight) {
        createCanvas(windowHeight, windowHeight);
    } else {
        createCanvas(windowWidth, windowWidth);
    }
    background(0);
    colorMode(HSB);

    isColorfulButton = createButton("Add Colors");
    infoDiv          = createDiv();
    p                = createP("Select a fractal to generate:");
    selectElement    = createSelect();

    p.style("margin", "10px 10px 0px 10px");
    selectElement.style("margin", "10px");
    
    selectElement.option("None");
    selectElement.option("Sierpinski Triangle");
    selectElement.option("Sierpinski Hexagon");
    selectElement.option("Sierpinski Carpet");
    selectElement.option("Pentagon EH 1");
    selectElement.option("Barnsley Fern");

    isColorfulButton.mousePressed(toggleColorful);
    selectElement.changed(changeSelection);

    p.parent(infoDiv);
    selectElement.parent(infoDiv);
    isColorfulButton.parent(infoDiv);

    isColorful = false;

    triangle = new sierpinskiTriangle();
    hexagon  = new sierpinskiHexagon();
    carpet   = new sierpinskiCarpet();
    pentaEH1 = new pentagonEH1();
    barnsley = new barnsleyFern();

    stroke(random(360), 0, 100, 0.5);
}

function draw() {
    strokeWeight(1);
    for(let i = 0; i < 500; i++) {
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
            case "Sierpinski Carpet":
                if(token == 1) {
                    carpet.setup();
                    token = 0;
                }
                carpet.draw();
                break;
            case "Pentagon EH 1":
                if(token == 1) {
                    pentaEH1.setup();
                    token = 0;
                }
                pentaEH1.draw();
                break;
            case "Barnsley Fern":
                if(token == 1) {
                    barnsley.setup();
                    token = 0;
                }
                barnsley.draw();
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
    stroke(random(360), 0, 100, 0.5);
}

function toggleColorful() {
    isColorful = !isColorful;
    if(isColorful) {
        isColorfulButton.html("Remove Colors");
    } else {
        isColorfulButton.html("Add Colors");
    }
    reset();
}