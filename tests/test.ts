/* eslint-disable jest/no-done-callback */
/* eslint-disable jest/expect-expect */
import * as assert from 'assert';
import * as API from '../src/index';
import * as chai from 'chai';


describe('#getTradeVolume API', () => {
  it('resolves trade average data', async () => {
    const t = await API.getTradeVolume(4151);
    chai.expect(t).to.contain.keys(['trade', 'average']);
  })
})

