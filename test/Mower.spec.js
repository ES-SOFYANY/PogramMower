/* global it, describe, beforeEach */

import chai from 'chai';
import Mower from '../App/models/Mower';
import Lawn from '../App/models/Lawn';
import Position from '../App/models/Position';

const expect = chai.expect;

describe('Mower', () => {
  let mower;
  let position;
  let lawn;

  beforeEach(() => {
    position = new Position(1, 1, 'N');
    lawn = new Lawn(5, 5);
    mower = new Mower(position, lawn);
  });

  it('direction should be East after turn right', () => {
    mower.turnRigth();
    expect(mower.position.direction).to.be.equal('E');
  });

  it('direction should be West after turn left', () => {
    mower.turnLeft();
    expect(mower.position.direction).to.be.equal('W');
  });

  it('Position should be equal (1, 2, "N")', () => {
    mower.goForward();
    expect(mower.position).to.deep.equal({ x: 1, y: 2, direction: 'N' });
  });

  it('Position should be equal (2, 1, "E")', () => {
    position.direction = 'E';
    mower.goForward();
    expect(mower.position).to.deep.equal({ x: 2, y: 1, direction: 'E' });
  });

  it('Position should be equal (0, 1, "W")', () => {
    position.direction = 'W';
    mower.goForward();
    expect(mower.position).to.deep.equal({ x: 0, y: 1, direction: 'W' });
  });

  it('Position should be equal (1, 0, "S")', () => {
    position.direction = 'S';
    mower.goForward();
    expect(mower.position).to.deep.equal({ x: 1, y: 0, direction: 'S' });
  });

  it('The output position should be equal (1, 3, "N")', () => {
    position = new Position(1, 2, 'N');
    lawn = new Lawn(5, 5);
    mower = new Mower(position, lawn);
    mower.runInstructions('LFLFLFLFF');
    expect(mower.position).to.deep.equal({ x: 1, y: 3, direction: 'N' });
  });

  it('The output position should be equal (5, 1, "E")', () => {
    position = new Position(3, 3, 'E');
    lawn = new Lawn(5, 5);
    mower = new Mower(position, lawn);
    mower.runInstructions('FFRFFRFRRF');
    expect(mower.position).to.deep.equal({ x: 5, y: 1, direction: 'E' });
  });
});
