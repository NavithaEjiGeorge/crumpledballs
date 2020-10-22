class Bin {
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            restitution : 0.8,
            friction : 0.5,
            density : 1.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image = loadImage("dustbingreen.png")
        World.add(world,this.body)
    }
display(){
    var pos = this.body.position
    fill("green")
    imageMode(CENTER)
    translate(pos.x,pos.y)

    image(this.image,0,0,this.width,this.height)
}
}