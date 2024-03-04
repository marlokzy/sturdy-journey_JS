// input carro 1
const carName1 = prompt("Digite o nome do carro 1:");
const carFast1 = parseFloat(prompt("Digite a velocidade (em km/h) do carro 1:"));
// input carro 2
const carName2 = prompt("Digite o nome do carro 2:");
const carFast2 = parseFloat(prompt("Digite a velocidade (em km/h) do carro 2:"));

if (carFast1 > carFast2){
    alert("O(a) "+carName1+" à "+carFast1+" km/h é mais rápido que o(a) "+carName2+" à "+carFast2+" km/h");
} else if(carFast1 < carFast2){
    alert("O(a) "+carName2+" à "+carFast2+" km/h é mais rápido que o(a) "+carName1+" à "+carFast1+" km/h");
} else{
    alert("O(a) "+carName1+" à "+carFast1+" km/h tem a mesma velocidade que o(a) "+carName2+" à "+carFast2+" km/h também");
}
