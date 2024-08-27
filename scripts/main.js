import { Facilities } from './Facility.js';
import { Governors } from './GovernorsList.js';

const render = async () => {
  const governorsHTML = await Governors();
  const facilityHTML = await Facilities();

  const composedHTML = `
    ${governorsHTML}
    ${facilityHTML}
    <div class = "facility-wrapper"</div>
    `;
  const container = document.querySelector('#container');
  container.innerHTML = composedHTML;
};

render();
