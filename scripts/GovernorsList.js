export const Governors = async () => {
    const response = await fetch("http://localhost:8088/governors")
    const governors = await response.json()

    let html = "<h3>Choose a governor</h3>"

    html += '<select id="governor">'
    html += '<option value="0">Choose a governor</option>'

    const arrayOfOptions = governors.map( (governor) => {
        return `<option value="${governor.id}">${governor.name}</option>`
     }
    )

    html += arrayOfOptions.join("")
    html += "</select"
    return html
}

