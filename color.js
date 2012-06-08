function color(red, green, blue, alpha){
  this.red = red == null ? 0 : red;
  this.green = green == null ? 0 : green;
  this.blue = blue == null ? 0 : blue;
  this.alpha = alpha == null ? 0 : alpha;
  this.to_s = color_to_s;
}

  function color_to_s(){
    return "rgba(" + this.red + "," + this.green + "," + this.blue + ")";
  }

