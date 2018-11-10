import Game from './game';
import Player from './player';
import Map from './Map';

// Create the game
var game = new Game(1024, 768);

// Create the player and add it to the game
game.addEntity(new Map(game.tileset, game.data));
game.addEntity(new Player(60, 60, game.tileset));

// Start the main game loop
game.loop();
