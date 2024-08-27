export const Minerals = () => {
  document.addEventListener('change', async (e) => {
    if (e.target.id === 'governor') {
      const governorId = parseInt(e.target.value);
      //fetch data from colonyInventory//
      const responseOne = await fetch('http://localhost:8088/colonyInventory');
      const colonyInventory = await responseOne.json();

      //fetch data from minerals database//
      const responseTwo = await fetch('http://localhost:8088/minerals');
      const minerals = await responseTwo.json();
      //Filter colony inventory that governor governs//
      const colonyInventoryFromSelectedGov = colonyInventory.filter(
        (colony) => colony.colonyID === governorId
      );
      console.log(colonyInventoryFromSelectedGov);

      const matchedMinerals = colonyInventoryFromSelectedGov.map(
        (matchedMineral) => {
          return {
            name: findMatchingMineral(matchedMineral, minerals).name,
            quantity: matchedMineral.quantity,
          };
        }
      );

      console.log(matchedMinerals);
    }
  });
};
 //Helper function to find matching mineral//
const findMatchingMineral = (selectedMineral, mineralsArr) => {
  let matchedMineral = null;
  for (const mineral of mineralsArr) {
    if (selectedMineral.mineralID === mineral.id) {
      matchedMineral = mineral;
    }
  }
  return matchedMineral;
};
