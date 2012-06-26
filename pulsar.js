function pulsar_callback(ball, position, tick){
  if (window.$puslar == null)
    window.$pulsar = new pulsar();

  window.$pulsar.tick(ball, position, tick);
}

function pulsar(){
  // delay between pulses
  this.pulse_delay = 400;

  this.tick = pulsar_tick;
}

function pulsar_tick(ball, position, tick){
  ball.color.hsl(1,1,1);
}

if (window.$algorithms)
  $algorithms.push({name: 'pulsar', callback: pulsar_callback})
