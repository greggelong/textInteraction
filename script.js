 
let textfield;
let output;
let submit;
function setup() {
   noCanvas();
   textfield = select('#input');
   output = select('#output');
   submit = select('#submit');
   submit.mousePressed(newText);
}
 
function newText(){
  let s = textfield.value();

  let words = s.split(/(\W+)/);
  // this regular expression with () capturs the punct

  // create a seperate dom span ellemment for each words
  for (let i =0; i <words.length; i++){
    let span = createSpan(words[i]);
    span.parent(output);

    // use regula expression to change style only words
    if(!/\W+/.test(words[i])){
      //span.style('background-color', color(random(255),random(255), random(255)));
      // create an event listener for each span ellemment
      span.mouseOver(highlight);
    }
     

  }

  //output.html(words);
  //console.log(words)
}

function highlight(){
  // in p5 you can use this.
  this.style('background-color', color(random(255),random(255), random(255)));
  console.log(this.html());
}