class Paper {
    constructor(x, y) {
        var options = {
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y,100,100, options);
        this.width = 100;
        this.height =100 ;
        this.image =loadImage("paper.png");
      
        
        World.add(world, this.body);
      }
      display(){
        
        push();
        imageMode(CENTER);
        image(this.image,300,630, this.width, this.height);
        pop();
      }
    };




