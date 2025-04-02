function saveTextAsFile(fileNameToSaveAs, textToWrite)
{
	var textToWrite = document.getElementById('parseme').value; 
	var fileNameToSaveAs = "Damage Assessment data " + DateforFile()+".txt";
	fileNameToSaveAs = prompt("", fileNameToSaveAs);

	/* Saves a text string as a blob file*/  
	var ie = navigator.userAgent.match(/MSIE\s([\d.]+)/),
		  ie11 = navigator.userAgent.match(/Trident\/7.0/) && navigator.userAgent.match(/rv:11/),
		  ieEDGE = navigator.userAgent.match(/Edge/g),
		  ieVer=(ie ? ie[1] : (ie11 ? 11 : (ieEDGE ? 12 : -1)));

	if (ie && ieVer<10) { console.log("No blobs on IE ver<10"); return; }

	var textFileAsBlob = new Blob([textToWrite], {    type: 'text/plain'   });

	if (ieVer>-1)
	{
    window.navigator.msSaveBlob(textFileAsBlob, fileNameToSaveAs);
	} 
	else {
			var downloadLink = document.createElement("a");
			downloadLink.download = fileNameToSaveAs;
			downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
			downloadLink.onclick = function(e) { document.body.removeChild(e.target); };
			downloadLink.style.display = "none";
			document.body.appendChild(downloadLink);
			downloadLink.click();
		}
}

