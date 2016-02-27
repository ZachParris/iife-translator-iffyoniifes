/*Each team member will create one JavaScript file that contains one IIFE. 
Each teammate's IIFE will augment the other teammates' IIFEs.*/

var TranslatedGreeting = (function(englishGreeting) {
// the line above establishes an augmenting IIFE 
    var russianGreeting = [];
// this is a Russian greeting scoped to the above function. When this is 
// done, I want to have a built a getter that will simply display the message,
// after having swapped elements of the 
    englishGreeting.translateToRussian = function(userInput) {
// here's my function that will take in the userInput, use split method to turn it 
// into an array. 
        var kremlin = userInput.split(" ");
// Now I want to take the array index items and use the replace method to 'translate' individual
// words from Merry to веселый and so forth. 
        russianGreeting += kremlin[kremlin.indexOf("Merry")].replace("Merry", "веселый ");
        russianGreeting += kremlin[kremlin.indexOf("Christmas")].replace("Christmas", "russian word ");
        russianGreeting += kremlin[kremlin.indexOf("you")].replace("you", "russian word ");
        russianGreeting += kremlin[kremlin.indexOf("filthy")].replace("filthy", "russian word ");
        russianGreeting += kremlin[kremlin.indexOf("animal")].replace("animal", "russian word ");
    // use join method to put array back together. 
    console.log("Russian!!!", russianGreeting );
        return russianGreeting;
        }
    return englishGreeting;
}) (TranslatedGreeting);