do {
    const money = parseFloat(prompt("Qual é a quantidade de dinheiro disponivel?"));

    const option = alert("Saldo: "+money+"\n1 - Adicionar dinheiro\n2 - Remover dinheiro\n3 - Sair");

    switch (option) {
        case "1":
                const remDin = prompt("Quantidade a ser adicionada:");

                money += remDin;
            break;        
        case "2":
                const addDin = prompt("Quantidade a ser removida:");

                money -= addDin;
            break;        
        case "3":
              alert("O programa está sendo encerrado!");
            break;
        
        default:
            break;
    }

} while (option !== "3");