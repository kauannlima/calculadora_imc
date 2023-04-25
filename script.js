let peso;
let altura;
let resultado = document.querySelector("#output");
let nivelImc = document.querySelector("#output2")
nivelImc.style.justifyContent = "center";
nivelImc.style.alignItems = "center";

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
     const calcImc = peso / (altura * 2);

    if (calcImc > 40) {
      resultado.innerHTML = "Obesidade Grau III";
      nivelImc. innerHTML = "Seu IMC é: "+calcImc.toFixed(2).replace(".", ",");

    } else if (calcImc >= 35 && calcImc <= 40) {
      resultado.innerHTML = "Obesidade Grau II";
      nivelImc. innerHTML = "Seu IMC é: "+calcImc.toFixed(2).replace(".", ",");
    } else if (calcImc >= 30 && calcImc <= 34.9) {
      resultado.innerHTML = "Obesidade Grau I";
      nivelImc. innerHTML = "Seu IMC é: "+calcImc.toFixed(2).replace(".", ",");
    } else if (nivelImc >= 25 && calcImc <= 29.9) {
      resultado.innerHTML = "Acima do peso";
      nivelImc. innerHTML = "Seu IMC é: "+calcImc.toFixed(2).replace(".", ",");
    } else if (calcImc >= 18.5 && calcImc <= 24.9) {
      resultado.innerHTML = "Peso normal";
      nivelImc. innerHTML = "Seu IMC é: "+calcImc.toFixed(2).replace(".", ",");
    } else if (calcImc >= 17 && calcImc <= 18.4) {
      resultado.innerHTML = "Abaixo do peso";
      nivelImc. innerHTML = "Seu IMC é: "+calcImc.toFixed(2).replace(".", ",");
    } else {
      resultado.innerHTML = "Muito abaixo do peso";
      nivelImc. innerHTML = "Seu IMC é: "+calcImc.toFixed(2).replace(".", ",");
    }
  }
}
function resetarImc() {
  document.getElementById("pesoImc").value = "";
  document.getElementById("alturaImc").value = "";
  resultado.innerHTML = "";
  nivelImc. innerHTML = "Seu IMC é: 0,00"
}
