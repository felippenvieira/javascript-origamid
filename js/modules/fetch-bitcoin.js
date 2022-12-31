export default function fetchBitcoin(target, url) {
  const spanBitcoin = document.querySelector(target);

  async function obterValorDoBTC() {
    try {
      const BTCResponse = await fetch(url);
      const BTCJSON = await BTCResponse.json();
      const BTCValue = 1000 / BTCJSON.BRL.buy;

      spanBitcoin.innerText = BTCValue.toFixed(4);
    } catch (e) {
      console.log(e);
    }
  }

  return obterValorDoBTC();
}
