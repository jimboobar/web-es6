export default class Element {

    constructor({
        className = '',
        type = 'div',
        eventListeners = {}
    }) {
        this.className = className;
        this.el = document.createElement(type);
        this.addEventListener('enable', this.enable.bind(this));
        this.addEventListener('disable', this.hide.bind(this));
        this.addEventListener('show', this.show.bind(this));
        this.addEventListener('hide', this.hide.bind(this));
        Object.keys(eventListeners).forEach(eventName => {
            this.addEventListener(eventName, eventListeners[eventName]);
        });
        this.show();
    }

    addEventListener(eventName, action) {
        if (typeof action !== "function") {
            throw new Error("action is not a function");
        }

        this.el.addEventListener(eventName, action);
    }

    dispatchEvent() {
        this.el.dispatchEvent(new Event(...arguments));
    }

    enable() {
        this.el.removeAttribute('disabled');
        this.dispatchEvent('enabled');
    }

    disable() {
        this.el.setAttribute('disabled', 'true');
        this.dispatchEvent('disabled');
    }

    hide() {
        this.el.setAttribute('class', [this.className, 'hide'].join(" "));
        this.dispatchEvent('hidden');
    }

    show() {
        this.el.setAttribute('class', this.className);
        this.dispatchEvent('showing');
    }

    render() {
        throw new Error("not implemented");
    }
}
