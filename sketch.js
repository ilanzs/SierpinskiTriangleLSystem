let rules = [];
let sentence;
rules[0] = {
  prev: "F",
  next: "F-G+F+G-F"
}

rules[1] = {
  prev: "G",
  next: "GG"
}


let generateButton;

function setup() {
  createCanvas(700, 700);
  sentence = "F-G-G"
}

function draw() {
  background(51);
  translate(0, height);

  strokeWeight(1);
  show();
}

function mousePressed() {
  generate();
}

function generate() {
  let nextSentence = "";
  let prevSentence = "";
  for (let i in sentence) {
    prevSentence = nextSentence;
    let curr = sentence[i];
    for (let j in rules) {
      if (curr === rules[j].prev) {
        nextSentence += rules[j].next; 
        break;
      }
    }
    if (prevSentence == nextSentence) {
      nextSentence += curr;
    }
  }
  sentence = nextSentence;
  console.log(sentence);
}

function show() {
  let len = 1;
  stroke(255);
  fill(255);
  for (let letter in sentence) {
    if (sentence[letter] == "F" || sentence[letter] == "G") {
      line(0, 0, 0, -len);
      translate(0, -len);
    } else if (sentence[letter] == "+") {
      rotate(radians(-120));
    } else if (sentence[letter] == "-") {
      rotate(radians(120));
    }
  }
}