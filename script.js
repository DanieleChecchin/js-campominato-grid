
// ! FASE DI PREPARAZIONE

// Mi prendo gli elementi dal DOM
const button = document.querySelector('button');
const grid = document.getElementById('grid')

// Funzione per creare le celle

function getCell() {
    // Creo una cella
    const cell = document.createElement('div');
    // Aggiungo la classe cell al div creato
    cell.className = 'cell';
    // Restituisco all'esterno la cella creata
    return cell;
}

// ! EVENTI DINAMICI
button.addEventListener('click', function(){

// ! FASE DI ELABORAZIONE

// Imposto il numero di celle come da traccia a 100
const cells = 100;

// Per ogni cella che voglio creare:
for (let i = 0; i < cells; i++) {

    // Creo una cella
    const cell = getCell();

    // Inserisco la cella nel DOM
    grid.appendChild(cell);
}
})
