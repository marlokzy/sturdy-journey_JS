let medidaMetro = parseFloat(prompt("Digite o valor em metro(s) - (m) que você deseja converter"));

const opcaoMedida = prompt("Para qual opção deseja converter?\nmilímetro (mm)\ncentímetro (cm)\ndecímetro (dm)\ndecâmetro (dam)\nhectômetro (hm)\nquilômetro (km)");

switch(opcaoMedida){
    case "mm":
        medidaMetro*=1000;
        alert("O resultado da conversão de metros para mm (milímetros) fica:  " +medidaMetro+ "mm");
        break;
    case "cm":
        medidaMetro*=100;
        alert("O resultado da conversão de metros para cm (centímetros) fica:  " +medidaMetro+ "cm");
        break;    
    case "dm":
        medidaMetro*=10;
        alert("O resultado da conversão de metros para dm (decímetros) fica:  " +medidaMetro+ "dm");
        break;    
    case "dam":
        medidaMetro/=10;
        alert("O resultado da conversão de metros para dam (decâmetros) fica:  " +medidaMetro+ "dam");
        break;    
    case "hm":
        medidaMetro/=100;
        alert("O resultado da conversão de metros para hm (hectômetros) fica:  " +medidaMetro+ "hm");
        break;    
    case "km":
        medidaMetro/=1000;
        alert("O resultado da conversão de metros para km (quilometros) fica:  " +medidaMetro+ "km");
        break;    
    default:
        alert("Opção Inválida!");
        break;
}