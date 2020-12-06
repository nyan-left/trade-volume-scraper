import axios from "axios";

interface Item  {
    icon : string,
    icon_large : string,
    id : number,
    type : string,
    typeIcon : string,
    name : string,
    description : string,
    current : { trend : string, price : string },
    members : boolean,
    day30 : { trend : string, change : string},
    day90 : { trend : string, change : string},
    day180 : { trend : string, change : string},
};

const getItemDetails = async(itemId : number) : Promise<Item> => {
    const json = await axios.get(`http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${itemId}`);
    const item = json.data.item as unknown as Item;
    
    return item;
}


export default getItemDetails;