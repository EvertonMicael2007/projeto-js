const button = document.getElementById('Convert-button')

const dolar = 5.2

const ConvertValues = () => {
    const inputReais = document.getElementById('valor-real').value
    const RealValueText = document.getElementById('real-value-text')

    RealValueText.innerHTML = inputReais
    
    console.log(inputReais / dolar)
}

button.addEventListener('clik', ConvertValues)