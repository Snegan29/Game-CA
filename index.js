



// popup after i click the play button
const popupButton = document.getElementById("popup-button");
const popupContainer = document.getElementById("popup-container");
const closePopup = document.getElementById("close-popup");


popupButton.addEventListener("click", () => {
    popupContainer.style.display = "block";
});


closePopup.addEventListener("click", () => {
    popupContainer.style.display = "none";
});


// background music
let bgm = new Audio("./assets/riddles.bgm.mp3")
bgm.play()
bgm.loop = true


//a drop down after i click the continue button
const showFormButton = document.getElementById("continue-btn");
const myForm = document.getElementById("myForm");
 
function showpopup(){
    myForm.style.display = "block";
    showFormButton.style.display = "none"
}

document.getElementById('myForm').addEventListener('submit', function (e) {

    e.preventDefault(); 
    localStorage.setItem("name",document.querySelector(".name").value)
    localStorage.setItem("nickname",document.querySelector(".nickname").value)
    const inputData = document.getElementById('inputData').value;
    const url = 'destination.html?userInput=' + encodeURIComponent(inputData);
    window.location.href = "game.html";
});


// values in gets stored in local storage.
