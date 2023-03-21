/* 
#Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco
Attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo 
l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare 
problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della 
difficoltà prescelta: le bombe.
nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe 
non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella:
se il numero è presente nella lista dei numeri generati
abbiamo calpestato una bomba
la cella si colora di rosso e la partita termina.
Altrimenti
la cella cliccata si colora di azzurro
l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero 
massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono 
    bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che 
l’utente ha cliccato su una cella che non era una bomba.

*/

/* strumenti

*/



const containerEl = document.querySelector('.container')
const play = document.querySelector('.play');
const reset = document.querySelector('.reset');

//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
play.addEventListener('click', function () {

    // recupero del valore selezionato
let selectDaVerificare = document.getElementById("selectDaVerificare");
let indiceSelezionato = selectDaVerificare.selectedIndex;
let valoreSelezionato = selectDaVerificare.options[indiceSelezionato].value;
let nomeLivello = selectDaVerificare.options[indiceSelezionato].text;
console.log(`hai scelto il livello ${nomeLivello} che genera ${valoreSelezionato} celle`);
    containerEl.innerHTML = "";
    for (let i = 1; i <= valoreSelezionato; i++) {
        const divEl = document.createElement('div')
        divEl.append(i)
        containerEl.append(divEl)
       
        /*Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
        ed emetto un messaggio in console con il numero della cella cliccata.*/
        divEl.addEventListener('click', function(){
            console.log('quella cliccata è la cella numero:',i)
            this.classList.toggle('bg_light_blue')
        })
        if (valoreSelezionato == 49) {
            divEl.style.width = `calc(100% / ${Math.sqrt(valoreSelezionato)} )`
        }
        if (valoreSelezionato == 81) {
            divEl.style.width = `calc(100% / ${Math.sqrt(valoreSelezionato)} )`
        }
    }
    const bombs = genera_bombe(valoreSelezionato)
    console.log(bombs);
})

function genera_bombe(max, min = 1) {
    //Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta  
    const bombs = [];
    while (bombs.length < 16) {
      const bomb = Math.floor(Math.random() * (max - min + 1)) + min;

      if (!bombs.includes(bomb)) {
        bombs.push(bomb)
      }
    }
    return bombs
  }
  
  
