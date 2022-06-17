/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const unitNumEl = document.getElementById("unit-number")
const unitBtnEl = document.getElementById('unit-btn')
const massEl = document.getElementById('mass')
const volumeEl = document.getElementById("volume")
const lengthEl = document.getElementById("length")

unitNumEl.addEventListener("input", selectBtn)

 function resetBtn() {
    unitBtnEl.style.backgroundColor = "#fff"
    unitBtnEl.style.color = "#000" 
    unitBtnEl.style.border = "none"
 }
unitBtnEl.addEventListener('click', function() {
    meterToFeet()
    literToGallon()
    kilogramToPound()
    resetBtn()
    
})

function meterToFeet(num) {
    num = unitNumEl.value
    let convertToMeter = num / 3.281
    let convertToFeet = num * 3.281
    lengthEl.textContent = `${num} meters = ${convertToFeet.toFixed(3)} feet | ${num} feet = ${convertToMeter.toFixed(3)} meters`
}

function literToGallon(num) {
    num = unitNumEl.value
    const convertToGallons = num * 0.264
    const convertToLiters = num / 0.264
    volumeEl.textContent = `${num} liters = ${convertToGallons.toFixed(3)} gallons | ${num} gallons = ${convertToLiters.toFixed(3)} liters`
}


function kilogramToPound(num) {
    num = unitNumEl.value
    const convertToPounds = num * 2.204
    const convertToKilos = num / 2.204
    massEl.textContent = `${num} kilos = ${convertToPounds.toFixed(3)} pounds | ${num} pounds = ${convertToKilos.toFixed(3)} kilos`
}

function selectBtn() {
    unitBtnEl.style.backgroundColor = "#87dba3"
    unitBtnEl.style.color= "#000"
    unitBtnEl.style.border = "dotted white 2px"
}




