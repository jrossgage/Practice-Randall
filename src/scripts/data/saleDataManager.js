const salesByWeek = [
    {
        "vehicle": {
            "year": 2013,
            "model": "Tanex",
            "make": "Tamp-dax",
            "color": "quartz"
        },
        "sales_id": "782a23fd-8b83-4497-b9a1-41fd9b15648e",
        "sales_agent": {
            "mobile": "1-584-162-7444",
            "last_name": "Larkin",
            "first_name": "Tiara",
            "email": "ready@gmail.com"
        },
        "purchase_date": "2017-06-07",
        "gross_profit": 210,
        "credit": {
            "credit_provider": "United Services Automobile Assoc.",
            "account": "491697193540559"
        }
    },
    {
        "vehicle": {
            "year": 2012,
            "model": "Volttanphase",
            "make": "Tinlotis",
            "color": "french fuchsia"
        },
        "sales_id": "c6775819-5d17-40db-94f4-00425db590ee",
        "sales_agent": {
            "mobile": "1-573-820-3780",
            "last_name": "Schulist",
            "first_name": "Vada",
            "email": "davin@outlook.com"
        },
        "purchase_date": "2017-08-06",
        "gross_profit": 1886.61,
        "credit": {
            "credit_provider": "TD Group US Holding",
            "account": "494781657570"
        }
    },
    {
        "vehicle": {
            "year": 2013,
            "model": "Lexi-ton",
            "make": "Ware-com",
            "color": "metallic brown"
        },
        "sales_id": "d10631e7-24ca-414b-ac0f-34b286a30f14",
        "sales_agent": {
            "mobile": "1-356-831-5782",
            "last_name": "Leannon",
            "first_name": "Geovanni",
            "email": "need@hotmail.com"
        },
        "purchase_date": "2017-12-27",
        "gross_profit": 154.91,
        "credit": {
            "credit_provider": "State Street Corporation",
            "account": "546417363501851"
        }
    },
    {
        "vehicle": {
            "year": 2011,
            "model": "Onto-zun",
            "make": "Strongzoom",
            "color": "medium slate blue"
        },
        "sales_id": "586bf9d9-67c2-46c7-a6d1-de8484f6c474",
        "sales_agent": {
            "mobile": "774.020.0247",
            "last_name": "Lang",
            "first_name": "Jovani",
            "email": "spell55@yahoo.com"
        },
        "purchase_date": "2017-03-05",
        "gross_profit": 814.49,
        "credit": {
            "credit_provider": "M&T Bank Corporation",
            "account": "34730046974022"
        }
    },
    {
        "vehicle": {
            "year": 2014,
            "model": "Blue-run",
            "make": "Kon-flex",
            "color": "lumber"
        },
        "sales_id": "a5358cb3-6d47-4adb-a232-d5c5d91e25ec",
        "sales_agent": {
            "mobile": "886.374.3898",
            "last_name": "Feil",
            "first_name": "Kory",
            "email": "ducimus@outlook.com"
        },
        "purchase_date": "2017-02-08",
        "gross_profit": 587.52,
        "credit": {
            "credit_provider": "Atlantic Bank",
            "account": "601149379893233"
        }
    }
]
const outputElement = document.querySelector("#sale")
//all sales in a list by agent 
export const salesReport = () => {
    outputElement.innerHTML += `<h1>Sales Report<h1>`

    salesByWeek.forEach(sale => {
        outputElement.innerHTML += `<h3>Agent: ${sale.sales_agent.first_name} ${sale.sales_agent.last_name}<h3>`

        for (const entry of Object.entries(sale.vehicle)) {
            outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}<div>`
        }
        outputElement.innerHTML += `<div>${sale.gross_profit}<div>
                                    <hr>`
    })
}
//a single sale html representation
const singleSaleCard = (sale) => {
    outputElement.innerHTML = `<h3>Agent: ${sale.sales_agent.first_name} ${sale.sales_agent.last_name}<h3>`

    for (const entry of Object.entries(sale.vehicle)) {
        outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}<div>`
    }
    outputElement.innerHTML += `<div>${sale.gross_profit}<div>
                                <hr>`
}
//search function
export const saleSearch = () => {
    //search field DOM location
    const searchInput = document.querySelector("#searchInput")

    //event listeners
    searchInput.addEventListener('keypress', event => {
        //this event is listening for the enter keypress. Enter = charCode 13
        if (event.charCode === 13) {
            const searchTerm = event.target.value.toLowerCase() //capture the inputted text. Make it not case sensitive.
            //iterate over data (array)
            salesByWeek.forEach(sale => {
                //look at each object within the array and capture the values of the agent object
                //if the values of from agent inclues the inputted search text, render that sale object to the DOM.
                //the values and the search terms should not be case sensitive.
                //this will check for all values associated with an agent. 
                for (const value of Object.values(sale.sales_agent)) {
                    if (value.toLowerCase().includes(searchTerm)) {
                        singleSaleCard(sale)
                    }
                }
            })
        }
    })
}

