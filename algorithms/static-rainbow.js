function static_rainbow(ball, position, tick){
  //about 3300 ticks / cycle

  hue = (position + 1) / 9; //(tick % 155) / 155;

  //doit
  ball.color.hsl( hue , 1, 0.5 );
}

if (window.$algorithms)
  $algorithms.push({name: 'just a rainbow', callback: static_rainbow})
