"use strict";
console.log('script running');

document.addEventListener('DOMContentLoaded', start);

let elementToPaint;

async function start() {
    let response = await fetch("mr_robot-01.svg");
    let mySvgData = await response.text();
    document.querySelector('section').innerHTML = mySvgData;
    console.log
    runShit();
}

function runShit() {
    document.querySelectorAll('g').forEach(elem => {
        elem.setAttribute('fill', "none");
        elem.addEventListener('click', clickArea);
        elem.addEventListener('mouseover', mouseoverArea);
        elem.addEventListener('mouseout', mouseoutArea);
        console.log('done');
    })
    document.querySelectorAll('.color_btn').forEach(elem => {
        elem.addEventListener('click', addColor);
    })
}

function clickArea(e) {
    elementToPaint = e.target.parentElement;
    console.log(e.target.parentElement);
    e.target.parentElement.style.fill = 'lightgray';
    //this.classList.add('selected');
    // Remove gray color from previous seleced areas

}

function mouseoverArea(e) {
    //console.log(e.target);
    e.target.style.stroke = 'blue';
}

function mouseoutArea(e) {
    e.target.style.stroke = 'none';
}

function addColor(e) {
    if (elementToPaint === undefined) {
        alert('Pick and area to color!');
    }
    elementToPaint.style.fill = e.target.getAttribute('fill');
}