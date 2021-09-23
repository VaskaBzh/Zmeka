let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for (let i=1; i<101; i++) {
    let field = document.createElement('div');
    field.appendChild(excel);
    excel.classList.add('excel');
}

let excel = document.getElementsByClassName('excel');
let x = 1,
    y = 10;

for (let i=0; i<excel.length; i++) {
    if (x>10) {
        x=1;
        y--;
    }
    excel[I].setAttribute('posX', x);
    excel[I].setAttribute('posY', y);
    x++;
}

function generateSnake() {
    let posX = Math.round(Math.random() * (10-1) + 1);
    let posY = Math.round(Math.random() * (10-1) + 1);
    return [posX, posY];
}

let coordinates = generateSnake ();
let snakeBody = [document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' + coordintaes[1] + '"]'), document.querySelector('[posX = "' + (coordinates[0]-1) + '"][posY = "' + coordintaes[1] + '"]'), document.querySelector('[posX = "' + (coordinates[0]-2) + '"][posY = "' + coordintaes[1] + '"]')];

for (let i = 0; i<snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody');
}

snakeBody[0].classList.add('head');

console.log(snakeBody);