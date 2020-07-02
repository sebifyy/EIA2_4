"use strict";
var L10_VirusInheritance;
(function (L10_VirusInheritance) {
    console.log("load");
    L10_VirusInheritance.infected = true;
    let cells = [];
    /*let humanCells: HumanCell[] = [];
    let antibodies: Antibody[] = [];
    let particles: Particle[] = [];
    let killerCells: KillerCell[] = [];
    let coroni: Corona[] = [];*/
    let background;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        L10_VirusInheritance.crc2 = canvas.getContext("2d");
        createBackground();
        createCells();
        window.setInterval(animate, 20);
    }
    L10_VirusInheritance.handleLoad = handleLoad;
    function createBackground() {
        let x = 0;
        let y = 0;
        let position = new L10_VirusInheritance.Vector(x, y);
        let pattern = new L10_VirusInheritance.Pattern(position);
        pattern.draw(position);
        background = L10_VirusInheritance.crc2.getImageData(0, 0, L10_VirusInheritance.crc2.canvas.width, L10_VirusInheritance.crc2.canvas.height);
    }
    function createCells() {
        let x;
        let y;
        let nParticles = 50;
        let nCells = 10;
        let nAntibodies = 15;
        //Particles
        for (let i = 0; i < nParticles; i++) {
            x = (Math.random() * L10_VirusInheritance.crc2.canvas.width);
            y = (Math.random() * L10_VirusInheritance.crc2.canvas.height);
            let position = new L10_VirusInheritance.Vector(x, y);
            let particle = new L10_VirusInheritance.Particle(position);
            particle.draw();
            cells.push(particle);
        }
        //Antibodies
        for (let i = 0; i < nAntibodies; i++) {
            x = (Math.random() * L10_VirusInheritance.crc2.canvas.width);
            y = (100 + Math.random() * L10_VirusInheritance.crc2.canvas.height / 1.5);
            let position = new L10_VirusInheritance.Vector(x, y);
            let antibody = new L10_VirusInheritance.Antibody(position);
            antibody.draw();
            cells.push(antibody);
        }
        //HumanCells
        for (let i = 0; i < nCells; i++) {
            x = (Math.random() * L10_VirusInheritance.crc2.canvas.width);
            y = (100 + Math.random() * L10_VirusInheritance.crc2.canvas.height);
            let position = new L10_VirusInheritance.Vector(x, y);
            let humancell = new L10_VirusInheritance.HumanCell(position);
            humancell.draw();
            cells.push(humancell);
        }
        //KillerCells
        for (let i = 0; i < nCells; i++) {
            x = (Math.random() * L10_VirusInheritance.crc2.canvas.width);
            y = (100 + Math.random() * L10_VirusInheritance.crc2.canvas.height / 1.5);
            let position = new L10_VirusInheritance.Vector(x, y);
            let killercell = new L10_VirusInheritance.KillerCell(position);
            killercell.draw();
            cells.push(killercell);
        }
        //coronaCell
        for (let i = 0; i < nCells; i++) {
            x = (Math.random() * L10_VirusInheritance.crc2.canvas.width);
            y = (100 + Math.random() * L10_VirusInheritance.crc2.canvas.height / 1.5);
            let position = new L10_VirusInheritance.Vector(x, y);
            let corona = new L10_VirusInheritance.Corona(position);
            corona.draw();
            cells.push(corona);
        }
    }
    function animate() {
        L10_VirusInheritance.crc2.putImageData(background, 0, 0);
        for (let Moveable of cells) {
            if (Moveable instanceof L10_VirusInheritance.Antibody || Moveable instanceof L10_VirusInheritance.Corona)
                Moveable.move(1 / 20);
            else if (Moveable instanceof L10_VirusInheritance.HumanCell)
                Moveable.move(1 / 20);
            else if (Moveable instanceof L10_VirusInheritance.Particle)
                Moveable.move(1 / 80);
            Moveable.draw();
        }
        //isInfected(); 
        /*for (let particle of particles) {
            particle.move(1 / 80);
            particle.draw();
        }



        for (let antibody of antibodies) {
            antibody.move(1 / 50);
            antibody.draw();
        }



        for (let humancell of humanCells) {
            humancell.move(1 / 20);
            humancell.draw();
        }

        for (let corona of coroni) {
            corona.move(1 / 10);
            corona.draw();
        }

        for (let killercell of killerCells) {
            killercell.move(1 / 80);
            killercell.draw();
        }*/
    }
    /* function isInfected(): void {
         for (let Moveable of cells ) {
             if (Moveable instanceof Corona && Moveable.isInfected()) {
 
                 reactionStarting(Moveable);
                 infectedHumanCell(Moveable.position.x);
             }
 
         }
 
     }
 
     function reactionStarting (_corona: Corona): void {
         _corona.isInfected = true;
         window.setTimeout(function(): void {
             reactionEnding(_corona);
         }, 3000);
     }
 
 
     function reactionEnding(_corona: Corona) {
         _corona.isInfected = false;
     }
 
 
     function infectedHumanCell(_position: number) {
 
         //Frage
     }*/
})(L10_VirusInheritance || (L10_VirusInheritance = {}));
//# sourceMappingURL=main.js.map