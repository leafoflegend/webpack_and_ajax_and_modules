import { getAllPlayers } from './api.js';
import createPlayer from './create_player.js';

const app = document.getElementById('app');

const setupPage = async () => {
  const players = await getAllPlayers();

  for (let i = 0; i < players.length; ++i) {
    const currentPlayer = players[i];

    app.appendChild(createPlayer(currentPlayer));
  }
};

setupPage();

