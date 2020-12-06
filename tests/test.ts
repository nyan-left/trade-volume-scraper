/* eslint-disable jest/no-done-callback */
/* eslint-disable jest/expect-expect */

import * as API from '../src/index';
import * as chai from 'chai';


describe('#Official API', () => {
  it('item 4151 resolves name Abyssal whip', async () => {
    const itemData = await API.getItemDetails(4151);
    chai.expect(itemData.name).to.equal('Abyssal whip');
  })
});


describe('#getTradeVolume API', () => {
  it('resolves trade average data', async () => {
    const tradeData = await API.getTradeVolume(4151);
    chai.expect(tradeData).to.contain.keys(['trade', 'average']);
  })
});
