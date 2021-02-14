<h1 align="center">Old School RuneScape Trade Stats</h1>

> Node library which scrapes trade volume from the official grand exchange page, alongside wrapping around common APIs.

# Importing the library

## Using NPM

```ts
import * as OSRS from 'osrs-trade-stats';
```

## Table Of Contents

<!--ts-->

- [Old School RuneScape Trade Stats](#old-school-runescape-trade-stats)
- [Importing the library](#importing-the-library)
  - [Using NPM](#using-npm)
  - [Table Of Contents](#table-of-contents)
- [Usage](#usage)
  - [Getting item IDs used for queries](#getting-item-ids-used-for-queries)
  - [Getting Data](#getting-data)
    - [Trade Volume Data (OSRS's grand exchange graphs)](#trade-volume-data-osrss-grand-exchange-graphs)
    - [Official OSRS API](#official-osrs-api)
    - [2007HQ API](#2007hq-api)
    - [OSRS Wiki API](#osrs-wiki-api)

<!-- Added by: deim, at: Sun Dec 20 05:30:20 GMT 2020 -->

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

### Trade Volume Data (OSRS's grand exchange graphs)

(Not available on the official OSRS API)
This will return trade volume data from the official website.

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

### OSRS Wiki API

Get long term trading data from the wiki.

```ts
const tradeData = await OSRS.getFromWiki(4151);
console.log(tradeData); // tradeVolume undefined as tracking began in 2018
console.log(tradeData[tradeData.length - 10]); // this should have some tradeVolume data
```

Output:

```ts
// ...
  { // Old data
    date: 1430006400000,
    dateString: '04/26/2015',
    priceDaily: 2488963,
    tradeVolume: undefined
  },
  {
    date: 1430092800000,
    dateString: '04/27/2015',
    priceDaily: 2571803,
    tradeVolume: undefined
  }, // ... 1980 more times


{ // More recent data
  date: 1607644800000,
  dateString: '12/11/2020',
  priceDaily: 2908135,
  tradeVolume: 8743
}
```

### osrsbox API

```ts
const tradeData = await OSRS.getFromOsrsBox(4151);
console.log(tradeData);
```

Output:

```ts
{
  id: 4151,
  name: 'Abyssal whip',
  incomplete: false,
  members: true,
  tradeable: true,
  tradeable_on_ge: true,
  stackable: false,
  stacked: null,
  noted: false,
  noteable: true,
  linked_id_item: null,
  linked_id_noted: 4152,
  linked_id_placeholder: 14032,
  placeholder: false,
  equipable: true,
  equipable_by_player: true,
  equipable_weapon: true,
  cost: 120001,
  lowalch: 48000,
  highalch: 72000,
  weight: 0.453,
  buy_limit: 70,
  quest_item: false,
  release_date: '2005-01-26',
  duplicate: false,
  examine: 'A weapon from the abyss.',
  icon: 'iVBORw0KGgoAAAANSUhEUg', // ...
  wiki_name: 'Abyssal whip',
  wiki_url: 'https://oldschool.runescape.wiki/w/Abyssal_whip',
  wiki_exchange: 'https://oldschool.runescape.wiki/w/Exchange:Abyssal_whip',
  equipment: {
    attack_stab: 0,
    attack_slash: 82,
    attack_crush: 0,
    attack_magic: 0,
    attack_ranged: 0,
    defence_stab: 0,
    defence_slash: 0,
    defence_crush: 0,
    defence_magic: 0,
    defence_ranged: 0,
    melee_strength: 82,
    ranged_strength: 0,
    magic_damage: 0,
    prayer: 0,
    slot: 'weapon',
    requirements: { attack: 70 }
  },
  weapon: {
    attack_speed: 4,
    weapon_type: 'whips',
    stances: [ [Object], [Object], [Object] ]
  }
}
```

## CORS

Some of the endpoints may require a cors proxy, such as [cors anywhere](https://github.com/Rob--W/cors-anywhere). To supply this to, simply pass it in as a parameter.

```ts
const tradeData = await API.getTradeVolume(
  4151,
  'https://cors-anywhere.herokuapp.com/',
);
```

This should now work in the browser.
