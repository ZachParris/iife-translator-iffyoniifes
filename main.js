/* The team must discuss and choose a single variable name that will hold all
 of the logic that the team creates (i.e. see the Sedan example above).*/

 var TranslatedGreeting = (function(){

    return {
        getTest: function(){
            return 'hello'
        }
    }

 }())

 /*JavaScript file that handles interacting with the form elements and determining which method should be called.*/


 //Add event listener for button
 var button = document.getElementById("translate")
 button.addEventListener("click", passDatTranslation)
var button = document.getElementById("translate")
 button.addEventListener("keypress", passDatTranslation);

//Add event listener for clear button
 var button2 = document.getElementById("clear")
 button2.addEventListener("click", clearDatShit)
  var button = document.getElementById("clear")
 button.addEventListener("keypress", clearDatShit);

 //Grab user's input in fext field
 function getUserInput() {
    var userInput = document.getElementById("inputText").value;
    return userInput.toUpperCase();
 }
 
//Grab user's signature
function getUserSignature() {
    var userSig = document.getElementById("userSignature").value;
    var signature = document.getElementById("signIt")
    signature.innerHTML = "Love, " + userSig;
}

 //Based on user's selection, have the translator preform a different translation function

//*Each IIFE should expose, in its public interface, a method named translateTo{Language} 
//(e.g. translateToSpanish or translateToFinnish) that accepts a single argument. 
//That argument's value should be the text entered in by the user.*/
function passDatTranslation() {
    var outputText1 = document.getElementById("outputText");
    var result = "Watch this space for greeting.";
    var languageSelect = document.getElementById("languageSelect");
    var userInput = getUserInput();
    getUserSignature();
    if (userInput.length > 0){
        if (languageSelect.value === "germ") {
            result = TranslatedGreeting.translateToGerman(userInput)
        } else if (languageSelect.value === "pig") {
            result = TranslatedGreeting.translateToPigLatin(userInput)
        } else if (languageSelect.value === "port") {
            result = TranslatedGreeting.translateToPortugese(userInput)
        } else if (languageSelect.value === "russ") {
            result = TranslatedGreeting.translateToRussian(userInput) 
        } else {
            alert("PICK A LANGUAGE YOU BOZO")
        }
    } else {
        alert("ENTER TEXT YOU BONEHEAD")
    }
    
    outputText1.innerHTML = result;
}

function clearDatShit(){
    var clearButton = document.getElementById("inputText");
    var signature = document.getElementById("userSignature");
    var output = document.getElementById("outputText");
    var sigOut = document.getElementById("signIt");
    sigOut.innerHTML = "";
    output.innerHTML = "Watch this space for a greeting."
    clearButton.value = "";
    signature.value = "";
}



