// let numeroSecreto = Math.floor(Math.random() * 10) + 1
// let tentativa = Number(prompt('Advinhe um número de 1 a 10'))
// let tentativas = 1
// let numerosSorteados = [tentativa]




// while (tentativa !== numeroSecreto) {
//     if (tentativa > 10 || isNaN(tentativa)) {
//         alert('Digite um número válido')
//         tentativa = Number(prompt('Advinhe um número de 1 a 10'))
//         continue;
//     }
//     if (tentativa > numeroSecreto) {
//         tentativa = Number(prompt('O número é menor'))
//     } else {
//         tentativa = Number(prompt('O número é maior'))
//     }

//     tentativas++

//  numerosSorteados.push(tentativa)
// }

// alert(`Parabéns!O número era ${numeroSecreto} Você acertou em ${tentativas} tentativas. Os números que você tentou foram: ${numerosSorteados.join(', ')}`)

let numeroSecreto = Math.floor(Math.random() * 10) + 1
let tentativas = 0
let numerosSorteados = []
let balaoDeFala = document.getElementById('balao-fala')
let botao = document.getElementById('botao')
let paragrafoUm = document.getElementById('paragrafo-um')
let paragrafoDois = document.getElementById('paragrafo-dois')
let numeroDeVezes = document.getElementById('numero')
let contador = document.getElementById('tentativas')
let numerosUsados = document.getElementById('numeros-usados')

function verificarTentativa() {
    let input = document.getElementById('input')
    let tentativa = parseInt(input.value)

    if (botao.innerText === 'Jogar novamente') {
        reiniciarJogo()
        return
    }

    if (tentativa > 10 || tentativa < 1 || isNaN(tentativa)) {
        balaoDeFala.innerText = 'Digite um número válido entre 1 e 10';
        input.value = '';
        return
    }

    tentativas++
    numerosSorteados.push(tentativa)

    if (tentativa === numeroSecreto) {
        balaoDeFala.innerText = 'Parabéns!';
        paragrafoUm.innerText = 'Você acertou em:'
        numeroDeVezes.innerText = `${tentativas}`
        numeroDeVezes.style.display = 'flex'
        contador.innerText = 'tentativas'
        paragrafoDois.innerText = 'Os números que você tentou foram:'
        numerosUsados.innerText = `${numerosSorteados.join(', ')}`
        numerosUsados.style.display = 'flex'

        botao.innerText = 'Jogar novamente'


    } else if (tentativa < numeroSecreto) {
        balaoDeFala.innerText = 'Ops! Tente um número maior!';
        paragrafoUm.innerText = ''


    } else {
        balaoDeFala.innerText = 'Ops! Tente um número menor!';
        paragrafoUm.innerText = ''
    }

    input.value = '';

}

function reiniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    tentativas = 0;
    numerosSorteados = [];
    balaoDeFala.innerText = 'Olá! Neste jogo você deve adivinhar qual é o número secreto. Digite seu palpite no espaço ao lado e boa sorte!';
    paragrafoUm.innerText = '';
    botao.innerText = 'Conferir';
    input.value = '';
    paragrafoUm.innerText = ''
    numeroDeVezes.innerText = ``
    numeroDeVezes.style.display = 'none'
    contador.innerText = ''
    numerosUsados.innerText = ``
    numerosUsados.style.display = 'none'
    paragrafoDois.innerText = ''

}

input.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        verificarTentativa()
    }
})