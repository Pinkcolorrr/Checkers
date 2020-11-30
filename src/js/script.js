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
    if (checkerObj && checkerObj.color != "none") {
        if (!checkerObj.active) {
            Checkers.makePassiveAll(fieldArr);
            checkerObj.makeActive();
        } else {
            checkerObj.makePassive();
        }
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