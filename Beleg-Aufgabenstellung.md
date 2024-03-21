# Beleg webbasiertes Lernprogramm

## Übersicht
Wesentliche Aufgabe des Belegs ist die Erstellung eines  webbasierten Lernprogramms. Als Fundament nutzen wir die Technik der Progressive Web App (PWA).
Der Beleg dient der praktischen Anwendung der Kenntnisse zu HTML, CSS, Javascript sowie einer Server-API. Die Umsetzung als PWA ermöglicht auch die einfache und komfortable Nutzung in mobilen Geräten. 

## Lernaspekte des Beleges
- Nutzung von HTTP/HTTPS
- Einsatz von HTML zur Strukturierung
- Einsatz von CSS zur Formatierung 
- Webprogrammierung mittels Javascript (ECMAScript)
- Wahl einer geeigneten Softwarearchitektur 
- Nutzung einer JS-Bibliothek zur Darstellung von speziellen Inhalten
- Entwurf und Implementierung eines sinnvollen Nutzerinterfaces
- Implementierung eines responsive Designs für unterschiedliche Geräte/Bildschirmgrößen
- Nutzung der Technik einer PWA
- Offline-Nutzung einer Webapp
- dynamisches Nachladen von Inhalten mittels Ajax-Technik
- Datenübertragung mittels JSON-Format
- Nutzung einer REST-Schnittstelle mit vorgegebener API

## Beschreibung
Das Lernprogramm soll mindestens folgende Funktionalität besitzen:
- Wahl zwischen mindestens 3 verschiedenen lokal gespeicherten Aufgabenkategorien (Mathematik, Internettechnologien und allgemeines Wissen sind Pflicht)
- eine Aufgabenkatagorie, bei welcher die einzelnen Aufgaben von einem bereitgestellten externen Server mittels [Ajax und REST-API](#rest-schnittstelle-des-externen-aufgabenservers) geholt werden
- zufällige Auswahl und Darstellung einer Aufgabe mit 4 Auswahlmöglichkeiten (zufällig zusammengestellt)
- Anzeige des Lernfortschritts nach jeder Aufgabe mittels Progressbar
- Anzeige einer Statistik am Ende eines Durchlaufs
- die Anzeige sollte sich an verschiedene Anzeigegeräte (PC-Browser, Tablet, Smartphone) sinnvoll anpassen (responsive Design)
- der Beleg soll auf dem Webserver der HTW-Dresden bzw. der Fakultät Informatik abrufbar sein, Pfad: ~sxxxxx/Lernprogramm
- Die Abgabe des Beleges erfolgt entsprechend [Abgabeformat](Beleg-Abgabeformat.md)

## Technische Umsetzung
- nutzen Sie für die Umsetzung HTML5/CSS3/JS 
- nutzen Sie in JS den strikten Modus 
- der Beleg sollte im aktuellen Firefox oder Google Chromium lauffähig sein, es wird keine Abwärtskompatibilität erwartet
- entsprechend einer PWA sollte sich die Anwendung auf einem Smartphone installieren lassen
- man benötigt in einer PWA ein Manifest und einen Service Worker zur Steuerung des Caches für den Offline-Betrieb und die Installation
- verwenden Sie **keine** weiteren Frameworks wie jquery, Bootstrap etc., sondern nutzen Sie die Funktionalität von ECMAScript und CSS3 in den aktuellen Browsern (TypeScript ist für Entwickler mit Vorkenntnissen erlaubt)
- Als Entwicklungsumgebung empfiehlt sich die Nutzung der Entwickertools im Browser Chromium oder Firefox
- zum Testen der Funktionalität auf einem Smartphone kann die Device Toolbar in o.g. Entwickertools genutzt werden
- für die grafische Formeldarstellung (Rendering) sollte die JS-Bibliothek [KaTeX](https://github.com/KaTeX/KaTeX) genutzt werden, siehe [Beispiel](mathe-demo.html)
- für die grafische Notendarstellung sollte die JS-Bibliothek [Vexflow](https://github.com/0xfe/vexflow) mit der Notensprache EasyScore genutzt werden
- die Fragen der einzelnen Kategorien sind im JSON-Format abzulegen, nachfolgend ein Beispiel (a - Aufgabe, l - Antworten, die erste ist immer korrekt, bei der Anzeige sind die Antworten sinnvollerweise zu verwürfeln ;-) ):
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
  "teil-noten": [
    {"a":"C4", "l":["C","D","E","H"]},
    {"a":"(C4 E4 G4)", "l": ["C", "H", "F", "D"]},
   ...
    ]       
}
```

## REST-Schnittstelle des externen Aufgabenservers
- Es soll im Beleg die Möglichkeit bestehen, weitere Aufgaben von einem externen Server mittels REST zu laden.
- genutzt wird das Projekt [Web-Quiz](https://github.com/swsms/web-quiz-engine) mit der entsprechenden API für das Holen der Aufgabe und die Überprüfung der Lösung.
- Das Web-Quiz-Projekt ist bereits fertig auf einem Server der Informatik gehostet. Die Eckdaten dieses Servers werden in der Lehrveranstaltung bekannt gegeben bzw. finden Sie im [Chat](https://imessage.informatik.htw-dresden.de/channel/internettechnologien1)
- Es sind bereits Aufgaben vorhanden, welche Sie nutzen können (ID 2-33).
- Sie sollten mit Ihrem eigenen Account auch einige Aufgaben hochladen.
- per AJAX-Request muss lediglich die Aufgabe geholt werden und das Ergebnis überprüft werden, alle anderen notwendigen Aufgaben (Nutzer + Aufgaben anlegen) können außerhalb des Lernprogramms per CURL erledigt werden
- Befüllen Sie die Datenbank am besten per Script, so können Sie Ihre Daten auch im Falle eines Problems schnell wieder auffüllen.


## Vorschlag für Vorgehen bei der Bearbeitung
- Erstellung des HTML-Gerüstes mit allen Elementen
- Nutzung von CSS zur Gestaltung + Responsive Design
- Erstellung der Javascript-Programmstruktur (Architektur Model-View-Presenter empfohlen)
- Implementierung einer geeigneten Model-Schnittstelle zum Erhalt der Aufgabe und zur Übergabe der gewählten Lösung (zunächst mit einfacher Dummy-Frage)
- Implementierung der Button-Handler, welche die Auswertefunktion des Presenters aktivieren
- Erweiterung des Models auf verschiedene Aufgaben mit Zufallsfunktion
- Implementierung der Statistikfunktionalität
- Erweiterung der Anzeige auf andere Aufgabentypen (Mathe -> Katex, etc.)
- Erweiterung des Models um die Nutzung der angebotenen REST-Schnittstelle
- Offlinefunktionalität implementieren (minimaler Serviceworker in [Beispiel](mathe-demo.html))


## Weitere Anforderungen
- falls Sie ChatGPT u.ä. nutzen, müssen Sie dies dokumentieren und den erstellten Code erklären können
- Dokumentation des Projektes, so dass eine andere Person ggf. am Projekt weiterarbeiten könnte
- Legen Sie eine Datei README.md an mit relevanten Informationen zum Beleg: z.B. genutzter Browser, eventuelle Probleme
- es wird empfohlen, ein Lernportfolio zu erstellen (Dokumentation Ihrer Entwicklungsschritte, des Lernfortschritts, der Misserfolge, etc.)
- machen Sie Vorschläge zur Erweiterung/Verbesserung des Belegs

## Mögliche Erweiterungen (optional, Zusatzpunkte möglich)
- Wichtung der Aufgabenstellung anhand der bisherigen Ergebnisse
- Erweiterung auf mögliche Mehrfachauswahl
- zusätzliche Katagorie Notenlernen vorsehen (Einzelnoten / Akkorde / Umkehrungen ganz nach Belieben / Klaviatur).
- Speicherung der erreichten Punkte im Browserspeicher oder per PHP-Script auf dem Server
- Mehrnutzerbetrieb mit Nutzerauthentifizierung 

## Bewertungshinweise
- eine grobe Orientierung für die Bewertung ist:
  - Note 4: Programm funktioniert lt. Anforderung mit internen Aufgaben
  - Note 3: zzgl. Mathekategorie funktioniert
  - Note 2: zzgl. funktionsfähige Nutzung des externen Aufgabenservers
  - Note 1: zzgl. Kategorie Notenlernen

  
## Links
- [KaTeX](https://github.com/KaTeX/KaTeX) 
- [Web-Quiz](https://github.com/swsms/web-quiz-engine) 
- [Fehlersuche - Stackoverflow](https://stackoverflow.com)


## Prinzipdarstellung
Die Darstellung unten zeigt prinzipiell, wie der Beleg auf einem Smartphone aussehen könnte. Sie sind nicht an die Darstellung gebunden.
Die HTML-Elemente wurden für den kleinen Viewport mittels CSS-Mediaqueries untereinander dargestellt. Auf einem Desktopbrowser würde die Darstellung teilweise nebeneinander erfolgen. Die Darstellung dient nur zur Orientierung. Sie können eine abweichende Oberfläche erstellen.
Der Screenshot wurde mit den Entwicklertools des Browsers erstellt.

<img src="images/demo.png" width="200">
