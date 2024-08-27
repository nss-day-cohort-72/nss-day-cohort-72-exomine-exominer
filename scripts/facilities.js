
export const FacilityOptions = async () => {
    const response = await fetch("http://localhost:8088/facilities");
    const facilities = await response.json();

    let facilityOptionsHTML = "<span>Choose a facility:</span> <label for='facilityDropdown'>Choose a facility:</label><select id='facilityDropdown'>";
    
    const optionStringArray = facilities
    .filter(facility => facility.active)
    .map(facility => {
        return `<option value='${facility.id}'>${facility.name}</option>`;
    });

    facilityOptionsHTML += optionStringArray.join("") + "</select>";

    return facilityOptionsHTML;
}