class  BobObject{
  constructor(x,y,radius){
      var options={
            isStatic:true
      }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.x = x;
        this.y = y;
        World.add(world,this.body)
     }
     display(){
      var pos = this.body.position;
      fill(234, 21, 195)
      ellipseMode(CENTER);
      ellipse(pos.x,pos.y,this.radius,this.radius);
     
     
     }
     
     }



  

