export type Data = {
    date: Date,
    price: Number,
    tradeVolume: Number
}

interface Item {
    id: number,
    members: boolean,
    properties: Data[]
}
