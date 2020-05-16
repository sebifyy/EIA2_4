/*
Aufgabe: Aufgabe 4
Name: Sebastian Hoffmann
Matrikel: 259316
Datum: 15.05.2020

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe (in Zusamnnearbeit mit Johannes Rümenapp und Mario Eigeldinger). Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace HaushaltshilfeFormularL04 {

    //Wenn die Seite lädt wird die Funktion init aufgerufen
    window.addEventListener("load", init);

    function init(): void {
        seiteGenerieren(allProducts);
        seiteGenerierenServices(allServices);


        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
        }
    }

    let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
    let fieldset2: HTMLFieldSetElement = document.createElement("fieldset");
    let legend: HTMLLegendElement = document.createElement("legend");
    let legend2: HTMLLegendElement = document.createElement("legend");

    function seiteGenerieren(_product: Product[]): void {
        document.getElementById("inhalt").appendChild(fieldset);
        fieldset.appendChild(legend);
        legend.innerText = "Produkt";
            
        // das gleiche wie for(let i = 0; i < _data.length; i++){}
        for (let currentPosition in _product) {
            let product: Product = _product[currentPosition];
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            fieldset.appendChild(checkbox);
            let div: HTMLDivElement = document.createElement("div");
            fieldset.appendChild(div);
            div.innerText = product.name + " " + product.unit + " " + product.price + "€";
            
        }
    }

    function seiteGenerierenServices(_service: service[]): void {
        document.getElementById("services").appendChild(fieldset2);
        fieldset2.appendChild(legend2);
        legend2.innerText = "Services, was brauchsch du?";
        
            
        // das gleiche wie for(let i = 0; i < _data.length; i++){}
        for (let currentPosition in _service) {
            let service: service = _service[currentPosition];
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            fieldset2.appendChild(checkbox);
            let div: HTMLDivElement = document.createElement("div");
            fieldset2.appendChild(div);
            div.innerText = service.name + " " + service.price + "€";
           
            
        }

}