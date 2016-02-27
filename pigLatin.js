/*Each team member will create one JavaScript file that contains one IIFE. 
Each teammate's IIFE will augment the other teammates' IIFEs.*/

var TranslatedGreeting = (function(oldTranslatedGreeting){

    var pigLatinLexicon = {
    Merry: "Errymay",
    Christmas: "Istmaschray",
    you: "ouyay",
    filthy: "ilthyfay",
    animal: "animalay"
    }

    oldTranslatedGreeting.translateToPigLatin = function(inputText) {
        var inputCutUp = inputText.split(" ");
        inputCutUp[inputCutUp.indexOf("Merry")] = pigLatinLexicon.Merry;
        inputCutUp[inputCutUp.indexOf("Christmas")] = pigLatinLexicon.Christmas;
        inputCutUp[inputCutUp.indexOf("you")] = pigLatinLexicon.you;
        inputCutUp[inputCutUp.indexOf("filthy")] = pigLatinLexicon.filthy;
        inputCutUp[inputCutUp.indexOf("animal")] = pigLatinLexicon.animal;
        var sentence = joinSentence(inputCutUp);
        return sentence
    }

    oldTranslatedGreeting.joinSentence = function(myArray) {
        var outputSentence = myArray.join(" ");
        return outputSentence
    }

return oldTranslatedGreeting

 })(TranslatedGreeting);

