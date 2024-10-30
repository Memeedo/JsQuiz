const makeList = document.getElementById("makeList");
let make = makeList.value;

makeList.addEventListener("change", () => {
    make = makeList.value;
    getModels(make);
});

async function getModels() {
    const apiUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`;

    try {

        const response = await fetch(apiUrl);


        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }


        const data = await response.json();


        appendModels(data.Results);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function appendModels(models) {
    const uiElem = document.getElementById("modelList");
    uiElem.innerHTML = "";

    for (const model of models) {
        const liElem = document.createElement("li");
        liElem.innerText = model.Model_Name;
        uiElem.appendChild(liElem);
        console.log(model.Model_Name);
    }
}
