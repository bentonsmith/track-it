/*
 * This program is all run from a single HTML page. It uses embedded Google Sheets
 * to store and update data. This script is the driver of the application navigation
 * and responds to user input. It has four methods that allow a user to add assets, 
 * edit assets, and view the home page. 
 * 
 * After defining the functions, it assigns event handlers to each of the buttons
 * on the user interface. This allows users to navigate the application without
 * ever refreshing the page. 
 */

// Constants to store URLs to add forms
const addComputerUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdSDrdpi4T-aTERC2pEGEtmQjNzOVG1tt6kf9pT9ZjQbp-5QA/viewform?embedded=true";
const addNetworkingUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeLk3Do1rYuThxeQz0CfqqZndlrIWCaLXrFzw7R5aLVQGszkw/viewform?embedded=true";
const addPrinterUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfrZzWkG-KfmQ-8HmiG7ulIJE5h7c5pJ7gd8iSINryttiss4Q/viewform?embedded=true";

//Constants to store URLS to udate sheets
const editComputerUrl = "https://docs.google.com/spreadsheets/d/1sPypLGGBZuOKoSCY--GU2Ja3AV3K1Tf7lXUDHSSk4_E/edit?usp=sharing";
const editNetworkingUrl = "https://docs.google.com/spreadsheets/d/1LUGrBW1d9ZOWDOYxK4nDrwa_x0R3aSUkBupDLZxEhqo/edit?usp=sharing";
const editPrinterUrl = "https://docs.google.com/spreadsheets/d/1d6oCPKfc0H7X5UStWY0UTCviw1ACTb81EN8GIk25Zss/edit?usp=sharing";

// Constant to store home page
const homePageSheetUrl = "https://docs.google.com/spreadsheets/d/1zPX4IHYxQKVasiDVtbtaK9QWP6IIubmBRdKsZFLXfCE/edit?usp=sharing";

/*
 * This function gets the iFrame from the page and
 * updates its url to a given address.
 * 
 * @param url: Address to embed in sheet
 * @return none
 */
function changeIFrame(url) {
    // Getting the iFrame from the page. The page only has one iFrame
    let iFrame = document.querySelector("#content");

    // Changing the src attribute to the given URL
    iFrame.setAttribute("src", url);
}

/*
 *
 * This function allows the user to navigate to the home page. 
 * It first updates the iFrame to use the proper URL, then changes
 * adjusts the styles of the navigation bar.
 * 
 */
function homePage() {
    changeIFrame(homePageSheetUrl);

    // Setting the home button to be active
    let home = document.querySelector("#home");
    home.setAttribute("class", "home active");

    // Ensuring the add button is not active
    let add = document.querySelector("#add-asset");
    add.setAttribute("class", "dropbtn");

    // Ensuring the edit button is not active
    let edit = document.querySelector("#edit-asset");
    edit.setAttribute("class", "dropbtn");
}

/*
 * This function allows the user to navigate to the proper page
 * to add a new asset. You must pass it a type. These are the types currently 
 * supported: 
 *   * computer
 *   * networking
 *   * printer
 * 
 * @param type: type of asset to add
 * @return none
 */
function addAsset(type) {
    // Setting the iFrame to add a computer
    if(type === "computer") {
        changeIFrame(addComputerUrl);
    }
    // Setting the iFrame to add a networking device
    else if(type === "networking") {
        changeIFrame(addNetworkingUrl);
    }
    // Setting the iFrame to add a printer
    else if(type === "printer") {
        changeIFrame(addPrinterUrl);
    }

    // Ensuring the home button is not active
    let home = document.querySelector("#home");
    home.setAttribute("class", "home");

    // Setting the add button to be active
    let add = document.querySelector("#add-asset");
    add.setAttribute("class", "dropbtn active");

    // Ensruing the edit button is not active
    let edit = document.querySelector("#edit-asset");
    edit.setAttribute("class", "dropbtn");
}

/*
 * This function allows the user to navigate to the proper page
 * to edit an asset. You must pass it a type. These are the types currently 
 * supported: 
 *   * computer
 *   * networking
 *   * printer
 * 
 * @param type: type of asset to edit
 * @return none
 */
function editAsset(type) {
    // Setting the iFrame to a computer
    if(type === "computer") {
        changeIFrame(editComputerUrl);
    }
    // Setting the iFrame to a networking device
    else if(type === "networking") {
        changeIFrame(editNetworkingUrl);
    }
    // Setting the iFrame to a printer
    else if(type === "printer") {
        changeIFrame(editPrinterUrl);
    }

    // Ensuring the home button is not active
    let home = document.querySelector("#home");
    home.setAttribute("class", "home");

    // Ensuring the add button is not active
    let add = document.querySelector("#add-asset");
    add.setAttribute("class", "dropbtn");

    // Setting the edit button to active
    let edit = document.querySelector("#edit-asset");
    edit.setAttribute("class", "dropbtn active");
}

// Setting up an event listener to respond to clicks on the home button
let home = document.querySelector("#home");
home.addEventListener("click", homePage);

// Setting up an event listener to respond to clicks on the add computer button
let addComputer = document.querySelector("#add-computer");
addComputer.addEventListener("click", function() {addAsset("computer");});

// Setting up an event listener to respond to clicks on the add networking device button
let addNetworking = document.querySelector("#add-networking");
addNetworking.addEventListener("click", function () {addAsset("networking");});

// Setting up an event listener to respond to clicks on the add printer button
let addPrinter = document.querySelector("#add-printer");
addPrinter.addEventListener("click", function() {addAsset("printer");});

// Setting up an event listener to respond to clicks on the edit computer button
let editComputer = document.querySelector("#edit-computer");
editComputer.addEventListener("click", function() {editAsset("computer");});

// Setting up an event listener to respond to clicks on the edit networking device button
let editNetworking = document.querySelector("#edit-networking");
editNetworking.addEventListener("click", function () {editAsset("networking");});

// Setting up an event listener to respond to clicks on the edit printer button
let editPrinter = document.querySelector("#edit-printer");
editPrinter.addEventListener("click", function() {editAsset("printer");});

// Setting up an event listener to respond to clicks on the site icon
let icon = document.querySelector(".logo");
icon.addEventListener("click", homePage);