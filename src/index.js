export default function Nano({ element, state }) {
  this.element = element;
  this.state = state;

  if (!document.querySelector(this.element)) {
    return this.createError(new Error(`Element ${this.element} not found`));
  }

  const elementDOM = document.querySelector(this.element);

  console.log(elementDOM);
}

Nano.prototype.createError = (err) => {
  console.error(err);
};
