export class State {
    constructor() {
        this.isClicked = false;
        this.win = 0;
        this.fail = 0;
        this.nextRoundHandlers = [];
    }

    winRound() {
        if (!this.isClicked) {
            this.win++;
            this.isClicked = true;
        }
    }

    failRound() {
        if (!this.isClicked) {
            this.fail++;
            this.isClicked = true;
        }
    }

    nextRound() {
        if (!this.isClicked) {
            this.failRound();
        }
        this.isClicked = false;
        this.nextRoundHandlers.forEach((fn) => fn(this));
    }

    onNextRound(fn) {
        this.nextRoundHandlers.push(fn);
    }
}
