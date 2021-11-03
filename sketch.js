var s1;
var s2;

function setup() {
  createCanvas(400,400);

  s1 = new Student ("Ronik", 8, 13);
  s2 = new Student ("Ronik2", 9, 15);
}

function draw() 
{
  background(30);
  
  s1.display();
  s2.display();

}