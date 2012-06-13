function ball( x,y,radius ){
  this.radius = radius == null ? 0 : radius;
  this.position = new point( x,y );
  this.color = new color();
  this.draw = ball_draw;
}

  function ball_draw(context){
    context.beginPath();
    context.fillStyle = this.color.to_s()
    context.arc( this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true );
    context.fill();
    context.closePath();

    context.beginPath();
    context.strokeStyle = 'rgb(150,150,150)';
    context.arc( this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true );
    context.stroke();
    context.closePath();
  }
