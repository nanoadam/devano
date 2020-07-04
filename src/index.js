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

  if (this.components) {
    if (!Array.isArray(this.components)) {
      return this.createError(
        new Error('Components should be passed as an array')
      );
    }
  }

  const elementDOM = document.querySelector(this.element);

  console.log(elementDOM);
}

Nano.prototype.createError = (err) => {
  console.error(err);
};
