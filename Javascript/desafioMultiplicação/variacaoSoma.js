/* Desafio
Você receberá dois valores inteiros. Faça a leitura e em seguida calcule a soma entre estes dois valores. Atribua esta operação à variável SOMA, mostrando esta de acordo com a mensagem de saída esperada (exemplo abaixo).

Entrada
A entrada contém 2 valores inteiros.

Saída
Exiba a variável SOMA conforme exemplo abaixo, tendo obrigatoriamente um espaço em branco antes e depois da igualdade.

Exemplo de Entrada	Exemplo de Saída
3 9	SOMA = 12 */


//Supondo que é uma outra operação
let valor1 = parseInt(gets());
let valor2 = parseInt(gets());

let total = valor1 + valor2;

console.log("SOMA = " + total);