//var corredor
//var chao
//function preload(){
  //imagens pré-carregadas
  //corredor=loadAnimation("Runner-1.png","Runner-2.png","Runner-1.png","Runner-2.png")
  //chao=loadImage = path.png
//}

//function setup(){
  //createCanvas(400,400);
  //crie sprite aqui
  //corredor=createSprite(200,200,40,40)
//}

//function draw() {
  //background("black");

//}

// Criação das variaveis do jogo
var trex ,trex_running;
var ground, groundimg
var invisibleground
// Carregamento das imagens e animação
function preload(){
  //carregamento animação trex correndo
  trex_running = loadAnimation("Runner-1.png","Runner-2.png","Runner-1.png","Runner-2.png");
  groundimg=loadImage("path.png");
}
// Criando a configuração do jogo
function setup(){
  // Criando a tela do jogo
  createCanvas(400,600);
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  // Adicionar a animação
  trex.addAnimation("running", trex_running);
  trex.scale=0.05;
  ground=createSprite(200,180,20,600);
  ground.addImage(groundimg);
  invisibleground=createSprite(40,210,20,600);
  invisibleground.visible=false;
  trex.depth=ground.depth;
  trex.depth=trex.depth+1;
  trex.collide(invisibleground)
}
// Criando os desenhos e tudo que repete ao longo do jogo
function draw(){
  // para criar fundo
  background("white");
  console.log(trex.y)
  ground.velocityY=2;
  if(ground.y>400){
    ground.y=ground.height/2;
  }
    //para o salto do trex
  trex.x=mouseX;
  drawSprites();

}

