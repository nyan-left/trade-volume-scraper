import axios from 'axios';
import { WikiData } from '../spec';
import { dateToString } from '../util/time';
type wikiItem = [Date, number, number?];
type wikiItems = wikiItem[];

const wikiAPI = async (itemId: number, proxy = ''): Promise<WikiData[]> => {
  const json = await axios.get(
    `${proxy}https://api.weirdgloop.org/exchange/history/osrs/all?compress=true&id=${itemId}`,
  );
  const items = (json.data as unknown)[itemId] as wikiItems;

  return items.map((item) => {
    return {
      date: new Date(item[0]),
      dateString: dateToString(new Date(item[0])),
      priceDaily: item[1],
      tradeVolume: item[2],
    };
  });
};

export default wikiAPI;
