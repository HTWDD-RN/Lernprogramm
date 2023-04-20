"use strict";

//let p, v, m;
document.addEventListener('DOMContentLoaded', function () {
    let m = new Model();
    let p = new Presenter();
    let v = new View(p);
    p.setModelAndView(m, v);
    //p.setTask();
});

// ############# Model ###########################################################################
class Model {
    constructor() {    }

    // Holt eine Frage aus dem Array, zufällig ausgewählt oder vom Server
    getTask(nr) {
        return "21 + 21";  // Aufgabe + Lösungen
    }
    checkAnswer() {
        // TODO
    }
}

// ############ Controller ########################################################################
class Presenter {
    constructor() {
        this.anr = 0;
    }

    setModelAndView(m, v) {
        this.m = m;
        this.v = v;
    }

     // Holt eine neue Frage aus dem Model und setzt die View
    setTask() {
        let frag = this.m.getTask(this.anr);
        View.renderText(frag);
        for (let i = 0; i < 4; i++) {
            let wert = "42";
            let pos = i;
            View.inscribeButtons(i, wert, pos); // Tasten beschriften -> View -> Antworten
        }
    }

    // Prüft die Antwort, aktualisiert Statistik und setzt die View
    checkAnswer(answer) {
        console.log("Antwort: ", answer);
    }
}

// ##################### View #####################################################################
class View {
    constructor(p) {
        this.p = p;  // Presenter
        this.setHandler();
    }

    setHandler() {
        // use capture false -> bubbling (von unten nach oben aufsteigend)
        // this soll auf Objekt zeigen -> bind (this)
        document.getElementById("answer").addEventListener("click", this.checkEvent.bind(this), false);
        document.getElementById("start").addEventListener("click", this.start.bind(this), false);
    }

    start() {
        this.p.setTask();
    }

    static inscribeButtons(i, text, pos) {
        document.querySelectorAll("#answer > *")[i].textContent = text;
        document.querySelectorAll("#answer > *")[i].setAttribute("number", pos);
    }

    checkEvent(event) {
        console.log(event.type);
        if (event.target.nodeName === "BUTTON") {
            this.p.checkAnswer(Number(event.target.attributes.getNamedItem("number").value));
        }
    }

    static renderText(text) {
        //this.clearElement("boo");
        let div = document.getElementById("boo");
        let p = document.createElement("p");
        p.innerHTML = text;
        div.appendChild(p);
    }
}