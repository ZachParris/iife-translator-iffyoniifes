/*Each team member will create one JavaScript file that contains one IIFE. 
Each teammate's IIFE will augment the other teammates' IIFEs.*/

var TranslatedGreeting = (function(oldTranslatedGreeting){

    /*The lexicon should be a private variable that cannot be accessed by 
    the other team member's module except through an accessor (getter) method.*/
    var pigLatinLexicon = {
    MERRY: "Errymay",
    CHRISTMAS: "Istmaschray",
    YOU: "ouyay",
    FILTHY: "ilthyfay",
    ANIMAL: "animalay"
    }

    oldTranslatedGreeting.translateToPigLatin = function(inputText) {
        var inputCutUp = inputText.split(" ");
        inputCutUp[inputCutUp.indexOf("MERRY")] = pigLatinLexicon.MERRY;
        inputCutUp[inputCutUp.indexOf("CHRISTMAS")] = pigLatinLexicon.CHRISTMAS;
        inputCutUp[inputCutUp.indexOf("YOU")] = pigLatinLexicon.YOU;
        inputCutUp[inputCutUp.indexOf("FILTHY")] = pigLatinLexicon.FILTHY;
        inputCutUp[inputCutUp.indexOf("ANIMAL")] = pigLatinLexicon.ANIMAL;
        var sentence = oldTranslatedGreeting.joinSentence(inputCutUp);
        return sentence
    }

    oldTranslatedGreeting.joinSentence = function(myArray) {
        var outputSentence = myArray.join(" ");
        return outputSentence
    }

return oldTranslatedGreeting

 })(TranslatedGreeting);

