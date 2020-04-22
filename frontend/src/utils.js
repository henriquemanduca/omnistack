class Utils {
  constructor() {
    this.predefined = 'pt-BR';
  }

  formatCurr(value) {
    return Intl.NumberFormat(this.predefined, {style: 'currency', currency: 'BRL'})
      .format(value);
  };
}

const utils = new Utils();
export default utils;
