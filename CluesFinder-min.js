// ==UserScript==
// @name         Clues Finder
// @namespace    CluesFinderSteam
// @version      0.4
// @description  Will find the clues.
// @author       KeinNameVorhanden
// @match        https://store.steampowered.com/category/*/*
// @match        https://store.steampowered.com/vr/*
// @match        https://store.steampowered.com/sale/clorthax_quest*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steampowered.com
// @grant        none
// ==/UserScript==

let once=!1;function goto_clue(){if(window.location.href.includes("sale/clorthax_quest")){let a=document.getElementsByClassName("sale_page_background")[0].scrollHeight;window.scrollTo({top:a,left:0,behavior:"smooth"}),setTimeout(function(){let a=document.getElementsByClassName("LinkButton");"SummerSale2022_Double_Buttons"===a[1].parentNode.className?(document.getElementsByClassName("DialogButton _DialogLayout Secondary Focusable")[0].click(),setTimeout(function(){a[1].click()},500)):a[1].click()},500)}}function add_onclick(){window.location.href.includes("sale/clorthax_quest")||setTimeout(function(){document.getElementsByClassName("SaleTab Selected")[0].addEventListener("click",find_game)},500)}function find_game(){if(!window.location.href.includes("sale/clorthax_quest")){let a=document.getElementsByClassName("sale_page_background")[0].scrollHeight;window.scrollTo({top:a,left:0,behavior:"smooth"}),setTimeout(function(){let b=document.getElementsByClassName("ImpressionTrackedElement");for(var a=0;a<b.length;a++)if(b[a].textContent.includes("CL.0RTH.4X")){!1==once&&(alert("Found the game"),once=!0),b[a].scrollIntoView(),b[a].style="border: 10px solid red",window.scrollBy(0,-300);break}},1200)}}add_onclick(),find_game(),goto_clue(),function(a){var b=a.pushState;a.pushState=function(c){return"function"==typeof a.onpushstate&&a.onpushstate({state:c}),b.apply(a,arguments)}}(window.history),window.onpopstate=history.onpushstate=function(a){once=!1,add_onclick(),find_game(),goto_clue()}