/* global it, describe */

import chai from 'chai';
import Lawn from '../App/models/Lawn';

const expect = chai.expect;

describe('Lawn', () => {
  let lawn;

  it('lawn should be valid', () => {
    lawn = new Lawn(5, 5);
    expect(lawn.isValid()).to.be.equal(true);
  });

  it('lawn should be not valid', () => {
    lawn = new Lawn(-1, 5);
    expect(lawn.isValid()).to.be.equal(false);
  });

  it('Cell should be bounded', () => {
    lawn = new Lawn(5, 5);
    expect(lawn.isCellBounded(3, 2)).to.be.equal(true);
  });

  it('Cell should be not bounded', () => {
    lawn = new Lawn(5, 5);
    expect(lawn.isCellBounded(5, 6)).to.be.equal(false);
  });
});
