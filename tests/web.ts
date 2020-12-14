import * as OSRS from '../src/index';

async function test() {
  const item = await OSRS.getFromOfficialAPI(4151);
  console.log(item);
}

test();
