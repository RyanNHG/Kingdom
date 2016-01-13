
const TILE_SIZE = 48;
const GAME_WIDTH = 16;
const GAME_HEIGHT = 9;

const CANVAS_WIDTH = TILE_SIZE * GAME_WIDTH;
const CANVAS_HEIGHT = TILE_SIZE * GAME_HEIGHT;

var Game = function() {
    this.initCanvasAndContext();
    this.initMap();
    this.initPlayer();

    this.render();
};

Game.prototype.initCanvasAndContext = function() {
    console.log('Initializing canvas and context...');

    this.canvas = document.getElementById('canvas');
    this.canvas.width = CANVAS_WIDTH;
    this.canvas.height = CANVAS_HEIGHT;

    this.ctx = this.canvas.getContext('2d');
};

Game.prototype.initMap = function() {
    console.log('Initializing map...');

    this.map = [];

    for(var y = 0; y < GAME_HEIGHT; y++)
    {
        this.map[y] = [];

        for(var x = 0; x < GAME_WIDTH; x++)
        {
            var rand = parseInt(Math.random()*3);

            var tile = new Tile();
            tile.color = (rand == 0) ? '#069' : '#096';
            this.map[y][x] = tile;
        }
    }
};

Game.prototype.initPlayer = function() {
    console.log('Initializing player');

    this.player = new Player(parseInt(GAME_WIDTH/2), parseInt(GAME_HEIGHT/2));
}

Game.prototype.render = function() {
    console.log('Rendering game...');

    for(var y = 0; y < GAME_HEIGHT; y++)
        for(var x = 0; x < GAME_WIDTH; x++)
        {
            this.ctx.fillStyle = this.map[y][x].color;
            this.ctx.fillRect(x*TILE_SIZE, y*TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }

    this.ctx.fillStyle = this.player.color;
    this.ctx.fillRect(this.player.x * TILE_SIZE, this.player.y * TILE_SIZE, TILE_SIZE, TILE_SIZE)

}