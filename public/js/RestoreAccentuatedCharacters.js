// Traitement des caractères accentués :
// Reçu par Winlink : Ã - Ã¢ - Ã¤ - Ã© - Ã¨ - Ãª - Ã« - Ã® - Ã¯ - Ã´ - Ã¶ - Ã¹ - Ã» - Ã¼ - Ã¿ - Ã§.
// Valeur finale    : à - â  - ä  - é  - è  - ê  - ë  - î  - ï  - ô  - ö  - ù  - û  - ü  - ÿ  - ç.
// Tous les caractères du clavier AZERTY français sont corrigés

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



const accentMap = {
	// Caractères accentués
	'Ã¢': 'â',  // a accent circonflexe
	'Ã¤': 'ä',  // a tréma
	'Ã©': 'é',  // e accent aigu
	'Ã¨': 'è',  // e accent grave
	'Ãª': 'ê',  // e accent circonflexe
	'Ã«': 'ë',  // e trema
	'Ã®': 'î',  // i accent circonflexe
	'Ã¯': 'ï',  // i trema
	'Ã´': 'ô',  // o accent circonflexe
	'Ã¶': 'ö',  // o trema
	'Ã¹': 'ù',  // u accent aigu
	'Ã»': 'û',  // u accent circonflexe
	'Ã¼': 'ü',  // u trema
	'Ã¿': 'ÿ',  // y trema
	'Ã§': 'ç',  // c cédille
	'Ã': 'à',   // a accent grave

	// Caractères spéciaux
	'Â£': '£',  // Symbole Livre anglaise
	'Âµ': 'µ',  // Symbole Micro
	'Â§': '§',  // Symbole Paragraphe
	'Â°': '°',  // Symbole Degré
	'Â': '',    // Espace
	'?': '',    // Point d'interrogation
	'â€': "'",  // Apostrophe
	'â¢': '➢',  // Windgdings 0xD8
	'â¬': '€',  // Euro

	// Wingdings
	"'¢": '●',  // Disque noir
	"'¢": '○',  // Disque blanc
	"'¢": '►',  // Pointeur vers la droite
	"'¢": '●',  // Coche dans carré
	"'¢": ' '   // Croix dans carré
};

/**
 * Convertit les caractères spéciaux et accentués reçus par Winlink en caractères corrects
 * @param {string} str2conv - La chaîne à convertir
 * @returns {string} La chaîne convertie
 */
function setacc2(str2conv) {
	return str2conv.replace(/[Ã¢Ã¤Ã©Ã¨ÃªÃ«Ã®Ã¯Ã´Ã¶Ã¹Ã»Ã¼Ã¿Ã§ÃÂ£ÂµÂ§Â°Ââ€â¢â¬'¢?]/g, match => accentMap[match] || match);
}