import data from './database.json';

const { governors } = data;

export const createGovernorDropdown = () => {
   
    const activeGovernors = governors.filter(governor => governor.active);
    let dropdownHTML = `<select id="governorDropdown">`;

    for (const governor of activeGovernors) {
        dropdownHTML += `<option value="${governor.id}">${governor.name}</option>`;
    }

    dropdownHTML += `</select>`;

    return dropdownHTML;
}

document.getElementById('dropdownContainer').innerHTML = createGovernorDropdown();