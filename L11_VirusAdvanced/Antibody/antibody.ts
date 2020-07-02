namespace L10_VirusInheritance {
    export class Antibody extends Moveable {
        rotation: number;
        constructor(_position?: Vector) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.random(2, 5);
            this.rotation = Math.random() * 360;
        }

        draw(): void {
            let antibody: Path2D = new Path2D();
            antibody.moveTo(this.position.x, this.position.y);
            antibody.rect(this.position.x, this.position.y, 75, 20);
            crc2.fillStyle = "white";
            crc2.fill(antibody);
            crc2.stroke(antibody);
            crc2.fillStyle = "white";
            crc2.lineTo(this.position.x, this.position.y);
        }
    }
}