<h1 align="center">Trade Volume Scraper</h1>

> Node web scraper used to extract trade volume data from OldSchool Runescape Grand Exchange

<div align="center">🚀  This package is still early in it's development 🚀</div>

# Importing the library

## Using NPM

```ts
import * as OSRS from 'osrs-trade-stats';
```

## Table Of Contents

<!--ts-->

- [Importing the library](#importing-the-library)
  - [Using NPM](#using-npm)
  - [Table Of Contents](#table-of-contents)
- [Usage](#usage)
  - [Getting item IDs used for queries](#getting-item-ids-used-for-queries)
  - [Getting Data](#getting-data)
    - [Trade Volume Data (OSRS's grand exchange graphs)](#trade-volume-data-osrss-grand-exchange-graphs)
    - [Official OSRS API](#official-osrs-api)
    - [Long term trade data (2007HQ API)](#long-term-trade-data-2007hq-api)

<!-- Added by: deim, at: Fri 11 Dec 2020 00:34:16 GMT -->

<!--te-->

# Usage

## Getting item IDs used for queries

This package comes with an item list which can be used to quickly access item IDs.

```ts
console.log(OSRS.ITEMS_LIST.Abyssal_whip); // 4151
```

## Getting Data

> :warning: **Do not spam requests to the APIs**: The services may time you out!

### Trade Volume Data (OSRS's grand exchange graphs)

(Not available on the official OSRS API)
This will return the last 300 days of trade data available on the official website.

```ts
const data = await OSRS.getTradeVolume(4151);
// data.timeseries[0].priceAverage
// data.timeseries[0].date
// data.timeseries[0].dateString
// data.timeseries[0].priceDaily
// data.timeseries[0].tradeVolume
```

### Official OSRS API

Bare bones OSRS API that is publicly available.

```ts
const itemData = await OSRS.officialAPI(OSRS.ITEMS_LIST.Abyssal_whip);
// {
//   icon: string;
//   icon_large: string;
//   id: number;
//   type: string;
//   typeIcon: string;
//   name: string;
//   description: string;
//   current: { trend: string; price: string };
//   members: boolean;
//   day30: { trend: string; change: string };
//   day90: { trend: string; change: string };
//   day180: { trend: string; change: string };
// }
```

### Long term trade data (2007HQ API)

This library does not contain trade volume data older than the last 300 days. It can however, fetch long term daily and average item prices from 2007HQ's API.

```ts
const tradeData = await OSRS.hq2007API(4151);
// tradeData[0].Date
// tradeData[0].dateString
// tradeData[0].priceDaily
// tradeData[0].priceAverage
```
