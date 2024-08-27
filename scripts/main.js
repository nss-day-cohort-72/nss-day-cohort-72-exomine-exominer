import { Facilities } from "./Facility.js"
import {Governors} from "./GovernorsList.js"
const render = async () => {
    const governorsHTML = await Governors()
    const facilityHTML = await Facilities()

    //     const locationsHTML = await LocationTypeChoices()
//     const buttonHTML = await SaveSubmission()
//     const submissionListHTML = await SubmissionList()
//     container.innerHTML = `${jeanOwnerShipHTML} 
//     ${locationsHTML}
//     ${buttonHTML}
//     ${submissionListHTML}
    
//     `
    const composedHTML = `
    ${governorsHTML}
    ${facilityHTML}
    `
    const container = document.querySelector("#container")
    container.innerHTML = composedHTML
 }
 render()