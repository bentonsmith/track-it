function changeIFrame(url) {
    let iFrame = document.querySelector("#content");
    iFrame.setAttribute("src", url);
}

function homePage() {
    changeIFrame("https://docs.google.com/spreadsheets/d/1zPX4IHYxQKVasiDVtbtaK9QWP6IIubmBRdKsZFLXfCE/edit?usp=sharing");

    let home = document.querySelector("#home");
    home.setAttribute("class", "home active");
    let add = document.querySelector("#add-asset");
    add.setAttribute("class", "dropbtn");
    let edit = document.querySelector("#edit-asset");
    edit.setAttribute("class", "dropbtn");
}

function addAsset(type) {
    if(type === "computer") {
        changeIFrame("https://docs.google.com/forms/d/e/1FAIpQLSdSDrdpi4T-aTERC2pEGEtmQjNzOVG1tt6kf9pT9ZjQbp-5QA/viewform?embedded=true");
    }
    else if(type === "networking") {
        changeIFrame("https://docs.google.com/forms/d/e/1FAIpQLSeLk3Do1rYuThxeQz0CfqqZndlrIWCaLXrFzw7R5aLVQGszkw/viewform?embedded=true");
    }
    else if(type === "printer") {
        changeIFrame("https://docs.google.com/forms/d/e/1FAIpQLSfrZzWkG-KfmQ-8HmiG7ulIJE5h7c5pJ7gd8iSINryttiss4Q/viewform?embedded=true");
    }
    let home = document.querySelector("#home");
    home.setAttribute("class", "home");
    let add = document.querySelector("#add-asset");
    add.setAttribute("class", "dropbtn active");
    let edit = document.querySelector("#edit-asset");
    edit.setAttribute("class", "dropbtn");
}

function editAsset(type) {
    if(type === "computer") {
        changeIFrame("https://docs.google.com/spreadsheets/d/1sPypLGGBZuOKoSCY--GU2Ja3AV3K1Tf7lXUDHSSk4_E/edit?usp=sharing");
    }
    else if(type === "networking") {
        changeIFrame("https://docs.google.com/spreadsheets/d/1LUGrBW1d9ZOWDOYxK4nDrwa_x0R3aSUkBupDLZxEhqo/edit?usp=sharing");
    }
    else if(type === "printer") {
        changeIFrame("https://docs.google.com/spreadsheets/d/1d6oCPKfc0H7X5UStWY0UTCviw1ACTb81EN8GIk25Zss/edit?usp=sharing");
    }
    let home = document.querySelector("#home");
    home.setAttribute("class", "home");
    let add = document.querySelector("#add-asset");
    add.setAttribute("class", "dropbtn");
    let edit = document.querySelector("#edit-asset");
    edit.setAttribute("class", "dropbtn active");
}

let home = document.querySelector("#home");
home.addEventListener("click", homePage);
let addComputer = document.querySelector("#add-computer");
addComputer.addEventListener("click", function() {addAsset("computer");});
let addNetworking = document.querySelector("#add-networking");
addNetworking.addEventListener("click", function () {addAsset("networking");});
let addPrinter = document.querySelector("#add-printer");
addPrinter.addEventListener("click", function() {addAsset("printer");});
let editComputer = document.querySelector("#edit-computer");
editComputer.addEventListener("click", function() {editAsset("computer");});
let editNetworking = document.querySelector("#edit-networking");
editNetworking.addEventListener("click", function () {editAsset("networking");});
let editPrinter = document.querySelector("#edit-printer");
editPrinter.addEventListener("click", function() {editAsset("printer");});
let icon = document.querySelector(".logo");
icon.addEventListener("click", homePage);