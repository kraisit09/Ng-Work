import { expect, assert } from 'chai';

describe('String', () => {
  // test case 1
  it('should substring correctly', () => {
    // ถ้ามีค่าแบบนี้ เข้าเมธอดนี้ จะได้ค่าแบบนี้
    // arrange
    let s = 'Hello';

    // act
    let r = s.substr(3);

    // assert
    // expect(r).to.equal('lo');
    assert.equal(r, 'lo');
  });
});
