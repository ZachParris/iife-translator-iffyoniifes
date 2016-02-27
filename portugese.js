/*Each team member will create one JavaScript file that contains one IIFE. 
Each teammate's IIFE will augment the other teammates' IIFEs.*/
//"Feliz Natal Seu animal imundo"
//Create an object for lexicon to translate to Port.
var TranslatedGreeting = (function(TranslatedGreeting){
	var portugese = {
	merry: "Feliz",
	christmas: "Natal",
	you: "Seu",
	filthy: "imundo",
	animal: "animal",
}
//Create a function with a string to pass in the object?
//loop through an array using .split and .indexOf to target each word
TranslatedGreeting.translateToPortugese = function(splitUpGreeting) {
	var splitUpGreeting = greetingString.split(" ")
	   splitUpGreeting[splitUpGreeting.indexOf("merry")]=portugese.merry;
	   splitUpGreeting[splitUpGreeting.indexOf("christmas")]=portugese.christmas;
	   splitUpGreeting[splitUpGreeting.indexOf("you")]=portugese.you;
	   splitUpGreeting[splitUpGreeting.indexOf("filthy")]=portugese.filthy;
	   splitUpGreeting[splitUpGreeting.indexOf("animal")]=portugese.animal;
	   var holidayGreeting = splitUpGreeting.join(" ");
	   return TranslatedGreeting;
};
return TranslatedGreeting;
}(TranslatedGreeting || {}));