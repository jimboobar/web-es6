import Element from './Element';

export default class Group extends Element {

    constructor({
        elements = [],
        eventListeners
    }) {
        super({
            type: "div",
            className: 'group',
            eventListeners: eventListeners
        });

        this.elements = [];
        elements.forEach(element => this.addElement(element));
    }

    addElement(element) {
        if (!(element instanceof Element))
            throw new Error("expected Element");

        this.elements.push(element);
        this.el.appendChild(element.el);
    }

    enable() {
        this.elements.forEach(element => element.enable());
    }

    disable() {
        this.elements.forEach(element => element.disable());
    }

    render() {
        this.elements.forEach(element => element.render());
    }
}
