

function setup () {
  createCanvas(600,600);
  background(125);
//  randPrint(7);

}

function draw() {
   var myNum = floor(random(1, 10));

   randPrint(cubed(myNum));

}

function randPrint(num2print) {
  text(num2print, random(width), random(height));
}

function cubed(startNum){
  var numBack;
  numBack = startNum*startNum*startNum;
  return(numBack);
}
