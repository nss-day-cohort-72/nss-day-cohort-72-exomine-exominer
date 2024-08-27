import { Facilities } from './Facility.js';
import { Governors } from './GovernorsList.js';
import { purchaseBtn } from './PurchaseBtn.js';

const render = async () => {
  const governorsHTML = await Governors();
  const facilityHTML = await Facilities();
  const buttonHTML = purchaseBtn();

  const composedHTML = `
    ${governorsHTML}
    ${facilityHTML}
    <div class = "facilityInv"></div>
    <div id = "random"></div>
    ${buttonHTML}
    
    `;
  const container = document.querySelector('#container');
  container.innerHTML = composedHTML;
};

render();
