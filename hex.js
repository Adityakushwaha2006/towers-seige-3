class Hex{
    constructor(x, y, width, height) {
        var options = {
            'isStatic':false,
            'restitution':0.6,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);

     
      }


      
      display(){
        if(this.body.speed>10){
          
          text("Score:"+score,50,30);

          score = score + Math.round(getFrameRate()/1);
        
        }
        if(this.body.speed<5){
          
          text("Score:"+score,50,30);

          score = score 
        
        }
        
        push();
        translate(this.body.position.x, this.body.position.y);
       
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
  }