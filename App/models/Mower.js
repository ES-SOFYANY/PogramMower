import Lawn from './Lawn';
import Position from './Position';
import Direction from './Direction';

const directionsArray = [
  new Direction('N', 0, 1),
  new Direction('E', 1, 0),
  new Direction('S', 0, -1),
  new Direction('W', -1, 0),
];

export default class Mower {
  constructor(position, lawn) {
    if (position instanceof Position && lawn instanceof Lawn) {
      this.position = position;
      this.lawn = lawn;
    } else {
      throw Error('parameters invalid');
    }
  }

  turnRigth() {
    this.turn('right');
  }

  turnLeft() {
    this.turn('left');
  }

  turn(RightOrLeft) {
    const currentIndex = this.getCurrentDirectionIndex();
    let newIndexOfDirection;
    if (RightOrLeft === 'right') {
      newIndexOfDirection = currentIndex + 1 > directionsArray.length - 1 ? 0 : currentIndex + 1;
    } else if (RightOrLeft === 'left') {
      newIndexOfDirection = currentIndex - 1 < 0 ? directionsArray.length - 1 : currentIndex - 1;
    }
    this.position.direction = directionsArray[newIndexOfDirection].code;
  }

  goForward() {
    const currentDirectionIndex = this.getCurrentDirectionIndex();
    const newX = this.position.x + directionsArray[currentDirectionIndex].valueX;
    const newY = this.position.y + directionsArray[currentDirectionIndex].valueY;
    if (this.lawn.isCellBounded(newX, newY)) {
      this.position.x = newX;
      this.position.y = newY;
    }
  }

  getCurrentDirectionIndex() {
    return directionsArray.findIndex(direction => this.position.direction === direction.code);
  }

  runInstructions(instructions) {
    instructions.split('').forEach((element) => {
      switch (element) {
        case 'R':
          this.turnRigth();
          break;
        case 'L':
          this.turnLeft();
          break;
        case 'F':
          this.goForward();
          break;
        default:
      }
    });
  }

  toString() {
    return `${this.position.x} ${this.position.y} ${this.position.direction}`;
  }
}
