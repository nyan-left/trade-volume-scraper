//
import axios from 'axios';
import { osrsBoxResponse } from '../spec';

const osrsBox = async (
  itemId: number,
  proxy = '',
): Promise<osrsBoxResponse> => {
  const json = await axios.get(
    `${proxy}https://www.osrsbox.com/osrsbox-db/items-json/${itemId}.json`,
  );

  const item = (json.data as unknown) as osrsBoxResponse;
  return item;
};

export default osrsBox;
