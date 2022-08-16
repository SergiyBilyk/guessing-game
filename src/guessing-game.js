class GuessingGame {
    numb;
    arr = [];
    setRange(min, max) {
        for (let i = min + 1; i < max; i++) {
            this.arr.push(i);
        }
        this.numb = Math.ceil((this.arr.length - 1) / 2);
    }
    guess() {
        return this.arr[this.numb];
    }
    lower() {
        this.arr = this.arr.slice(0, this.numb);
        this.numb = Math.floor(this.arr.length / 2);
    }
    greater() {
        this.arr = this.array.slice(this.numb + 1);
        this.numb = Math.floor(this.arr.length / 2);
    }
}

module.exports = GuessingGame;
