# Beleg webbasiertes Lernprogramm

## Übersicht
Als Beispiel für eine Progressive Web App (PWA) soll ein webbasiertes Programm zur Überprüfung allgemeiner bzw. Mathematikkenntnisse erstellt werden.
Der Beleg dient zur praktischen Anwendung der Kenntnisse zu HTML, CSS und Javascript. Die Umsetzung als PWA ermöglicht auch die einfache und komfortable Nutzung in mobilen Geräten. 


## Beschreibung
Das Lernprogramm soll mindestens folgende Funktionalität besitzen:
- Wahl zwischen mindestens 3 verschiedenen Aufgabenkategorien (Kategorien Mathematik, Internettechnologien und Allgemein sind Pflicht)
- zufällige Auswahl und Darstellung einer Aufgabe mit 4 Auswahlmöglichkeiten
- Anzeige des Lernfortschritts
- Anzeige einer Statistik am Ende eines Durchlaufs
- die Anzeige sollte sich an verschiedene Anzeigegeräte (PC-Browser, Tablet, Smartphone) sinnvoll anpassen
- Nachladen von weiteren Aufgaben per Ajax von einem Server mittels REST-Schnittstelle, siehe unten.
- der Beleg soll auf dem Webserver der HTW-Dresden abrufbar sein, Pfad: ~sxxxxx/Lernprogramm

## Technische Umsetzung
- nutzen Sie für die Umsetzung HTML5/CSS3/JS 
- nutzen Sie in JS den strikten Modus 
- der Beleg sollte im aktuellen Firefox oder Google Chromium lauffähig sein, es wird keine Abwärtskompatibilität erwartet
- entsprechend einer PWA sollte die Anwendung auf einem Smartphone installieren lassen
- normalerweise benötigt man in einer PWA einen Service Worker zur Steuerung des Caches für den Offline-Betrieb, in diesem Beleg können Sie den Service Worker weglassen, oder Sie nutzen die bereitgestellte minimale Variante in [Beispiel](mathe-demo.html).
- verwenden Sie **keine** weiteren Frameworks wie jquery, Bootstrap etc., sondern nutzen Sie die Funktionalität von ECMAScript und CSS3 in den aktuellen Browsern
- Als Entwicklungsumgebung empfiehlt sich die Nutzung der Entwickertools im Browser Chromium
- zum Testen der Funktionalität auf einem Smartphone kann die Device Toolbar in o.g. Entwickertools genutzt werden
- für die grafische Formeldarstellung (Rendering) sollte die JS-Bibliothek [KaTeX](https://github.com/KaTeX/KaTeX) genutzt werden, siehe [Beispiel](mathe-demo.html)
- das Format der Fragen ist JSON entsprechend folgendem Fragment (a - Aufgabe, l - Lösungen, die erste ist korrekt ):
```
{ 
  "teil-mathe": [
    {"a":"x^2+x^2", "l":["2x^2","x^4","x^8","2x^4"]},
    {"a":"x^2*x^2", "l":["x^4","x^2","2x^2","4x"]}
    ]
  "teil-internettechnologien": [
    {"a":"Welche Authentifizierung bietet HTTP", "l":["Digest Access Authentication","OTP","OAuth","2-Faktor-Authentifizierung"]},
    {"a":"Welches Transportprotokoll eignet sich für zeitkritische Übertragungen", "l":["UDP","TCP","HTTP","Fast Retransmit"]},
   ...
    ]  
  "teil-allgemein": [
    {"a":"Karl der Große, Geburtsjahr", "l":["747","828","650","1150"]},
   ...
    ]  
}
```

## REST-Schnittstelle
- Es soll die Möglichkeit bestehen, weitere Aufgaben von einem externen Server mittels REST zu laden.
- genutzt wird das Projekt [Web-Quiz](https://github.com/swsms/web-quiz-engine)
- die Eckdaten des zu nutzenden Servers werden in der Lehrveranstaltung bekannt gegeben bzw. finden Sie im [Chat](https://imessage.informatik.htw-dresden.de/channel/a7TXsuRBDxjT8ov7M)
- per AJAX-Request muss lediglich eine Aufgabe geholt werden und das Ergebnis überprüft werden
- alle anderen notwendigen Aufgaben (Nutzer + Aufgaben anlegen) können außerhalb des Lernprogramms per CURL erledigt werden

## Vorschlag für Vorgehen bei der Bearbeitung
- Erstellung des HTML-Gerüstes mit allen Elementen
- Nutzung von CSS zur Gestaltung + Responsive Design
- Erstellung der Javascript-Programmstruktur (Architektur Model-View-Presenter)
- Implementierung einer geeigneten Model-Schnittstelle zum Erhalt der Aufgabe und zur Übergabe der gewählten Lösung (zunächst mit einfacher Dummy-Frage)
- Implementierung der Button-Handler, welche die Auswertefunktion des Presenters aktivieren
- Erweiterung des Models auf verschiedene Aufgaben mit Zufallsfunktion
- Implementierung der Statistikfunktionalität
- Erweiterung der Anzeige auf andere Aufgabentypen (Mathe -> Katex, etc.)
- Erweiterung des Models um die Nutzung der angebotenen REST-Schnittstelle
- bei Bedarf Offlinefunktionalität implementieren

## Weitere Anforderungen
- Erstellung eines Lernportfolios (Dokumentation Ihrer Entwicklungsschritte, des Lernfortschritts, der Misserfolge, etc.)
- Dokumentation des Projektes
- machen Sie sinnvolle Vorschläge zur Erweiterung/Verbesserung des Belegs

## Mögliche Erweiterungen (optional)
- Erweiterung um einen Service-Worker zum Cachehandling um die Anwendung auch offline nutzbar zu machen
- Wichtung der Aufgabenstellung anhand der bisherigen Ergebnisse
- Erweiterung auf mögliche Mehrfachauswahl


## Links
- [reines Javascript](https://htmldom.dev/)
- [Fehlersuche](https://stackoverflow.com)


## Prinzipdarstellung
Um einen Eindruck zu vermitteln, wie die Darstellung auf einem Smartphone aussehen könnte, ist nachfolgend eine Demoversion zu sehen.
Die HTML-Elemente wurden für den kleinen Viewport mittels CSS-Mediaqueries untereinander dargestellt. Auf einem Desktopbrowser würde die Darstellung teilweise nebeneinander erfolgen. Die Darstellung dient nur zur Orientierung. Sie können eine abweichende Oberfläche erstellen.
Der Screenshot würde mit den Entwicklertools des Browsers erstellt.

![GitHub-Workflow](/images/demo.png)
<!---  <img src="images/demo.png" width="100">   --->
