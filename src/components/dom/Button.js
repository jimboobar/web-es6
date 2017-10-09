import Element from './Element';

export default class Button extends Element {

    constructor(text = "N/A", eventListeners) {
        super({
            className: 'button',
            type: 'button',
            eventListeners: eventListeners
        });

        this.text = text;
    }

    render() {
        this.el.textContent = this.text;
    }
}
