function black_white(ball, position, tick){
  //slow it down a bit
  tick = tick / 200;

  //make each ball different
  tick += position * 5;

  ball.color.red   = Math.round((Math.sin(tick) + 1) * 122)
  ball.color.green = Math.round((Math.sin(tick) + 1) * 122)
  ball.color.blue  = Math.round((Math.sin(tick) + 1) * 122)
  //console.log( ball.color.red + ',' + ball.color.green + ',' + ball.color.blue )
}

if (window.$algorithms)
  $algorithms.push(black_white)
