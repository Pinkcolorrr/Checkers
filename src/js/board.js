export const board = {
    fields: document.querySelectorAll('.board_black'),

    gameBoard: document.querySelector('.board'),

    startPosWhite: [
        'a1', 'c1', 'e1', 'g1',
        'b2', 'd2', 'f2', 'h2',
        'a3', 'c3', 'e3', 'g3',
    ],
    startPosBlack: [
        'b8', 'd8', 'f8', 'h8',
        'a7', 'c7', 'e7', 'g7',
        'b6', 'd6', 'f6', 'h6'
    ],

    init() {
        for (let field of this.fields) {
            if (this.startPosWhite.includes(field.dataset.pos)) {
                field.addChecker('white');
            } else
            if (this.startPosBlack.includes(field.dataset.pos)) {
                field.addChecker('black');
            } else {
                field.removeChecker('none');
            }
        }
    },
}

for (let field of board.fields) {
    field.removeChecker = function () {
        field.innerHTML = `<div class="checker checker_none" data-color="none"></div>`;
    }

    field.addChecker = function (color) {
        field.innerHTML = `<div class="checker checker_${color}" data-color="${color}"></div>`;
    }
}