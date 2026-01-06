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
  comingSoon?: boolean; // Si true, le module est en pause et affiché avec un style atténué
  almostFull?: boolean; // Si true, le module est bientôt complet
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
    almostFull: true,
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
      week: 'Semaine Théorie',
    },
    dates: [
      '20 janvier',
      '17 février',
      '24 mars',
      '21 avril',
      '19 mai',
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
    niveau: 2,
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
      week: 'Semaine Théorie',
    },
    dates: [
      '21 janvier',
      '18 février',
      '25 mars',
      '22 avril',
      '20 mai',
    ],
    capacity: {
      min: 4,
      max: 6,
    },
  },
  {
    id: 'theorie-avancee',
    slug: 'theorie-avancee',
    title: 'Théorie Avancée',
    niveau: 3,
    comingSoon: true,
    shortDescription: 'Creuse un sujet spécifique à chaque cours et explore-le dans tous les sens pour une compréhension approfondie.',
    fullDescription: 'Un module pour celles et ceux qui maîtrisent déjà les concepts intermédiaires et veulent aller plus loin. À chaque séance, on prend un sujet précis et on le détricote dans tous les sens. Une approche de spécialité : un sujet, une séance, une exploration en profondeur.',
    targetAudience: 'Personnes qui ont maîtrisé les concepts du module Intermédiaire (fonctions harmoniques, cadences, accords enrichis de base) et souhaitent approfondir des sujets spécifiques de manière détaillée. Ce module suppose que ces bases sont acquises et maîtrisées.',
    whatYouDo: [
      'Explorer un sujet spécifique par séance en profondeur',
      'Détricoter chaque concept dans tous les sens',
      'Découvrir les modes des gammes mineures (naturelle, harmonique, mélodique)',
      'Explorer le triton et toutes ses utilisations possibles',
      'Varier les approches d\'un même concept (6 façons de faire un II-V-I)',
    ],
    highlights: [
      'Approche de spécialité : un sujet, une séance',
      'Exploration approfondie plutôt que survol',
      'Compréhension complète de chaque concept',
      'Groupe de 4 à 6 personnes maximum',
    ],
    schedule: {
      day: 'Jeudi',
      week: 'Semaine Théorie',
    },
    dates: [
      '22 janvier',
      '19 février',
      '26 mars',
      '23 avril',
      '21 mai',
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
      day: 'Mercredi',
      week: 'Semaine Pratique',
    },
    dates: [
      '28 janvier',
      '25 février',
      '1 avril',
      '29 avril',
      '27 mai',
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
      week: 'Semaine Pratique',
    },
    dates: [
      '27 janvier',
      '24 février',
      '31 mars',
      '28 avril',
      '26 mai',
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
    comingSoon: true,
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
      week: 'Semaine Pratique',
    },
    dates: [
      '29 janvier',
      '26 février',
      '2 avril (cours de mars)',
      '30 avril',
      '28 mai',
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

