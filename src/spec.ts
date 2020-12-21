export interface OfficialAPIItem {
  icon: string;
  icon_large: string;
  id: number;
  type: string;
  typeIcon: string;
  name: string;
  description: string;
  current: { trend: string; price: string };
  members: boolean;
  day30: { trend: string; change: string };
  day90: { trend: string; change: string };
  day180: { trend: string; change: string };
}

export type Day = {
  date: Date;
  dateString: string;
  tradeVolume: number;
  priceAverage: number;
  priceDaily: number;
};

export type FullItemData = Day[];

export type HQ2007Prices = {
  prices: [Date, number][];
  averages: [Date, number][];
};

export type HQData = {
  date: Date;
  dateString: string;
  priceDaily: number;
  priceAverage: number;
};

export type WikiData = {
  date: Date;
  dateString: string;
  priceDaily: number;
  tradeVolume?: number;
};

export interface osrsBoxResponse {
  id: number;
  name: string;
  incomplete: boolean;
  members: boolean;
  tradeable: boolean;
  tradeable_on_ge: boolean;
  stackable: boolean;
  stacked?: any;
  noted: boolean;
  noteable: boolean;
  linked_id_item?: any;
  linked_id_noted?: any;
  linked_id_placeholder: number;
  placeholder: boolean;
  equipable: boolean;
  equipable_by_player: boolean;
  equipable_weapon: boolean;
  cost: number;
  lowalch: number;
  highalch: number;
  weight: number;
  buy_limit: number;
  quest_item: boolean;
  release_date: string;
  duplicate: boolean;
  examine: string;
  icon: string;
  wiki_name: string;
  wiki_url: string;
  wiki_exchange: string;
  equipment?: any;
  weapon?: any;
}
