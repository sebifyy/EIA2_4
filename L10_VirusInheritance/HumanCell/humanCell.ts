namespace L10_VirusInheritance {
    export class HumanCell extends Moveable {
        constructor(_position?: Vector) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new Vector(0, 0);
            this.radius = 15;
            this.velocity = new Vector(0, 0);
            this.velocity.random(5, 10);
        }

        draw(): void {
            let zelle: Path2D = new Path2D();
            zelle.arc(this.position.x, this.position.x, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "orange";
            crc2.fill(zelle);
            crc2.stroke(zelle);
            let zellekern: Path2D = new Path2D();
            zellekern.arc(this.position.x, this.position.x, 45, 0, 2 * Math.PI);
            crc2.fillStyle = "red";
            crc2.fill(zellekern);
            crc2.stroke(zellekern);
        }
    }
}