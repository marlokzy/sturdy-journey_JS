// Personagem 1 (Atacante)
const character1 = prompt("Digite o nome do personagem 1 (Atacante):");
const powerATK = parseFloat(prompt("Digite seu poder de ataque (em quantidade):"));
// Personagem 2 (Defensor)
const character2 = prompt("Digite o nome do personagem 2 (Defensor):");
let life = parseFloat(prompt("Digite a quantidade de pontos de vida do personagem 2 (Defensor):"));
const powerDEF = parseFloat(prompt("Digite seu poder de defesa (em quantidade):"));
const shield = prompt("Ele possui escudo?");

// Lógica if, else if, else
if (powerATK > powerDEF && shield === "não") {
    const damageATK1 = powerATK - powerDEF;
    life -= damageATK1;
    alert("O dano sofrido (sem escudo) foi: "+damageATK1);
    alert("Nome do personagem 2 (defensor): "+character2+
    "\nQuantidade de pontos de vida atual: "+life+
    "\nSeu poder de defesa: "+powerDEF+
    "\nPossui escudo? "+shield);
} else if (powerATK > powerDEF && shield === "sim") {
    const damageATK2 = (powerATK - powerDEF)/2;
    life -= damageATK2;
    alert("O dano sofrido (com escudo) foi: "+damageATK2);
    alert("Nome do personagem 2 (defensor): "+character2+
    "\nQuantidade de pontos de vida atual: "+life+
    "\nSeu poder de defesa: "+powerDEF+
    "\nPossui escudo? "+shield);
} else if (powerATK < powerDEF || powerATK === powerDEF) {
    const damageATK3 = 0;
    life -= damageATK3;
    alert("O dano sofrido foi: "+damageATK3);
    alert("Nome do personagem 2 (defensor): "+character2+
    "\nQuantidade de pontos de vida atual: "+life+
    "\nSeu poder de defesa: "+powerDEF+
    "\nPossui escudo? "+shield);
} else {
    alert("Algo deu errado, tente novamente");
}



