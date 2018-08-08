import 'p2';
import 'pixi';
import 'phaser-ce';

namespace example {
    class Example extends Phaser.State {
        public preload() {
          game.load.image('logo', './assets/images/phaser.png');
        }

        public create() {
          let logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
          logo.anchor.setTo(0.5, 0.5);
        };
    }

    const game: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, '');

    game.state.add('example', new Example());
    game.state.start('example');
}
