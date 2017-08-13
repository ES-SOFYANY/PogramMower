/* global it, describe */

import chai from 'chai';
import Position from '../App/models/Position';

const expect = chai.expect;

describe('Position', () => {
  let position;

  it('Position should be valid', () => {
    position = new Position(5, 5, 'N');
    expect(position.isValid()).to.be.equal(true);
  });

  it('Position should be valid', () => {
    position = new Position(5, 5, 'E');
    expect(position.isValid()).to.be.equal(true);
  });

  it('Position should be valid', () => {
    position = new Position(5, 5, 'S');
    expect(position.isValid()).to.be.equal(true);
  });

  it('Position should be valid', () => {
    position = new Position(5, 5, 'E');
    expect(position.isValid()).to.be.equal(true);
  });

  it('Position should be not valid', () => {
    position = new Position(-1, 5, 'N');
    expect(position.isValid()).to.be.equal(false);
  });

  it('Position should be not valid', () => {
    position = new Position(5, 5, 'U');
    expect(position.isValid()).to.be.equal(false);
  });
});
