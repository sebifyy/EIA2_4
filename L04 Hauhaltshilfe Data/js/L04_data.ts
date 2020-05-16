namespace HaushaltshilfeFormularL04 {
    
    export interface Product {
        name: string;
        unit: string;
        price: number;
    }

    export interface service {
        name: string;
        price: number;
    }

let cucumber: Product = {name: "Gurke", unit: "pcs", price: 0.49};
let cigarettes: Product = {name: "Zigaretten", unit: "pcs", price: 8};
let water: Product = {name: "Wasser", unit: "L", price: 0.29};
let noodles: Product = {name: "Rigatoni", unit: "kg", price: 2.99};

export let allProducts: Product[] = [cucumber, cigarettes, water, noodles];

let dog: service = {name: "Hund ausführen", price: 7.50}
let cleanWindows: service = {name: "Fenster putzen", price: 50}
let green: service = {name: "Rasen mähen", price: 30}

export let allServices: service[] = [dog, cleanWindows, green];

}