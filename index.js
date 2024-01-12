// Code your solution in this file!
function distanceFromHqInBlocks(start) {
    let hqBlock=42;
    return Math.abs(start-hqBlock);
}   
function distanceFromHqInFeet(start) {
    let hqBlock=42;
    let blockInFeet=264;
    return Math.abs(start-hqBlock)*blockInFeet;
}
function distanceTravelledInFeet(start, destination) {
    let blockInFeet=264;
    return Math.abs(start-destination)*blockInFeet;
}

function calculatesFarePrice(start, finish) {
let blockInFeet=264
let distance = (Math.abs(start-finish))*blockInFeet;

    if (distance <= 400) {
        return distance*0;
    } else if (distance >= 400 && distance <=2000) {
        return ((distance-400)*.02);
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else if (distance > 2500) {
        return 'cannot travel that far';
    }

}
console.log(calculatesFarePrice(34, 24));