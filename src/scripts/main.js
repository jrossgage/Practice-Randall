import { getCarvalues, displayCarValues, displayCars, displayCarValuePairs } from "./data/carDataManager.js"
import { salesReport, saleSearch } from "./data/saleDataManager.js";
console.log("main is loaded");

const buttonElement = document.querySelector("#reset")
const outputElement = document.querySelector("#sale")

// getCarvalues();
// displayCarValues();
// displayBillInfo();
// displayCars();
// displayCarValuePairs();
salesReport();
saleSearch();

//on click, reset the sales report
buttonElement.addEventListener("click", event => {
    //reset Dom
    outputElement.innerHTML = ``
    //call report
    salesReport()
})

