namespace L10_VirusInheritance {
    export class KillerCell extends Moveable {

        

        constructor(_position?: Vector) {
            
            super(_position); 
            

            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);


            this.velocity = new Vector(0, 0);
            this.velocity.random(5, 10);
            this.radius = 20;
        }

        draw(): void {
        }



    }
}