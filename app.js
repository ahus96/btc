
const amount = document.querySelector('#input')
const convert = document.querySelector('#convert')
const select = document.querySelector('#select')
const buttonr = document.querySelector('#reset')
const result = document.querySelector('#result')



convert.addEventListener('click', async function (e) {
    e.preventDefault();

    const f = document.querySelector('#input').value
    const s = document.querySelector('#select').value
    const aw = await api()
    const aw1 = await apiJ()
    const aw2 = await apiG()

    if (s === 'USD') {
        result.innerText = `${f} BTC = ${f * aw} USD`
    } else if (s === 'JPY') {

        result.innerText = `${f} BTC = ${f * aw1} JPY`
    } else if (s === 'GBP') {

        result.innerText = `${f} BTC = ${f * aw2} GBP`
    }

    convert.disabled = true;

})

const api = async () => {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`, config)


    const base = res.data.bitcoin.usd

    return base
}

const apiJ = async () => {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=jpy`, config)


    const base = res.data.bitcoin.jpy

    return base
}

const apiG = async () => {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=gbp`, config)


    const base = res.data.bitcoin.gbp

    return base
}

buttonr.addEventListener('click', async function (e) {
    e.preventDefault();

    reset();

})

const reset = () => {
    document.querySelector('#input').value = "";
    convert.disabled = false;
    result.innerText = "";


}




// const api1 = async () => {
//     const config = { headers: { Accept: 'application/json' } }
//     const res = await axios.get(`https://api.currencyapi.com/v3/latest?apikey=QAhJ5AIlDcCxC1JBktPhjBQhqm9rkIZhnO8nvCON&currencies=EUR%2CUSD%2CEURS`, config)

//     const eurv = res.data.data.EUR.value

//     return `${eurv}`
// }

// const api2 = async () => {
//     const config = { headers: { Accept: 'application/json' } }
//     const res = await axios.get(`https://api.currencyapi.com/v3/latest?apikey=QAhJ5AIlDcCxC1JBktPhjBQhqm9rkIZhnO8nvCON&currencies=EUR%2CUSD%2CUSD`, config)

//     const usdv = res.data.data.USD.value

//     return `${usdv}`
// }

// const api1 = async () => {
//     const config = { headers: { Accept: 'application/json' } }
//     const res = await axios.get(`https://api.currencyapi.com/v3/latest?apikey=QAhJ5AIlDcCxC1JBktPhjBQhqm9rkIZhnO8nvCON&currencies=EUR%2CUSD%2CCAD`, config)

//     const cand = res.data.data.CAD.code
//     const canv = res.data.data.CAD.value

//     const eurd = res.data.data.EUR.code
//     const eurv = res.data.data.EUR.value

//     const usdd = res.data.data.USD.code
//     const usdv = res.data.data.USD.value

//     return `${cand} ${canv} ${eurd} ${eurv} ${usdd} ${usdv}`
// }

