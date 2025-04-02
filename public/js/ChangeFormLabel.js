function ChangeFormLabel(TypeForm, CtxtMsg ) 
{
	var LabelElement = document.getElementById(CtxtMsg);
	
	if (TypeForm == "Exercice") {
		LabelElement.innerHTML = "Exercice - Exercice";
		LabelElement.style.color = "orange";
		document.getElementById("RMS").hidden=false;
		document.getElementById("Participants").hidden=false;
	}
	else {
		LabelElement.innerHTML = "Situation de crise";
		LabelElement.style.color = "red";
		document.getElementById("RMS").hidden=true;
		document.getElementById("Participants").hidden=true;
	}
}
