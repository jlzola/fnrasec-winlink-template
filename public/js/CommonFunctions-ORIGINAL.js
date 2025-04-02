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
//======================================================================================




function ChangeFormLabel(TypeForm, CtxtMsg) {
	var LabelElement = document.getElementById(CtxtMsg);
	var TableElement = document.getElementById("HeaderBody");

	switch (TypeForm) {
		case "Exercice":
			{
				LabelElement.innerHTML = "Exercice - Exercice - Exercice";
				LabelElement.style.color = "orange";
				LabelElement.hidden = false;

				TableElement.className = "table_borders_orange";

				document.getElementById("MessageBlocks1").hidden = false; // Affichage des lignes 1 à 8
				document.getElementById("MessageBlockBilan").hidden = false;
				document.getElementById("MessageBlockUrgence").hidden = false;

				document.getElementById("MessageBlockDest").hidden = false;
				document.getElementById("ToStationLabel").innerHTML = "2. Participants à l'exercice : ";
				document.getElementById("ToStation").rows = "1";
				document.getElementById("ToStation").cols = "110";
				document.getElementById("ToStation").placeholder = "Entrer les indicatifs séparés par des points-virgules";
				document.getElementById("ToStation").hidden = false;

				document.getElementById("RMS").hidden = false;
				// document.getElementById("Participants").hidden=false;

				document.getElementById("Buttons").hidden = false;
				break;
			}
		case "Situation de crise":
			{
				LabelElement.innerHTML = "Situation de crise";
				LabelElement.style.color = "red";
				LabelElement.hidden = false;

				TableElement.className = "table_borders_red";

				document.getElementById("MessageBlocks1").hidden = false;
				document.getElementById("MessageBlockBilan").hidden = false; // Affichage des lignes 1 à 8
				document.getElementById("MessageBlockUrgence").hidden = false;

				document.getElementById("MessageBlockDest").hidden = false;
				document.getElementById("ToStationLabel").innerHTML = "2. Station destinataire : ";
				document.getElementById("ToStation").rows = "1";
				document.getElementById("ToStation").cols = "10";
				document.getElementById("ToStation").placeholder = "XXXXX";
				document.getElementById("ToStation").hidden = false;

				document.getElementById("RMS").hidden = true;
				// document.getElementById("Participants").hidden=true;

				document.getElementById("Buttons").hidden = false;
				break;
			}
		default:
			LabelElement.innerHTML = "Selectionner le type de message";
			LabelElement.style.color = "green";

			TableElement.className = "table_borders_header";

			document.getElementById("MessageBlocks1").hidden = true; // Masquage des lignes 1 à 8
			document.getElementById("MessageBlockBilan").hidden = true;
			document.getElementById("MessageBlockDest").hidden = true;
			document.getElementById("RMS").hidden = true;
			document.getElementById("Buttons").hidden = true;
			document.getElementById("ToStation").hidden = true;
			document.getElementById("ToStationLabel").innerHTML = "";
	}
}

//======================================================================================
// Configuration de la ligne 7 : Type d'évènement (utilisé par le formulaire de saisie)
//======================================================================================
function ConfigEventOther(TypeEvt) {
	var ZoneOther = document.getElementById("vOther");
	if (TypeEvt == "Autre") {
		ZoneOther.color = "white";
		ZoneOther.placeholder = "Si autre décrire l'évènement";
		ZoneOther.required = true;
	}
	else {
		ZoneOther.bgcolor = "gray";
		ZoneOther.placeholder = "Vous pouvez préciser si nécessaire";
		ZoneOther.required = false;
	}
}
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
// retourne la version de la la balise <meta name="version" content="1.0.0">
//======================================================================================	
function getVersion() {
	const metaTags = document.head.getElementsByTagName('meta');
	let version = 'Version inconnue';
	for (let i = 0; i < metaTags.length; i++) {
		if (metaTags[i].getAttribute('name') === 'version') {
			version = metaTags[i].getAttribute('content');
			break;
		}
	}
	return version;
}
