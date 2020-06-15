// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius=radius;
  }
  get diameter(){
    return this.radius *2
  }
  get circumference(){
    return this.radius *2 *Math.PI;
  }
  get area(){
    return Math.PI * this.radius**2
  }
  set diameter(radius){
    this.diameter = radius ;
    
  }
  set circumference(){
    this.circumference = radius
  }
  set area(){
    return Math.PI * this.radius**2
  }
}
