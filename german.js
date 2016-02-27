var TranslatedGreeting = (function(oldTranslatedGreeting){
  var words = {
    MERRY: "Frohlich",
    CHRISTMAS: "Weihnachten",
    YOU: "Sie",
    FILTHY: "Schmutzige",
    ANIMAL: "Tier"
  }

  oldTranslatedGreeting.translateToGerman = function(whatToTranslate){
    var newString = "";
    var tempString = "";
    var splitString = whatToTranslate.split(" ");
    for (var i in splitString){
      tempString = words[splitString[i]];
      console.log("words",splitString[i]);
      console.log("tempString", tempString);
      if ((tempString) === undefined){
        tempString = splitString[i];
      }
      newString += tempString + " ";
    }
    return newString;
  }

  return oldTranslatedGreeting

}(TranslatedGreeting));
/*Each team member will create one JavaScript file that contains one IIFE. 
Each teammate's IIFE will augment the other teammates' IIFEs.*/