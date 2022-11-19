var canvas = new fabric.Canvas("myCanvas")

objeto_buraco = "";
objeto_bola = "";
//Defina as posições iniciais da bola e do buraco.
var bolaY = 0;
var bolaX = 0;

var buracoX = 800;
var buracoY = 400;


var blockImageWidth = 5;
var blockImageHeight = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png", function(Img){

		objeto_buraco = Img;
		objeto_buraco.scaleToWidth(50);
		objeto_buraco.scaleToHeight(50);
		objeto_buraco.set({
			top:buracoY,
			left:buracoX
		})
		canvas.add(objeto_buraco);
	})

	newImage();
}

function newImage()
{
	fabric.Image.fromURL("ball.png", function(Img){
		objeto_bola = Img;
		objeto_bola.scaleToWidth(50);
		objeto_bola.scaleToHeight(50);
		objeto_bola.set({
			top:bolaY,
			left:bolaX
		})
	canvas.add(objeto_bola)
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if((bolaX==buracoX)&&(bolaY==buracoY)){
		canvas.remove(objeto_bola);
		document.getElementById("hd3").innerHTML="Você atingiu seu objetivo parabéns!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(bolaY >= 0){
			bolaY = bolaY - blockImageHeight;
			canvas.remove(objeto_bola);
			newImage();
		 }
	}

	function down()
	{
		 if(bolaY <= 450){
			bolaY = bolaY + blockImageHeight;
			canvas.remove(objeto_bola);
			newImage();
		 }
	}

	function left()
	{
		if(bolaX >5)
		{
			bolaX = bolaX - blockImageHeight;
				canvas.remove(objeto_bola);
				newImage();
		}
	}

	function right()
	{
		if(bolaX <=1050)
		{
			bolaX = bolaX + blockImageHeight;
			canvas.remove(objeto_bola);
			newImage();
		}
	}
	
}

