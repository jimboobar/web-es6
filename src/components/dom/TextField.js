import Element from "./Element";

export default class TextField extends Element {
  constructor(text = "N/A", eventListeners) {
    super({
      type: 'p',
      className: "",
      eventListeners
    });

    this.setText(text);
  }

  setText(text) {
    this.text = text;
    this.render();
  }

  render() {
    this.el.innerHTML = this.text;
  }
}
