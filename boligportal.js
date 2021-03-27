
setInterval(() => {

  const details = document.querySelectorAll('.AdPopupCard__details');

  console.log({ details });

  details.forEach(el => {
    if (el.querySelector('.AdPopupCard__spaceprice')) return;

    const sizeTextEl = el.querySelector('.AdPopupCard__size');
    const priceTextEl = el.querySelector('.AdPopupCard__price');

    if (!sizeTextEl || !priceTextEl) return;

    const [size] = sizeTextEl.textContent.split(' ');
    const [price] = priceTextEl.textContent.replace(/\./g, '').split(/ | /g);


    const priceSize = Number(price) / Number(size);

    const child = document.createElement('div')
    child.innerHTML = `${priceSize.toFixed(2)} <small>kr/m²</small>`;
    child.classList.add('AdPopupCard__spaceprice');
    child.style.padding = '0 .5em';
    el.insertBefore(child, el.children[2]);

  })

}, 500);