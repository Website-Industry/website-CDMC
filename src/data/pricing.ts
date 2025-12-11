export interface PricingTier {
  modules: number;
  cyclePrice: number;
}

export const pricingTiers: PricingTier[] = [
  {
    modules: 1,
    cyclePrice: 150,
  },
  {
    modules: 2,
    cyclePrice: 270,
  },
  {
    modules: 3,
    cyclePrice: 360,
  },
  {
    modules: 4,
    cyclePrice: 420,
  },
  {
    modules: 5,
    cyclePrice: 450,
  },
];

export interface PaymentOption {
  id: string;
  label: string;
  description: string;
  installments: number;
  getAmount: (totalPrice: number) => number[];
}

export const paymentOptions: PaymentOption[] = [
  {
    id: 'full',
    label: 'Paiement en une fois',
    description: 'Paiement du cycle complet au début',
    installments: 1,
    getAmount: (total) => [total],
  },
  {
    id: 'two',
    label: 'Paiement en deux fois',
    description: '50% au début, 50% à mi-parcours (mars)',
    installments: 2,
    getAmount: (total) => {
      const half = Math.round(total / 2);
      return [half, total - half];
    },
  },
  {
    id: 'three',
    label: 'Paiement en trois fois',
    description: '33% au début, 33% en février, 34% en avril',
    installments: 3,
    getAmount: (total) => {
      const third = Math.round(total / 3);
      return [third, third, total - (third * 2)];
    },
  },
];

export const pricingInfo = {
  cycleDuration: 6,
  cycleMonths: 'janvier à juin',
  commitment: 'Engagement sur 6 mois',
  sessionDuration: '2h30',
  capacity: '4 à 9 participant·es par module',
  location: 'Dans un grand salon aménagé, à Toulouse',
};

