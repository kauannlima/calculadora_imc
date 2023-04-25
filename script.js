let peso;
let altura;
let numeroImc = document.querySelector("#output1");
let resultado = document.querySelector("#output2");
numeroImc.style.justifyContent = "center";
numeroImc.style.alignItems = "center";

function calcularImc() {
  peso = parseFloat(document.getElementById("pesoImc").value.replace(",", "."));
  altura = parseFloat(
    document.getElementById("alturaImc").value.replace(",", ".")
  );

  if (altura <= 0 || (isNaN(altura) && peso <= 0) || isNaN(peso)) {
    resultado.innerHTML = "Digite dois valores válidos!";
    document.getElementById("alturaImc").value = "";
    document.getElementById("pesoImc").value = "";
    numeroImc.innerHTML = "Seu IMC é: 0,00"
  } 
  else if (peso <= 0 || isNaN(peso)) {
    resultado.innerHTML = "Digite um peso válido!";
    document.getElementById("pesoImc").value = "";
    numeroImc.innerHTML = "Seu IMC é: 0,00"
  } 
  else if (altura <= 0 || isNaN(altura)) {
    resultado.innerHTML = "Digite uma altura válida!";
    document.getElementById("alturaImc").value = "";
    numeroImc.innerHTML = "Seu IMC é: 0,00"
  } 
  else {
     const imcCalculado = peso / (altura * 2);
    if (imcCalculado > 40) {
      resultado.innerHTML = "Obesidade Grau III";
      numeroImc.innerHTML = "Seu IMC é: "+imcCalculado.toFixed(2).replace(".", ",");
    } 
    else if (imcCalculado >= 35 && imcCalculado <= 40) {
      resultado.innerHTML = "Obesidade Grau II";
      numeroImc.innerHTML = "Seu IMC é: "+imcCalculado.toFixed(2).replace(".", ",");
    } else if (imcCalculado >= 30 && imcCalculado <= 34.9) {
      resultado.innerHTML = "Obesidade Grau I";
      numeroImc.innerHTML = "Seu IMC é: "+imcCalculado.toFixed(2).replace(".", ",");
    } else if (numeroImc >= 25 && imcCalculado <= 29.9) {
      resultado.innerHTML = "Acima do peso";
      numeroImc.innerHTML = "Seu IMC é: "+imcCalculado.toFixed(2).replace(".", ",");
    } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
      resultado.innerHTML = "Peso normal";
      numeroImc.innerHTML = "Seu IMC é: "+imcCalculado.toFixed(2).replace(".", ",");
    } else if (imcCalculado >= 17 && imcCalculado <= 18.4) {
      resultado.innerHTML = "Abaixo do peso";
      numeroImc.innerHTML = "Seu IMC é: "+imcCalculado.toFixed(2).replace(".", ",");
    } else if(imcCalculado <=16){
      resultado.innerHTML = "Muito abaixo do peso";
      numeroImc.innerHTML = "Seu IMC é: "+imcCalculado.toFixed(2).replace(".", ",");
    }
  }
}

function resetarImc() {
  document.getElementById("pesoImc").value = "";
  document.getElementById("alturaImc").value = "";
  resultado.innerHTML = "";
  numeroImc. innerHTML = "Seu IMC é: 0,00";
}
