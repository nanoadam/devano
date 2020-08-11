export default function Devano({ element, state, components }) {
  this.element = element;
  this.components = components;

  if (!this.element) {
    return this.createError(
      "Please provide a element to attach the Nano App to"
    );
  }

  if (!document.querySelector(this.element)) {
    return this.createError(`Element ${this.element} not found`);
  }

  let domElement = this.element;
  this.element = document.querySelector(domElement);

  if (!this.components) {
    return this.createMsg("Devano will run without components");
  }

  if (this.components) {
    if (!Array.isArray(this.components)) {
      return this.createError("Components should be passed as an array");
    }
  }

  this.components.forEach((elem) => {
    console.log(elem);
  });
}

Devano.prototype.createError = (err) => {
  console.error("%c" + new Error(err), "background: #ba2905; color: white;");
};

Devano.prototype.createMsg = (msg) => {
  console.log("%c" + msg, "background: blueviolet; color: #fff");
};
