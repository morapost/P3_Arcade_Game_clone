// Enemies our player must avoid
var Enemy = function(EnemyX, EnemyY, speed) {
    this.x = EnemyX;
    this.y = EnemyY;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.x > 500) {
        this.x = -60;
        this.getRandomSpeed();
    } else {
        this.x += (this.speed + 100) * dt;
    }
    if (player.x + 70 >= this.x && player.x <= this.x + 70 && player.y + 50 <= this.y + 100 && player.y + 100 >= this.y + 50)
    {
        player.resetPosition();
    }
};

Enemy.prototype.getRandomSpeed = function() {
    this.speed = Math.floor(Math.random() * 450 + 1);
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var playerX = 200;
var playerY = 400;
var Player = function() {
    this.x = playerX;
    this.y = playerY;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    switch (key) {
        case 'left':
            if (this.x > 0) {
                this.x -= 101;
            }
            break;
        case 'right':
            if (this.x < 400) {
                this.x += 101;
            }
            break;
        case 'up':
            if (this.y === 60) {
                this.resetPosition();
            } else {
                this.y -= 85;
            }
            break;
        case 'down':
            if (this.y < 400) {
                this.y += 85;
            }
            break;

    }
};

// reset() puts the player back at the starting position
Player.prototype.resetPosition = function() {
    this.x = 200;
    this.y = 400;

};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
for (var i = 0; i < 3; i++) {
    var tmpSpeed = Math.floor(Math.random() * 5 + 1) * 75;
    allEnemies.push(new Enemy(-60, (i * 80) + 60, tmpSpeed));
}
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});