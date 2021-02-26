//Function to mark comma every three digits
function commaEveryThreeDigits(testNum){
    var number = testNum;
    var numberComma = number.toLocaleString();
    console.log(numberComma);
    return numberComma;
}

commaEveryThreeDigits(9527); //9,527
commaEveryThreeDigits(3345678); //3,345,678
commaEveryThreeDigits(-1234.45); //-1,234.45

exports.commaEveryThreeDigits = commaEveryThreeDigits;



