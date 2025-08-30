export interface Chapter {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  theme: string;
  colorScheme: string;
  description: string;
  keyMoment: string;
  visualTheme: string;
  images: string[];
  quotes: string[];
  stats?: {
    label: string;
    value: string;
  }[];
}

export const chapters: Chapter[] = [
  {
    id: 'little-bee',
    title: 'The Little Bee',
    subtitle: 'Origins in Madeira',
    period: '1985 - 1997',
    theme: 'Raw hunger, poverty as fuel, street artistry',
    colorScheme: 'madeira',
    description: 'In the mountainous streets of Santo António, a young boy called "abelhinha" (little bee) practiced until darkness fell. His tears of frustration would water the seeds of greatness.',
    keyMoment: 'The crying child who practiced until dark, driven by a hunger deeper than poverty',
    visualTheme: 'Warm amber tones, rough textures, intimate scale',
    images: [
      '/images/madeira-streets.jpg',
      '/images/young-cr7-training.jpg',
      '/images/funchal-mountains.jpg'
    ],
    quotes: [
      'I was very small, but I had a big dream',
      'In Madeira, football was everything to me'
    ],
    stats: [
      { label: 'Age when discovered', value: '10' },
      { label: 'Years in Madeira', value: '12' },
      { label: 'First club', value: 'Andorinha' }
    ]
  },
  {
    id: 'leap-of-faith',
    title: 'The Leap of Faith',
    subtitle: 'Journey to Sporting',
    period: '1997 - 2003',
    theme: 'Sacrifice, loneliness, adolescent determination',
    colorScheme: 'sporting',
    description: 'At 12, he left everything familiar behind for a £1,500 dream. The boy who cried from homesickness would emerge as a man forged by solitude.',
    keyMoment: '12-year-old leaving family for £1,500 dream - the ultimate sacrifice for greatness',
    visualTheme: 'Cool institutional tones, growth metaphors',
    images: [
      '/images/sporting-academy.jpg',
      '/images/lisbon-arrival.jpg',
      '/images/young-talent.jpg'
    ],
    quotes: [
      'It was very difficult to leave my family at such a young age',
      'I had to grow up very fast'
    ],
    stats: [
      { label: 'Age at transfer', value: '12' },
      { label: 'Transfer fee', value: '£1,500' },
      { label: 'Goals in youth team', value: '58' }
    ]
  },
  {
    id: 'the-forge',
    title: 'The Forge',
    subtitle: 'Manchester United',
    period: '2003 - 2009',
    theme: 'Transformation under pressure, mentorship, building resilience',
    colorScheme: 'red',
    description: 'Under Ferguson\'s steel gaze, raw talent met unforgiving pressure. The Theatre of Dreams became a crucible where a boy was forged into a champion.',
    keyMoment: 'Ferguson\'s guidance molding raw talent into champion mentality',
    visualTheme: 'Industrial elements, British sophistication, steel and fire',
    images: [
      '/images/ferguson-mentorship.jpg',
      '/images/old-trafford-debut.jpg',
      '/images/champions-league-triumph.jpg'
    ],
    quotes: [
      'Ferguson was like a father to me',
      'I learned what it means to be a champion'
    ],
    stats: [
      { label: 'Goals', value: '118' },
      { label: 'Trophies', value: '9' },
      { label: 'Ballon d\'Or', value: '1' }
    ]
  },
  {
    id: 'galactico',
    title: 'The Galáctico',
    subtitle: 'Real Madrid',
    period: '2009 - 2018',
    theme: 'Perfection pursuit, legacy building, leadership evolution',
    colorScheme: 'madrid',
    description: 'In the cathedral of football, individual brilliance evolved into collective greatness. The pursuit of perfection became an art form painted in white.',
    keyMoment: 'Transforming from individual star to team catalyst - the birth of a leader',
    visualTheme: 'White space luxury, architectural grandeur, golden ratios',
    images: [
      '/images/bernabeu-presentation.jpg',
      '/images/champions-league-celebrations.jpg',
      '/images/madrid-legacy.jpg'
    ],
    quotes: [
      'Real Madrid is the greatest club in the world',
      'I came here to make history'
    ],
    stats: [
      { label: 'Goals', value: '451' },
      { label: 'Champions League', value: '4' },
      { label: 'Ballon d\'Or', value: '4' }
    ]
  },
  {
    id: 'scholar',
    title: 'The Scholar',
    subtitle: 'Juventus',
    period: '2018 - 2021',
    theme: 'Tactical intelligence, adaptation, strategic thinking',
    colorScheme: 'black',
    description: 'In Turin\'s tactical laboratory, age became wisdom. The student of the game became its professor, proving that greatness adapts and evolves.',
    keyMoment: 'Learning new systems at 33, proving versatility conquers time',
    visualTheme: 'Italian sophistication, calculated precision, refined details',
    images: [
      '/images/juventus-debut.jpg',
      '/images/tactical-evolution.jpg',
      '/images/turin-mastery.jpg'
    ],
    quotes: [
      'Football is about intelligence, not just physicality',
      'I came here to learn and to win'
    ],
    stats: [
      { label: 'Goals', value: '101' },
      { label: 'Serie A titles', value: '2' },
      { label: 'Age at arrival', value: '33' }
    ]
  },
  {
    id: 'return',
    title: 'The Return',
    subtitle: 'Manchester United Redux',
    period: '2021 - 2022',
    theme: 'Full circle wisdom, mentorship role, emotional homecoming',
    colorScheme: 'red',
    description: 'The prodigal son returned, not as the boy who left, but as the master who could teach. Home had waited, and greatness had come full circle.',
    keyMoment: 'Prodigal son becomes the teacher - wisdom returning to its source',
    visualTheme: 'Nostalgic callbacks with modern sophistication',
    images: [
      '/images/return-announcement.jpg',
      '/images/old-trafford-homecoming.jpg',
      '/images/mentor-role.jpg'
    ],
    quotes: [
      'Manchester United is my home',
      'I\'m here to help the young players'
    ],
    stats: [
      { label: 'Goals', value: '24' },
      { label: 'Years later', value: '12' },
      { label: 'Age at return', value: '36' }
    ]
  },
  {
    id: 'pioneer',
    title: 'The Pioneer',
    subtitle: 'Al-Nassr & Beyond',
    period: '2023 - Present',
    theme: 'Breaking barriers, cultural bridge-building, redefining greatness',
    colorScheme: 'gold',
    description: 'In the desert kingdom, a new chapter begins. The pioneer who dared to dream beyond boundaries continues to redefine what greatness can become.',
    keyMoment: 'Elevating Saudi football on world stage - greatness without borders',
    visualTheme: 'Desert luxury meets global connectivity',
    images: [
      '/images/al-nassr-signing.jpg',
      '/images/saudi-revolution.jpg',
      '/images/global-ambassador.jpg'
    ],
    quotes: [
      'Football has no borders',
      'I\'m here to make history in a new way'
    ],
    stats: [
      { label: 'Contract value', value: '$200M' },
      { label: 'Global followers', value: '900M+' },
      { label: 'Age at signing', value: '37' }
    ]
  }
];