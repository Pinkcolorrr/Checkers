export class Checkers {
    constructor(color, field) {
        this.color = color;
        this.field = field;
        this.pos = field.dataset.pos;
        this.active = false;
        this.queen = false;
    }

    move() {}

    makeActive() {
        this.active = true;
        this.field.firstChild.style.border = "2px solid blue";
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
}