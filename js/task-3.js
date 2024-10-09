const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
textInput.addEventListener("input", (e)=>{
    const textValue = e.currentTarget.value.trim();
    textOutput.textContent = (textValue === "")?"Anonymous":textValue;
});

