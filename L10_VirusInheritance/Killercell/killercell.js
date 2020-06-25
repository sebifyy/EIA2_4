"use strict";
var L10_VirusInheritance;
(function (L10_VirusInheritance) {
    class KillerCell extends L10_VirusInheritance.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L10_VirusInheritance.Vector(0, 0);
            this.velocity = new L10_VirusInheritance.Vector(0, 0);
            this.velocity.random(5, 10);
            this.radius = 20;
        }
        draw() {
        }
    }
    L10_VirusInheritance.KillerCell = KillerCell;
})(L10_VirusInheritance || (L10_VirusInheritance = {}));
//# sourceMappingURL=killercell.js.map