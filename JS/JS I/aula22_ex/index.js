const medidas = prompt("Insira uma medida em metros:");
const converter = prompt(
  "Para qual medida você quer converter?\n- mm (Milímetros)\n- cm (Centímetros\n- dm (Decímetros)\n- dam (Decâmetros)\n- hm (Hectômetros)\n- km (Quilometros)"
);

const mm = medidas * 1000;
const cm = medidas * 100;
const dm = medidas * 10;

const dam = medidas / 10;
const hm = medidas / 100;
const km = medidas / 1000;

switch (converter) {
  case "mm":
    alert("O resultado da conversão de metros para mm (milímetros) fica:  " +mm+ "mm");
    break;
  case "cm":
    alert("O resultado da conversão de " +medidas+ "m para cm (centímetros) fica:  " +cm+ "cm");
    break;
  case "dm":
    alert("O resultado da conversão de " +medidas+ "m para dm (decímetros) fica:  " +dm+ "dm");
    break;
  case "dam":
    alert("O resultado da conversão de " +medidas+ "m para dam (decâmetros) fica:  " +dam+ "dam");
    break;
  case "hm":
    alert("O resultado da conversão de " +medidas+ "m para hm (hectômetros) fica:  " +hm+ "hm");
    break;
  case "km":
    alert("O resultado da conversão de " +medidas+ "m para km (quilometros) fica:  " +km+ "km");
    break;

  default: alert("Opção inválida!!!");
    break;
}
