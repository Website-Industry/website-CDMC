export interface PricingTier {
  modules: number;
  cyclePrice: number;
}

export const pricingTiers: PricingTier[] = [
  {
    modules: 1,
    cyclePrice: 125, // 25€/mois × 5 mois
  },
  {
    modules: 2,
    cyclePrice: 225, // 45€/mois × 5 mois
  },
  {
    modules: 3,
    cyclePrice: 300, // 60€/mois × 5 mois
  },
  {
    modules: 4,
    cyclePrice: 350, // 70€/mois × 5 mois
  },
  {
    modules: 5,
    cyclePrice: 375, // 75€/mois × 5 mois
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
    description: '50% en janvier, 50% en mars',
    installments: 2,
    getAmount: (total) => {
      const half = Math.round(total / 2);
      return [half, total - half];
    },
  },
  {
    id: 'three',
    label: 'Paiement en trois fois',
    description: '33% en janvier, 33% en mars, 34% en mai',
    installments: 3,
    getAmount: (total) => {
      const third = Math.round(total / 3);
      return [third, third, total - (third * 2)];
    },
  },
];

export const pricingInfo = {
  cycleDuration: 5,
  cycleMonths: 'janvier à mai',
  commitment: 'Engagement sur 5 mois',
  sessionDuration: '2h30',
  capacity: '4 à 9 participant·es par module',
  location: 'Dans un grand salon aménagé, à Toulouse',
};

