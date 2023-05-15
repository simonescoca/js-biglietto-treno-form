// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.233 € al km)
// va applicato uno sconto del 19.4% per i minorenni
// va applicato uno sconto del 37.7% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
// La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

const button = document.querySelector ( "button" )

button.addEventListener ("click",
    function () {
        const km = parseInt ( document.getElementById ("km").value )
        const eta = parseInt ( document.getElementById ("eta").value )
    
    
        const prezzoIntero = km * 0.233
        const prezzoMinorenni = ( 1 - 0.194) * prezzoIntero
        const prezzoOver = ( 1 - 0.377 ) * prezzoIntero


        if ( isNaN (km) || isNaN (eta) || km < 0 || eta < 0) {
            console.log ( "C'è un errore di scrittura dei dati" )
        } else {
            if ( eta > 17 && eta < 64 ) {
                console.log ( "Devi percorrere " + km + "km e hai " + eta + " anni, il tuo biglietto viene " + prezzoIntero.toFixed(2) + "€" )
            } else if ( eta <= 17 ) {
                console.log ( "Devi percorrere " + km + "km e hai " + eta + " anni, sei minorenne! Il tuo biglietto è scontato del 19.4%! Il prezzo finale è di " + prezzoMinorenni.toFixed(2) + "€" )
            } else {
                console.log ( "Devi percorrere " + km + "km e hai " + eta + " anni, sei over 65! Il tuo biglietto è scontato del 37.7%! Il prezzo finale è di " + prezzoOver.toFixed(2) + "€" )
            }
        }
    }
)