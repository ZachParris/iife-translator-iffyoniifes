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
    },

    returnFirst: function(){
      return words.Merry;
    },
    returnFoo: function(){
      return Object.keys(words);
    },
    returnFoo2: function(){
      var x = Object.keys(words);
      return words[x[0]];
      // for (var i in words){
      //   alert(words[i]);
      // }
    }
  }
}());