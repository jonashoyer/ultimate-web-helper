const stringToNumber = (str) => {
  return Number(str.replace(/\D/g, ''));
} 

const items = document.querySelectorAll('.info-grid');
items.forEach(el => {
  const priceStr = el.children[0].textContent;
  const sizeStr = el.children[3].textContent;

  const price = stringToNumber(priceStr);
  const size = stringToNumber(sizeStr);

  const priceSize = price / size;

  const node = document.createElement("div");
  node.classList.add('info-grid-item');
  node.textContent = `${priceSize.toFixed(2)} kr/m²`

  el.appendChild(node);
})



const infoEl = document.querySelector('.property-details .container .row div:nth-child(2) p');
if (infoEl) {

  const formattor = new Intl.NumberFormat('da-DK', { style: 'currency', currency: 'DKK' });

  const [, husleje, varme, vand] = infoEl.textContent.split('\n').map(str => Number(str.replace(/[^\d|,]/g, '').replace(',', '.')));

  const boligEl = document.querySelector('.property-details .container .row div:nth-child(1) p');
  const [, areal] = boligEl.textContent.split('\n').map(str => Number(str.replace(/[^\d|,]/g, '').slice(0, -1).replace(',', '.')));

  const sum = formattor.format(husleje + varme + vand)
  infoEl.innerHTML = infoEl.innerHTML + `<br><strong>Sum:</strong> ${sum}/md.<br>(${(husleje/areal).toFixed(2)} kr/m²)`;

  const depositumEl = document.querySelector('.property-details .container .row div:nth-child(3) p');
  const [, depositum, forudbetalt] = depositumEl.textContent.split('\n').map(str => Number(str.replace(/[^\d|,]/g, '').replace(',', '.')));
  
  const indflytningspris = depositum + forudbetalt + husleje + varme + vand;
  depositumEl.innerHTML = depositumEl.innerHTML + `<br><strong>Indflytningspris:</strong> ${formattor.format(indflytningspris)}`;
}