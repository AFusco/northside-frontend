/*
 * ######  NOTA PER IL TESTING FACILE  ######
 *
 * Per simulare la parte server ho usato http://www.filltext.com/?rows=3&nome={business}&riferimenti={stringArray}&pretty=true
 * che mi ritorna un array di tre oggetti, ciascuno dei quali ha un campo nome ed un array di riferimenti generati, ad ogni
 * richiesta, casualmente.
 */


function getLista(destContainer) {
    var richiesta = new XMLHttpRequest();
    richiesta.open('GET', 'http://api.srv1.afus.co/');

    richiesta.onload = function() {
        if (richiesta.status >= 200 && richiesta.status < 400) {
            var ourData = JSON.parse(richiesta.responseText);
            //console.log(ourData[0]);
            console.log(ourData);
            showLista(ourData, destContainer);
        } else {
            console.log("Problemi al server");
        }

    }

    richiesta.onerror = function() {
        console.log("Problemi di connessione");
    }

    richiesta.send();
}

function showLista(data, destContainer) {
    var risultato = "";

    destContainer.innerHTML = ""

    for (i=data.length-1; i>=0; i--) {
        risultato += "<p><strong>" + i + "  " + data[i].location + "</strong></p>";
        //risultato += "<li>" + data[i].riferimenti[j] + "</li>";
        risultato += "<img href=\"" + data[i].image + "\">"
        risultato += "</br>"
    }

    destContainer.innerHTML += risultato;
}
