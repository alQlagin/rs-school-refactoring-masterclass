export default function handlerFactory(state) {
  return (event) => {
    const cell = event.target.closest('.goblin');
    if (!cell) {
      state.failRound();
    } else {
      state.winRound();
    }
  };
}
