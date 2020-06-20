"use strict";
var L08_CanvasVirus;
(function (L08_CanvasVirus) {
    document.addEventListener("DOMContentLoaded", init);
    let canvas;
    let crc2;
    function generateRandomCluster(_area, _count) {
        let returnValue = new Array();
        for (let i = 0; i < _count; i++) {
            let newPoint = {
                x: Math.random() * _area.width + _area.x,
                y: Math.random() * _area.height + _area.y
            };
            returnValue.push(newPoint);
        }
        return returnValue;
    }
    /**
     * The initialization function.
     * @returns Absolutely nothing.
     */
    function init() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        drawBackground();
        //MenschlicheMenschen Malen
        let areaHumanCell = {
            x: 0, y: 50, width: window.innerWidth, height: window.innerHeight / 3
        };
        let humanCellLocations = generateRandomCluster(areaHumanCell, 15);
        humanCellLocations.forEach(function (item) {
            drawHumanCell(item.x, item.y);
        });
        //Antikoerper malen
        let areaAntiBody = {
            x: 0, y: 50 + window.innerHeight / 3, width: window.innerWidth, height: window.innerHeight / 3
        };
        let antiBodyLocations = generateRandomCluster(areaAntiBody, 25);
        antiBodyLocations.forEach(function (item) {
            drawAntibody(item.x, item.y);
        });
        //Corona malen
        let areaCorona = {
            x: 0, y: innerHeight * 2 / 3, width: window.innerWidth, height: window.innerHeight / 3
        };
        let coronaLocations = generateRandomCluster(areaCorona, 30);
        coronaLocations.forEach(function (item) {
            drawVirus(item.x, item.y);
        });
        /*
                for (let i: number = 0; i < 7; i++) {
                    let x: number = Math.random() * canvas.width;
                    let y: number = Math.random() * canvas.height;
                    drawHumanCell(x, y);
                }
        
                for (let i: number = 0; i < 4; i++) {
                    let x: number = Math.random() * canvas.width;
                    let y: number = Math.random() * canvas.height;
                    drawVirus(x, y);
                }
        
                for (let i: number = 0; i < 4; i++) {
                    let x: number = Math.random() * canvas.width;
                    let y: number = Math.random() * canvas.height;
                    drawAntibody(x, y);
                } */
    }
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "rgb(180, 0, 76)");
        gradient.addColorStop(1, "rgb(250, 0, 23)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        let pattern = document.createElement("canvas").getContext("2d");
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
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }
    //humanistische zelle
    function drawHumanCell(_x, _y) {
        let zelle = new Path2D();
        zelle.arc(_x, _y, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "orange";
        crc2.fill(zelle);
        crc2.stroke(zelle);
        let zellekern = new Path2D();
        zellekern.arc(_x, _y, 45, 0, 2 * Math.PI);
        crc2.fillStyle = "red";
        crc2.fill(zellekern);
        crc2.stroke(zellekern);
    }
    // Virus
    function drawVirus(_x, _y) {
        let virusSpike = new Path2D();
        for (let i = 0; i < 10; i++) {
            virusSpike.moveTo(_x + 70, _y);
            virusSpike.lineTo(_x - 25, _y - 10);
            virusSpike.lineTo(_x + 25, _y + 10);
            virusSpike.closePath();
            virusSpike.moveTo(_x - 70, _y);
            virusSpike.lineTo(_x - 25, _y - 10);
            virusSpike.lineTo(_x + 25, _y + 10);
            virusSpike.closePath();
            virusSpike.moveTo(_x, _y + 70);
            virusSpike.lineTo(_x - 25, _y - 10);
            virusSpike.lineTo(_x + 25, _y + 10);
            virusSpike.closePath();
            virusSpike.moveTo(_x, _y - 70);
            virusSpike.lineTo(_x - 25, _y - 10);
            virusSpike.lineTo(_x + 25, _y + 10);
            virusSpike.closePath();
            crc2.fillStyle = "#52040D";
            crc2.fill(virusSpike);
            crc2.stroke(virusSpike);
        }
        let virusRand = new Path2D();
        virusRand.arc(_x, _y, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "lightblue";
        crc2.fill(virusRand);
        crc2.stroke(virusRand);
        let virusKern = new Path2D();
        virusKern.arc(_x, _y, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "blue";
        crc2.fill(virusKern);
        crc2.stroke(virusKern);
    }
    function drawAntibody(_x, _y) {
        let antibody = new Path2D();
        antibody.moveTo(_x, _y);
        antibody.rect(_x, _y, 75, 20);
        crc2.fillStyle = "white";
        crc2.fill(antibody);
        crc2.stroke(antibody);
        crc2.fillStyle = "white";
        crc2.lineTo(_x, _y);
    }
})(L08_CanvasVirus || (L08_CanvasVirus = {}));
//# sourceMappingURL=canvas.js.map