var funTranslation = (function(){
  var words = {
    Merry: "Frohlich",
    Christmas: "Weihnachten",
    You: "Sie",
    Filthy: "Schmutzige",
    Animal: "Tier";
  }

  return {
    translateToGerman : function(whatToTranslate){
      var newString = "";
      var splitString = whatToTranslate.split(" ");
      for (var i in splitString){
        newString += words[splitString[i]] + " ";
      }
      return newString;
    }
  }
}());
/*Each team member will create one JavaScript file that contains one IIFE. 
Each teammate's IIFE will augment the other teammates' IIFEs.*/