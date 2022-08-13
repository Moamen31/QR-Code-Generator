let container = document.querySelector(".container");
let generateBtn = document.querySelector("form button");
let qrInput = document.querySelector("form input");
let qrImg = document.querySelector(".qr-code img")

generateBtn.addEventListener("click", ((e) => {
    e.preventDefault();
    let inputValue = qrInput.value
    if (!inputValue) {
        return;
    }
    //change btn text
    generateBtn.textContent = "Generating QR Code..."
    //getting qr code of the entered url or text using qr server api
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${inputValue}`;
    //when loaded change the text back and add the class
    qrImg.addEventListener("load", (() => {
        container.classList.add("show")
        generateBtn.textContent = "Generator QR Code"
    }))
}))

qrInput.addEventListener("keyup", (() => {
    //keyup is fired when we press and release a key.. it will be triggered when we delete the input value
    if(!qrInput.value){
        container.classList.remove("show")
    }
}))