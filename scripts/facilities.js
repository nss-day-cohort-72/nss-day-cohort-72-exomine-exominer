
export const FacilityOptions = async () => {
    const response = await fetch("http://localhost:8088/facilities");
    const facilities = await response.json();

    let facilityOptionsHTML = "<label for='facilityDropdown'>Choose a facility:</label><select id='facilityDropdown'>";

    const optionStringArray = facilities.map(
        (facility) => {
            return `<option value='${facility.id}'>${facility.name}</option>`;
        }
    );

    facilityOptionsHTML += optionStringArray.join("") + "</select>";

    return facilityOptionsHTML;
}