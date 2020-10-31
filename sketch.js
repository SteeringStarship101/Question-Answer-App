




var Question,QuestionImage;
var Option1,iOption1Image;
var Option2,iOption2Image;
var Option3,iOption3Image;
var Option4,iOption4Image;





var CorrectAnswer;
var WrongAnswer;


function preload(){
    QuestionImage = loadImage("Ques.png") ;
    Option1Image = loadImage("Option1.png");
    Option2Image = loadImage("Option2.png");
    Option3Image = loadImage("Option3.png");
    Option4Image = loadImage("Option4.png");
    
    CorrectAnswer = loadSound("CorrectAnswer.mp3");
    WrongAnswer = loadSound("WrongAnswer.mp3");
}



function setup() {
  createCanvas (windowWidth,windowHeight);
 
}


function draw() {
 
background("White");

Question1();

 
  drawSprites();
}
function Question1(){
  Question = createSprite(width/2,height-500,width,100);
  Question.addImage(QuestionImage);
  Question.scale =0.5;
  
  Option1 = createSprite(450,250,200,100)
  Option1.addImage(Option1Image);
  Option1.scale = 0.5;
  
  Option2 = createSprite(750,250,200,100)
  Option2.addImage(Option2Image);
  Option2.scale = 0.5;
  
  Option3 = createSprite(450,450,200,100)
  Option3.addImage(Option3Image);
  Option3.scale = 0.5;
  
  Option4 = createSprite(750,450,200,100)
  Option4.addImage(Option4Image);
  Option4.scale = 0.5;
  if(mousePressedOver(Option3)){
    CorrectAnswer.play();
  }
  if(mousePressedOver(Option1)||mousePressedOver(Option2)||mousePressedOver(Option4)){
    WrongAnswer.play();
  }
}
 