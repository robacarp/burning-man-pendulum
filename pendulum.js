function pendulum(x,y,z,gamma,count){
  this.angle = 4 * Math.PI / 5;
  this.position = new point(x,y);
  this.endpoint = new point();
  this.ball = new ball(0,0,15 + z);

  this.mass = 25;
  this.velocity = 3;
  this.length = 50;
  this.gamma = gamma == null ? 60 : gamma;
  this.count = count == null ? 60 : count;

  this.draw = pendulum_draw;
  this.calculate_endpoint = pendulum_calculate_endpoint;
  this.increment = pendulum_increment;
  this.initialize = pendulum_initialize;

  this.initialize();
  this.calculate_endpoint();
}
  function pendulum_initialize(){
    //period = 2pi * sqrt(L / g)
    var period = this.gamma / this.count;
    //period / 2pi = sqrt(L / g)
    //(period / 2pi)^2 = L / g
    //L = g * (period / 2pi)^2
    this.length = -9.8 * 100 * Math.pow( period / (2 * Math.PI), 2 );
    this.k = -9.8 * this.mass / this.length;
  }

  function pendulum_increment(){
    var acceleration = this.k * Math.sin( this.angle )
    this.velocity += acceleration// * 0.059
    this.angle += this.velocity * 0.01
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

