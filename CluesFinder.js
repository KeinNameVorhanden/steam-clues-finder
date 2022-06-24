// ==UserScript==
// @name         Clues Finder
// @namespace    CluesFinderSteam
// @version      0.3
// @description  Will find the clues.
// @author       KeinNameVorhanden
// @match        https://store.steampowered.com/category/*/*
// @match        https://store.steampowered.com/vr/*
// @match        https://store.steampowered.com/sale/clorthax_quest*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steampowered.com
// @grant        none
// ==/UserScript==

let once = false;

function goto_clue() {
    if((window.location.href).includes("sale/clorthax_quest")) {
        setTimeout(function() {
            let buttons = document.getElementsByClassName("LinkButton")
            if (buttons[1].text === "Don't Click Me" || buttons[1].text === "Nicht hier klicken") {
                let button = document.getElementsByClassName("DialogButton _DialogLayout Secondary Focusable")[0].click()
                setTimeout(function() {
                    buttons[1].click()
                }, 500);
            } else {
                buttons[1].click()
            }
        }, 500);
    }
};

function add_onclick() {
    if(!((window.location.href).includes("sale/clorthax_quest"))) {
        setTimeout(function() {
            let tab = document.getElementsByClassName("SaleTab Selected")[0].addEventListener("click", find_game)
        }, 500);
    }
};

function find_game() {
    if(!((window.location.href).includes("sale/clorthax_quest"))) {
        let page = document.getElementsByClassName("sale_page_background")[0].scrollHeight
        window.scrollTo({
            top: page,
            left: 0,
            behavior: 'smooth'
        });

        setTimeout(function() {
            let e = document.getElementsByClassName("ImpressionTrackedElement") //CL.0RTH.4X
            for(var j = 0; j < e.length; j++) {
                if (e[j].textContent.includes("CL.0RTH.4X")) {
                    if(once == false) {
                        //alert("Found the game")
                        once = true
                    }
                    e[j].scrollIntoView()
                    e[j].style = "border: 10px solid red"
                    window.scrollBy(0, -300)
                    break
                }
            }
        }, 1200);
    }
};

(function() {
    add_onclick()
    find_game()
    goto_clue()
})();

(function(history) {
    var pushState = history.pushState
    history.pushState = function(state) {
        if (typeof history.onpushstate == "function") {
            history.onpushstate({state: state})
        }
        return pushState.apply(history, arguments)
    }
})(window.history);

window.onpopstate = history.onpushstate = function(e) {
    once = false
    add_onclick()
    find_game()
    goto_clue()
};
