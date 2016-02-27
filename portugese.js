/*Each team member will create one JavaScript file that contains one IIFE. 
Each teammate's IIFE will augment the other teammates' IIFEs.*/
//"Feliz Natal Seu animal imundo"
//Create an object for lexicon to translate to Port.
var TranslatedGreeting = (function(oldTranslatedGreeting){
	var portugese = {
	MERRY: "Feliz",
	CHRISTMAS: "Natal",
	YOU: "Seu",
	FILTHY: "imundo",
	ANIMAL: "animal",
}
//Create a function with a string to pass in the object?
//loop through an array using .split and .indexOf to target each word
oldTranslatedGreeting.translateToPortugese = function(monkeyButt) {
	var splitUpGreeting = monkeyButt.split(" "); 
	   splitUpGreeting[splitUpGreeting.indexOf("MERRY")]=portugese.MERRY;
	   splitUpGreeting[splitUpGreeting.indexOf("CHRISTMAS")]=portugese.CHRISTMAS;
	   splitUpGreeting[splitUpGreeting.indexOf("YOU")]=portugese.YOU;
	   splitUpGreeting[splitUpGreeting.indexOf("FILTHY")]=portugese.FILTHY;
	   splitUpGreeting[splitUpGreeting.indexOf("ANIMAL")]=portugese.ANIMAL;
	   var holidayGreeting = splitUpGreeting.join(" ");
	   return holidayGreeting;
};

return oldTranslatedGreeting;

}(TranslatedGreeting || {}));