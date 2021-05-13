export function checkGameOver(timer) {
    return (state) => {
        if (state.fail === 5) {
            clearInterval(timer);
            document.querySelector('.result').textContent = 'Вы проиграли';
        }
    };
}
