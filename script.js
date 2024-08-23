
// ! FASE DI PREPARAZIONE

// Mi prendo gli elementi dal DOM
const button = document.querySelector('button');
const grid = document.getElementById('grid');

// Funzione per creare le celle
function getCell(content) {
    // Creo una cella
    const cell = document.createElement('div');
    // Aggiungo la classe cell al div creato
    cell.className = 'cell';

    // Aggiungo il contenuto alla cella (aggiungo i numeri chiesti)
    cell.append(content);

    // Restituisco all'esterno la cella creata
    return cell;
}

// ! EVENTI DINAMICI
button.addEventListener('click', function () {

    // ! FASE DI ELABORAZIONE
    // Imposto il numero di celle come da traccia a 100
    const cells = 100;

    // Per ogni cella che voglio creare:
    for (let i = 1; i <= cells; i++) {

        // Creo una cella (richiamando la funzione creata all'inizio)
        const cell = getCell(i);

        // Aggiungo il contenuto alla cella (richiamando la funzione creata e che ho modificato)
        const content = cells[i];

        // Inserisco la cella nel DOM
        grid.appendChild(cell);

        // Aggiungo l'evento del click sulla cella
        cell.addEventListener('click', function(){
            // Aggiungo la classe che mi colora la cella al click
            cell.classList.add('bg-cell');
            //Stampo in console il numero della cella cliccata
            console.log(i);
        })
    }

  
})
