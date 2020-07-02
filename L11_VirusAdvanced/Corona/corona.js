"use strict";
var L10_VirusInheritance;
(function (L10_VirusInheritance) {
    class Corona extends L10_VirusInheritance.Moveable {
        constructor(_position) {
            super(_position);
            this.infected = false;
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L10_VirusInheritance.Vector(0, 0);
            this.radius = 5;
            this.velocity = new L10_VirusInheritance.Vector(0, 0);
            this.velocity.random(5, 10);
        }
        draw() {
            let virusSpike = new Path2D();
            for (let i = 0; i < 10; i++) {
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
                L10_VirusInheritance.crc2.fillStyle = "#52040D";
                L10_VirusInheritance.crc2.fill(virusSpike);
                L10_VirusInheritance.crc2.stroke(virusSpike);
            }
            let virusRand = new Path2D();
            virusRand.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            L10_VirusInheritance.crc2.fillStyle = "lightblue";
            L10_VirusInheritance.crc2.fill(virusRand);
            L10_VirusInheritance.crc2.stroke(virusRand);
            let virusKern = new Path2D();
            virusKern.arc(this.position.x, this.position.y, 20, 0, 2 * Math.PI);
            L10_VirusInheritance.crc2.fillStyle = "blue";
            L10_VirusInheritance.crc2.fill(virusKern);
            L10_VirusInheritance.crc2.stroke(virusKern);
        }
        move(_timeslice) {
            if (this.infected == false) {
                if (this.position.y < 250) {
                    super.move(_timeslice * 2);
                }
                else {
                    super.move(_timeslice);
                }
            }
        }
        isInfected() {
            if (this.position.y < 125) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    L10_VirusInheritance.Corona = Corona;
})(L10_VirusInheritance || (L10_VirusInheritance = {}));
//# sourceMappingURL=corona.js.map