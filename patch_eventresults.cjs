const fs = require('fs');
let content = fs.readFileSync('src/components/EventResults.tsx', 'utf8');

const newData = `const RESULTS_DATA = [
  {
    id: 'digimagic-2026',
    eventName: 'DigiMagic',
    category: 'Intra-School: Preparatory Stage',
    genre: 'Creative',
    icon: Brush,
    image: '/digi-magic.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digiposter-2026',
    eventName: 'DigiPoster',
    category: 'Intra-School: Preparatory Stage',
    genre: 'Design',
    icon: ImageIcon,
    image: '/digi-poster.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digislides-2026',
    eventName: 'DigiSlides',
    category: 'Intra-School: Preparatory Stage',
    genre: 'Presentation',
    icon: MonitorPlay,
    image: '/digi-slides.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digitales-2026',
    eventName: 'DigiTales',
    category: 'Intra-School: Middle Stage',
    genre: 'Storytelling',
    icon: Clapperboard,
    image: '/digi-tales.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digiquiz-2026',
    eventName: 'DigiQuiz',
    category: 'Intra-School: Middle Stage',
    genre: 'Knowledge',
    icon: Lightbulb,
    image: '/digi-quiz.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digibuild-2026',
    eventName: 'DigiBuild',
    category: 'Intra-School: Middle Stage',
    genre: 'Technical',
    icon: Bot,
    image: '/digi-build.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digitote-2026',
    eventName: 'DigiTote',
    category: 'Intra-School: Senior Stage',
    genre: 'Design',
    icon: ShoppingBag,
    image: '/digi-tote.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digithon-2026',
    eventName: 'DigiThon',
    category: 'Inter School Events',
    genre: 'Technical',
    icon: Bot,
    image: '/digi-thon.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digiscratch-2026',
    eventName: 'DigiScratch',
    category: 'Inter School Events',
    genre: 'Creative',
    icon: Bot,
    image: '/digi-bug.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digiinterschool-2026',
    eventName: 'DigiInterSchool',
    category: 'Inter School Events',
    genre: 'Technical',
    icon: Eye,
    image: '/digi-arena.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digibattles-2026',
    eventName: 'DigiBattles',
    category: 'Intra-School: Senior Stage',
    genre: 'Gaming',
    icon: Gamepad2,
    image: '/digi-battles.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digimeme-2026',
    eventName: 'DigiMeme',
    category: 'Intra-School: Senior Stage',
    genre: 'Meme',
    icon: ImageIcon,
    image: '/digi-meme.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digicipher-2026',
    eventName: 'DigiCipher',
    category: 'Intra-School: Senior Stage',
    genre: 'Cryptography',
    icon: Bug,
    image: '/digi-cipher.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  }
];

const CATEGORIES = ['All', 'Intra-School: Preparatory Stage', 'Intra-School: Middle Stage', 'Intra-School: Senior Stage', 'Inter School Events'];`;

content = content.replace(/const RESULTS_DATA = \[[\s\S]*?const CATEGORIES = \['All', 'Preparatory Stage', 'Middle Stage', 'Seniors Stage'\];/, newData);
fs.writeFileSync('src/components/EventResults.tsx', content);
