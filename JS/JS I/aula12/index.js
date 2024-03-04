let nome = 'Marlon'

console.log(nome); //imprimi no console
console.error(nome); //imprimi na mensagem de erro do console
console.warn(nome); //imprimi na mensagem de aviso do console

// window.alert(nome); -> imprimi na aba/janelinha atual do navegador
// window.prompt('Insira o seu nome:'); -> abre um prompt na aba/janelinha p vc escrever algo 
// nome= window.prompt(nome); -> para armazenar o que eu escrever na variavel nome
// console.log(nome); -> para exibir depois o que eu escrevi no window.prompt
// window.confirm('Confirma essa ação?'); -> abre uma janelinha de confirmação p vc escolher
let confirmação= window.confirm('Confirma essa ação?'); // -> para armazenar a minha escolha 
console.log(confirmação); // -> para exibir depois minha escolha no console (true ou false)

// Window é um objeto global do navegador -> todas essas funções mostradas anteriormente vai funcionar sem referenciar o objeto window. Ex: alert('ola mundo'), prompt('escreva algo:')...