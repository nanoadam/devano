export default function Nano({ element, state, components }) {
  this.element = element;
  this.state = state;
  this.components = components;

  if (!this.element) {
    return this.createError(
      new Error('Please provide a element to attach the Nano App to')
    );
  }

  if (!document.querySelector(this.element)) {
    return this.createError(new Error(`Element ${this.element} not found`));
  }

  let domElement = this.element;
  this.element = document.querySelector(domElement);

  if (this.components) {
    if (!Array.isArray(this.components)) {
      return this.createError(
        new Error('Components should be passed as an array')
      );
    }
  }

  this.components.forEach((elem) => {
    return (this.element.innerHTML += `${elem}`);
  });
}

Nano.prototype.createError = (err) => {
  console.error(err);
};
