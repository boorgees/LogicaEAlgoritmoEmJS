const hora = 23;
let saudacao;

if (hora < 12) {
    saudacao = 'Bom dia!';
} else if (hora < 18) {
    saudacao = 'Boa tarde!';
} else if (hora < 22) {
    saudacao = 'Boa noite!';
} else {
    saudacao = 'Hora de dormir DEV, chega de codar!';
}

console.log(saudacao);