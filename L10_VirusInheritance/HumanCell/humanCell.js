"use strict";
var L10_VirusInheritance;
(function (L10_VirusInheritance) {
    class HumanCell extends L10_VirusInheritance.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L10_VirusInheritance.Vector(0, 0);
            this.radius = 15;
            this.velocity = new L10_VirusInheritance.Vector(0, 0);
            this.velocity.random(5, 10);
        }
        draw() {
            let zelle = new Path2D();
            zelle.arc(this.position.x, this.position.x, 50, 0, 2 * Math.PI);
            L10_VirusInheritance.crc2.fillStyle = "orange";
            L10_VirusInheritance.crc2.fill(zelle);
            L10_VirusInheritance.crc2.stroke(zelle);
            let zellekern = new Path2D();
            zellekern.arc(this.position.x, this.position.x, 45, 0, 2 * Math.PI);
            L10_VirusInheritance.crc2.fillStyle = "red";
            L10_VirusInheritance.crc2.fill(zellekern);
            L10_VirusInheritance.crc2.stroke(zellekern);
        }
    }
    L10_VirusInheritance.HumanCell = HumanCell;
})(L10_VirusInheritance || (L10_VirusInheritance = {}));
//# sourceMappingURL=humanCell.js.map