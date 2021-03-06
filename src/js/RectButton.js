export default class RectButton extends PIXI.Container {

    constructor(label, width, height, fontsize) {
        super();
        this.label = label;
        this.rect = new PIXI.Graphics();
        this.rect.beginFill(0xFFFFFF);
        this.rect.drawRoundedRect(-width / 2, -height / 2, width, height, 40);

        this.rect.interactive = true;
        this.rect.buttonMode = true;
        this.rect.on('click', () => {
            console.log('click on button', {answer: label, button: this});
            this.emit('click', {answer: label, button: this});
        });

        this.text = new PIXI.Text(label, {fontSize: fontsize});
        this.text.anchor = {x: 0.5, y: 0.5};
        this.addChild(this.rect, this.text);
    };

    doGreenClick() {
        this.rect.tint = 0x00FF00;
    };

    doRedClick() {
        this.rect.tint = 0xFF0000;
    }

    doWhiteClick() {
        this.rect.tint = 0xFFFFFF;
    };

    doPurpleClick() {
        this.rect.tint = 0x8000FF;
    };

};
