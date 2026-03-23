/*******************************************************/
// P5.play: formula racing game
// racing car game
// Written by tom
/*******************************************************/

/*******************************************************/
// setup()
/*******************************************************/
function preload() {

  imgCar = loadImage('assets/images/ferai.png');

  imgTrack = loadImage('assets/images/bahraintrackworking.png');

  imgLine = loadImage('assets/images/Finshline.png');

}

let width = 800;
let height = 800;


function setup() {
  console.log("setup: ");

  cnv = new Canvas(windowWidth - 50, windowHeight - 50);





  track = new Sprite(width / 2, height / 2, 5000, 5000, 'n');
  track.image = (imgTrack)
  track.scale = 10000 / imgTrack.width;


 finishLine = new Sprite(width / 2, 2105, 50, 50, 'n');
  finishLine.image = (imgLine);
  finishLine.scale = 4;

  car = new Sprite(width / 2, height / 2, 50, 50);
  car.image = (imgCar);
  car.scale = 0.75;
  //car.direction = 180; // Added This
  car.rotation = 90; //Added This
  car.maxSpeed = 20;
  car.speed = 0;

 






  //wallLH = new Sprite(0, imgTrack.height / 2, 8, imgTrack.height, 'k');

  //wallRH = new Sprite(imgTrack.width, imgTrack.height / 2, 8, imgTrack.width, 'k');

  //wallTop = new Sprite(imgTrack.width / 2, 0, imgTrack.width, 30, 'k');

  //wallBot = new Sprite(imgTrack.width / 2, imgTrack.height, imgTrack.width, 30, 'k');

  //wallLH.color = 'black';
  //wallRH.color = 'black';
  //wallTop.color = 'black';
  //wallBot.color = 'black';


}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
  background('darkgreen');
  //allSprites.draw();
  
  text ("is this working?",50,50);
  camera.x = car.x;
  camera.y = car.y;
  camera.zoom = 0.5;
  



  //******************************************************/
  //Keyboard Movements//
  //******************************************************/
  if (kb.pressing('a')) {

    car.rotation = car.rotation - 2;
    car.direction = car.rotation;
  }

  if (kb.pressing('d')) {
    car.rotation = car.rotation + 2;
    car.direction = car.rotation;

  }


  if (kb.pressing('w')) {

    if (car.speed<20){
      car.speed += 0.3;
    }
   
    car.direction = car.rotation;
  }



  if (kb.pressing('s')) {
    car.speed -= 0.3;
    car.direction = car.rotation;
  }

console.log(car.speed);


  //******************************************************/	



}
