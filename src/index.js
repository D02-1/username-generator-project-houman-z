const fs = require('fs');      // FileSystem, zum lesen des Dateisystems
const path = require('path');  // Path, zum arbeiten mit dateipfad

// Benutzernamen Generator
// Beispiel für Benutzer: ShinySunflower55555 oder FlyingAutomobile34567 oder BeautifulCheesecake44567

// Was benötigen wir?
// - Eine Funktion um die werte aus der JSON datei zu lesen
/**
 * @function getWords
 * @description Reads words from json file.
 * @returns { object }
 */
function getWords()
{       
        // Wir lesen eine json datei, die worte enhält, die wir nutzen wollen
        const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));
        
        // Wir geben die worte zurück
        return json;
}

// - Eine Funktion um die zufällige Nummer hinter dem Namen zu generieren
/**
 * @function createRandomNumber
 * @description Creates a random number according to a minimal and maximal value
 * @param { number } minNumber 
 * @param { number } maxNumber 
 * @returns { number }
 */
function createRandomNumber(minNumber, maxNumber)
{
        // Wir erschaffen eine zufallszahl aus einer minimalen und einer maximalen zahl
        const num = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
        
        // random = 0.5 * 50000 - 10000 = 15000 + 10000 = 25000

        // Wir geben die zufällige nummer zurück
        return num;
}
/////////////createRandomNumber(1000, 2000)
// - Eine Funktion mit der wir den ersten Buchstaben des jeweiligen Wortes groß schreiben (PascalCase)
/**
 * @function capitalizeString
 * @description Takes the first letter of a string and changes it to Uppercase, then returns string
 * @param { string } word 
 * @returns { string }
 */
function capitalizeString(word)
{
        // Prüfe ob kein wort vorhanden ist
        if(word === undefined || word.length === 0 || !isNaN(word))
        {
                return 'default';
        }
         // Wir nehmen den ersten buchstaben von unserem String, und ändern ihn auf UpperCase
        const wordStart = word.charAt(0).toUpperCase();

        // Wir nehmen den rest des strings und ändern ihn auf LowerCase
        const wordRest = word.substring(1).toLowerCase();

        // Wir geben den fertigen String zurück
        return wordStart + wordRest
}


// - Eine Funktion mit der wir den benutzernamen generieren und auf die ergebnisse der anderen funktionen zugreifen
/**
 * @function createRandomUserName
 * @description Creates a random username
 * @param { number } maxNumber 
 * @returns { string }
 */
function createRandomUserName(maxNumber)
{
        // Wir holen uns die wörter
        const words = getWords();

        // Wir holen uns aus der wortliste die adjektive
        const adj = words.adjs[ Math.floor(Math.random() * (words.adjs.length -1)) ];

        // Wir holen uns aus der wortliste die nomen
        const noun = words.nouns[ Math.floor(Math.random() * (words.nouns.length -1)) ];

        // Wir holen uns unsere zufallszahl
        const randomNumber = createRandomNumber(10000, maxNumber);

        // Wir fügen alles zusammen
        const finalUserName = `${ capitalizeString(adj) }${ capitalizeString(noun) }${ maxNumber !== 0 ? randomNumber : '' }`;

        return finalUserName;
}

console.log(createRandomUserName(50000));