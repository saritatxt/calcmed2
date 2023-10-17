function calcular() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var operacao = document.getElementById('operacao').value;
    var resultadoElement = document.getElementById('resultado');
    var resultado;

    if (isNaN(numero1) || isNaN(numero2)) {
        resultado = 'Por favor, insira números válidos.';
    } else {
        switch (operacao) {
            case 'soma':
                resultado = numero1 + numero2;
                break;
            case 'subtracao':
                resultado = numero1 - numero2;
                break;
            case 'multiplicacao':
                resultado = numero1 * numero2;
                break;
            case 'divisao':
                if (numero2 !== 0) {
                    resultado = numero1 / numero2;
                } else {
                    resultado = 'Divisão por zero não é permitida.';
                }
                break;
            default:
                resultado = 'Operação inválida.';
        }
    }

    resultadoElement.innerHTML = 'Resultado: ' + resultado;
}