/*
    * File Name: Assignment Three - Mini Portfolio - JSON DATA
    * Author Name: Gil Emerson (200186807)
    * Website Name: GE Design Studio 
    * File Description: JavaScript Page - (JavaScript Page (app.js))
*/

"use strict"; 
// IIFE
(function() {

     //Main Page Bio Content
    if (gilImage != null) {
        let data = {};
        let XHR = new XMLHttpRequest();
        // open the content.json file
        XHR.open("GET", "../content.json", true);
        XHR.send(null);
        //onreadystatechange
        XHR.onreadystatechange = function() {
            if((this.readyState === 4) && (this.status === 200)) {
                data = JSON.parse(this.responseText);
            }
        };

        //Inject Data
        XHR.addEventListener("load", function () {
            // Set variables
            let personalImage = document.getElementById("personalImage");
            let intro = document.getElementById("intro");
            let paragraphOne = document.getElementById("paragraphOne");
            personalImage.innerHTML = data.index[0].image;
            intro.innerText = data.index[0].title;
            paragraphOne.innerText = data.index[0].text;
        });
    }
        
   
})();                          