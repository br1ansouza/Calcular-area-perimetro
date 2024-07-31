function calcularMediaNotas(notaUm, notaDois, notaTres, notaQuatro) {
    var mediaNotas = (notaUm + notaDois + notaTres + notaQuatro) / 4
    return mediaNotas
}


function executarFormulario(event) {

    event.preventDefault() // previne que a tela faça um refresh

    var nota1 = parseFloat(document.getElementById('nota1').value)
    var nota2 = parseFloat(document.getElementById('nota2').value)
    var nota3 = parseFloat(document.getElementById('nota3').value)
    var nota4 = parseFloat(document.getElementById('nota4').value)

    alert(calcularMediaNotas(nota1, nota2, nota3, nota4).toFixed(2))
}

document // document é o arquivo que recebe o script 
    .getElementById('calculadora') // pegar o elemento com id calculadora
    .addEventListener('submit', executarFormulario)