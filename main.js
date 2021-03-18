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
    let computedStyle = window.getComputedStyle(lionText);
    let currSize = parseInt(computedStyle.fontSize);
    //použití toho window.getComputedStyle jsem našla na Stacku, protože lionText.style.fontSize mi vracelo NaN, nevím proč
    
    console.log(currSize);
    console.log(computedStyle.fontSize);
    console.log(event);
    
    lionText.style.fontSize = (currSize + 1) + "px";

}

let song = document.getElementById("song")
// nevím jestli je správné, že si proměnné pojmenovávám stejně v JS i v HTML???

function play() {
    song.play();
}

function pause() {
    song.pause();
}

function volume(event) {
    let slider = document.getElementById("slider");
    //nechápu, ale když chybí řádka 44, tak to taky funguje, jak to? je slider nějaká hodnota z event?
    let input = slider.value;
    if (input == "0") {
        song.volume = 0;
    } else if (input == "0.5") {
        song.volume = 0.5;
    } else {
        song.volume = 1;
    }

}

function rewind() {
    song.play();
    song.currentTime = 0;
}