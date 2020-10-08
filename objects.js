const person = (name, firstLastName, secondLastName, age) => {
  return { name, firstLastName, secondLastName, age };
};
const family = {
  _padre: person("Dario", "Gonzalez", "Lopez", 55),
  _madre: person("Monica", "Dimate", "", 45),
  _hijos: [],
  get padres() {
    if (this._padre != undefined && this._madre != undefined) {
      return `Padres: ${this._padre.name} ${this._padre.firstLastName} ${this._padre.secondLastName} and ${this._madre.name} ${this._madre.firstLastName} ${this._madre.secondLastName}`;
    } else {
      return "No se encuentra Padre o Madre";
    }
  },
  get hijos() {
    if (this._hijos != []) {
      return `Hijos: ${this._hijos} `;
    } else {
      return "Esta Familia no tiene Hijos o no se encuentran";
    }
  },
  set hijos(name) {
    this._hijos.push(
      name + " " + this._padre.firstLastName + " " + this._madre.firstLastName
    );
  },
  get edadPadres() {
    if (this._padre != undefined && this._madre != undefined) {
      return `Edad Padre: ${this._padre.age}\nEdad Madre:${this._madre.age}`;
    } else {
      return "No se encuentra Padre o Madre";
    }
  },
};

family.hijos = "Maria";
family.hijos = "Santiago";
console.log(family.padres);
console.log(family.edadPadres);
console.log(family.hijos);
