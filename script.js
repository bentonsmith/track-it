function changeIFrame(url) {
    let iFrame = document.querySelector("#content");
    iFrame.setAttribute("src", url);
}

function homePage() {
    changeIFrame("https://docs.google.com/spreadsheets/d/1ss14o8doiP6NqDPDaRE1rLRvRxjgbApjmEeu9RXv-j4/edit?usp=sharing");

    let home = document.querySelector("#home");
    home.setAttribute("class", "home active");
    let add = document.querySelector("#add-asset");
    add.setAttribute("class", "dropbtn");
    let edit = document.querySelector("#edit-asset");
    edit.setAttribute("class", "dropbtn");
}

function addAsset(type) {
    if(type === "computer") {
        changeIFrame("https://docs.google.com/spreadsheets/d/17rgS6Cr6LokgG7oSQM5BIJCi71s5DOWonejhDL1BKZE/edit?usp=sharing");
    }
    else if(type === "networking") {
        changeIFrame("https://docs.google.com/spreadsheets/d/17rgS6Cr6LokgG7oSQM5BIJCi71s5DOWonejhDL1BKZE/edit?usp=sharing");
    }
    else if(type === "printer") {
        changeIFrame("https://docs.google.com/spreadsheets/d/17rgS6Cr6LokgG7oSQM5BIJCi71s5DOWonejhDL1BKZE/edit?usp=sharing");
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
        changeIFrame("https://docs.google.com/spreadsheets/d/17rgS6Cr6LokgG7oSQM5BIJCi71s5DOWonejhDL1BKZE/edit?usp=sharing");
    }
    else if(type === "networking") {
        changeIFrame("https://docs.google.com/spreadsheets/d/17rgS6Cr6LokgG7oSQM5BIJCi71s5DOWonejhDL1BKZE/edit?usp=sharing");
    }
    else if(type === "printer") {
        changeIFrame("https://docs.google.com/spreadsheets/d/17rgS6Cr6LokgG7oSQM5BIJCi71s5DOWonejhDL1BKZE/edit?usp=sharing");
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