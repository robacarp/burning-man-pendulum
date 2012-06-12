function pendulum(x,y,z,length,angle){
  this.length = length == null ? 0 : length;
  this.angle = angle == null ? 0 : angle;
  this.position = new point(x,y);
  this.endpoint = new point();
  this.ball = new ball( 0,0, 25 - z);
  this.mass = 5
  this.velocity = 3;
  this.k = -9.8 * this.mass / this.length

  this.draw = pendulum_draw;
  this.calculate_endpoint = pendulum_calculate_endpoint;
  this.increment = pendulum_increment;

  this.calculate_endpoint()
}

  function pendulum_draw(context){
    this.calculate_endpoint();
    context.beginPath();
    context.moveTo(this.position.x, this.position.y);
    context.lineTo(this.endpoint.x, this.endpoint.y);
    context.stroke();
    context.closePath();

    this.ball.draw( context );
  }

  function pendulum_calculate_endpoint(){
    this.endpoint.x = Math.sin(this.angle) * this.length + this.position.x;
    this.endpoint.y = Math.cos(this.angle) * this.length + this.position.y;

    this.ball.position.x = this.endpoint.x;
    this.ball.position.y = this.endpoint.y;
  }

  function pendulum_increment(){
    //this.angle += Math.PI * (2 / 180);

    var acceleration = this.k * Math.sin( this.angle )
    this.velocity += acceleration * 0.99
    this.angle += this.velocity * 0.010
  }

