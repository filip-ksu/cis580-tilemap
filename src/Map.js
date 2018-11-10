

export default class Map {
    constructor(tileset, data) {
        this.tilemap = data;
        this.tileset = tileset;
    }

    update(deltaT, input) {

    }

    render(deltaT, context) {
        let layers = this.tilemap.layers;
        for (let j = 0; j < layers.length; j++) {
            let data = this.tilemap.layers[j].data;
            let x = 0;
            let y = 0;
            let sx = 0;
            let sy = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i] === 0) {
                    continue;
                }
                x = i % 32 * 32;
                y = Math.floor(i / 32) * 32;
                sx = (data[i] - 1) % 37 * 34;
                sy = Math.floor((data[i] - 1) / 37) * 34;
                context.drawImage(this.tileset, sx, sy, 32, 32, x, y, 32, 32);
                x++;
            }
        }
    }
}
