let option = "";

let money = parseFloat(prompt("Qual é a quantidade de dinheiro disponivel?"));

do {
    
    option = prompt("Saldo: R$ "+money+"\n1 - Adicionar dinheiro\n2 - Remover dinheiro\n3 - Sair");

    switch (option) {
        case "1":
                const remDin = parseFloat(prompt("Quantidade a ser adicionada:"));

                money += remDin;
            break;        
        case "2":
                const addDin = parseFloat(prompt("Quantidade a ser removida:"));

                money -= addDin;
            break;        
        case "3":
              alert("O programa está sendo encerrado!");
            break;
        
        default:
            alert("Opção Inválida!!!")
            break;
    }

} while (option !== "3");