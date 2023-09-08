

const popupButton = document.getElementById("popup-button");
const popupContainer = document.getElementById("popup-container");
const closePopup = document.getElementById("close-popup");


popupButton.addEventListener("click", () => {
    popupContainer.style.display = "block";
});


closePopup.addEventListener("click", () => {
    popupContainer.style.display = "none";
});

const showFormButton = document.getElementById("continue-btn");
const myForm = document.getElementById("myForm");


 let ticking = new Audio("./assets/riddles.bgm.mp3")
ticking.play()
// ticking.loop = true



// const redirected = dociment.getElementById("submit")  

function showpopup(){
    myForm.style.display = "block";
    showFormButton.style.display = "none"
}

document.getElementById('myForm').addEventListener('submit', function (e) {

    e.preventDefault(); 

    const inputData = document.getElementById('inputData').value;
    const url = 'destination.html?userInput=' + encodeURIComponent(inputData);
    window.location.href = "game.html";
});

