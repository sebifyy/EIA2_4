"use strict";
var L02;
(function (L02) {
    document.addEventListener("DOMContentLoaded", main);
    var selectedSequence;
    var selectedSequenceShuffled;
    //Main Function, executed after site was fully loaded
    function main() {
        createStartPage();
    }
    //Create div with given id to dump everything inside
    function createView(id) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.classList.add("view");
        div.setAttribute("id", id);
        return div;
    }
    // Erstellen der Startseite
    function createStartPage() {
        let selectableSequences = ["EIA2-Inverted", "Gurke", "Tomate", "Apfel", "Zwetschke"]; //Creates selectable sequences for the game
        //create div id=startPage
        let startPage = createView("startPage");
        //Create Heading
        let title = document.createElement("h1"); //Create h1 on startpage
        startPage.appendChild(title);
        title.innerHTML = "Sequence Memory Game";
        //Create clickable buttons to choose the sequence for game
        for (let i = 0; i < selectableSequences.length; i++) {
            let sequenceButton = document.createElement("div");
            startPage.appendChild(sequenceButton);
            sequenceButton.setAttribute("id", "sequenceToChoose" + i);
            sequenceButton.innerHTML = selectableSequences[i];
            //On Click gets innerHTML of button
            sequenceButton.onclick = function (event) {
                let target = event.target || event.srcElement;
                console.log(target.innerHTML);
                //Shuffle Input String
                console.log(shuffle(target.innerHTML));
                selectedSequence = target.innerHTML;
                console.log(selectedSequence);
                selectedSequenceShuffled = shuffle(target.innerHTML);
                console.log(selectedSequenceShuffled);
            };
            //EventListener
            sequenceButton.addEventListener("click", StartGame);
        }
        //Create Text Input for user
        let userInput = document.createElement("input");
        startPage.appendChild(userInput);
        userInput.type = "text";
        let userTimeInput = document.createElement("input");
        startPage.appendChild(userTimeInput);
        userTimeInput.type = "number";
        //Create Start Game button for user input
        let startGameButton = document.createElement("div");
        startPage.appendChild(startGameButton);
        startGameButton.classList.add("startGameButton");
        startGameButton.innerHTML = "Start Game";
        //Click on "Start Game" Button
        startGameButton.addEventListener("click", StartGame);
    }
    //Clear Start Page and Start Game
    function StartGame() {
        let clickedLetters = "";
        //Create div id=gamePage
        let gamePage = createView("gamePage");
        displayNewPage("gamePage");
        //Create divs with seperated string to click on
        for (let i = 0; i < selectedSequenceShuffled.length; i++) {
            let seperatedSequenceButtons = document.createElement("div");
            gamePage.appendChild(seperatedSequenceButtons);
            seperatedSequenceButtons.setAttribute("id", selectedSequenceShuffled[i]);
            seperatedSequenceButtons.setAttribute("class", "memorycard");
            seperatedSequenceButtons.innerHTML = selectedSequenceShuffled[i];
            seperatedSequenceButtons.onclick = function (event) {
                let bruh = event.target || event.srcElement;
                clickedLetters += bruh.innerHTML;
                console.log(clickedLetters);
                console.log(checkString(selectedSequence, clickedLetters));
                //If user clicks on wrong letter, loser screen will be displayed
                if (!checkString(selectedSequence, clickedLetters)) {
                    let losePage = createView("losePage");
                    displayNewPage("losePage");
                    //Losing screen
                    let loserText = document.createElement("div");
                    losePage.appendChild(loserText);
                    losePage.innerHTML = "Game Over! Press F5 to restart.";
                }
                //After every click, program checks if the selected string in the beginning equals the one the user clicked his way through
                checkIfDone(selectedSequence, clickedLetters);
            };
        }
    }
    //Function to clear old Page and display new Page
    function displayNewPage(newPage) {
        let allPages = document.getElementsByClassName("view");
        for (let i = 0; i < allPages.length; i++) {
            let idA = allPages[i].getAttribute("id");
            if (idA == newPage) {
                allPages[i].style.display = "block";
            }
            else {
                allPages[i].style.display = "none";
            }
        }
    }
    function shuffle(str) {
        var a = str.split(""), n = a.length;
        for (var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join("");
    }
    function checkString(reference, difference) {
        return reference.startsWith(difference);
    }
    function checkIfDone(reference, difference) {
        if (reference == difference) {
            let winPage = createView("winPage");
            displayNewPage("winPage");
            let winnerText = document.createElement("div");
            winPage.appendChild(winnerText);
            winPage.innerHTML = "Nice bro.";
        }
    }
})(L02 || (L02 = {}));
//# sourceMappingURL=L02_code.js.map