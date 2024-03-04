const firstName= prompt('Escreva seu primeiro nome:');
const lastName= prompt('Escreva seu sobrenome:');
const knowleadge= prompt('Qual seu campo de estudo?');
const year= prompt('Qual o ano do seu nascimento?');

const age= parseInt(2023-(year));

alert('Recruta cadastrado com sucesso!\n\n' +
'Seu nome completo é '+ firstName +' '+ lastName + 
'\nSua área de estudo é '+ knowleadge + 
'\nE sua idade é '+ age +'.');