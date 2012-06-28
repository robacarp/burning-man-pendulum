function color(red, green, blue, alpha){
  this.red = red == null ? 0 : red;
  this.green = green == null ? 0 : green;
  this.blue = blue == null ? 0 : blue;
  this.alpha = alpha == null ? 1 : alpha;

  this.rgb = color_rgb;
  this.hsl = color_hsl;
  this.to_s = color_to_s;
}

  function color_rgb(r, g, b){
    if (r instanceof color){
      this.red = r.red;
      this.green = r.green;
      this.blue = r.blue;
    } else {
      this.red = r == null? this.red : r;
      this.green = g == null? this.green : g;
      this.blue = b == null? this.blue : b;
    }

    return [this.red, this.green, this.blue];
  }

  function color_hsl(h, s, l){
    var rgb = color_hsl_to_rgb(h, s, l);

    this.red   = isNaN(rgb[0]) ? this.red : rgb[0];
    this.green = isNaN(rgb[1]) ? this.green : rgb[1];
    this.blue  = isNaN(rgb[2]) ? this.blue : rgb[2];

    return color_rgb_to_hsl(this.red, this.green, this.blue);
  }

  //nicked from http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
  function color_rgb_to_hsl(r, g, b){
      r /= 255, g /= 255, b /= 255;
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;

      if(max == min){
          h = s = 0; // achromatic
      } else {
          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch(max){
              case r: h = (g - b) / d + (g < b ? 6 : 0); break;
              case g: h = (b - r) / d + 2; break;
              case b: h = (r - g) / d + 4; break;
          }
          h /= 6;
      }

      return [h, s, l];
  }

  function color_hsl_to_rgb(h, s, l){
      var r, g, b;

      if (s == 0) {
          r = g = b = l; // achromatic
      } else {

          function hue2rgb(p, q, t){
              if(t < 0) t += 1;
              if(t > 1) t -= 1;
              if(t < 1/6) return p + (q - p) * 6 * t;
              if(t < 1/2) return q;
              if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
              return p;
          }

          var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var p = 2 * l - q;
          r = hue2rgb(p, q, h + 1/3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1/3);
      }

      r = Math.round(r * 255);
      g = Math.round(g * 255);
      b = Math.round(b * 255);

      return [r, g, b];
  }



  function color_to_s(){
    return "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.alpha + ")";
  }

