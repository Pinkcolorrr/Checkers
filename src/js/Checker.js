export class Checkers {
    constructor(color, field) {
        this.color = color;
        this.field = field;
        this.pos = field.dataset.pos;
        this.active = false;
        this.queen = false;
    }

    move(newChecker) {
        if (newChecker.color != "none") return;

        this.makeVisible(newChecker);

        this.makeInvisible();

        Checkers.changeMoveOrder();
    }

    makeVisible(checker) {
        checker.field.addChecker(this.color);
        checker.color = Checkers.moveOrder;
    }

    makeInvisible() {
        this.field.removeChecker();
        this.color = "none";
        this.makePassive();
    }

    makeActive(fieldArr) {
        if (Checkers.moveOrder === this.color) {
            Checkers.makePassiveAll(fieldArr);
            this.active = true;
            this.field.firstChild.style.border = "2px solid blue";
            Checkers.activeChecker = this;
        }
    }

    makePassive() {
        this.active = false;
        this.field.firstChild.style.border = "none";
        Checkers.activeChecker = undefined;
    }

    static makePassiveAll(arr) {
        arr.forEach(item => {
            if (item.active) item.makePassive();
        });
    }

    static getField(arr, eventTarget) {
        return arr.find(item => {
            return (item.field == eventTarget || item.field == eventTarget.parentNode);
        });
    }

    static getActive(arr) {
        return arr.find(item => {
            return item.active;
        });
    }

    static changeMoveOrder() {
        this.moveOrder = this.moveOrder === "white" ? "black" : "white";
    }
}

Checkers.moveOrder = "white";
Checkers.activeChecker;