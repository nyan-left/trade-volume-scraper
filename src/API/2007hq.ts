import axios from 'axios';
import { HQ2007Prices, HQData } from '../spec';
import { getFromOfficialAPI } from '../index';
import { dateToString } from '../util/time';

const hq2007API = async (itemID: number): Promise<HQData[]> => {
  const itemDetails = await getFromOfficialAPI(itemID);
  itemDetails.name.replace('_', '-');
  itemDetails.name.toLowerCase();
  // todo - more edge cases

  const json = await axios.get(
    `https://ge.2007hq.com/item/${itemID}/${itemDetails.name}/graph`,
  );
  const item = (json.data as unknown) as HQ2007Prices;

  const data = [];

  for (let i = 0; i < item.averages.length; i++) {
    data.push({
      date: item.prices[i][0],
      dateString: dateToString(new Date(item.prices[i][0])),
      priceDaily: item.prices[i][1],
      priceAverage: item.averages[i][1],
    });
  }

  return data;
};
export default hq2007API;
