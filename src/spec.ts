export type Data = {
    date: Date,
    price: number,
    tradeVolume: number
}

interface Item {
    id: number,
    members: boolean,
    properties: Data[]
}

