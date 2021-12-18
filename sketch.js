var canvas,bg,bgImg;
var together;
var tom, tomAni1,tomAni2,tomAni3;
var jerry, jerryAni1,jerryAni2,jerryAni3;

function preload() {
    //carga aquí las imágenes
    bgImg = loadImage("imagenes/garden.png");
    tomAni1= loadAnimation("imagenes/tomOne.png");
    tomAni2= loadAnimation("imagenes/tomTwo.png","imagenes/tomThree.png");
    tomAni3= loadAnimation("imagenes/tomFour.png");
    jerryAni1 = loadAnimation("imagenes/jerryOne.png");
    jerryAni2 = loadAnimation("imagenes/jerryTwo.png","imagenes/jerryThree.png");
    jerryAni3 = loadAnimation("imagenes/jerryFour.png");
}

function setup(){
    canvas = createCanvas(600,400);
    background(0);
    bg=createSprite(300,200);
    bg.addImage(bgImg);
    bg.scale=0.7;
    //crea aquí los sprites de Tom y Jerry
    jerry=createSprite(110, 330, 50, 50);
    jerry.addAnimation("quieto",jerryAni1);
    jerry.debug=true;
    jerry.setCollider("rectangle",0,0,800,1000);
    jerry.scale=0.1;
    tom=createSprite(470,330,50,50);
    tom.addAnimation("acostado",tomAni1);
    tom.scale=0.1;
    tom.debug=true;
    tom.setCollider("rectangle",0,0,1300,1000)
}

function draw() {

    if(tom.x - jerry.x < (tom.width + jerry.width)/2) {
        tom.velocityX=0;
        tom.addAnimation("sentado",tomAni3);
        tom.x=300;
        tom.scale=0.2;
        tom.changeAnimation("sentado");
        jerry.addAnimation("ojito",jerryAni2);
        jerry,scale=0.15;
        jerry.changeAnimation("ojito");
        }

       //else{
        
       //}
        if(keyDown("space")){
            tom.velocityX=-5;
            tom.addAnimation("caminanding",tomAni2);
            tom.changeAnimation("caminanding");
        }
        keyPressed();
        drawSprites();
      }

function keyPressed(){
    if (keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("caminanding",tomAni2);
        tom.changeAnimation("caminanding");
        jerry.addAnimation("viendo",jerryAni2);
        jerry.changeAnimation("viendo");
//Escribe aquí el código para la animación de movimeinto y cambio
}
}
