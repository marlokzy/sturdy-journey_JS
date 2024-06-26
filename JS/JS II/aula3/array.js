// Estrutura de um Array
const array = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"];
console.log(array);

// Adicionar Elementos
// push -> adiciona elementos no final da lista (array)
array.push("Boromir"); 
console.log(array);

/* --> mais exemplos com push
tamanho = array.push("Boromir"); // adicionando a uma variavel ele retornará qual é o tamanho da lista (array)
console.log(array); // exibiu o array com o elemento adicionado no final da lista por causa da função push
console.log(tamanho); // imprimiu qual é o tamanho da lista (array)
*/

// unshift -> adiciona elementos no começo da lista (array)
array.unshift("Boromir");
console.log(array);

/* --> mais exemplos com unshift
tamanho = array.unshift("Boromir"); // adicionando a uma variavel ele retornará qual é o tamanho da lista (array)
console.log(array); // exibiu o array com o elemento adicionado no começo do lista por causa da função unshift
console.log(tamanho); // imprimiu qual é o tamanho da lista (array)
*/

// Remover Elementos
// pop -> remove elementos no final da lista (array)
array.pop();
console.log(array);

/* --> mais exemplos com pop
const ultimoElemento = array.pop(); // adicionando a uma variavel ele retornará qual foi o elemento removido
console.log(array); // exibiu o array sem o ultimo elemento por causa da função pop
console.log(ultimoElemento); // imprimiu qual foi o ultimo elemento removido
*/

// shift -> remove elementos no começo da lista (array)
array.shift();
console.log(array);

/* --> mais exemplos com shift
const ultimoElemento = array.shift(); // adicionando a uma variavel ele retornará qual foi o elemento removido
console.log(array); // exibiu o array sem o primeiro elemento por causa da função shift
console.log(ultimoElemento); // imprimiu qual foi o elemento do começo da lista removido
*/

// Pesquisar por um Elemento
// includes
const inclui = array.includes("Gandalf"); // ele vai pesquisar e verificar se esse "Gandalf" existe no array e vai retornar um valor booleano, True ou False
console.log(inclui);

// indexOf
const indice = array.indexOf("Gandalf");// ele vai retornar a posição exata desse "Gandalf" no array
console.log(indice);

// Cortar e Concatenar
// slice -> cortar (Ele não modifica o array faz como se fosse uma cópia, para poder trabalhar com segurança)
const hobbits = array.slice(0, 4); // vai cortar os elementos presentes da posição 0 a 3 totalizando 4 elementos 
console.log(array);
console.log(hobbits); // vai exibir quais foram os elementos que foram cortados 

// mais exemplos com slice
const outros = array.slice(-4); // colocando valor negativo ele pegará os elementos de forma inversa (do final para o começo), ou seja, o ultimo elemento do array será como o -1 do array
console.log(hobbits); // vai exibir quais foram os elementos que foram cortados anteriormente (que no caso foi os 4 primeiros)
console.log(outros); // vai exibir quais foram os elementos que foram cortados (que no caso foi os 4 ultimos)

// concat -> concatenar
const sociedade = hobbits.concat(outros, "Boromir"); // concatenou o array hobbits com o array outros e adicionou o elemento "Boromir" graças a função .concat e armazenou tudo na variavel sociedade
console.log(sociedade);

// Substituição dos Elementos
// splice -> serve para remover um grupo de elemetos do array e substituir esse grupo por outros elementos
// const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento"); // essa função vai pegar apartir da variavel indice que está referente no assunto sobre o indexOf(que é 4), e apartir do quatro vai excluir 1 elemento e substituir por "Gandalf, o Cinzento" como solicitei e armazenar na variavel sociedade
// console.log(sociedade);
// console.log(elementosRemovidos); // como armazenei tudo na variavel elementosRemovidos, aqui ele vai printar qual foi o elementos que foi removido 

// mais exemplos com splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento", 1, 3, false, true); 
console.log(sociedade);
console.log(elementosRemovidos); 

// Iterar sobre os Elementos -> fazer a repetição percorrendo cada um dos elementos do array
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice];
    console.log(elemento + " se encontra na posição "+indice);
} // Usando o for para percorrer cada elemento do array