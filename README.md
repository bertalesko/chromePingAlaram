Otworz manifest.json <br><br>

zedytuj  resources : ["NukeWarning.mp3"] pod  "web_accessible_resources" <br>
wpisz nazwe twoje pliku z alarmem. <br>
alarm musi sie znajdowac w folderze wtyczki.<br><br>

Otworz script.js  <br>
Zedytuj 3 pierwsze linie :<br>
<br>
var pvCzas = 1; co ile minut ma sprawdzac czy jest polaczenie<br>
var pvPingAddy = "https://192.168.0.125/"; addres ktory ma bic pingowany (moze byc adres strony)<br>
var pvMp3Addy = chrome.runtime.getURL("NukeWarning.mp3"); nazwa pliku alarmu, ten sam plik ktory podales w manifest.json w kluczu resources.  .<br>
<br><br>

Na pierwsze uruchomienie zostaw czas na 1, sprawdz czy dziala.<br>
Jak upewnisz sie ze dziala, zmien na docelowe wartosci.<br>
