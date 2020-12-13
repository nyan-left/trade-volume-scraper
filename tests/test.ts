import * as API from '../src/index';
import * as chai from 'chai';

describe('#Official API', () => {
  it('item 4151 resolves name Abyssal whip', async () => {
    const itemData = await API.getFromOfficialAPI(API.ITEMS_LIST.Abyssal_whip);
    chai.expect(itemData.name).to.equal('Abyssal whip');
  });
});

describe('#getTradeVolume API', () => {
  it('resolves 180 days of data', async () => {
    const data = await API.getTradeVolume(4151);
    chai.expect(data).to.be.length.greaterThan(178);
  });
});

describe('#getTradeVolume API', () => {
  it('contains the correct keys', async () => {
    const tradeData = await API.getTradeVolume(4151);
    chai
      .expect(tradeData[0])
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
    const tradeData = await API.getFrom2007HQ(4151);
    chai.expect(tradeData).to.have.length;
  });
});
