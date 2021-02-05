const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var drops = [];

function preload(){
    
}

function setup(){
   
  
    engine=Engine.create();
    world = engine.world

    var maxDrops = 100
    for(var i = 75;i<maxDrops;i=i+50){
        drops.push(new Drop(i,75,20))
    }


   
}

function draw(){
    background(0)
    Engine.update(engine)



  var maxDrops = 100
    for(var i = 75;i<maxDrops;i=i+50){
        
        drops[i].display();
    }
   

    
}
