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
    var splitString = whatToTranslate.split(" ");
    for (var i in splitString){
      newString += words[splitString[i]] + " ";
    }
    return newString;
  }

  return oldTranslatedGreeting

}(TranslatedGreeting));
/*Each team member will create one JavaScript file that contains one IIFE. 
Each teammate's IIFE will augment the other teammates' IIFEs.*/