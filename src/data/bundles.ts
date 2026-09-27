export interface Bundle {
  id: string;
  title: string;
  description: string;
  includes: string[];
  price: number;
  currency: string;
  /** Ссылка на оплату во внешнем сервисе — появится в блоке 7 */
  purchaseUrl?: string;
  featured?: boolean;
}

export const bundles: Bundle[] = [
  {
    id: 'start',
    title: 'Начало пути',
    description: 'Мягкое знакомство с медитацией для тех, кто только начинает.',
    includes: ['5 аудиомедитаций', 'Вводная лекция', 'PDF-гид для начинающих'],
    price: 1900,
    currency: 'RUB',
  },
  {
    id: 'calm',
    title: 'Спокойствие',
    description:
      'Практики и разговоры о том, как справляться с тревогой и стрессом.',
    includes: [
      '10 аудиомедитаций',
      '3 записи разговоров',
      'Упражнения на каждый день',
    ],
    price: 3900,
    currency: 'RUB',
    featured: true,
  },
  {
    id: 'full',
    title: 'Полный доступ',
    description: 'Все материалы сайта, включая будущие обновления.',
    includes: [
      'Все медитации',
      'Все записи разговоров',
      'Новые материалы по мере выхода',
    ],
    price: 7900,
    currency: 'RUB',
  },
];
