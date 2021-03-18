/*
how to add /remove /toggle class to an element:

let header = document.querySelector("h1");
header.classList.add("zluty");
header.classList.remove("zluty");
header.classList.toggle("zluty");
*/

let lionText = document.querySelector(".lev");

function boldFont() {
    lionText.classList.toggle("boldparagraph");
}

function getRed() {
    lionText.classList.toggle("cerveny");
}

function getBig(event) {
    let computedStyle = window.getComputedStyle(lionText)
    let currSize = parseInt(computedStyle.fontSize);
    
    console.log(currSize);
    console.log(computedStyle.fontSize)
    console.log(event);
    
    lionText.style.fontSize = (currSize + 1) + "px";

}