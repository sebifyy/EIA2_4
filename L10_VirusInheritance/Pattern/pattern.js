"use strict";
var L10_VirusInheritance;
(function (L10_VirusInheritance) {
    class Pattern {
        constructor(_position) {
            this.position = _position;
        }
        draw(_position) {
            let pattern = document.createElement("canvas").getContext("2d");
            let gradient = L10_VirusInheritance.crc2.createLinearGradient(0, 0, 0, 500);
            gradient.addColorStop(0, "rgb(180, 0, 76)");
            gradient.addColorStop(1, "rgb(250, 0, 23)");
            L10_VirusInheritance.crc2.fillStyle = gradient;
            L10_VirusInheritance.crc2.fillRect(0, 0, L10_VirusInheritance.crc2.canvas.width, L10_VirusInheritance.crc2.canvas.height);
            pattern.canvas.width = 40;
            pattern.canvas.height = 20;
            pattern.fillStyle = "Transparent";
            pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
            pattern.moveTo(0, 10);
            pattern.lineTo(10, 10);
            pattern.lineTo(20, 0);
            pattern.lineTo(30, 0);
            pattern.lineTo(40, 10);
            pattern.lineTo(30, 20);
            pattern.lineTo(20, 20);
            pattern.lineTo(10, 10);
            pattern.stroke();
            L10_VirusInheritance.crc2.fillStyle = L10_VirusInheritance.crc2.createPattern(pattern.canvas, "repeat");
            L10_VirusInheritance.crc2.fillRect(0, 0, L10_VirusInheritance.crc2.canvas.width, L10_VirusInheritance.crc2.canvas.height);
        }
    }
    L10_VirusInheritance.Pattern = Pattern;
})(L10_VirusInheritance || (L10_VirusInheritance = {}));
//# sourceMappingURL=pattern.js.map