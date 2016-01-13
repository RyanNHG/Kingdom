
const TILE_SIZE = 48;
const GAME_WIDTH = 16;
const GAME_HEIGHT = 9;

const CANVAS_WIDTH = TILE_SIZE * GAME_WIDTH;
const CANVAS_HEIGHT = TILE_SIZE * GAME_HEIGHT;

var game = {};

game.init = function() {
    this.initCanvasAndContext();
    this.initMap();
    this.initPlayer();
    this.initInput();

    this.render();
};

    game.initCanvasAndContext = function() {

        this.canvas = document.getElementById('canvas');
        this.canvas.width = CANVAS_WIDTH;
        this.canvas.height = CANVAS_HEIGHT;

        this.ctx = this.canvas.getContext('2d');
    };

    game.initMap = function() {

        this.map = [];

        for(var y = 0; y < GAME_HEIGHT; y++)
        {
            this.map[y] = [];

            for(var x = 0; x < GAME_WIDTH; x++)
            {
                var rand = parseInt(Math.random()*3);

                var tile = new Tile();
                tile.setType((rand == 0) ? 'water' : 'grass');
                this.map[y][x] = tile;
            }
        }
    };

    game.initPlayer = function() {

        this.player = new Player(parseInt(GAME_WIDTH/2), parseInt(GAME_HEIGHT/2));
    }

    game.initInput = function() {
        this.input = new Input();
    };


game.render = function() {

    for(var y = 0; y < GAME_HEIGHT; y++)
        for(var x = 0; x < GAME_WIDTH; x++)
        {
            this.ctx.fillStyle = this.map[y][x].color;
            this.ctx.fillRect(x*TILE_SIZE, y*TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }

    this.ctx.fillStyle = this.player.color;
    this.ctx.fillRect(this.player.x * TILE_SIZE, this.player.y * TILE_SIZE, TILE_SIZE, TILE_SIZE)

};

game.tileClicked = function(x, y){
    var px = this.player.x;
    var py = this.player.y;

    var dX = x-px;
    var dY = y-py;

    var tileType = this.map[y][x].type;

    this.attemptMove(tileType,dX,dY);
};

game.keyPressed = function(key) {
    var px = this.player.x;
    var py = this.player.y;

    var dX = (key == 'left') ? -1 : (key == 'right') ? 1 : 0;
    var dY = (key == 'up') ? -1 : (key == 'down') ? 1 : 0;
    
    var x = px + dX;
    var y = py + dY;

    var tileType = this.map[y][x].type;
    this.attemptMove(tileType,dX,dY);
};

game.attemptMove = function(tileType, dX, dY) {
    
    if ( ( dX == 0 && Math.abs(dY) == 1 ) || ( Math.abs(dX) == 1 && dY == 0 ))
    {
        if(this.player.canMove(tileType))
        {
            this.slideActor(this.player, dX, dY);
        }
    }

};

game.slideActor = function(actor, dX, dY) {
    new Animation('slide', actor, dX, dY);
};