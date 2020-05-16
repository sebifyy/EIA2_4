"use strict";
var HaushaltshilfeFormularL04;
(function (HaushaltshilfeFormularL04) {
    window.addEventListener("load", init);
    function init(_event) {
        //fillShopping("Einkaufen");
        fillConfigurator("Einkaufen", HaushaltshilfeFormularL04.allProducts);
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            console.log(fieldset);
            fieldset.addEventListener("change", handleChange);
        }
    }
    function handleChange(_event) {
        let felder = document.getElementsByTagName("input");
        let anzahl = 0;
        let preis = 0;
        document.getElementById("ÜbersichtEinkaufen").innerHTML = "";
        document.getElementById("ÜbersichtHaushaltsarbeiten").innerHTML = "";
        document.getElementById("ÜbersichtBanktransaktionen").innerHTML = "";
        document.getElementById("ÜbersichtPreis").innerHTML = "Preis: ";
        for (let i = 0; i < felder.length; i++) {
            if (felder[i].checked == true) {
                preis = Number(felder[i].value);
                anzahl += preis;
                console.log(anzahl);
                if (felder[i].name == "Checkbox1" || felder[i].name == "Checkbox2" || felder[i].name == "Checkbox3" || felder[i].name == "Checkbox4") {
                    let ziel = document.createElement("ul");
                    ziel.innerHTML = `${felder[i].id}, `;
                    document.getElementById("ÜbersichtEinkaufen").appendChild(ziel);
                }
                else if (felder[i].name == "Radiogroup2") {
                    let ziel = document.createElement("ul");
                    ziel.innerHTML = `${felder[i].id}`;
                    document.getElementById("ÜbersichtHaushaltsarbeiten").appendChild(ziel);
                }
            }
        }
    }
    //function fillShopping(_htmlId: string): void {
    //    let node: HTMLElement = document.getElementById(_htmlId);
    //    console.log(node);
    //    node.innerHTML = "BLABLABLA";
    //}
    function fillConfigurator(_htmlId, _srcArray) {
        let node = document.getElementById(_htmlId);
        let childNodeHTML;
        for (let i = 0; i < _srcArray.length; i++) {
            childNodeHTML = "";
            childNodeHTML += "<option value='" + [i] + "'data-price='" + _srcArray[i].price + "'>" + _srcArray[i].name + " " + _srcArray[i].price + "EUR</option>"; //<option value="[i]">BAUMNAME</option>
            node.innerHTML += childNodeHTML;
            console.log(childNodeHTML);
        }
    }
})(HaushaltshilfeFormularL04 || (HaushaltshilfeFormularL04 = {}));
//# sourceMappingURL=Haushaltshilfe_Data.js.map