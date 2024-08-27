import {Governors} from "./GovernorsList.js"




const render = async () => {
    const governorsHTML = await Governors()
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
    `
    const container = document.querySelector("#container")
    container.innerHTML = composedHTML
 }
 render()