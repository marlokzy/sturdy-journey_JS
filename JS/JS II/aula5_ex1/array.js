let paciente = "";
const fila = [];
alert("Bem vindo a fila de espera!!!");
let nomePaciente = "";
let posicao = "";

do {    
    const opcao = prompt("Escolha uma opção para continuar\n\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair do programa");

    switch (opcao) {
        case "1":
            nomePaciente = prompt("Digite o nome do novo paciente:");
            fila.push(nomePaciente);
            alert(fila);
            break;
        case "2":
            const pacienteConsultado = fila.shift();
            alert("O paciente consultado foi: "+pacienteConsultado);
            break;
        case "3":
            alert("Encerrando programa");
            break;
        default:
            break;
    }

    for (let indice = 0; indice < fila.length; indice++) {
        const elemento = fila[indice];
        alert(indice +"º - "+elemento);
    }

    //  posicao = fila.indexOf(nomePaciente)+"º - "+nomePaciente;
    // alert(posicao)

} while (opcao !== "3");