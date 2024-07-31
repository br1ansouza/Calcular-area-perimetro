function calcularPerimetroTriangulo (ladoA, ladoB, ladoC) {
    var perimetro = ladoA + ladoB + ladoC
    return perimetro
}

function processarFormulario(event) {
    event.preventDefault()

    var ladoA = parseFloat(document.getElementById('ladoa').value)
    var ladoB = parseFloat(document.getElementById('ladob').value)
    var ladoC = parseFloat(document.getElementById('ladoc').value)

    var resultadoCalculo = calcularPerimetroTriangulo(ladoA, ladoB, ladoC)

    document.getElementById('resultado').innerText = "O resultado eh: " + resultadoCalculo.toString().replace(".", ",")

}

document
.getElementById('form-perimetro-triangulo')
.addEventListener('submit', processarFormulario)