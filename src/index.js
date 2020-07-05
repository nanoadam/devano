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
    let template = this.createTemplate(elem);
    return (this.element.innerHTML += `${template}`);
  });
}

Nano.prototype.createError = (err) => {
  console.error(err);
};

Nano.prototype.createTemplate = (elem) => {
  let raw = String(elem.template);
  let newRaw;
  let re = elem.template.match(/\{{.*?\}}/g);
  if (re) {
    re.forEach((match) => {
      let js = match.split(/[{{}}]/g)[2].trim();
      console.log(match);
      newRaw = raw.replace(new RegExp(match), elem.state[js]);
    });
  }
  return newRaw;
};
