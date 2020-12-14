import * as OSRS from '../src/index';

async function test() {
  const itemDetails = await OSRS.getFromOfficialAPI(4151);
  const timeseries = await OSRS.getTradeVolume(4151);

  const div = document.createElement('div');
  div.innerHTML = `
  name : ${itemDetails.name} price: ${
    itemDetails.current.price
  } timeseries[0]: ${JSON.stringify(timeseries[0])}`;

  document.body.appendChild(div);
}

test();
