var Animation = function(type, actor, dX, dY)
{
    this.framesLeft = 10;

    this.dX = dX;
    this.dY = dY;

    this.finalX = actor.x + this.dX;
    this.finalY = actor.y + this.dY;

    this.actor = actor;

    var self = this;

    if(type == 'slide')
        setTimeout(function(){self.slide();} , 20);
};

Animation.prototype.slide = function() {
    var self = this;

    this.framesLeft--;

    if(this.framesLeft != 0)
    {
        this.actor.x += this.dX / 10;
        this.actor.y += this.dY / 10;

        setTimeout(function(){self.slide();}, 20);
    }
    else
    {
        this.actor.x = this.finalX;
        this.actor.y = this.finalY;
    }

    game.render();
}