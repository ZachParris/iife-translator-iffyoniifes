/* The team must discuss and choose a single variable name that will hold all
 of the logic that the team creates (i.e. see the Sedan example above).*/

 var TranslatedGreeting = (function(){

    var userInput = "Test Input";

    return {
        getTest: function(){
            return 'hello'
        }
    }

 }())

 //Add event listener for button
 var button = document.getElementById("translate")
 button.addEventListener("click", passDatTranslation)


 //Grab user's input in fext field
 function getUserInput() {
    var userInput = document.getElementById("inputText").value;
    return userInput
 }
 
 //Based on user's selection, have the translator preform a different translation function
function passDatTranslation() {
    var userInput = getUserInput();
    var languageSelect = document.getElementById("languageSelect")
    if (languageSelect.value === "germ") {
        TranslatedGreeting.translateToGerman(userInput)
    } else if (languageSelect.value === "pig") {
        TranslatedGreeting.translateToPigLatin(userInput)
    } else if (languageSelect.value === "port") {
        TranslatedGreeting.translateToPortugese(userInput)
    } else if (languageSelect.value === "russ") {
        TranslatedGreeting.translateToRussian(userInput) 
    } else {
        alert("PICK A LANGUAGE YOU BOZO")
    }
}



/*Each IIFE should expose, in its public interface, a method named translateTo{Language} 
(e.g. translateToSpanish or translateToFinnish) that accepts a single argument. 
That argument's value should be the text entered in by the user.*/

/*avaScript file that handles interacting with the form elements and determining which method should be called.*/
