//
import axios from 'axios';
import { osrsBoxResponse } from '../spec';
import proxyURL from './proxy';

const osrsBox = async (itemId: number): Promise<osrsBoxResponse> => {
  const json = await axios.get(
    `${proxyURL}https://www.osrsbox.com/osrsbox-db/items-json/${itemId}.json`,
  );

  const item = (json.data as unknown) as osrsBoxResponse;
  return item;
};

export default osrsBox;
