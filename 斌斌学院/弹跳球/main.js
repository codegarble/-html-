// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

function Shape(x,y,velX,velY,exists){
	this.x=x;
	this.y=y;
	this.velX=velX;
	this.velY=velY;
	this.exists=exists;
}

function Ball(x, y, velX, velY, exists,color, size) {
  Shape.call(this,x,y,velX,velY,exists);
  this.color=color;
  this.size=size;
}

Ball.prototype=Object.create(Shape.prototype);
Ball.prototype.constructor=Ball;

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

Ball.prototype.update = function() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}

Ball.prototype.collisionDetect = function() {
  for (var j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
      }
    }
  }
}

function EvilCircle(x,y,exists,color,size,velX,velY){
	Shape.call(this,x,y,velY);
	this.color=color;
	this.size=size;
	this.velX=velX;
	this.velY=velY;
}

EvilCircle.prototype=Object.create(Shape.prototype);
EvilCircle.prototype.constructor=EvilCircle;

EvilCircle.prototype.draw=function(){
	ctx.beginPath();
	ctx.lineWidth=3;
  	ctx.strokeStyle = this.color;
  	ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  	ctx.stroke();
}

EvilCircle.prototype.checkBounds=function(){
	if(this.x+this.size>=width){
		this.x-=this.size;
	}
	if(this.x-this.size<=0){
		this.x+=this.size;
	}
	if(this.y+this.size>=height){
		this.y-=this.size;
	}
	if(this.y-this.size<=0){
		this.y+=this.size;
	}
}

EvilCircle.prototype.setControls=function(){
	var _this=this;
	window.onkeydown=function(e){
		if(e.keyCode==65||e.keyCode==37){
			_this.x-=_this.velX;
		} else if (e.keyCode === 68||e.keyCode==39) {
     		_this.x += _this.velX;
    	} else if (e.keyCode === 87||e.keyCode==38) {
      		_this.y -= _this.velY;
    	} else if (e.keyCode === 83||e.keyCode==40) {
      		_this.y += _this.velY;
    	}
	}
}

EvilCircle.prototype.collisionDetect=function(){
	for(var i=0;i<balls.length;i++){
		if(balls[i].exists==true){
			var dx=this.x-balls[i].x;
			var dy=this.y-balls[i].y;
			var distance=Math.sqrt(dx * dx + dy * dy);

			if(distance<this.size+balls[i].size){
				balls[i].exists=false;
				countBalls--;
				paraCountBalls.textContent='Ball count: '+countBalls;
			}
		}
	}
}

var balls = [];
var countBalls=25;
var paraCountBalls=document.querySelector('p');
var aEvilCircle=new EvilCircle(
		random(0,width),
		random(0,height),
		true,
		'white',
		10,
		20,
		20
	);
aEvilCircle.setControls();


function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillRect(0, 0, width, height);

  while (balls.length < 25) {
    var ball = new Ball(
      random(0,width),
      random(0,height),
      random(-7,7),
      random(-7,7),
      true,
      'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
      random(10,20)
    );
    balls.push(ball);
  }

  for (var i = 0; i < balls.length; i++) {
  	if(balls[i].exists==true){
    	balls[i].draw();
    	balls[i].update();
   	    balls[i].collisionDetect();
   	}
  }



  aEvilCircle.draw();
  aEvilCircle.checkBounds();
  aEvilCircle.collisionDetect();

  requestAnimationFrame(loop);
}

loop();


