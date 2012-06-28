function pulsar_callback(ball, position, tick){
  if (window.$pulsar == null) {
    window.$pulsar = new pulsar();
  }

  $pulsar.tick(ball, position, tick);
}

function pulsar(){
  // config variables
  this.pulse_delay = 40;
  this.pulse_step = 10;
  this.pulse_trail = false; //TODO

  // state variables
  this.pulsing = false;
  this.pulse_position = 0;
  this.last_pulse_started = 0;

  this.pulses = [];
  for (i = 0; i < $num_pendulums; i++)
    this.pulses[i] = new pulse();


  this.tick = pulsar_tick;
  this.new_pulse = pulsar_new_pulse;
  this.increment_pulses = pulsar_increment_pulses;
}

function pulsar_tick(ball, position, tick){

  if (position == 0){
    //fire a pulse
    if (!this.pulsing && tick - this.last_pulse_started >= this.pulse_delay) {
      this.pulsing = true;
      this.last_pulse_started = tick;
    }

    if (tick % this.pulse_delay == 0)
      this.new_pulse();

    this.increment_pulses(ball, position, tick);
  }

  //ball.color.hsl(0.3,0.85,0.7);
  ball.color.rgb(100,255,180);

  if (this.pulses[position].on){
    ball.color.rgb(this.pulses[position].color);
  }

}

function pulsar_new_pulse(){
  var p = new pulse();
  p.on = true;
  this.pulses[this.pulses.length - 1] = p;
}

function pulsar_increment_pulses(ball, position, tick){
  if (tick % this.pulse_step == 0){
    //if the next one in the series isn't on, move this one there
    for (i = 0; i < this.pulses.length; i ++){
      if (i == 0){
        if (this.pulses[i].on)
          this.pulses[i].fixed = true;
      }

      if (this.pulses[i].fixed) {
        this.pulses[i].decay();
        continue;
      }

      if (this.pulses[i].on){
        if (!this.pulses[i - 1].on) {
          this.pulses[i - 1].on = true;
          this.pulses[i].on = false;
        }

        if (this.pulses[i - 1].fixed){
          this.pulses[i].fixed = true;
        }
      }
    }
  }
}

if (window.$algorithms)
  $algorithms.push({name: 'pulsar', callback: pulsar_callback})
