function calcularPerimetroTriangulo (ladoA, ladoB, ladoC) {
    var perimetro = ladoA + ladoB + ladoC
    return perimetro
}

function calcularAreaTriangulo(ladoA, ladoB, ladoC) {
    var s = (ladoA + ladoB + ladoC) / 2;
    var area = Math.sqrt(s * (s - ladoA) * (s - ladoB) * (s - ladoC));
    return area;
  }

function processarFormulario(event) {
    event.preventDefault()

    var ladoA = parseFloat(document.getElementById('ladoa').value)
    var ladoB = parseFloat(document.getElementById('ladob').value)
    var ladoC = parseFloat(document.getElementById('ladoc').value)

    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos para todos os lados.";
        return;

      }
      var perimetro = calcularPerimetroTriangulo(ladoA, ladoB, ladoC);
  var area = calcularAreaTriangulo(ladoA, ladoB, ladoC);

  document.getElementById('resultado').innerText = 
    "O perímetro é: " + perimetro.toFixed(2).replace(".", ",") + 
    " e a área é: " + area.toFixed(2).replace(".", ",");
}

document
.getElementById('form-perimetro-triangulo')
.addEventListener('submit', processarFormulario)
//document
//.getElementById('calcular-area')
//.addEventListener('click', processarFormulario);