import * as API from '../src/index';
import * as chai from 'chai';

describe('#Official API', () => {
  it('item 4151 resolves name Abyssal whip', async () => {
    const itemData = await API.officialAPI(API.ITEMS_LIST.Abyssal_whip);
    chai.expect(itemData.name).to.equal('Abyssal whip');
  });
});

describe('#getTradeVolume API', () => {
  it('resolves 300 days of data', async () => {
    const data = await API.getTradeVolume(4151);
    chai.expect(data.timeseries).to.be.length.above(290);
  });
});

describe('#getTradeVolume API', () => {
  it('contains the correct keys', async () => {
    const tradeData = await API.getTradeVolume(4151);

    chai // todo - this should be dynamic
      .expect(tradeData.timeseries[0])
      .to.contain.keys(
        'tradeVolume',
        'priceDaily',
        'priceAverage',
        'dateString',
        'date',
      );
  });
});

describe('#2007hq API', () => {
  it('resolves', async () => {
    const tradeData = await API.hq2007API(4151);
    chai.expect(tradeData).to.have.length;
  });
});
