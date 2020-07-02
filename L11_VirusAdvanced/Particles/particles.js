"use strict";
var L10_VirusInheritance;
(function (L10_VirusInheritance) {
    class Particle extends L10_VirusInheritance.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L10_VirusInheritance.Vector(0, 0);
            this.velocity = new L10_VirusInheritance.Vector(0, 0);
            this.velocity.random(100, 200);
            this.radius = (Math.random() * 7) + 1;
        }
        draw() {
            console.log("draw Particle");
            let gradient = L10_VirusInheritance.crc2.createRadialGradient(0, 0, 0, 0, 0, this.radius);
            L10_VirusInheritance.crc2.save();
            L10_VirusInheritance.crc2.beginPath();
            L10_VirusInheritance.crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
            L10_VirusInheritance.crc2.closePath();
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 50%)");
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
            gradient.addColorStop(1, "#ffcc01");
            L10_VirusInheritance.crc2.fillStyle = gradient;
            L10_VirusInheritance.crc2.fill();
            L10_VirusInheritance.crc2.restore();
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.x *= 0;
            offset.y *= _timeslice * 1.2;
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += L10_VirusInheritance.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += L10_VirusInheritance.crc2.canvas.height;
            }
            if (this.position.x > L10_VirusInheritance.crc2.canvas.width) {
                this.position.x -= L10_VirusInheritance.crc2.canvas.width;
            }
            if (this.position.y > L10_VirusInheritance.crc2.canvas.height) {
                this.position.y -= L10_VirusInheritance.crc2.canvas.height;
            }
        }
    }
    L10_VirusInheritance.Particle = Particle;
})(L10_VirusInheritance || (L10_VirusInheritance = {}));
//# sourceMappingURL=particles.js.map