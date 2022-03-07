const feet = document.querySelector("#feet-input");
const inchesInput = document.querySelector("#inches-input");
const button = document.querySelector('#calc-button');
const resultCard = document.querySelector("#result-card");

const resetButton = document.querySelector("#reset-button");

button.addEventListener("click", () => {
    const feetValue = parseFloat(feet.value);
    const inchesValue = parseFloat(inchesInput.value);

    const inches = feetValue * 12 + inchesValue;

    const inchesMeters = (inches * 0.0254).toFixed(2);

    if (isNaN(inchesMeters)) {
        resultCard.innerHTML = "";
        return;
    }

    resultCard.innerHTML = `
    <ion-card-header>
        <ion-card-title>
             Conversion result is : ${inchesMeters} meters
        </ion-card-title>
    </ion-card-header>`;
});


resetButton.addEventListener("click", () => {
    feet.value = "";
    inchesInput.value = "";
    resultCard.innerHTML = "";
});