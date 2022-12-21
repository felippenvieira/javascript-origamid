export default function initFetchBitcoin() {
  const spanBitcoin = document.querySelector(".btc-preco");
  async function obterValorDoBTC(url) {
    const BTCResponse = await fetch(url);
    const BTCJSON = await BTCResponse.json();
    const BTCValue = 1000 / BTCJSON.BRL.buy;

    spanBitcoin.innerText = BTCValue.toFixed(4);
  }
  try {
    obterValorDoBTC("https://blockchain.info/ticker");
  } catch (erro) {
    console.log(erro);
  }
}
