function ball( x,y,radius ){
  this.radius = radius == null ? 0 : radius;
  this.position = new point( x,y );
  this.color = new color();
  this.draw = ball_draw;
  this.stroke = false;
}

  function ball_draw(context){
    context.beginPath();

    if (this.stroke)
      context.strokeStyle = this.color.to_s();
    else
      context.fillStyle = this.color.to_s()

    context.arc( this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true );

    context.closePath();

    if (this.stroke)
      context.stroke();
    else
      context.fill();

  }
