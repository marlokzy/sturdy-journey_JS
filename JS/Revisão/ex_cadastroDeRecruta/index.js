//input
let firstName = window.prompt("Qual seu primeiro nome?");
let middleName = window.prompt("Qual seu sobrenome?");
let fieldStudy = window.prompt("Qual seu campo de estudo?");
let yearBirth = window.prompt("Qual seu ano de nascimento?");

let age = 2024 - yearBirth;

//output
window.alert("Recruta cadastrado com sucesso!\n"+"\nNome completo: "+firstName+" "+middleName+"\nCampo de estudo: "+fieldStudy+"\nIdade: "+age);