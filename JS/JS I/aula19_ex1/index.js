const nomeCarro = prompt("Digite o nome do carro 1:");
const velocidadeCarro = prompt("Digite a velocidade do carro 1:");
const nomeCarro2 = prompt("Digite o nome do carro 2:");
const velocidadeCarro2 = prompt("Digite a velocidade do carro 2:");

if (velocidadeCarro > velocidadeCarro2) {
  alert(
    "O(A) "+ nomeCarro+" com " +
      velocidadeCarro +
      "km/h é mais veloz que o(a) "+nomeCarro2+" com " +
      velocidadeCarro2 +
      "km/h"
  );
} else if (velocidadeCarro === velocidadeCarro2) {
  alert(
    "O(A) "+nomeCarro+" com " +
      velocidadeCarro +
      "km/h possui a mesma velocidade que o(a) "+nomeCarro2+" com os mesmos " +
      velocidadeCarro2 +
      "km/h"
  );
} else {
  alert(
    "O(A) "+nomeCarro2+" com " +
      velocidadeCarro2 +
      "km/h é mais veloz que o(a) "+nomeCarro+" com " +
      velocidadeCarro +
      "km/h"
  );
}
