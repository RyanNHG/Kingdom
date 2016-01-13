var Input = function() {
    game.canvas.onclick = this.onClick;
    window.onkeyup = this.onKeyUp;
};

Input.prototype.onClick = function(event){
    var x = event.offsetX;
    var y = event.offsetY;

    var tileX = parseInt(x/TILE_SIZE);
    var tileY = parseInt(y/TILE_SIZE);

    game.tileClicked(tileX, tileY);
};

Input.prototype.onKeyUp = function(event){
    
    var keyCode;

    switch(event.keyCode)
    {
        case 38: case 87:
            keyCode = 'up'; break;
        case 37: case 65:
            keyCode = 'left'; break;
        case 40: case 83:
            keyCode = 'down'; break;
        case 39: case 68:
            keyCode = 'right'; break;
        default:
            return;
    }

    game.keyPressed(keyCode);
}
