export interface Module {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  targetAudience: string;
  whatYouDo: string[];
  highlights: string[];
  schedule: {
    day: string;
    week: string;
  };
  dates: string[];
  niveau: 1 | 2 | 3; // 1 = débutant/sans prérequis, 2 = intermédiaire, 3 = prérequis nécessaires
  capacity: {
    min: number;
    max: number;
  };
}

export function formatCapacity(capacity: { min: number; max: number }): string {
  if (capacity.min === capacity.max) {
    return `${capacity.max} participant·es`;
  }
  return `${capacity.min} à ${capacity.max} participant·es`;
}

export const modules: Module[] = [
  {
    id: 'theorie-debutant',
    slug: 'theorie-debutant',
    title: 'Théorie Débutant',
    niveau: 1,
    shortDescription: 'Découvre les bases de la musique de manière décomplexée et pratique.',
    fullDescription: 'Un module pour découvrir les fondamentaux de la musique sans pression. On explore les notes, les intervalles, les accords de base, le tout en jouant, en écoutant et en discutant. Pas de récitation par cœur, juste de la compréhension et du plaisir.',
    targetAudience: 'Débutant·es absolu·es ou personnes qui veulent reprendre les bases. Aucun prérequis nécessaire.',
    whatYouDo: [
      'Découvrir les notes et leur organisation',
      'Comprendre les intervalles de manière intuitive',
      'Explorer les accords de base (majeurs, mineurs)',
      'Jouer et écouter pour ancrer les concepts',
      'Discuter et poser toutes tes questions sans jugement',
    ],
    highlights: [
      'Approche pratique et sensorielle',
      'Pas de solfège rébarbatif',
      'Ambiance décontractée et bienveillante',
      'Groupe de 4 à 9 personnes maximum',
    ],
    schedule: {
      day: 'Mardi',
      week: 'Semaine 3',
    },
    dates: [
      '20 janvier',
      '17 février',
      '24 mars',
      '21 avril',
      '19 mai',
      '23 juin',
    ],
    capacity: {
      min: 4,
      max: 9,
    },
  },
  {
    id: 'theorie-intermediaire',
    slug: 'theorie-intermediaire',
    title: 'Théorie Intermédiaire',
    niveau: 3,
    shortDescription: 'Approfondis ta compréhension musicale et développe ton autonomie.',
    fullDescription: 'Pour celles et ceux qui maîtrisent déjà les bases et veulent aller plus loin. On explore les modes, les fonctions harmoniques, les cadences, les substitutions. Toujours avec une approche pratique et une pédagogie adaptée au groupe.',
    targetAudience: 'Personnes qui connaissent déjà les bases (notes, intervalles, accords majeurs/mineurs) et veulent approfondir.',
    whatYouDo: [
      'Explorer les modes et leurs couleurs',
      'Comprendre les fonctions harmoniques',
      'Découvrir les cadences et leurs usages',
      'Expérimenter les substitutions d\'accords',
      'Analyser des morceaux pour comprendre leur structure',
    ],
    highlights: [
      'Approfondissement progressif et adapté',
      'Analyse de morceaux concrets',
      'Outils pour composer et improviser',
      'Groupe de 4 à 9 personnes maximum',
    ],
    schedule: {
      day: 'Mercredi',
      week: 'Semaine 3',
    },
    dates: [
      '21 janvier',
      '18 février',
      '25 mars',
      '22 avril',
      '20 mai',
      '24 juin',
    ],
    capacity: {
      min: 4,
      max: 6,
    },
  },
  {
    id: 'mao',
    slug: 'mao',
    title: 'MAO (Musique Assistée par Ordinateur)',
    niveau: 1,
    shortDescription: 'Crée ta musique avec les outils modernes, de manière accessible et créative.',
    fullDescription: 'Un module pour découvrir la création musicale avec un ordinateur. On explore les DAW (Logic, Ableton, Reaper...), les plugins, la composition, l\'arrangement, le mixage de base. L\'objectif : te donner les clés pour créer ta musique, même si tu débutes.',
    targetAudience: 'Débutant·es ou intermédiaires en MAO. Pas besoin d\'être un·e pro, juste avoir envie de créer.',
    whatYouDo: [
      'Découvrir les DAW et leur fonctionnement',
      'Composer tes premières pistes',
      'Explorer les plugins et effets',
      'Apprendre les bases du mixage',
      'Partager tes créations et recevoir des retours bienveillants',
    ],
    highlights: [
      'Approche pratique et créative',
      'Pas de jargon technique inutile',
      'Outils accessibles et modernes',
      'Groupe de 4 à 9 personnes maximum',
    ],
    schedule: {
      day: 'Jeudi',
      week: 'Semaine 3',
    },
    dates: [
      '22 janvier',
      '19 février',
      '26 mars',
      '23 avril',
      '21 mai',
      '25 juin',
    ],
    capacity: {
      min: 2,
      max: 4,
    },
  },
  {
    id: 'piano',
    slug: 'piano',
    title: 'Piano',
    niveau: 1,
    shortDescription: 'Apprends le piano dans une ambiance chill, avec une pédagogie moderne.',
    fullDescription: 'Un module pour découvrir ou progresser au piano. On travaille la technique de base, la lecture (sans pression), l\'accompagnement, l\'improvisation. Toujours en lien avec la théorie, mais de manière pratique et sensorielle.',
    targetAudience: 'Débutant·es ou personnes qui ont quelques bases et veulent progresser. Pas besoin d\'apporter de matériel, piano et synthé disponibles sur place.',
    whatYouDo: [
      'Développer ta technique de base',
      'Explorer l\'accompagnement et les accords',
      'Improviser et créer tes propres mélodies',
      'Jouer ensemble et partager des moments musicaux',
      'Pratiquer en rotation sur les instruments disponibles',
    ],
    highlights: [
      'Pédagogie adaptée à chacun·e',
      'Pas de pression sur la performance',
      'Lien constant avec la théorie',
      'Groupe de 4 à 9 personnes maximum',
    ],
    schedule: {
      day: 'Mardi',
      week: 'Semaine 4',
    },
    dates: [
      '27 janvier',
      '24 février',
      '31 mars',
      '28 avril',
      '26 mai',
      '30 juin',
    ],
    capacity: {
      min: 2,
      max: 4,
    },
  },
  {
    id: 'rythmique',
    slug: 'rythmique',
    title: 'Rythmique',
    niveau: 1,
    shortDescription: 'Développe ton sens du rythme de manière ludique et efficace.',
    fullDescription: 'Un module pour travailler le rythme, la pulsation, les patterns. On utilise le corps, la voix, des instruments de percussion, des outils visuels. L\'objectif : développer ton feeling rythmique de manière naturelle et agréable.',
    targetAudience: 'Tous niveaux. Que tu aies des difficultés avec le rythme ou que tu veuilles approfondir, ce module est fait pour toi.',
    whatYouDo: [
      'Développer ta pulsation interne',
      'Explorer les patterns rythmiques de base',
      'Travailler avec le corps et la voix',
      'Jouer ensemble sur des rythmes variés',
      'Comprendre les signatures rythmiques sans stress',
    ],
    highlights: [
      'Approche corporelle et sensorielle',
      'Pas de métronome oppressant',
      'Ambiance ludique et bienveillante',
      'Groupe de 4 à 9 personnes maximum',
    ],
    schedule: {
      day: 'Jeudi',
      week: 'Semaine 4',
    },
    dates: [
      '29 janvier',
      '26 février',
      '2 avril (cours de mars)',
      '30 avril',
      '28 mai',
      '2 juillet (cours de juin)',
    ],
    capacity: {
      min: 4,
      max: 9,
    },
  },
];

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

