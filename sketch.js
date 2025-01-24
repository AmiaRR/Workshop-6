let userInput;
let button;
let userLine;

let poem = [];

function setup() {
  createCanvas(400, 580);


  userInput = createInput();
  userInput.position(40, 50);

  button = createButton('add to poem');
  button.position(userInput.x, userInput.y + 21);
  button.mousePressed(newLine);
}

function draw() {
  background(220);
  writePoem();
}

function newLine() {
  userLine = userInput.value();
  userInput.value('');

  let words = RiTa.tokenize(userLine);
  if (words.length > 0) {
    let r = floor(random(0, words.length)); 
    let rhymes = RiTa.rhymesSync(words[r]); 

    if (rhymes.length > 0) {
      let changedWord = random(rhymes); 
      words[r] = changedWord; 
    }
  }

  
  let transformedLine = RiTa.untokenize(words);
  poem.push(transformedLine);
}


function writePoem() {
  for (let x = 0; x < poem.length; x++) {
    text(poem[x], 40, 180 + x * 20);
  }
}
