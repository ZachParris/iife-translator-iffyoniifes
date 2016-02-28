/*Each team member will create one JavaScript file that contains one IIFE. 
Each teammate's IIFE will augment the other teammates' IIFEs.*/

// First step is identifying the original IIFE and declaring a new function with a parameter
var TranslatedGreeting = (function(acceptArg) {

// Create a miniature dictionary with Russian / English equivalent words. 
    var lexicon = {
    MERRY: "веселый",
    CHRISTMAS: "рождество",
    YOU: "вы",
    FILTHY: "отвратительный",
    ANIMAL: "животное",
  };

  // create new function that operates as the getter. 
    acceptArg.translateToRussian = function(userInput) {
        var applyLexicon = userInput.split(" "); 
// take userInput and split to an array with a space as delimiter 
           applyLexicon[applyLexicon.indexOf("MERRY")]=lexicon.MERRY;
           applyLexicon[applyLexicon.indexOf("CHRISTMAS")]=lexicon.CHRISTMAS;
           applyLexicon[applyLexicon.indexOf("YOU")]=lexicon.YOU;
           applyLexicon[applyLexicon.indexOf("FILTHY")]=lexicon.FILTHY;
           applyLexicon[applyLexicon.indexOf("ANIMAL")]=lexicon.ANIMAL;
// find individual instances of english words using index of and replace with russian equivalent. 
       var regroup = applyLexicon.join(" ");
// re-join the items to get it out of an array and into a format suitable for the output div
       return regroup;
};
    return acceptArg;
}(TranslatedGreeting));



// My first-pass code that violated the req's of the assignment by creating an array instead of an object.

// var TranslatedGreeting = (function(acceptArg) {
//     var russianGreeting = [];
//     acceptArg.translateToRussian = function(userInput) {
//         var kremlin = userInput.split(" ");
//         russianGreeting += kremlin[kremlin.indexOf("MERRY")].replace("MERRY", "веселый ");
//         russianGreeting += kremlin[kremlin.indexOf("CHRISTMAS")].replace("CHRISTMAS", "рождество ");
//         russianGreeting += kremlin[kremlin.indexOf("YOU")].replace("YOU", "вы ");
//         russianGreeting += kremlin[kremlin.indexOf("FILTHY")].replace("FILTHY", "отвратительный ");
//         russianGreeting += kremlin[kremlin.indexOf("ANIMAL")].replace("ANIMAL", "животное ");
//         return russianGreeting;
//         }
//     return acceptArg;
// }) (TranslatedGreeting);