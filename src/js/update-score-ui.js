export function updateScore(state) {
    const winEl = document.querySelector('span.win');
    const failEl = document.querySelector('span.fail');
    winEl.textContent = state.win;
    failEl.textContent = state.fail;
}
