function rainbow(ball, position, tick){
  //about 3300 ticks / cycle

  //make each ball in the series different
  tick += 50 * position;

  //just make the hue a function of time
  hue = (tick % 155) / 155;

  //doit
  ball.color.hsl( hue , 0.8, 0.8 );
}

if (window.$algorithms)
  $algorithms.push(rainbow)
