let num = parseFloat(prompt("Informe o número que deseja saber a tabuada (de 1 a 20)"));

let mul = "";

for(let i = 1; i <= 20; i++){
    let res = num * i;
    mul += +num+" x "+i+" = "+res+"\n";
}

alert("Robô da Tabuada\n"+mul);