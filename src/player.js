/**
 * @module Player
 * A class representing the player.
 */
export default class Player {
    /**
     * @constructor
     * Constructs a new player instance
     * @param {float} x - the player's x position
     * @param {float} y - the player's y position
     */
    constructor(x, y, tileset) {
        this.x = x;
        this.y = y;
        this.tileset = tileset;

        this.Directions = {
            LEFT: 0,
            RIGHT: 1,
            UP: 2,
            DOWN: 3,
        };
        this.direction = this.Directions.RIGHT;
    }

    /**
     * @method update
     * Updates the player
     * @param {double} deltaT - the elapsed time
     * @param {Input} input - the input object
     */
    update(deltaT, input) {
        if (input.keyPressed("ArrowLeft")) {
            this.direction = this.Directions.LEFT;
            this.x -= 2;
        } else if (input.keyPressed("ArrowRight")) {
            this.direction = this.Directions.RIGHT;
            this.x += 2;
        } else if (input.keyPressed("ArrowUp")) {
            this.direction = this.Directions.UP;
            this.y -= 2;
        } else if (input.keyPressed("ArrowDown")) {
            this.direction = this.Directions.DOWN;
            this.y += 2;
        }
    }

    /**
     * @method render
     * Renders the player
     * @param {double} deltaT - elapsed time
     * @param {Context2D} context - the rendering context
     */
    render(deltaT, context) {
        if (this.direction === this.Directions.LEFT) {
            context.drawImage(this.tileset, 31 * 34, 16 * 34, 32, 32, this.x - 48, this.y, 32, 32);
            context.drawImage(this.tileset, 32 * 34, 16 * 34, 32, 32, this.x - 16, this.y, 32, 32);
            context.drawImage(this.tileset, 33 * 34, 16 * 34, 32, 32, this.x + 16, this.y, 32, 32);
            context.drawImage(this.tileset, 31 * 34, 17 * 34, 32, 32, this.x - 48, this.y + 32, 32, 32);
            context.drawImage(this.tileset, 32 * 34, 17 * 34, 32, 32, this.x - 16, this.y + 32, 32, 32);
            context.drawImage(this.tileset, 33 * 34, 17 * 34, 32, 32, this.x + 16, this.y + 32, 32, 32);
        }
        if (this.direction === this.Directions.RIGHT) {
            context.drawImage(this.tileset, 34 * 34, 16 * 34, 32, 32, this.x - 48, this.y, 32, 32);
            context.drawImage(this.tileset, 35 * 34, 16 * 34, 32, 32, this.x - 16, this.y, 32, 32);
            context.drawImage(this.tileset, 36 * 34, 16 * 34, 32, 32, this.x + 16, this.y, 32, 32);
            context.drawImage(this.tileset, 34 * 34, 17 * 34, 32, 32, this.x - 48, this.y + 32, 32, 32);
            context.drawImage(this.tileset, 35 * 34, 17 * 34, 32, 32, this.x - 16, this.y + 32, 32, 32);
            context.drawImage(this.tileset, 36 * 34, 17 * 34, 32, 32, this.x + 16, this.y + 32, 32, 32);
        }
        if (this.direction === this.Directions.UP) {
            context.drawImage(this.tileset, 31 * 34, 18 * 34, 32, 32, this.x - 32, this.y, 32, 32);
            context.drawImage(this.tileset, 32 * 34, 18 * 34, 32, 32, this.x, this.y, 32, 32);
            context.drawImage(this.tileset, 31 * 34, 19 * 34, 32, 32, this.x - 32, this.y + 32, 32, 32);
            context.drawImage(this.tileset, 32 * 34, 19 * 34, 32, 32, this.x, this.y + 32, 32, 32);
        }
        if (this.direction === this.Directions.DOWN) {
            context.drawImage(this.tileset, 33 * 34, 18 * 34, 32, 32, this.x - 32, this.y, 32, 32);
            context.drawImage(this.tileset, 34 * 34, 18 * 34, 32, 32, this.x, this.y, 32, 32);
            context.drawImage(this.tileset, 33 * 34, 19 * 34, 32, 32, this.x - 32, this.y + 32, 32, 32);
            context.drawImage(this.tileset, 34 * 34, 19 * 34, 32, 32, this.x, this.y + 32, 32, 32);
        }
    }

}
