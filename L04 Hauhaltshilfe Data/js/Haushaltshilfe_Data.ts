namespace HaushaltshilfeFormularL04 {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        //fillShopping("Einkaufen");
        fillConfigurator("Einkaufen", allProducts)
        
        console.log("Init");
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            console.log(fieldset);
            fieldset.addEventListener("change", handleChange);
        }
    }
    
    function handleChange(_event: Event): void {
        let felder: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let anzahl: number = 0;
        let preis: number = 0;
        document.getElementById("ÜbersichtEinkaufen").innerHTML = "";
        document.getElementById("ÜbersichtHaushaltsarbeiten").innerHTML = "";
        document.getElementById("ÜbersichtBanktransaktionen").innerHTML = "";
        document.getElementById("ÜbersichtPreis").innerHTML = "Preis: ";
        for (let i: number = 0; i < felder.length; i++) {
            if (felder[i].checked == true) {
                preis = Number(felder[i].value);
                anzahl += preis;
                console.log(anzahl);
                if (felder[i].name == "Checkbox1" || felder[i].name == "Checkbox2" || felder[i].name == "Checkbox3" || felder[i].name == "Checkbox4") {
                    let ziel = document.createElement("ul");
                    ziel.innerHTML = `${felder[i].id}, `;
                    document.getElementById("ÜbersichtEinkaufen").appendChild(ziel);
                } else if (felder[i].name == "Radiogroup2") {
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


    function fillConfigurator(_htmlId: string, _srcArray: Products[]): void {
        let node: HTMLElement = document.getElementById(_htmlId);
        let childNodeHTML: string;
        for (let i: number = 0; i < _srcArray.length; i++) {
            childNodeHTML = "";
            childNodeHTML += "<option value='" + [i] + "'data-price='" + _srcArray[i].price + "'>" + _srcArray[i].name + " " + _srcArray[i].price + "EUR</option>"; //<option value="[i]">BAUMNAME</option>
            node.innerHTML += childNodeHTML;
            console.log(childNodeHTML);
        }
}