var GenerateRandomlowerCase = () => {
    var Max = 122;
    var Min = 97;
   var Ascii = Math.round((Math.random() * (Max - Min) + Min));
   return String.fromCharCode(Ascii)
}


var GenerateRandomUpperCase = () => {
    var Max1 = 90;
    var Min1 = 65;
    var Ascii = Math.round(Math.random() * (Max1 - Min1) + Min1);
    return String.fromCharCode(Ascii)
}


var GenerateRandomNum = () => {
    
   var RamdomVal = Math.round(Math.random() * 9)
    return RamdomVal
}
