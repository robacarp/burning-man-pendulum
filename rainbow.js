function rainbow(ball, position, tick){
  //about 3300 ticks / cycle

  //make each ball in the series different
  tick += position * 50;

  //which stage are we in?
  stage = Math.round(tick / 128) % 6;

  switch(stage){
    case 0: rainbow_stage_0(ball, tick); break;
    case 1: rainbow_stage_1(ball, tick); break;
    case 2: rainbow_stage_2(ball, tick); break;
    case 3: rainbow_stage_3(ball, tick); break;
    case 4: rainbow_stage_4(ball, tick); break;
    case 5: rainbow_stage_5(ball, tick); break;
  }

  if (position == 0) {
    //console.log('stage:' + stage + '    ' + tick + '-' + tick % 128 + ':' + ball.color.red + ' ' + ball.color.green + ' ' + ball.color.blue);
  }


  //stages:
  //r=255, g=128, b=128
  //0               *
  //r=255, g=128, b=255
  //1  *
  //r=128, g=128, b=255
  //2         *
  //r=128, g=255, b=255
  //3                *
  //r=128, g=255, b=128
  //4  *
  //r=255, g=255, b=128
  //5         *
  //r=255, g=128, b=128

  //ball.color.red   = 128;//Math.round((Math.sin(tick) + 1) * 122)
  //ball.color.green = 128;//Math.round((Math.sin(tick) + 1) * 122)
  //ball.color.blue  = 128;//Math.round((Math.sin(tick) + 1) * 122)
  //console.log( ball.color.red + ',' + ball.color.green + ',' + ball.color.blue )
}

function rainbow_stage_0(ball, tick){ tick = (tick) % 128; ball.color.blue = 128 + tick;  ball.color.green = 128;  ball.color.red = 255; } //blue from 128-255
function rainbow_stage_1(ball, tick){ tick = (tick) % 128; ball.color.red = 255 - tick;  ball.color.green = 128;  ball.color.blue = 255; } //red from 255-128
function rainbow_stage_2(ball, tick){ tick = (tick) % 128; ball.color.green = 128 + tick;  ball.color.blue = 255;  ball.color.red = 128; } //green from 128-255
function rainbow_stage_3(ball, tick){ tick = (tick) % 128; ball.color.blue = 255 - tick;  ball.color.red = 128;  ball.color.green = 255; } //blue from 255-128
function rainbow_stage_4(ball, tick){ tick = (tick) % 128; ball.color.red = 128 + tick;  ball.color.green = 255;  ball.color.blue = 128; } //red from 128-255
function rainbow_stage_5(ball, tick){ tick = (tick) % 128; ball.color.green = 128 + tick;  ball.color.blue = 128;  ball.color.red = 255; } //green from 128-255


if (window.$algorithms)
  $algorithms.push(rainbow)
