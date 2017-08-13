export default class Lawn {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  isValid() {
    return (this.width > 0 && this.height > 0);
  }

  isCellBounded(x, y) {
    return (x <= this.width && y <= this.height);
  }
}
