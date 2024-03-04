// Personagem 1 (ataque)
const nomeP1 = prompt("Insira o nome do personagem 1, que irá atacar!:");
const poderAtk = prompt("Insira o poder do ataque:");

// Personagem 2 (defesa)
const nomeP2 = prompt("Insira o nome do personagem 2, que irá defender!:");
const ptsDeVida = prompt("Insira a quantidade de vida do personagem 2:");
const poderDef = prompt("Insira o poder de defesa:");
const escudo = prompt("O personagem defensor possui escudo?");

// Regras
const r1 = poderAtk - poderDef;
const r2 = r1 / 2;
const r3 = 0;

if (ptsDeVida>0) {
  if (poderAtk > poderDef && escudo === "Não") {
    alert(
      "O dano causado foi " +
        r1 +
        "\nTotal de vida do defensor: " +
        ptsDeVida +
        "\nDepois do ataque: " +
        (ptsDeVida - r1)
    );
  } else if (poderAtk > poderDef && escudo === "Sim") {
    alert(
      "O dano causado foi " +
        r2 +
        "\nTotal de vida do defensor: " +
        ptsDeVida +
        "\nDepois do ataque: " +
        (ptsDeVida - r2)
    );
  } else if (poderAtk <= poderDef) {
    alert(
      "O dano causado foi " +
        r3 +
        "\nTotal de vida do defensor: " +
        ptsDeVida +
        "\nDepois do ataque: " +
        (ptsDeVida - r3)
    );
  }
}
else{
  alert('Tente novamente a quantidade de vida do personagem 2 não pode ser 0.');
}
