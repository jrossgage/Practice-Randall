const allCars = [
    {
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
]

const outputElement = document.querySelector("#app")
const firstCar = allCars[0];

export const getCarvalues = () => {
    allCars.forEach(car => {
        console.log(Object.values(car));
    })
}

export const displayCarValues = () => {
    allCars.forEach(car => {
        for (const value of Object.values(car)) {
            outputElement.innerHTML += `<div>${value}<div>`
        }
        outputElement.innerHTML += `<hr>`
    })
}

export const displayCars = () => {
    outputElement.innerHTML += `<h1>Properties</h1>`
    for (const key of Object.keys(firstCar)) {
        outputElement.innerHTML += `<div>${key}<div`
    }
    outputElement.innerHTML += `<hr>
                                <h1>CarList<h1>`
    displayCarValues();
}

export const displayCarValuePairs = () => {
    outputElement.innerHTML += `<h1>Car List<h1>`
    allCars.forEach(car => {
        for (const entry of Object.entries(car)) {
            outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}<div>`
        }
        outputElement.innerHTML += `<hr>`
    })
}


// const dateVisited = "visitDate"
// const owed = "amountBilled"
// const patient = "patientName"

// const bill = {
//     officeName: "Dentist Time!",
//     streetAddress: "100 Dental Ave.",
//     doctorName: "Proctal Henry",
//     patientName: "Poor Jim",
//     visitDate: "04 / 18 / 1991",
//     amountBilled: 400,
//     dueDate: "04 / 23 / 1991"
// }

// export const displayBillInfo = () => {
//     const billInfo = Object.values(bill)
//     for (const value of billInfo) {
//         console.log(value);
//     }
// }