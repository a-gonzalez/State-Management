import { Idle, Charge, Swarm, STATES } from "./state.js";

export default class Game
{
    constructor(screen)
    {
        console.log(`${this.constructor.name} .ctor @ ${new Date().toLocaleString()}`);

        this.screen = screen;
        this.width = this.screen.width;
        this.height = this.screen.height;
        this.game_over = false;
        this.debug = false;
        this.states = [new Idle(this), new Charge(this), new Swarm(this)];
        this.keys = new Set();

        this.alien;
        this.setState(STATES.Idle);

        addEventListener("keydown", (event) =>
        {
            this.keys.add(event.key);
        });

        addEventListener("keyup", (event) =>
        {
            this.keys.clear();
        });
    }

    draw(context)
    {
        this.alien.draw(context);
    }

    update(delta_time)
    {
        this.alien.update(delta_time);
    }

    setState(state)
    {
        this.alien = this.states[state];
        this.alien.setState();
    }

    /*setGameText(context)
    {
        context.fillText(`Score  ${this.score}`, 10, 30);
        context.fillText("Lives", 10, 65);

        for (let index = 0; index < this.lives_max; index++)
        {
            context.strokeRect(90 + 15 * index, 50, 10, 15);
        }

        for (let index = 0; index < this.lives; index++)
        {
            context.fillRect(90 + 15 * index, 50, 10, 15);
        }

        if (this.game_over === true)
        {
            context.save();
            context.shadowOffsetX = 3;
            context.shadowOffsetY = 3;
            context.shadowColor = "#000000";
            context.textAlign = "center";
            context.font = "80px space shards";
            context.fillStyle = "#ff0000";
            context.fillText("Game Over!", this.width * 0.5, 250);
            
            if (this.score >= this.score_win)
            {
                context.fillStyle = "#ffd700";
                context.font = "35px space shards";
                context.fillText("You Win!", 160, this.height * 0.5);
                context.fillText(`Score ${this.score}`, 600, this.height * 0.5);
            }
            else
            {
                context.font = "35px space shards";
                context.fillText("You Lose!", 160, this.height * 0.5);
                context.fillText("Try Again.", 600, this.height * 0.5);
            }
            //context.fillText("Press R To Restart.", this.width * 0.5, 500);
            context.restore();
        }
    }*/

    trajectory(a, b)
    {
        const dx = a.x - b.x; // horizontal distance between a and b
        const dy = a.y - b.y; // vertical distance between a and b
        const distance = Math.hypot(dx, dy);
        const aimX = dx / distance * -1; // horizontal direction between a and b
        const aimY = dy / distance * -1; // vertical direction between a and b

        return [aimX, aimY, dx, dy];
    }

    isCollision(a, b)
    {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.hypot(dx, dy);
        const sum = a.radius + b.radius;

        return distance < sum;
    }
}