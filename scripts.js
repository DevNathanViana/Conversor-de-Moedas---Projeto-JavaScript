const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select-converted")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")


let currency = {
    realToday: 1,
    dolarToday: 5.2,
    euroToday: 6.2,
    libraToday: 7.2,
    bitcoinToday: 339854,
}


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    if (currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / currency.dolarToday)
    }

    if (currencySelect.value === "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue / currency.bitcoinToday)
    }

    if (currencySelect.value === "libra") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / currency.libraToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / currency.euroToday)
    }

    if (currencySelect.value === "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue / currency.realToday)
    }

    if (currencySelectToConvert.value === "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value === "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value === "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value === "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value === "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue / currency.realToday)
    }




}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.querySelector('.currency-img')

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.svg"
    }
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dolar.svg"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.svg"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.svg"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.svg"
    }


    convertValues()
}

function changeCurrencyToConvert() {
    const inputCurrencyValue = document.querySelector(".input-currency")
    const currencyName = document.getElementById('currency-name-to-convert')
    const currencyImg = document.querySelector('.currency-img-to-convert')

    if (currencySelectToConvert.value == "dolar") {
        inputCurrencyValue.placeholder = "US$ 10.000,00"
    }
    if (currencySelectToConvert.value == "euro") {
        inputCurrencyValue.placeholder = "€ 10.000,00"
    }
    if (currencySelectToConvert.value == "libra") {
        inputCurrencyValue.placeholder = "£ 10.000,00"
    }
    if (currencySelectToConvert.value == "bitcoin") {
        inputCurrencyValue.placeholder = "₿ 10.000,00"
    }
    if (currencySelectToConvert.value == "real") {
        inputCurrencyValue.placeholder = "R$ 10.000,00"
    }

    if (currencySelectToConvert.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dolar.svg"
    }
    if (currencySelectToConvert.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.svg"
    }
    if (currencySelectToConvert.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.svg"
    }
    if (currencySelectToConvert.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.svg"
    }
    if (currencySelectToConvert.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.svg"
    }


    if (currencySelectToConvert.value === "real") {
        currency.realToday = 1
        currency.dolarToday = 5.2
        currency.euroToday = 6.2
        currency.libraToday = 7.2
        currency.bitcoinToday = 339854
    }
    if (currencySelectToConvert.value === "dolar") {
        currency.realToday = 0.18
        currency.dolarToday = 1
        currency.euroToday = 1.18
        currency.libraToday = 1.3
        currency.bitcoinToday = 630405
    }
    if (currencySelectToConvert.value === "euro") {
        currency.realToday = 0.1
        currency.dolarToday = 0.8
        currency.euroToday = 1
        currency.libraToday = 1.1
        currency.bitcoinToday = 567537
    }
    if (currencySelectToConvert.value === "libra") {
        currency.realToday = 0.1
        currency.dolarToday = 0.7
        currency.euroToday = 0.8
        currency.libraToday = 1
        currency.bitcoinToday = 476373
    }
    if (currencySelectToConvert.value === "bitcoin") {
        currency.realToday = 0.0000028
        currency.dolarToday = 0.000015
        currency.euroToday = 0.0000175
        currency.libraToday = 0.000020
        currency.bitcoinToday = 1
    }
    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
currencySelectToConvert.addEventListener("change", changeCurrencyToConvert)
convertButton.addEventListener("click", convertValues)