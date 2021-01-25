class Chain{

    constructor (bodyA,bodyB){
    
        var options={
            isStatic:false,
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.1,
            length:10
            }
            this.bodyA=bodyA;
            this.Chain=Constraint.create(options);
            
            World.add(world,this.Chain);
            
           
    
    }

 fly(){
                this.Chain.bodyA = null;
            }




    display(){
    if(this.Chain.bodyA){
    var pointA=this.Chain.bodyA.position;
    var pointB=this.Chain.bodyB.position;
    
    stroke(100,100,100);
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }
    }

    