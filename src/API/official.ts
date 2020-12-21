import axios from 'axios';
import { OfficialAPIItem } from '../spec';

const officialAPI = async (
  itemId: number,
  proxy = '',
): Promise<OfficialAPIItem> => {
  const json = await axios.get(
    `${proxy}https://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${itemId}`,
  );

  const item = (json.data.item as unknown) as OfficialAPIItem;

  return item;
};

export default officialAPI;
