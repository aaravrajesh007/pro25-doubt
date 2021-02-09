class Dustbin{
    constructor(x,y){
var options={
    isStatic:true
}
this.width=200
this.height=100
this.thickness=20
this.bwall=Bodies.rectangle(x,y,this.width,this.thickness,options)
this.lwall=Bodies.rectangle(x-this.width/2,y-this.height/2,this.thickness,this.height,options)
this.rwall=Bodies.rectangle(x+this.width/2,y-this.height/2,this.thickness,this.height,options)
World.add(world,this.bwall);
World.add(world,this.rwall);
World.add(world,this.lwall);
this.image=loadImage("images/dustbin.png");
    }
display(){
  imageMode(CENTER);
  image(this.image,this.bwall.position.x,this.height,this.width,200);
}
}