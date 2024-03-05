const touristName = prompt("Informe seu nome:");
let askCity = prompt("Já visitou alguma cidade?");

let citys = "";
let quantityCity = 0;

while(askCity === "sim"){
    quantityCity += 1;
    let cityName = prompt("Qual o nome da cidade visitada?");
    // citys = citys + ...
    citys += " - "+cityName+"\n"

    let askCity2 = prompt("Visitou mais alguma cidade?");

if(askCity2 === "não"){
    break;
}}

alert("Nome do turista: "+touristName+"\nQuantas cidades visitou? "+quantityCity+"\nQuais foram as cidades visitadas?\n"+citys);