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

export type FullItemData = {
  API_OSRS: OfficialAPIItem;
  API_2007HQ?: unknown;
  timeseries: Day[];
};

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
