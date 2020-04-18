
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];

 
var ground;
var gSlider;
 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
    ground = new Ground(600,height,1200,20);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.

}
 
function mousePressed() {
    if (mouseY < 350) {
        boxes.push(new Box(mouseX,mouseY,45,50));
        // Every time a mouse press occures create a new box.
    }
}
 
function draw() {
    // Draw all the elements including the slider that 
Engine.update(engine);

    background(51);
    // This is the value of your gravity. You can optionally show it to the viewer.
   for(var i = 0;i<boxes.length;i++){
       boxes[i].display();
   } 
   var fVal = gSlider.value();
 
    // Use a for loop to show all the boxes

}
 

