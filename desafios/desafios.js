// DESAFIO CIRCUNFERENCIA ----------------------------------
// let raio = 10
// const PI = 3.141592
// let resultado = Math.PI * raio * raio

// console.log("O resultado da área é:", resultado, "m².")




// DESAFIO TROCA DE VALORES ----------------------------------
// let a = 7;
// let b = 94;

// // let c = a;
// // a = b;
// // b = c;

// [a, b] = [b, a]

// console.log(a)
// console.log(b)




// DESAFIOS ARITMÉTICOS ----------------------------------

// let f = 73;
// let c = ((f - 32) / 1.8 )

// console.log(c)




// // TIPAGEM E VERIFICAÇÃO ----------------------------------
// let a = 1;
// let b = "1"
// let c = "1"

// console.log(a == b)
// console.log(a === b)
// console.log(b === c)




// DESAFIO ----------------------------------

// let a = 1;
// let b = 2;

// // 5 expressões que resultem em TRUE
// console.log(a < b)
// console.log(a <= b)
// console.log(a != b)
// console.log(a !== b)
// console.log(a + a === b )

// // 5 expressões que resultem em FALSE
// console.log(a > b)
// console.log(a >= b)
// console.log(a == b)
// console.log(a === b)
// console.log(a + a !== b)




// DESAFIO ----------------------------------

// fazer com que o resultado final seja concatenado a lista de aprovado em ordem
// let a = "Ana Silva"
// let b = "Pedro Albuquerque"
// let c = "Guilherme Pereira"
// let d = "Rebecca França"

// console.log("Lista de Aprovados\n==============\n " + "\n1." + a + "\n2." + b + "\n3." + c + "\n4." + d)

// let texto = "Lista de Aprovados\n"
// texto += "================\n\n"
// texto += "1. Ana Silva\n"
// texto += "2. Pedro Albulquerque\n"
// texto += "3. Guilherme Pereira\n"
// texto += "4. Rebeca França"

// console.log(texto)




// EXERCICIO 1 ----------------------------------

// let temDinheiro = false;
// let estaEnsolarado = true;
// let carroEstaNaGaragem = true;

// let resultadoE = "#1 (AND) - Vai pro shopping?"
// resultadoE += temDinheiro && estaEnsolarado
// console.log(resultadoE)

// let resultadoOU = "#2 (OR) - Vai pro shopping?"
// resultadoOU += estaEnsolarado || carroEstaNaGaragem
// console.log(resultadoOU)

// console.log(true !== true)
// console.log(true !== false)
// console.log(false !== true)
// console.log(false !== false)

// console.log("Não verdadeiro: " + !true)
// console.log("Não falso: " + !false)




// EXERCICIO 2 ----------------------------------

// const t1 = false;
// const t2 = false;

// let comprarTV50 = t1 && t2; // AND
// console.log('Vamos comprar a TV 50?', t1 && t2);

// let comprarTV32 = t1 !== t2; // XOR
// console.log('Vamos comprar a TV 32?', t1 != t2 );

// let tomarSorvete = t1 || t2; // OR
// console.log('Vamos comprar sorvete?', tomarSorvete);

// let ficarEmCasa = !tomarSorvete; // NOT
// console.log('Vamos ficar em casa?', ficarEmCasa)




// DESAFIO 1 ----------------------------------

// duas expressões resultando true (aritméticos, relacionais, lógicos)

// console.log(5 + 5 == 10 && 2 + 2 > 1)
// console.log(1 - 2 < 10 || 1 + 1 == 2)

// // duas expressões resultando false (aritméticos, relacionais, lógicos))

// console.log(10 / 2 != 5 || 5 + 5 == 1)
// console.log(10 * 2 == 12 || 20 * 1 !== 20)




// DESAFIO TERNÁRIO ---------------------------

// const a = 8;
// const b = 4;
// const operacao = '-'; // + - * /

// const resultado = operacao == '+' ? (a + b) : (operacao == '-' ? (a - b) :
//     (operacao == '*' ? (a * b) : (a / b)));

// console.log(resultado);




// DESAFIO IF -------------------------

// const nota = -1;

// if (nota > 10 && nota < 0) {
//     console.log("Insira uma nota válida!")
// }

// if (nota <= 10 && nota >= 9) {
//     console.log("A")
// }

// if (nota >= 7 && nota <= 8.9) {
//     console.log("B")
// }

// if (nota >= 5 && nota <= 6.9) {
//     console.log("C")
// }

// if (nota >= 4.5 && nota <= 4.9) {
//     console.log("D")
// }
// if (nota < 4.5 && nota >= 0) {
//     console.log("F")
// };




// DESAFIO IF/ELSE -----------------------

// const a = 10;
// const b = 28;
// const operacao = "*";// + - * / %

// let resultado;

// if (operacao === "*") {
//     resultado = (a * b);
// } else if (operacao === "+") {
//     resultado = (a + b);
// } else if (operacao === "-") {
//     resultado = (a - b);
// } else if (operacao === "/") {
//     resultado = (a / b);
// } else if (operacao === "%") {
//     resultado = (a % b);
// } else {
//     resultado = ("Impossível de executar.")
// }

// console.log(resultado);




// DESAFIO FOR -------------------

// for(let numero = 7; numero >= 3; numero--) {
//     console.log(numero)
// }




// DESAFIO FOR - SEM USAR NÚMEROS ---------------------------

// let linha = '';

// for (let n = "#"; n != "#######"; n += "#") {
//     console.log(n)
// }




// DESAFIO SWITCH ------------------------

// let nota = 9

// switch(Math.ceil(nota)) {
//     case 10:
//         console.log("A+");
//          break
//     case 9:
//         console.log("A");
//         break
//     case 8:
//         console.log("B+");
//         break
//     case 7:
//         console.log("B");
//         break
//     case 6:
//         console.log("C+");
//         break
//     case 5:
//         console.log("C");
//         break
//     case 4:
//         console.log("D+");
//         break
//     case 3:
//         console.log("D");
//         break
//     case 2:
//         console.log("E+");
//         break
//     case 1:
//         console.log("E");
//         break
//     case 0:
//         console.log("F");
//         break
//     default:
//     console.log("INSIRA UMA NOTA VÁLIDA!");
// }




// DESAFIO FUNÇÃO ------------------------------------

// let a = 1;
// let b = 2;

// function somar(a, b) {
//   console.log(a + b);
// }

// somar(a, b);
// somar(a, b);

// function subtracao(a, b) {
//   console.log(a - b);
// }

// subtracao(a, b);
// subtracao(a, b);




// DESAFIO FUNÇÃO ---  RECEBER NOTA E RETORNAR O CONCEITO

// function conceito(nota) {
//   switch (Math.ceil(nota)) {
//     case 10: return "A+";
//     case 9: return "A";
//     case 8: return "B+";;
//     case 7: return "B";
//     case 6: return "C+";
//     case 5: return "C";
//     case 4: return "D+";
//     case 3: return "D";
//     case 2: return "E";
//     case 1: return "E+";
//     case 0: return "F";
//     default: return null;
//   }

// }

// console.log(`O conceito do aluno é ${conceito(6.00123)}`);




// DESAFIO FUNÇÃO ------ RECEBER NOTA E PASSAR RESULTADO

// const nota1 = 7.8;
// const nota2 = 1.1;
// const nota3 = 7;

// function media() {
//     if (nota1 < nota2 && nota1 < nota3) {
//         return (nota2 + nota3) / 2;
//     }
//     else if (nota2 < nota1 && nota2 < nota3) {
//         return (nota1 + nota3) / 2;
//     }
//     else if (nota3 < nota2 && nota3 < nota1) {
//         return (nota1 + nota2) / 2;
//     }
// }

// var media = media();

// function aprovadoOuReprovado(media) {
//     if (nota1 == 0 || nota2 == 0 || nota3 == 0) {
//         console.log('As notas precisam ser no mínimo 0.1 pts!');
//     }
//     else if (media >= 7) {
//         console.log('Aprovado!')
//     }
//     else if (media >= 4 && media < 7) {
//         console.log('Recuperação!')
//     }
//     else if (media < 4) {
//         console.log('Reprovado!')
//     }
// }

// aprovadoOuReprovado(media);



// DESAFIO FOR/ARRAY ------------------------

//percorrer o a partir do penultimo elemento pulando de dois em dois

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = numeros.length - 2; i >= 0; i -= 2) {
//     console.log(numeros[i])
// }



// DESAFIO OBJETO 
// data com atributos: dia/mes/ano
// método: exibir -> "dia/mes/ano"

// const data = {
//     dia: 01,
//     mes: 06,
//     ano: 1994,
//     exibir: function () {
//         return `${this.dia}/${this.mes}/${this.ano}`
//     }
// }

// console.log(data.exibir())


