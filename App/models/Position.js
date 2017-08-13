export default class Position {
  constructor(x, y, direction) {
    this.x = parseInt(x, 10);
    this.y = parseInt(y, 10);
    this.direction = direction;
  }
  isValid() {
    const directions = ['N', 'E', 'S', 'W'];
    return (this.x >= 0 && this.y >= 0 && directions.includes(this.direction));
  }
}
