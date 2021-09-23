
//benutzernamen Generator
//Beispiel für Benutzer: ShinySunflower55555 oder FlyingAutomobile34567 ....

const fs = require('fs');      // FileSystem, zum lesen des Dateisystems
const path = require('path');  // Path, zum arbeiten mit dateipfad

//Was benötigen wir?
// - Eine Funktion um die werte aus der JSON datei zu lesen
function getWords()
{
        const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));
        console.log(json);
}


getWords()


