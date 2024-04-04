const word = prompt("Me informe a palavra para identificar se é um palíndromo! (tudo em minúsculo)");

let invWord = "";

// macarrão -> tem 8 letras mas na programação a primeira letra sempre começa pelo 0, ficando 7, por isso do menos 1, já que o método .lenght puxa o tamanho original da palavra que é 8
for (let i = word.length - 1; i >= 0; i--) {
    invWord += word[i];
}

// verificação para ver se a palavra é ou não é igual em ambos os sentidos
if (word === invWord) {
    alert("A palavra "+word+" é um palíndromo!\n\n"+
    word+" == "+invWord);
} else{
    alert("A palavra "+word+" não é um palíndromo!\n\n"+
    word+" !== "+invWord);
}

