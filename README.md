<h1 align="center">Old School RuneScape Trade Stats</h1>

> Node library used to extract trade volume data from OldSchool Runescape Grand Exchange

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

<!--te-->

# Usage

## Getting item IDs used for queries

This package comes with an item list which can be used to quickly access item IDs.

```ts
console.log(OSRS.ITEMS_LIST.Abyssal_whip);
```

output:

```
4151
```

## Getting Data

> :warning: **Do not spam requests to the APIs**: The services may time you out!

<i>When running in the browser, this library uses a CORS proxy to fetch data from OldSchool RuneScape website. This has a limitation of 10 requests per second. </i>

### Trade Volume Data (OSRS's grand exchange graphs)

(Not available on the official OSRS API)
This will return the last 180 days of trade data available on the official website.

```ts
const data = await OSRS.getTradeVolume(4151);
console.log(data);
```

Output:

```ts
  // ...
  {
    tradeVolume: 1616,
    date: 2020-09-19T23:00:00.000Z,
    dateString: '9/20/2020',
    priceAverage: 2670124,
    priceDaily: 2659245
  },
  {
    tradeVolume: 3072,
    date: 2020-09-20T23:00:00.000Z,
    dateString: '9/21/2020',
    priceAverage: 2669895,
    priceDaily: 2687489
  },
  {
    tradeVolume: 6565,
    date: 2020-09-21T23:00:00.000Z,
    dateString: '9/22/2020',
    priceAverage: 2669650,
    priceDaily: 2678354
  },
  //... 80 more items
```

### Official OSRS API

Bare bones OSRS API that is publicly available.

```ts
const itemData = await OSRS.getFromOfficialAPI(OSRS.ITEMS_LIST.Abyssal_whip);
console.log(itemData);
```

Output:

```ts
{
  icon: 'https://secure.runescape.com/m=itemdb_oldschool/1607602554160_obj_sprite.gif?id=4151',
  icon_large: 'https://secure.runescape.com/m=itemdb_oldschool/1607602554160_obj_big.gif?id=4151',
  id: 4151,
  type: 'Default',
  typeIcon: 'https://www.runescape.com/img/categories/Default',
  name: 'Abyssal whip',
  description: 'A weapon from the abyss.',
  current: { trend: 'neutral', price: '2.9m' },
  today: { trend: 'negative', price: '- 10.9k' },
  members: 'true',
  day30: { trend: 'positive', change: '+4.0%' },
  day90: { trend: 'positive', change: '+9.0%' },
  day180: { trend: 'positive', change: '+1.0%' }
}
```

### Long term trade data (2007HQ API)

This library does not contain trade volume data older than the last 180 days. It can however, fetch long term daily and average item prices from 2007HQ's API.

```ts
const tradeData = await OSRS.getFrom2007HQ(4151);
console.log(tradeData);
```

Output:

```ts
// ...
  {
    date: 1431820800000,
    dateString: '5/17/2015',
    priceDaily: 2587970,
    priceAverage: 2511047
  },
  {
    date: 1431907200000,
    dateString: '5/18/2015',
    priceDaily: 2590791,
    priceAverage: 2520593
  },// ... 1792 more items
```
