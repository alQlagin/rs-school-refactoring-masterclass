import handlerFactory from './handler';
import setGoblin from './setgoblin';
import { checkGameOver } from './check-game-over';
import { State } from './state';
import { updateScore } from './update-score-ui';

// создаём стейт и выставляем начальные значения
const state = new State();
updateScore(state);
setGoblin();

// запускаем таймер
const timer = setInterval(() => state.nextRound(), 1000);

// добавляем обработчики следующего раунда
state.onNextRound(checkGameOver(timer));
state.onNextRound(updateScore);
state.onNextRound(setGoblin);

// слушаем клики
const field = document.querySelector('.field');
field.addEventListener('click', handlerFactory(state));
