import axios from 'axios';


function getItemUrl(ID: number, item_name: string): string {
    item_name = item_name.replace(' ', '+');
    return `http://services.runescape.com/m=itemdb_oldschool/${item_name}/viewitem?obj=${ID}`;
}

function request(url: string): void {
    axios.get(url)
        .then(function (response) {
            extract(response.data);
        })
        .catch(function (error) {
            //item probably does not exist
            console.log(error);
        })
}

function test() {
    const url = getItemUrl(556, 'Air rune');
    request(url);
}


function extract(html: string) {
    const isMembers = html.includes('item-description member')

    let itemsStart = html.split(`trade180 =[['Date','Total']];`)[1];
    let trade30: [Date, number][] = [];
    let trade90: [Date, number][] = [];
    let trade180: [Date, number][] = [];
    let average30: [Date, number][] = [];
    let average90: [Date, number][] = [];
    let average180: [Date, number][] = [];

    let items: string = itemsStart.split(`</script>`)[0];

    eval(items);

    let trade: [Date, number][] = trade30.concat(trade90, trade180);
    let average: [Date, number][] = average30.concat(average90, average180);


    trade.sort((a: any, b: any) => a[0] - b[0]);
    average.sort((a: any, b: any) => a[0] - b[0]);

   // saveToCsv(trade);
}

const getItem = (id : number) : any => {
  
};

// const createItemDetailUrl = (itemId) => `http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${itemId}`;
// const createItemGraphUrl = (itemId) => `http://services.runescape.com/m=itemdb_oldschool/api/graph/${itemId}.json`;


export default getItem;
