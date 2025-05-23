import { Faction } from '../data/faction';

export default {
  logo: 'generated/token/faction/emperor.jpg',
  sheet: 'generated/sheet/emperor/emperor.pdf',
  shield: 'generated/shield/shield/emperor.jpg',
  spiceCount: 10,
  leaders: [
    'generated/token/leader/emperor/bashar.jpg',
    'generated/token/leader/emperor/burseg.jpg',
    'generated/token/leader/emperor/caid.jpg',
    'generated/token/leader/emperor/captain-aramsham.jpg',
    'generated/token/leader/emperor/hasimir-fenring.jpg',
  ],
  colors: ['Red', 'Orange', 'Brown'],
  alliance: 'generated/card/alliance/emperor.jpg',
  traitors: [
    'generated/card/traitor/emperor/bashar.jpg',
    'generated/card/traitor/emperor/burseg.jpg',
    'generated/card/traitor/emperor/caid.jpg',
    'generated/card/traitor/emperor/captain-aramsham.jpg',
    'generated/card/traitor/emperor/hasimir-fenring.jpg',
  ],
  collections: ['bribe', 'income', 'reserve'],
  decks: {
    left: [
      {
        name: 'Discard',
        cards: [],
        placeholder: 'generated/card/back/traitor.jpg',
      },
    ],
    right: [],
  },
  extras: [],
  troops: [
    {
      front: 'generated/token/troop/emperor.jpg',
      back: 'generated/token/troop/emperor.jpg',
      count: 20,
    },
  ],
} satisfies Faction;
