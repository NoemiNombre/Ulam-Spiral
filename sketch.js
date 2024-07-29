let x,y;
let step = 1;
let stepSize=10;
let numSteps = 1;
let state= 0;
let turnCounter = 1;
let totalSteps;

// function to detrmine if the number is a prime num
function isPrime(value){
//   take out #1 cause it no prime number
  if (value ==1) return false;
      
//    test if numbers are prime    
 
  for (let i =2; i <= sqrt(value); i++){
    if (value % i == 0){
      return false
    }
  }
    return true
}


// function to make the size of the canvas
function setup() {
  createCanvas(500, 500);

  textFont("Courier");
  
  
//   calculate the total of steps
  const cols = width / stepSize;
  const rows = height / stepSize;
  
  totalSteps = cols * rows;
  
  
  x = width / 2;
  y = height / 2;
  px = x;
  py = y;
  
//   color blue
  background(40,60,118); 
//   color orange
 //background(252,131,40);
//   color coral
  //background(255,73,100);
}

//   function to draw the figure 
  
function draw() {
//  this is with numbers:
  
  // textSize(stepSize);
  // textAlign(CENTER, CENTER);
  // fill(255)
  // text(step,x,y);
  
  
// this is with squares:
  
  // fill(127);
  // stroke(255);
  // rectMode(CENTER);
  // square(x,y,stepSize)
  
// this is just circles:
  // fill(255);
  // stroke(255);
  // circle(x,y,stepSize*0.25);
  
// this is circles and lines to the center:
   fill(255);
   stroke(255);
   
  
//   add the isPrime to only draw the prime nums
  if(isPrime(step)){
    circle(x,y,stepSize*0.5);
  }
  
   
   // line(x,y,px,py);
  
//   add this 2 to make them a line that follows the previous dot
   px = x;
   py = y;
  
  
  switch(state){
      
      case 0:
      x+=stepSize;
      break;
      
      case 1:
      y-= stepSize;
      break;
      
      case 2:
      x-= stepSize;
      break;
      
      case 3:
      y+= stepSize;
      break;
      
  }
  
 
  if(step % numSteps ==0){
   state = (state+1) % 4;
    turnCounter++;
    if (turnCounter %2 ==0){
      numSteps++;
    }
  }
   step++;
  
  if (step > totalSteps ){
    noLoop();
  }
  
 
}

