class Scroll{
    constructor(img,position,topEndPosition, bottomEndPosition, speed){
        this.img = img;
        this.position = position;
        this.topEndPosition = topEndPosition;
        this.bottomEndPosition = bottomEndPosition;
        this.speed = speed;
        

    }
    effect(e){
        if(this.position < this.topEndPosition){
            this.position = this.topEndPosition
        }
        if(this.position > this.bottomEndPosition){
            this.position = this.bottomEndPosition;
        }
        this.img.style.top = `${this.position}%`
        if(e.deltaY < 0){
            this.position = this.position -(this.speed);
        }
        else if(e.deltaY > 0){
            this.position = this.position +(this.speed);
        }
    }
}