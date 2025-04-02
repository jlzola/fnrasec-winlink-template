//=================================================================
// Fonctions communes à tous les formulaires
// Auteur : F1COB Jean-Michel BROCAL
//		Version 5.3
//=================================================================
// Changement du type de formulaire
//=================================================================
// Modifications :
//	V5.1 -14/09/24	: Remplace les versions précédentes
//	V5.2 -06/11/24	: Ajout fonction date/heure en UTC (SetDateToUTC)
//  V5.3 -15/03/25  : F4IXH > Ajout de isNumberKey
//  V5.4 -30/03/25  : F4IXH > Suppression des non communes
//  V5.5 -30/03/25  : F4IXH > Ajout de setacc
//======================================================================================


//======================================================================================
// Agrandissement automatique des zones de saisie
//======================================================================================	
function AutoGrowTextArea(textField) {
	if (textField.clientHeight < textField.scrollHeight) {
		textField.style.height = textField.scrollHeight + "px";
		if (textField.clientHeight < textField.scrollHeight) { textField.style.height = (textField.scrollHeight * 2 - textField.clientHeight) + "px"; }
	}
}
//======================================================================================
// Calcul de la date en UTC
//======================================================================================	
function SetDateToUTC() {
	var CurrentDate = new Date();
	if (document.getElementById("BtnDate").innerHTML == "UTC") {

		// Formate la date en UTC
		var utcDate = CurrentDate.getUTCFullYear() + '-' +
			('0' + (CurrentDate.getUTCMonth() + 1)).slice(-2) + '-' +
			('0' + CurrentDate.getUTCDate()).slice(-2) + ' ' +
			('0' + CurrentDate.getUTCHours()).slice(-2) + ':' +
			('0' + CurrentDate.getUTCMinutes()).slice(-2) + ':' +
			('0' + CurrentDate.getUTCSeconds()).slice(-2) + ' (UTC)';

		document.getElementById("DateTime").value = utcDate;
		document.getElementById("BtnDate").innerHTML = "Locale";
	}
	else {
		var LocalDate = CurrentDate.getFullYear() + '-' +
			('0' + (CurrentDate.getMonth() + 1)).slice(-2) + '-' +
			('0' + CurrentDate.getDate()).slice(-2) + ' ' +
			('0' + CurrentDate.getHours()).slice(-2) + ':' +
			('0' + CurrentDate.getMinutes()).slice(-2) + ':' +
			('0' + CurrentDate.getSeconds()).slice(-2) + ' (LOC)';

		document.getElementById("DateTime").value = LocalDate;
		document.getElementById("BtnDate").innerHTML = "UTC";
	}
}


//======================================================================================
// Permet de ne saisir que des chiffre dans un input
//======================================================================================	
function isNumberKey(event) {
	const charCode = event.which ? event.which : event.keyCode;
	// Autoriser : backspace, delete, tab, escape, enter, et les touches fléchées
	if (charCode === 8 || charCode === 9 || charCode === 13 || charCode === 27 ||
		(charCode >= 37 && charCode <= 40)) {
		return true;
	}
	// Autoriser : chiffres
	if (charCode >= 48 && charCode <= 57) {
		return true;
	}
	// Interdire tout le reste
	return false;
}



//======================================================================================
// Traitement des caractères accentués :
// Reçu par Winlink : Ã - Ã¢ - Ã¤ - Ã© - Ã¨ - Ãª - Ã« - Ã® - Ã¯ - Ã´ - Ã¶ - Ã¹ - Ã» - Ã¼ - Ã¿ - Ã§.
// Valeur finale    : à - â  - ä  - é  - è  - ê  - ë  - î  - ï  - ô  - ö  - ù  - û  - ü  - ÿ  - ç.
// Tous les caractères du clavier AZERTY français sont corrigés
//======================================================================================
function setacc(str2conv) {
	let chaine_dest = str2conv;
	// traitement des "a"
	chaine_dest = chaine_dest.replace(/Ã¢/g, "â"); // a accent circonflexe
	chaine_dest = chaine_dest.replace(/Ã¤/g, "ä"); // a tréma		

	// traitement de "e"
	chaine_dest = chaine_dest.replace(/Ã©/g, "é"); // e accent aigu
	chaine_dest = chaine_dest.replace(/Ã¨/g, "è"); // e accent grave
	chaine_dest = chaine_dest.replace(/Ãª/g, "ê"); // e accent circonflexe
	chaine_dest = chaine_dest.replace(/Ã«/g, "ë"); // e trema

	// traitement des "i"
	chaine_dest = chaine_dest.replace(/Ã®/g, "î"); // i accent circonflexe
	chaine_dest = chaine_dest.replace(/Ã¯/g, "ï"); // i trema

	// traitement des "o"
	chaine_dest = chaine_dest.replace(/Ã´/g, "ô"); // o accent circonflexe
	chaine_dest = chaine_dest.replace(/Ã¶/g, "ö"); // o trema

	// traitement des "u"
	chaine_dest = chaine_dest.replace(/Ã¹/g, "ù"); // u accent aigu
	chaine_dest = chaine_dest.replace(/Ã»/g, "û"); // u accent circonflexe
	chaine_dest = chaine_dest.replace(/Ã¼/g, "ô"); // u trema

	// Traitement des consonnes
	chaine_dest = chaine_dest.replace(/Ã¿/g, "ÿ"); // y trema
	chaine_dest = chaine_dest.replace(/Ã§/g, "ç"); // c cédille

	// Traitement des caractères AltGr
	chaine_dest = chaine_dest.replace(/Â£/g, "£"); // Symbole Livre anglaise
	chaine_dest = chaine_dest.replace(/Âµ/g, "µ"); // Symbole Micro
	chaine_dest = chaine_dest.replace(/Â§/g, "§"); // Symbole Paragraphe
	chaine_dest = chaine_dest.replace(/Â°/g, "°"); // Symbole Paragraphe
	chaine_dest = chaine_dest.replace(/Â/g, ""); // Espace

	// Traiter les caractères spéciaux unique en dernier
	chaine_dest = chaine_dest.replace(/\?/g, "");
	chaine_dest = chaine_dest.replace(/â€/g, "'");
	chaine_dest = chaine_dest.replace(/â¢/g, "➢"); // Windgdings 0xD8
	chaine_dest = chaine_dest.replace(/â¬/g, "€"); // €

	// Table Wingdings
	chaine_dest = chaine_dest.replace(/'¢/g, "●"); // Disque noir
	chaine_dest = chaine_dest.replace(/'¢/g, "○"); // Disque blanc
	chaine_dest = chaine_dest.replace(/'¢/g, "►"); // Pointeur vers la droite 
	chaine_dest = chaine_dest.replace(/'¢/g, "●"); // Coche dans carré
	chaine_dest = chaine_dest.replace(/'¢/g, " "); // Croix dans carré

	chaine_dest = chaine_dest.replace(/Ã/g, "à"); // a accent aigu

	return chaine_dest;
}


