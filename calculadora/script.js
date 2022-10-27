
var soma = document.querySelector('#soma')
var subtrair = document.querySelector('#subtrair')
var multiplicar = document.querySelector('#multiplicar')
var dividir = document.querySelector('#dividir')
var raiz = document.querySelector('#raiz')
var quadrado = document.querySelector('#quadrado')
var result = document.querySelector('#resultado')
var texto = ""

soma.onclick = function () {
    var num1 = Number(document.querySelector('#num1').value);
    var num2 = Number(document.querySelector('#num2').value);
    texto = (num1 + num2);
    result.innerHTML = texto
}

subtrair.onclick = function () {
    var num1 = Number(document.querySelector('#num1').value);
    var num2 = Number(document.querySelector('#num2').value);
    texto = (num1 - num2);
    result.innerHTML = texto
}

multiplicar.onclick = function () {
    var num1 = Number(document.querySelector('#num1').value);
    var num2 = Number(document.querySelector('#num2').value);
    texto = (num1 * num2);
    result.innerHTML = texto
}

dividir.onclick = function () {
    var num1 = Number(document.querySelector('#num1').value);
    var num2 = Number(document.querySelector('#num2').value);
    texto = (num1 / num2);
    result.innerHTML = texto
}

raiz.onclick = function () {
    var num1 = Number(document.querySelector('#num1').value);
    var num2 = Number(document.querySelector('#num2').value);
    texto = (Math.pow(num1, num2));
    result.innerHTML = texto
}

quadrado.onclick = function () {
    var num1 = Number(document.querySelector('#num1').value);
    texto = (Math.sqrt(num1));
    result.innerHTML = texto
    
}