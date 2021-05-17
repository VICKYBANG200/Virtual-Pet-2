//Create variables here
var  database;
var dog, happyDog;
var foodS, foodStock;
var dogImage, dogImage1;
var feed,addFood;
var foodObject;
var fedTime,lastFed;

function preload()
{
	//load images here
  dogImage = loadImage("images/dogImg.png");
  dogImage1 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  dog=createSprite(250,250,100,100);
  dog.addImage(dogImage);
  dog.scale=1.5;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  foodObject=new Food(
  
    feed=createButton("Feed LOCO");
    feed.position(700,95);
    feed.mousePressed(feedDog);

    addFood=createButton("Add Food");
    addFood.position(800,95);
    addFood.mousePressed(addFood);

  )
  
}


function draw() {  

  background(46, 139, 87);


  textSize(15);
  if(lastFed>=12){
    text("Last Feed: "+lastFed%12 +"PM",350,350);
  }else if(lastFed==0){
          text("Last Feed: 12AM",350,30);
  }else if{
          text("Last Feed: " +lastFed +"AM",350,30); 
  }


  

  drawSprites();
  //add styles here

  

  drawSprites();
}


function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


function feed(){
  dog.addImage(images/dogImage1.png);

  foodObject.updateFoodStock(foodObject.getFoodStock()-1);
  database.ref('/').update((
    Food:foodObject.getFoodStock(),
    FeedTime:hour()
  ))
}

function addFood(){
  foodS++;
  database.ref('/').update((
    Food:foodS
  ))
}