let peso;
let altura;
let resultado = document.querySelector("#output");

function calcularImc() {
  peso = parseFloat(document.getElementById("pesoImc").value.replace(",", "."));
  altura = parseFloat(
    document.getElementById("alturaImc").value.replace(",", ".")
  );

  if (altura <= 0 || (isNaN(altura) && peso <= 0) || isNaN(peso)) {
    resultado.innerHTML = "Digite dois valores válidos";
    document.getElementById("alturaImc").value = "";
    document.getElementById("pesoImc").value = "";
  } else if (peso <= 0 || isNaN(peso)) {
    resultado.innerHTML = "Digite um peso válido";
    document.getElementById("pesoImc").value = "";
  } else if (altura <= 0 || isNaN(altura)) {
    resultado.innerHTML = "Digite uma altura válida";
    document.getElementById("alturaImc").value = "";
  } else {
    const nivelImc = peso / (altura * 2);

    if (nivelImc > 40) {
      resultado.innerHTML = "Obesidade Grau III";
    } else if (nivelImc >= 35 && nivelImc <= 40) {
      resultado.innerHTML = "Obesidade Grau II";
    } else if (nivelImc >= 30 && nivelImc <= 34.9) {
      resultado.innerHTML = "Obesidade Grau I";
    } else if (nivelImc >= 25 && nivelImc <= 29.9) {
      resultado.innerHTML = "Acima do peso";
    } else if (nivelImc >= 18.5 && nivelImc <= 24.9) {
      resultado.innerHTML = "Peso normal";
    } else if (nivelImc >= 17 && nivelImc <= 18.4) {
      resultado.innerHTML = "Abaixo do peso";
    } else {
      resultado.innerHTML = "Muito abaixo do peso";
    }
  }
}
function resetarImc() {
  document.getElementById("pesoImc").value = "";
  document.getElementById("alturaImc").value = "";
  resultado.innerHTML = "";
}
