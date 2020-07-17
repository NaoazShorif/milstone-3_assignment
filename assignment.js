//1st problem: calculating feet to Mile.
function feetToMile( feet ){
    let mile = feet / 5280;
    if (feet >= 0){
      return"Your converted result is " + mile.toFixed(4) + " mile.";
    }else{
      return "WARNING: Please enter a valid or positive value.";
    }
}
//testing the feetToMile function;
let resultInMile = feetToMile(120);
console.log (resultInMile);

//2nd problem: calculating total amount of wood.
function woodCalculator(chair, table , bed){
    let calculateWood = [chair* 1, table * 3, bed * 5]
    let totalNeedOfWood = calculateWood[0]+ calculateWood[1] + calculateWood[2];
    if (chair < 0 || table < 0 ||bed < 0){
        return "WARNING: Please enter a valid or positive number of your furniture";
    }else {
        return "You need to buy " + totalNeedOfWood + " cubic feet wood.";
    }
}
//testing the woodCalculator function;
let totalWoodResult = woodCalculator(1, 1, 1);
console.log(totalWoodResult);

//3rd problem: Calculating brick for your building.
 function brickCalculator (tala){
     let totalBricks, smallerFloorBricks , middleFloorBricks , biggerFloorBricks;
     if( tala <= 0){
         return "WARNING: Floor amount can't be negative.";
     }else if (tala > 0 && tala <= 10){
          totalBricks = tala * 15 * 1000;
     }else if (tala > 10 && tala <= 20){
         middleFloorBricks = (tala - 10) * 12 * 1000;
         biggerFloorBricks = 10 * 15 * 1000;
         totalBricks =  middleFloorBricks + biggerFloorBricks;
     }else {
         smallerFloorBricks = (tala-20) * 10 * 1000;
         middleFloorBricks = 10 * 12 * 1000;
         biggerFloorBricks = 10 * 15 * 1000;
         totalBricks = smallerFloorBricks + middleFloorBricks + biggerFloorBricks;
     }
     return "Total brick amount is = " + totalBricks;
 }
// testing brickCalculator function;
    let totalBrickResult = brickCalculator(27);
    console.log(totalBrickResult);



//4th problem: Finding tiny friends.
function tinyFriend (names){
    let tinyLength = names[0].length;
    let tinyName = "";

        for (i = 0; i < names.length; i++){
            let currentName = names[i].length;
            if (currentName < tinyLength){
                tinyName = names[i];
                tinyLength = currentName;
            }
        }
        return tinyName; 
}

// testing tinyFriend function;
let friends = ["rahim", "jabbar","picchi", "abul","sabbir",];
let result = tinyFriend(friends);
console.log(result);