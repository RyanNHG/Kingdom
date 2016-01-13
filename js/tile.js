var Tile = function() {
  this.type = null;
  this.color = '#333';
};

Tile.prototype.setType = function(type) {
    this.type = type;
    this.color = this.colors[type];
};

Tile.prototype.colors = {
    grass: '#096',
    water: '#069'
};