"use strict";
/*
Aufgabe: Aufgabe 4
Name: Sebastian Hoffmann
Matrikel: 259316
Datum: 15.05.2020

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe (in Zusamnnearbeit mit Johannes Rümenapp und Mario Eigeldinger). Er wurde nicht kopiert und auch nicht diktiert.
*/
var HaushaltshilfeFormularL04;
(function (HaushaltshilfeFormularL04) {
    //Wenn die Seite lädt wird die Funktion init aufgerufen
    window.addEventListener("load", init);
    function init() {
        seiteGenerieren(HaushaltshilfeFormularL04.allProducts);
        seiteGenerierenServices(HaushaltshilfeFormularL04.allServices);
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
        }
    }
    let fieldset = document.createElement("fieldset");
    let fieldset2 = document.createElement("fieldset");
    let legend = document.createElement("legend");
    let legend2 = document.createElement("legend");
    function seiteGenerieren(_product) {
        document.getElementById("inhalt").appendChild(fieldset);
        fieldset.appendChild(legend);
        legend.innerText = "Produkt";
        // das gleiche wie for(let i = 0; i < _data.length; i++){}
        for (let currentPosition in _product) {
            let product = _product[currentPosition];
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            fieldset.appendChild(checkbox);
            let div = document.createElement("div");
            fieldset.appendChild(div);
            div.innerText = product.name + " " + product.unit + " " + product.price + "€";
        }
    }
    function seiteGenerierenServices(_service) {
        document.getElementById("services").appendChild(fieldset2);
        fieldset2.appendChild(legend2);
        legend2.innerText = "Services, was brauchsch du?";
        // das gleiche wie for(let i = 0; i < _data.length; i++){}
        for (let currentPosition in _service) {
            let service = _service[currentPosition];
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            fieldset2.appendChild(checkbox);
            let div = document.createElement("div");
            fieldset2.appendChild(div);
            div.innerText = service.name + " " + service.price + "€";
        }
    }
})(HaushaltshilfeFormularL04 || (HaushaltshilfeFormularL04 = {}));
//# sourceMappingURL=main.js.map