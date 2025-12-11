export interface PricingTier {
  modules: number;
  monthlyPrice: number;
  cyclePrice: number;
}

export const pricingTiers: PricingTier[] = [
  {
    modules: 1,
    monthlyPrice: 25,
    cyclePrice: 150,
  },
  {
    modules: 2,
    monthlyPrice: 45,
    cyclePrice: 270,
  },
  {
    modules: 3,
    monthlyPrice: 60,
    cyclePrice: 360,
  },
  {
    modules: 4,
    monthlyPrice: 70,
    cyclePrice: 420,
  },
  {
    modules: 5,
    monthlyPrice: 75,
    cyclePrice: 450,
  },
];

export const pricingInfo = {
  cycleDuration: 6,
  cycleMonths: 'janvier à juin',
  paymentMethod: 'Paiement mensuel possible',
  commitment: 'Engagement sur 6 mois',
  sessionDuration: '2h30',
  capacity: '4 à 9 participant·es par module',
  location: 'Dans un grand salon aménagé, à Toulouse',
};

