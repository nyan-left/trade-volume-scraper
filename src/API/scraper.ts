import axios from 'axios';
import * as UserAgent from 'user-agents';
import { getFromOfficialAPI } from '../index';
import { Day, FullItemData } from '../spec';
import arrToSortedUnique from '../util/array';
import { dateToString } from '../util/time';

function getItemUrl(ID: number, item_name: string, proxy = ''): string {
  item_name = item_name.replace(' ', '+');
  return `${proxy}http://services.runescape.com/m=itemdb_oldschool/${item_name}/viewitem?obj=${ID}`;
}

const parseHTML = (html: string): Day[] => {
  const itemsStart = html.split(`trade180 =[['Date','Total']];`)[1];

  const trade30: [Date, number][] = [];
  const trade90: [Date, number][] = [];
  const trade180: [Date, number][] = [];

  const average30: [Date, number, number][] = [];
  const average90: [Date, number, number][] = [];
  const average180: [Date, number, number][] = [];

  const items: string = itemsStart.split(`</script>`)[0];

  eval(items);

  let volume: [Date, number][] = trade30.concat(trade90, trade180);
  let average: [Date, number, number?][] = average30.concat(
    average90,
    average180,
  );

  volume = arrToSortedUnique(volume);
  average = arrToSortedUnique(average);

  const data: Day[] = [];
  for (let i = 0; i < volume.length; i++) {
    data.push({
      tradeVolume: volume[i][1],
      date: volume[i][0],
      dateString: dateToString(new Date(volume[i][0])),
      priceAverage: average[i][2],
      priceDaily: average[i][1],
    });
  }

  return data;
};

const tradeVolume = async (id: number): Promise<FullItemData> => {
  const item = await getFromOfficialAPI(id);
  const url = getItemUrl(item.id, item.name);
  const userAgent = new UserAgent();

  let rawHTML: string;

  // browser will shout at us if we try to set it's user agent.
  if (typeof window === 'undefined') {
    rawHTML = (
      await axios.get(url, { headers: { 'User-Agent': userAgent.toString() } })
    ).data;
  } else {
    // todo : use fetch if available
    rawHTML = (await axios.get(url)).data;
  }

  const tradeVolume = parseHTML(rawHTML);

  return tradeVolume;
};

export default tradeVolume;
