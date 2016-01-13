
var Player = function(x,y) {

    this.x = (x == null) ? 0 : x;
    this.y = (y == null) ? 0 : y;

    this.color = '#fff';
};

Player.prototype.canMove = function(tileType) {
    
    switch(tileType)
    {
        case 'grass':
            return true;
        default:
            console.log('Player cannot walk on ' + tileType)
            return false;
    }
};

