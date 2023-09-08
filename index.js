





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


let bgmusic = new Audio("./assets/riddles.bgm.mp3")
bgmusic.play()
bgmusic.loop = true


window.localStorage.setItem("name",document.querySelector(".name").value)
window.localStorage.setItem("nickname",document.querySelector(".nickname").value)

console.log(localStorage.getItem)
 

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

