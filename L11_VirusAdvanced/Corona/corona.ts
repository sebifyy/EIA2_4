namespace L10_VirusInheritance {
    export class Corona extends Moveable {

        infected: boolean = false;




        constructor(_position?: Vector) {

            super(_position);


            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new Vector(0, 0);

            this.radius = 5;


            this.velocity = new Vector(0, 0);
            this.velocity.random(5, 10);
        }

        draw(): void {
            let virusSpike: Path2D = new Path2D();
            for (let i: number = 0; i < 10; i++) {
                virusSpike.moveTo(this.position.x + 70, this.position.y);
                virusSpike.lineTo(this.position.x - 25, this.position.y - 10);
                virusSpike.lineTo(this.position.x + 25, this.position.y + 10);
                virusSpike.closePath();
                virusSpike.moveTo(this.position.x - 70, this.position.y);
                virusSpike.lineTo(this.position.x - 25, this.position.y - 10);
                virusSpike.lineTo(this.position.x + 25, this.position.y + 10);
                virusSpike.closePath();
                virusSpike.moveTo(this.position.x, this.position.y + 70);
                virusSpike.lineTo(this.position.x - 25, this.position.y - 10);
                virusSpike.lineTo(this.position.x + 25, this.position.y + 10);
                virusSpike.closePath();
                virusSpike.moveTo(this.position.x, this.position.y - 70);
                virusSpike.lineTo(this.position.x - 25, this.position.y - 10);
                virusSpike.lineTo(this.position.x + 25, this.position.y + 10);
                virusSpike.closePath();
                crc2.fillStyle = "#52040D";
                crc2.fill(virusSpike);
                crc2.stroke(virusSpike);
            }

            let virusRand: Path2D = new Path2D();
            virusRand.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            crc2.fillStyle = "lightblue";
            crc2.fill(virusRand);
            crc2.stroke(virusRand);

            let virusKern: Path2D = new Path2D();
            virusKern.arc(this.position.x, this.position.y, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "blue";
            crc2.fill(virusKern);
            crc2.stroke(virusKern);

        }


        move(_timeslice: number): void {
            if (this.infected == false) {
                if (this.position.y < 250) {
                    super.move(_timeslice * 2);
                }
                else {
                    super.move(_timeslice);
                }
            }
        }

        isInfected(): boolean {
            if (this.position.y < 125) {
                return true;
            }
            else {
                return false;
            }
        }





    }
}