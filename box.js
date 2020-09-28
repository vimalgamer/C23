class Box {
    
    constructor(x, y, width, height) {

        var options ={
            restitution: 1.0,
            friction: 0.3,
            density: 0.8
        }
    
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    
    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push(); //Capture new setting (Eg: angle)

        translate(pos.x,pos.y);
        rotate(angle);

        console.log(this.body.angle);

        rectMode(CENTER);

        fill("yellow");
        rect(0,0,this.width,this.height);

        pop(); //Resetting it

    }

}