"use strict";
var L10_VirusInheritance;
(function (L10_VirusInheritance) {
    class Antibody extends L10_VirusInheritance.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L10_VirusInheritance.Vector(0, 0);
            this.velocity = new L10_VirusInheritance.Vector(0, 0);
            this.velocity.random(2, 5);
            this.rotation = Math.random() * 360;
        }
        draw() {
            let antibody = new Path2D();
            antibody.moveTo(this.position.x, this.position.y);
            antibody.rect(this.position.x, this.position.y, 75, 20);
            L10_VirusInheritance.crc2.fillStyle = "white";
            L10_VirusInheritance.crc2.fill(antibody);
            L10_VirusInheritance.crc2.stroke(antibody);
            L10_VirusInheritance.crc2.fillStyle = "white";
            L10_VirusInheritance.crc2.lineTo(this.position.x, this.position.y);
        }
    }
    L10_VirusInheritance.Antibody = Antibody;
})(L10_VirusInheritance || (L10_VirusInheritance = {}));
//# sourceMappingURL=antibody.js.map