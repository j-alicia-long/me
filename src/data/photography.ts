export interface Photo {
  date: string;
  location: string;
  caption: string;
  tags: Tag[];
  src: string;
}

type Tag =
  | 'architecture'
  | 'art'
  | 'city'
  | 'nature'
  | 'portrait'
  | 'travel';

export const photos: Photo[] = [
  {
    date: '2020-05-22',
    location: 'Herndon, VA',
    caption: 'My hometown in Virginia',
    tags: ['portrait', 'nature'],
    src: '20200522_192150.jpg',
  },
  {
    date: '2023-09-15',
    location: 'Boston, MA',
    caption: '',
    tags: ['city'],
    src: '20230915_163911.jpg',
  },
  {
    date: '2023-09-15',
    location: 'Boston, MA',
    caption: '',
    tags: ['city'],
    src: '20230915_185757.jpg',
  },
  {
    date: '2023-09-17',
    location: 'Boston, MA',
    caption: '',
    tags: ['architecture', 'city'],
    src: '20230917_063913.jpg',
  },
  {
    date: '2024-02-01',
    location: 'Stone Street, NYC',
    caption: 'One of the most magical streets in the city',
    tags: ['city'],
    src: '20240201_232841782.MP.jpg',
  },
  {
    date: '2024-03-28',
    location: 'Griffith Observatory, LA',
    caption: '',
    tags: ['portrait', 'nature'],
    src: '20240329_021345153~2.jpg',
  },
  {
    date: '2024-04-08',
    location: 'Fifth Avenue, NYC',
    caption: '',
    tags: ['city'],
    src: '20240408_155204693.jpg',
  },
  {
    date: '2025-03-10',
    location: 'World Trade Center, NYC',
    caption: 'Where I work!',
    tags: ['city'],
    src: '20250310_182056.jpg',
  },
  {
    date: '2025-03-16',
    location: 'Shinjuku, Tokyo',
    caption: '',
    tags: ['city'],
    src: '20250316_224538.jpg',
  },
  {
    date: '2025-03-20',
    location: 'Fushimi Inari Shrine, Kyoto',
    caption: '',
    tags: ['architecture', 'portrait', 'travel'],
    src: '20250320_140213.jpg',
  },
  {
    date: '2025-04-09',
    location: 'Financial District, NYC',
    caption: 'My walk to work every day',
    tags: ['city'],
    src: '20250409_132528.jpg',
  },
  {
    date: '2025-04-12',
    location: 'Brooklyn Bridge, NYC',
    caption: 'Rainy night walks on this bridge are magical.',
    tags: ['city'],
    src: '20250412_210826.jpg',
  },
  {
    date: '2025-04-13',
    location: 'Central Park, NYC',
    caption: 'The view from Cherry Hill in the spring',
    tags: ['city', 'nature'],
    src: '20250413_184958.jpg',
  },
  {
    date: '2025-04-19',
    location: 'Charlottesville, VA',
    caption: 'Lovely little winery in rural Virginia where I went to college.',
    tags: ['nature', 'portrait'],
    src: '20250419_171225.jpg',
  },
  {
    date: '2025-04-27',
    location: '7th Ave and Perry St, NYC',
    caption: '',
    tags: ['city', 'architecture'],
    src: '20250427_160340.jpg',
  },
  {
    date: '2025-04-27',
    location: 'Brooklyn Botanic Garden, NYC',
    caption: '',
    tags: ['nature', 'portrait'],
    src: '20250427_175244.jpg',
  },
  {
    date: '2025-05-08',
    location: 'Times Square, NYC',
    caption: 'Somehow I always end up in Times Square.',
    tags: ['city'],
    src: '20250508_194553.jpg',
  },
  {
    date: '2025-05-11',
    location: 'Prospect Park, NYC',
    caption: '',
    tags: ['nature'],
    src: '20250511_154608.jpg',
  },
  {
    date: '2025-05-11',
    location: 'Prospect Park, NYC',
    caption: '',
    tags: ['nature'],
    src: '20250511_161329.jpg',
  },
  {
    date: '2025-05-11',
    location: 'Prospect Park, NYC',
    caption: '',
    tags: ['nature'],
    src: '20250511_162641.jpg',
  },
  {
    date: '2025-05-26',
    location: 'Brooklyn Botanic Garden, NYC',
    caption: '',
    tags: ['nature', 'portrait'],
    src: '20250526_173315.jpg',
  },
  {
    date: '2025-05-26',
    location: 'Brooklyn Botanic Garden, NYC',
    caption: '',
    tags: ['nature', 'portrait'],
    src: '20250526_175537.jpg',
  },
  {
    date: '2025-06-01',
    location: 'City Hall Park, NYC',
    caption: '',
    tags: ['city'],
    src: '20250601_141141.jpg',
  },
  {
    date: '2025-06-22',
    location: 'Harrison St, NYC',
    caption: 'I\'m a sucker for cobblestone streets.',
    tags: ['city'],
    src: '20250622_203341.jpg',
  },
  {
    date: '2025-06-22',
    location: 'Tribeca, NYC',
    caption: '',
    tags: ['city'],
    src: '20250622_203813.jpg',
  },
  {
    date: '2025-07-04',
    location: 'Battery Park City, NYC',
    caption: '',
    tags: ['city'],
    src: '20250704_143851.jpg',
  },
  {
    date: '2025-07-04',
    location: 'Battery Park City, NYC',
    caption: '',
    tags: ['city'],
    src: '20250704_200440.jpg',
  },
  {
    date: '2025-07-04',
    location: 'Battery Park City, NYC',
    caption: '',
    tags: ['city'],
    src: '20250704_204824.jpg',
  },
  {
    date: '2025-08-15',
    location: 'Chinatown, San Francisco, CA',
    caption: '',
    tags: ['city', 'portrait'],
    src: '20250815_182705.jpg',
  },
  {
    date: '2025-08-15',
    location: 'Saints Peter and Paul Church, San Francisco, CA',
    caption: '',
    tags: ['architecture'],
    src: '20250815_184205.jpg',
  },
  {
    date: '2025-10-19',
    location: 'Mamaroneck Reservoir, NY',
    caption: '',
    tags: ['nature'],
    src: '20251019_153557.jpg',
  },
  {
    date: '2025-10-25',
    location: 'Playa del Carmen, Mexico',
    caption: '',
    tags: ['travel', 'city'],
    src: '20251025_134903.jpg',
  },
  {
    date: '2025-11-17',
    location: 'Cotswolds, UK',
    caption: '',
    tags: ['travel', 'nature'],
    src: '20251117_155001.jpg',
  },
  {
    date: '2026-01-01',
    location: 'National Mall, Washington, DC',
    caption: 'My home city! Love the free museums.',
    tags: ['architecture', 'city'],
    src: '20260101_161405.jpg',
  },
  {
    date: '2026-01-01',
    location: 'National Portrait Gallery, Washington, DC',
    caption: 'Where I took my prom pictures!',
    tags: ['architecture'],
    src: '20260101_163831.jpg',
  },
  {
    date: '2026-03-23',
    location: 'My first cursive Chinese Calligraphy piece!',
    caption: '梅子熟时枙子香\nThe past has gone and the future is yet to come.',
    tags: ['art'],
    src: 'IMG_0225.jpeg',
  },
  {
    date: '2026-03-24',
    location: 'Soho, NYC',
    caption: '',
    tags: ['city'],
    src: 'IMG_0228.jpg',
  },
];
