document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.getElementById('number');
    const addButton = document.getElementById('addButton');
    const remButton = document.getElementById('remButton');
    const resultElement = document.getElementById('result');
    const numbers = [];

    addButton.addEventListener('click', function () {
        const number = parseFloat(inputElement.value);

        if (!isNaN(number)) {
            numbers.push(number);
            inputElement.value = ''; // Limpa o campo de entrada
            inputElement.focus(); // Coloca o foco de volta no campo
        } else {
            alert('Por favor, insira um número válido.');
        }
    });

    inputElement.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            addButton.click(); // Simula o clique no botão ao pressionar Enter

        }
    });

    addButton.addEventListener('click', function () {
        numbers.sort((a, b) => a - b);
        const sortedNumbersString = numbers.join(', ');
        resultElement.textContent = `Números ordenados em ordem crescente: ${sortedNumbersString}`;
    });
});
let numeros = [];
        
function adicionarNumero() {
    if (numeros.length < 100) {
        const novoNumero = Math.floor(Math.random() * 101); // Gera um número aleatório de 0 a 100
        numeros.push(novoNumero);
        atualizarLista();
    } else {
        document.getElementById("mensagemErro").textContent = "Você atingiu o limite de 100 números!";
    }
}

function removerNumero() {
    if (numeros.length > 0) {
        numeros.pop();
        atualizarLista();
        document.getElementById("mensagemErro").textContent = "";
    }
}

function atualizarLista() {
    numeros.sort((a, b) => a - b); // Ordena os números em ordem crescente
    const listaNumeros = document.getElementById("listaNumeros");
    listaNumeros.innerHTML = "";
    numeros.forEach(numero => {
        const li = document.createElement("li");
        li.textContent = numero;
        listaNumeros.appendChild(li);
    });
}