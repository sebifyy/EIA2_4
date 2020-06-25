"use strict";
var L10_VirusInheritance;
(function (L10_VirusInheritance) {
    class Moveable {
        constructor(_position) {
            // console.log("Moveable");
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new L10_VirusInheritance.Vector(0, 0);
            this.radius = 5;
            this.velocity = new L10_VirusInheritance.Vector(0, 0);
        }
        draw() {
            //console.log("Moveable move"); 
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            //offset.scale(_timeslice);
            offset.x *= _timeslice * 0.5;
            offset.y *= _timeslice;
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += (L10_VirusInheritance.crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += L10_VirusInheritance.crc2.canvas.height;
            if (this.position.x > (L10_VirusInheritance.crc2.canvas.width))
                this.position.x -= (L10_VirusInheritance.crc2.canvas.width);
            if (this.position.y > L10_VirusInheritance.crc2.canvas.height)
                this.position.y -= L10_VirusInheritance.crc2.canvas.height;
        }
    }
    L10_VirusInheritance.Moveable = Moveable;
})(L10_VirusInheritance || (L10_VirusInheritance = {}));
//# sourceMappingURL=moveable.js.map