const name = prompt("Qual seu nome?");
const cidade = prompt("Já visitou alguma cidade?");

while (cidade === "sim") {
  const nomeCidade = prompt("Qual o nome da cidade?");
  const cidade = prompt("Já visitou alguma cidade?");

  if (cidade==="não") {
    alert(
      "Seu nome é:  " +
        name +
        "\nA cidade que você já visitou foi: " +
        nomeCidade
    );    
    break
  }
}

