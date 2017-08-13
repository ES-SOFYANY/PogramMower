import fs from 'fs';
import Lawn from './models/Lawn';
import Position from './models/Position';
import Mower from './models/Mower';

export default class App {
  // eslint-disable-next-line
  startProgrammeAndReturnOutput(input) {
    const instructions = input.split(/\n/);
    const lawnSurface = instructions[0].split(' ');
    const lawn = new Lawn(lawnSurface[0], lawnSurface[1]);
    let output = '';
    instructions.forEach((element, index) => {
      let position;
      let mower;
      if (index > 0 && index % 2 === 0) {
        const positionArgs = instructions[index - 1].split(' ');
        position = new Position(positionArgs[0], positionArgs[1], positionArgs[2]);
        mower = new Mower(position, lawn);
        mower.runInstructions(element);
        output += `\n ${mower.toString()}`;
      }
    });
    return output;
  }
// eslint-disable-next-line 
  readFile(path) {
    return new Promise((resolve) => {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          throw Error('Error: File can\'t be read');
        }
        resolve(data);
      });
    });
  }

  saveFile(path, data) {
    const output = this.startProgrammeAndReturnOutput(data);
    fs.writeFile(path, output, (err) => {
      if (err) {
        throw Error('Error: file not saved');
      }
    });
  }
}
