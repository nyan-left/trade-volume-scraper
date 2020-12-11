import axios from 'axios';
import { officialAPI } from './API/official';
import * as UserAgent from 'user-agents';
import { Day, FullItemData } from './spec';
import * as moment from 'moment';
import * as _ from 'lodash';
function getItemUrl(ID: number, item_name: string): string {
  item_name = item_name.replace(' ', '+');
  return `http://services.runescape.com/m=itemdb_oldschool/${item_name}/viewitem?obj=${ID}`;
}

function parseHTML(html: string): Day[] {
  const itemsStart = html.split(`trade180 =[['Date','Total']];`)[1];
  const trade30: [Date, number][] = [];
  const trade90: [Date, number][] = [];
  const trade180: [Date, number][] = [];
  const average30: [Date, number, number][] = [];
  const average90: [Date, number, number][] = [];
  const average180: [Date, number, number][] = [];

  const items: string = itemsStart.split(`</script>`)[0];

  // todo - validate eval
  eval(items);

  let volume: [Date, number][] = trade30.concat(trade90, trade180);
  let average: [Date, number, number][] = average30.concat(
    average90,
    average180,
  );

  volume = _.uniqBy(volume, (v) => {
    return v[0].toString();
  }).sort((a: unknown, b: unknown) => a[0] - b[0]);

  average = _.uniqBy(average, (v) => {
    return v[0].toString();
  }).sort((a: unknown, b: unknown) => a[0] - b[0]);

  const data: Day[] = [];
  for (let i = 0; i < volume.length; i++) {
    data.push({
      tradeVolume: volume[i][1],
      date: volume[i][0],
      dateString: moment(volume[i][0]).format('l'),
      priceAverage: average[i][2],
      priceDaily: average[i][1],
    });
  }

  return data;
}

export const getTradeVolume = async (id: number): Promise<FullItemData> => {
  const item = await officialAPI(id);
  const url = getItemUrl(item.id, item.name);
  const userAgent = new UserAgent();
  const rawHTML = (
    await axios.get(url, { headers: { 'User-Agent': userAgent.toString() } })
  ).data;
  const tradeVolume = parseHTML(rawHTML);

  return tradeVolume;
};
