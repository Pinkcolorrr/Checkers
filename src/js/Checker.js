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
        newChecker.field.addChecker(this.color);
        newChecker.color = this.color;

        this.field.removeChecker();
        this.color = "none";

        this.makePassive();
        Checkers.changeMoveOrder();
    }

    makeActive(fieldArr) {
        if (Checkers.moveOrder === this.color) {
            Checkers.makePassiveAll(fieldArr);
            this.active = true;
            this.field.firstChild.style.border = "2px solid blue";
        }
    }

    makePassive() {
        this.active = false;
        this.field.firstChild.style.border = "none";
    }

    static makePassiveAll(arr) {
        arr.forEach(item => {
            item.makePassive();
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