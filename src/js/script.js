const fieldArr = [];
import {
    board
} from './board.js';
import {
    Checkers
} from './Checker.js'

board.init();

fillArr(fieldArr, board.fields);

board.gameBoard.addEventListener('click', function Handler(event) {
    let checkerObj = Checkers.getField(fieldArr, event.target);
    if (!checkerObj) return;

    let active = Checkers.getActive(fieldArr);

    if (active && checkerObj.color === "none") {
        active.move(checkerObj);
    } else
    if (checkerObj.color != "none") {
        checkerObj.makeActive(fieldArr);
    }
});


function fillArr(arr, fields) {
    for (let field of fields) {
        if (field.firstChild) {
            let color = field.firstChild.dataset.color;
            arr.push(new Checkers(color, field));
        }
    }
}