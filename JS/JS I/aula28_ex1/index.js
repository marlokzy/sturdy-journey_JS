let option = "";

do {
    option = prompt("Escolha uma das opções:\n1- .\n2 - ..\n3 - ...\n4 - ....\n5 - encerrar programa");

    switch(option){
        case "1":
            alert("a opção escolhida foi a 1");   
            break 
        case "2":
            alert("a opção escolhida foi a 2"); 
            break   
        case "3":
            alert("a opção escolhida foi a 3");   
            break
        case "4":
            alert("a opção escolhida foi a 4");    
            break
        case "5":
            alert("a opção escolhida foi a 5");
            break
    }
} while(option !== "5");

alert("O sistema está sendo encerrado!!!");