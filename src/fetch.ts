import axios from 'axios';
import {getItemDetails} from './officialAPI/getItemDetails';
import * as UserAgent from 'user-agents';

function getItemUrl(ID: number, item_name: string): string {
    item_name = item_name.replace(' ', '+');
    return `http://services.runescape.com/m=itemdb_oldschool/${item_name}/viewitem?obj=${ID}`;
}

function parseHTML(html: string) : { trade : any, average : any}{
    const isMembers = html.includes('item-description member')

    const itemsStart = html.split(`trade180 =[['Date','Total']];`)[1];
    const trade30: [Date, number][] = [];
    const trade90: [Date, number][] = [];
    const trade180: [Date, number][] = [];
    const average30: [Date, number][] = [];
    const average90: [Date, number][] = [];
    const average180: [Date, number][] = [];

    const items: string = itemsStart.split(`</script>`)[0];

    eval(items);

    const trade: [Date, number][] = trade30.concat(trade90, trade180);
    const average: [Date, number][] = average30.concat(average90, average180);

    trade.sort((a: any, b: any) => a[0] - b[0]);
    average.sort((a: any, b: any) => a[0] - b[0]);

    return {
        trade,
        average
    }

}


export const getTradeVolume = async (id : number) : Promise<{trade : any, average : any}> =>{
    const item = await getItemDetails(id);
    const url = getItemUrl(item.id, item.name);
    const userAgent = new UserAgent();
    const rawHTML = (await axios.get(url, { headers: {"User-Agent" : userAgent.toString()}})).data;
    const tradeVolume = parseHTML(rawHTML);
    return tradeVolume;
};

// const createItemDetailUrl = (itemId) => `http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${itemId}`;
// const createItemGraphUrl = (itemId) => `http://services.runescape.com/m=itemdb_oldschool/api/graph/${itemId}.json`;


