export const Facilities = async () => {
    const response = await fetch("http://localhost:8088/facilities")
    const facilities = await response.json()

    let html = "<h3>Choose a facility</h3>"

    html += '<select id="facility">'
    html += '<option value="0">Choose a facility</option>'

    const arrayOfOptions = facilities.map( (facility) => {
        return `<option value="${facility.id}">${facility.name}</option>`
     }
    )

    html += arrayOfOptions.join("")
    html += "</select"
    return html
}