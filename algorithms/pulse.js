function pulse(){
  this.decay = 2;
  this.on = false;
  this.fixed = false;
  this.tail = 3;

  this.swap_with = pulse_swap_with;
  this.decay = pulse_decay;
  this.default_color = pulse_default_color;

  this.color = this.default_color();
}

  function pulse_swap_with(a_pulse){
    this.color.rgb(a_pulse.color);
    this.decay = a_pulse.decay;
    this.on = a_pulse.on;
    this.fixed = a_pulse.fixed;
  }

  function pulse_decay(){
    var hsl = this.color.hsl();
    this.color.hsl(hsl[0], hsl[1] - (hsl[1] * 0.2), hsl[2]);

    if (this.color.hsl()[1] < 0.1){
      this.fixed = false;
      this.on = false;
      this.color = this.default_color();
    }
  }

  function pulse_default_color(){
    return new color(255,100,75);
  }

