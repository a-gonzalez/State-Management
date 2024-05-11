export default class Alien
{
    constructor(game)
    {
        this.game = game;
        this.width = 160;
        this.height = 160;
        this.x = this.game.width * 0.5;
        this.y = this.game.height * 0.5;
    }

    draw(context)
    {
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    update(delta_time)
    {
        //console.log(delta_time);
    }
}

class State
{
    constructor()
    {
        this.state = null;
    }

    setState(state)
    {
        this.state = state;
    }
}