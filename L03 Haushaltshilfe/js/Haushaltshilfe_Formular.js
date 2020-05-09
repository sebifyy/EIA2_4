"use strict";
var L03;
(function (L03) {
    window.addEventListener("load", init);
    function init(_event) {
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
})(L03 || (L03 = {}));
//# sourceMappingURL=Haushaltshilfe_Formular.js.map