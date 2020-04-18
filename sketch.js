var cao,xin,tan;
var caoimg, xinimg, tanimg;
var vid;
var button;
var gameState = "start"
var bg,bgimg;
let playing = false;
var button1;
var player;
var caobutton;
var dialog,diaimg,diaimg2,diaimg3,diaimg4,diaimg5,diaimg6;
var sound1;


function preload(){
  caoimg = loadImage("sprites/cao2.png");
  xinimg = loadImage("sprites/sunquan.png");
  tanimg = loadImage("sprites/liubei2.png");
  bgimg = loadImage("sprites/back1.jpg");
  diaimg = loadImage("dialog/fall.png");
  diaimg2 = loadImage("dialog/fall22.png");
  diaimg3 = loadImage("dialog/fall3.png");
  diaimg4 = loadImage("dialog/fall4.png");
  diaimg5 = loadImage("dialog/fall5.png");
  diaimg6 = loadImage("dialog/fall6.png");
  sound1 = loadSound("sound/click.mp3");
}

function setup() {
  createCanvas(1400,700);

 
 
  bg = createSprite(700,350,1400,700);
  bg.addImage("bg",bgimg);
  bg.scale = 0.8;
  bg.visible = false;
  dialog = createSprite(650, 200, 50, 50)
  dialog.addImage("dialog",diaimg);
  dialog.visible = false;

  player = createSprite(200,200,20,20);






  button1 = createButton('play');
  button1.mousePressed(toggleVid);

  button1.position(700,620,50,50);
  button1.style("red");
 



caobutton = createSprite(1200,650,10,10);
caobutton.shapeColor="red";
caobutton.visible = false;
caobutton1 = createSprite(1150,650,10,10);
caobutton1.shapeColor="red";
caobutton1.visible = false;
caobutton2 = createSprite(1200,600,10,10);
caobutton2.shapeColor="red";
caobutton2.visible = false;
caobutton3 = createSprite(1250,650,10,10);
caobutton3.shapeColor="red";
caobutton3.visible = false;
caobutton4 = createSprite(1200,670,10,10);
caobutton4.shapeColor="red";
caobutton4.visible = false;
caobutton5 = createSprite(1220,650,10,10);
caobutton5.shapeColor="red";
caobutton5.visible = false;







 cao = createSprite(725, 200, 50, 50);
 cao.addImage("cao",caoimg);
 cao.scale = 0.75;
 xin = createSprite(200,300,50,50);
 xin.addImage("xin", xinimg);
 tan = createSprite(1200,300,50,50);
 tan.addImage("tan",tanimg);
 tan.scale = 1;
 button = createSprite(1200,620,10,10);
 cao.visible = false;
 xin.visible = false;
 tan.visible = false;
  var gameState = "start";
 vid = createVideo(
 
  ['sprites/kerokero.mp4'],
  
  
);
vid.position(0,0);
vid.size(1400, 600);
}

function draw() {
  background("black"); 
  player.x=mouseX;
  player.y=mouseY;
  if(mousePressedOver(button)){
    background("white");
 gameState = "play";
vidLoad();

  }
  if (gameState === "play"){
    background("pink");
    bg.visible = true;
    vid.hide();
    vid.volume(0);
    button.destroy();
    
    cao.visible = true;
 xin.visible = true;
 tan.visible = true;
button1.hide();
if(player.isTouching(cao)){
  cao.scale = 0.78;
}
else{
  cao.scale = 0.75;
}

if(mousePressedOver(cao)){
  gameState = "character1";
  
}
  }
if(gameState === "character1"){
  xin.visible = false;
  tan.visible = false;
  caobutton.visible = true;
  
    cao.scale=0.95;
    cao.x = 300;
    cao.y = 400;
  
    if(mousePressedOver(caobutton)){
      gameState = "story1";
      sound1.play();
  
     }
}
//dia1
if(gameState === "story1"){
  
  
  dialog.visible = true;
  background("white");
caobutton.visible = false;
caobutton1.visible = true;
  if(mousePressedOver(caobutton1)){
    gameState = "story2";
    sound1.play();
  
   }
}



 
    

  //dia2
if(gameState === "story2"){

  dialog.visible = true;
  dialog.addImage("dialog",diaimg2);
  caobutton1.visible = false;
  caobutton2.visible = true;
 
  if(mousePressedOver(caobutton2)){
    gameState = "story3";
    sound1.play();
  }
}

//dia3
if(gameState === "story3"){

  dialog.addImage("dialog",diaimg3);
  caobutton2.visible = false;
  caobutton3.visible = true;

  if(mousePressedOver(caobutton3)){
    gameState = "story4";
    sound1.play();
    
  }
}

//dia4
if(gameState === "story4"){

  
  dialog.addImage("dialog",diaimg4);
  caobutton3.visible = false;
  caobutton4.visible = true;

  if(mousePressedOver(caobutton4)){
    gameState = "story5";
    sound1.play();
  }
}

//dia5
if(gameState === "story5"){
 
  dialog.addImage("dialog",diaimg5);
  caobutton4.visible = false;
  caobutton5.visible = true;

  if(mousePressedOver(caobutton5)){
    gameState = "story6";
    sound1.play();
  }
}
//dia6
if(gameState === "story6"){
  dialog.addImage("dialog",diaimg6);
  
  }















  
  drawSprites();
}
function vidLoad() {
  //vid.loop();
  vid.volume(1);
}
function toggleVid() {
  if (playing) {
    vid.pause();
    button1.html('play');
  } else {
    vid.loop();
    button1.html('pause');
  }
  playing = !playing;
}