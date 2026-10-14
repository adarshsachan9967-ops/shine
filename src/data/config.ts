export interface MemoryItem {
  id: string;
  src: string;
  caption: string;
  date: string;
  alt: string;
  category: "moments" | "places" | "smiles" | "favorites";
  rotation?: number;
}

export interface StoryItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  message: string;
  image: string;
  icon: string;
}

export interface LoveCardItem {
  id: string;
  title: string;
  shortQuote: string;
  expandedMessage: string;
  tag: string;
  icon: string;
  image: string;
}

export interface BollywoodSongItem {
  id: string;
  title: string;
  artist: string;
  movieOrAlbum: string;
  youtubeId: string;
  cover: string;
  duration: string;
  tag: string;
}

export interface DateNightMovieItem {
  id: string;
  title: string;
  year: string;
  genre: string;
  tagline: string;
  note: string;
  emoji: string;
}

export interface HangingPhotoItem {
  id: string;
  image: string;
  word: string;
  rotation: number;
  stringLength: number;
}

export interface ShayariItem {
  id: string;
  hindi: string;
  translation: string;
  mood: string;
  photo: string;
}

export interface InteractiveHeartStep {
  text: string;
  subtext: string;
  photo: string;
  word: string;
}

export interface StarWish {
  id: string;
  x: number;
  y: number;
  size: number;
  wish: string;
  glowColor: string;
}

export interface VideoReelItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  url: string;
  poster: string;
}

export interface ScrapbookPhoto {
  id: string;
  src: string;
  caption: string;
  tapeColor: string;
  rotation: number;
  alt: string;
}

export interface WallPhoto {
  id: string;
  src: string;
  caption: string;
  subcaption: string;
  depthZ: number;
  initialX: number;
  initialY: number;
  rotZ: number;
}

export const SITE_CONFIG = {
  NAME: "Kajal",
  MEGHNA_NAME: "Kajal", // backwards compatibility
  HERO_HANDWRITTEN: "Happy Birthday, Dearest Kajal… 🎂✨",
  HERO_TITLE: "The entire universe celebrates",
  HERO_TITLE_HIGHLIGHT: "the sweetest birthday girl, Kajal. 💖🌸",
  HERO_SUBTITLE: "Because someone as pure, radiant, and gentle as you deserves more than just a simple message.",
  HERO_SECONDARY: "You deserve an entire world crafted with love, celebrating the gift of your presence in my life. 🎂",
  HERO_CTA: "Unwrap Your Birthday Gift ↓",

  // Special Birthday / Memory Counter
  DAYS_COUNT: 823,
  TIMER_HEADING: "Celebrating Every Precious Moment…",
  TIMER_SUBTITLE: "Every laugh, every sweet glance, and every unforgettable memory with the most gorgeous birthday girl, Kajal. 🎂💖",

  // Hanging photos in hero
  HANGING_PHOTOS: [
    {
      id: "hp-1",
      image: "/images/kajal/photos/kajal-01.jpg",
      word: "Birthday Queen 👑",
      rotation: -3,
      stringLength: 70,
    },
    {
      id: "hp-2",
      image: "/images/kajal/photos/kajal-02.jpg",
      word: "Soulful Eyes ✨",
      rotation: 2.5,
      stringLength: 95,
    },
    {
      id: "hp-3",
      image: "/images/kajal/photos/kajal-03.jpg",
      word: "Angelic Radiance 💖",
      rotation: -2,
      stringLength: 60,
    },
    {
      id: "hp-4",
      image: "/images/kajal/photos/kajal-04.jpg",
      word: "Sweetest Smile 🌸",
      rotation: 3,
      stringLength: 90,
    },
    {
      id: "hp-5",
      image: "/images/kajal/photos/kajal-05.jpg",
      word: "Purest Soul ❤️",
      rotation: -2.5,
      stringLength: 75,
    },
  ] as HangingPhotoItem[],

  // A Little Birthday Message Section
  LOVE_MESSAGE: {
    badge: "A SPECIAL BIRTHDAY MESSAGE FOR KAJAL 🎂💖",
    heading: "Kajal, this universe was created for your birthday.",
    body: "There are people who make ordinary days feel like timeless poetry. People whose name alone brings a smile to your face without warning. Kajal, just like the meaning of your name, you bring depth, allure, and gentle magic to everything around you. Your laughter has a melody of its own, your eyes hold an entire universe of kindness, and your sweet warmth makes life feel so safe and beautiful. On your birthday, this little corner of the internet is a gift crafted just for you—a celebration of your smile, your grace, and every sweet memory we share.",
    signature: "— made with all my love on your birthday, Yash 🎂❤️",
  },

  // Our Little Story timeline
  STORY_ITEMS: [
    {
      id: "story-1",
      title: "When Our Paths Crossed",
      subtitle: "The moment light walked into my life",
      date: "Chapter I",
      message: "And somehow, you became the most precious part of my life. What started as simple conversations blossomed into the sweetest blessing I look forward to every single day.",
      image: "/images/kajal/photos/kajal-06.jpg",
      icon: "Sparkles",
    },
    {
      id: "story-2",
      title: "That Unstoppable Sweet Smile",
      subtitle: "Endless laughter, cute talks & pure cheer",
      date: "Chapter II",
      message: "The little conversations that stretched late into the night. That genuine, joyful laugh and sweet playful banter that makes everything feel so soft and bright.",
      image: "/images/kajal/photos/kajal-07.jpg",
      icon: "Heart",
    },
    {
      id: "story-3",
      title: "Soulful Grace & Kajal's Magic",
      subtitle: "Timeless elegance and unforgettable glances",
      date: "Chapter III",
      message: "The moments that deserve to be paused in time. Every shared thought, every gentle look, and that quiet depth in your eyes that needs no words at all.",
      image: "/images/kajal/photos/kajal-08.jpg",
      icon: "Camera",
    },
    {
      id: "story-4",
      title: "Happy Birthday & Our Forever",
      subtitle: "Celebrating you today and every sunrise to come",
      date: "Today & Always",
      message: "Writing our sweetest chapters together… and with every new sunrise, you give me a hundred more reasons to smile, Kajal. Happy Birthday! 🎂✨",
      image: "/images/kajal/photos/kajal-09.jpg",
      icon: "Infinity",
    },
  ] as StoryItem[],

  // All 64 Real Photos of Kajal
  MEMORIES: [
    {
        "id": "kajal-mem-1",
        "src": "/images/kajal/photos/kajal-01.jpg",
        "caption": "Birthday Girl glowing in radiant elegance 🎂✨",
        "date": "Birthday Glow",
        "alt": "Kajal - Birthday Girl glowing in radiant elegance 🎂✨",
        "category": "favorites",
        "rotation": -1.5
    },
    {
        "id": "kajal-mem-2",
        "src": "/images/kajal/photos/kajal-02.jpg",
        "caption": "Those enchanting eyes that hold a thousand stories 🌸",
        "date": "Soulful Eyes",
        "alt": "Kajal - Those enchanting eyes that hold a thousand stories 🌸",
        "category": "smiles",
        "rotation": 2.5
    },
    {
        "id": "kajal-mem-3",
        "src": "/images/kajal/photos/kajal-03.jpg",
        "caption": "A smile so pure it lights up every corner of my heart 💖",
        "date": "Pure Blossom",
        "alt": "Kajal - A smile so pure it lights up every corner of my heart 💖",
        "category": "moments",
        "rotation": -3.5
    },
    {
        "id": "kajal-mem-4",
        "src": "/images/kajal/photos/kajal-04.jpg",
        "caption": "Effortlessly graceful in every candid frame 👑",
        "date": "Angelic Grace",
        "alt": "Kajal - Effortlessly graceful in every candid frame 👑",
        "category": "places",
        "rotation": 1.5
    },
    {
        "id": "kajal-mem-5",
        "src": "/images/kajal/photos/kajal-05.jpg",
        "caption": "Cute playful expressions that make life sweetest 🥰",
        "date": "Sweet Candor",
        "alt": "Kajal - Cute playful expressions that make life sweetest 🥰",
        "category": "favorites",
        "rotation": -2.5
    },
    {
        "id": "kajal-mem-6",
        "src": "/images/kajal/photos/kajal-06.jpg",
        "caption": "Golden hour perfection and tranquil charm ☀️",
        "date": "Golden Hour",
        "alt": "Kajal - Golden hour perfection and tranquil charm ☀️",
        "category": "smiles",
        "rotation": 3.5
    },
    {
        "id": "kajal-mem-7",
        "src": "/images/kajal/photos/kajal-07.jpg",
        "caption": "Sweetest laughter echoing like timeless melody 🎶",
        "date": "Happy Heart",
        "alt": "Kajal - Sweetest laughter echoing like timeless melody 🎶",
        "category": "moments",
        "rotation": -1.5
    },
    {
        "id": "kajal-mem-8",
        "src": "/images/kajal/photos/kajal-08.jpg",
        "caption": "Pure innocence, gentle warmth, and timeless grace 🕊️",
        "date": "Timeless Beauty",
        "alt": "Kajal - Pure innocence, gentle warmth, and timeless grace 🕊️",
        "category": "places",
        "rotation": 2.5
    },
    {
        "id": "kajal-mem-9",
        "src": "/images/kajal/photos/kajal-09.jpg",
        "caption": "The prettiest face, the kindest soul 🌺",
        "date": "Dreamscape",
        "alt": "Kajal - The prettiest face, the kindest soul 🌺",
        "category": "favorites",
        "rotation": -3.5
    },
    {
        "id": "kajal-mem-10",
        "src": "/images/kajal/photos/kajal-10.jpg",
        "caption": "Stealing hearts with that gentle side glance 💫",
        "date": "Effortless",
        "alt": "Kajal - Stealing hearts with that gentle side glance 💫",
        "category": "smiles",
        "rotation": 1.5
    },
    {
        "id": "kajal-mem-11",
        "src": "/images/kajal/photos/kajal-11.jpg",
        "caption": "Dressed in elegance, shining brighter than the stars ✨",
        "date": "Sweet Flutter",
        "alt": "Kajal - Dressed in elegance, shining brighter than the stars ✨",
        "category": "moments",
        "rotation": -2.5
    },
    {
        "id": "kajal-mem-12",
        "src": "/images/kajal/photos/kajal-12.jpg",
        "caption": "Spontaneous happiness captured in timeless stillness 📸",
        "date": "Breeze & Joy",
        "alt": "Kajal - Spontaneous happiness captured in timeless stillness 📸",
        "category": "places",
        "rotation": 3.5
    },
    {
        "id": "kajal-mem-13",
        "src": "/images/kajal/photos/kajal-13.jpg",
        "caption": "A look that makes the heart skip a beat every time ❤️",
        "date": "Warm Memories",
        "alt": "Kajal - A look that makes the heart skip a beat every time ❤️",
        "category": "favorites",
        "rotation": -1.5
    },
    {
        "id": "kajal-mem-14",
        "src": "/images/kajal/photos/kajal-14.jpg",
        "caption": "Sweet afternoon coffee vibes and deep conversations ☕",
        "date": "Pure Charm",
        "alt": "Kajal - Sweet afternoon coffee vibes and deep conversations ☕",
        "category": "smiles",
        "rotation": 2.5
    },
    {
        "id": "kajal-mem-15",
        "src": "/images/kajal/photos/kajal-15.jpg",
        "caption": "Unmatched charm, glowing from the inside out 🌟",
        "date": "Sunlit Soul",
        "alt": "Kajal - Unmatched charm, glowing from the inside out 🌟",
        "category": "moments",
        "rotation": -3.5
    },
    {
        "id": "kajal-mem-16",
        "src": "/images/kajal/photos/kajal-16.jpeg",
        "caption": "Her laughter is the remedy for any stressful day 🍬",
        "date": "Keepsake",
        "alt": "Kajal - Her laughter is the remedy for any stressful day 🍬",
        "category": "places",
        "rotation": 1.5
    },
    {
        "id": "kajal-mem-17",
        "src": "/images/kajal/photos/kajal-17.jpeg",
        "caption": "Traditional grace, looking like a dream come true 👑",
        "date": "Floral Glow",
        "alt": "Kajal - Traditional grace, looking like a dream come true 👑",
        "category": "favorites",
        "rotation": -2.5
    },
    {
        "id": "kajal-mem-18",
        "src": "/images/kajal/photos/kajal-18.jpeg",
        "caption": "Modern chic vibes, always carrying herself so effortlessly 😎",
        "date": "Serenity",
        "alt": "Kajal - Modern chic vibes, always carrying herself so effortlessly 😎",
        "category": "smiles",
        "rotation": 3.5
    },
    {
        "id": "kajal-mem-19",
        "src": "/images/kajal/photos/kajal-19.jpeg",
        "caption": "Cute pout, cheerful mood, and pure festive vibes 🎈",
        "date": "Playful Mood",
        "alt": "Kajal - Cute pout, cheerful mood, and pure festive vibes 🎈",
        "category": "moments",
        "rotation": -1.5
    },
    {
        "id": "kajal-mem-20",
        "src": "/images/kajal/photos/kajal-20.jpeg",
        "caption": "An unforgettable moment that belongs in a museum 🖼️",
        "date": "Tranquil Soul",
        "alt": "Kajal - An unforgettable moment that belongs in a museum 🖼️",
        "category": "places",
        "rotation": 2.5
    },
    {
        "id": "kajal-mem-21",
        "src": "/images/kajal/photos/kajal-21.jpeg",
        "caption": "Eyes deep like the meaning of Kajal itself 🌙",
        "date": "Adorable",
        "alt": "Kajal - Eyes deep like the meaning of Kajal itself 🌙",
        "category": "favorites",
        "rotation": -3.5
    },
    {
        "id": "kajal-mem-22",
        "src": "/images/kajal/photos/kajal-22.jpeg",
        "caption": "Soft smiles that bring quiet peace to the soul ☁️",
        "date": "Kajal Aura",
        "alt": "Kajal - Soft smiles that bring quiet peace to the soul ☁️",
        "category": "smiles",
        "rotation": 1.5
    },
    {
        "id": "kajal-mem-23",
        "src": "/images/kajal/photos/kajal-23.jpeg",
        "caption": "Sunlit hair and the fresh breeze of happiness 🍃",
        "date": "Open Skies",
        "alt": "Kajal - Sunlit hair and the fresh breeze of happiness 🍃",
        "category": "moments",
        "rotation": -2.5
    },
    {
        "id": "kajal-mem-24",
        "src": "/images/kajal/photos/kajal-24.jpeg",
        "caption": "Sweetest memories woven together with love 💌",
        "date": "Poetic Eyes",
        "alt": "Kajal - Sweetest memories woven together with love 💌",
        "category": "places",
        "rotation": 3.5
    },
    {
        "id": "kajal-mem-25",
        "src": "/images/kajal/photos/kajal-25.jpeg",
        "caption": "Captivating aura that needs no words to describe 💫",
        "date": "Starry Night",
        "alt": "Kajal - Captivating aura that needs no words to describe 💫",
        "category": "favorites",
        "rotation": -1.5
    },
    {
        "id": "kajal-mem-26",
        "src": "/images/kajal/photos/kajal-26.jpeg",
        "caption": "Carefree joy, feeling alive and celebrating life 🌻",
        "date": "Sunshine Day",
        "alt": "Kajal - Carefree joy, feeling alive and celebrating life 🌻",
        "category": "smiles",
        "rotation": 2.5
    },
    {
        "id": "kajal-mem-27",
        "src": "/images/kajal/photos/kajal-27.jpeg",
        "caption": "A candid laugh that is 100% genuine and adorable 🥰",
        "date": "Soft Hug",
        "alt": "Kajal - A candid laugh that is 100% genuine and adorable 🥰",
        "category": "moments",
        "rotation": -3.5
    },
    {
        "id": "kajal-mem-28",
        "src": "/images/kajal/photos/kajal-28.jpeg",
        "caption": "Dazzling in beauty, queen of every frame 👑",
        "date": "Queen Energy",
        "alt": "Kajal - Dazzling in beauty, queen of every frame 👑",
        "category": "places",
        "rotation": 1.5
    },
    {
        "id": "kajal-mem-29",
        "src": "/images/kajal/photos/kajal-29.jpeg",
        "caption": "Warm hug for the soul, sweetest presence around 🧸",
        "date": "Magic Moment",
        "alt": "Kajal - Warm hug for the soul, sweetest presence around 🧸",
        "category": "favorites",
        "rotation": -2.5
    },
    {
        "id": "kajal-mem-30",
        "src": "/images/kajal/photos/kajal-30.jpeg",
        "caption": "Every picture tells why she is so deeply loved ❤️",
        "date": "Twilight",
        "alt": "Kajal - Every picture tells why she is so deeply loved ❤️",
        "category": "smiles",
        "rotation": 3.5
    },
    {
        "id": "kajal-mem-31",
        "src": "/images/kajal/photos/kajal-31.jpeg",
        "caption": "That spark in her eyes that brightens my day 🌟",
        "date": "Timeless Charm",
        "alt": "Kajal - That spark in her eyes that brightens my day 🌟",
        "category": "moments",
        "rotation": -1.5
    },
    {
        "id": "kajal-mem-32",
        "src": "/images/kajal/photos/kajal-32.jpeg",
        "caption": "Purest radiance on her special birthday year 🎂",
        "date": "Sparkle",
        "alt": "Kajal - Purest radiance on her special birthday year 🎂",
        "category": "places",
        "rotation": 2.5
    },
    {
        "id": "kajal-mem-33",
        "src": "/images/kajal/photos/kajal-33.jpeg",
        "caption": "Graceful gestures and natural elegance 🕊️",
        "date": "Sweet Wonder",
        "alt": "Kajal - Graceful gestures and natural elegance 🕊️",
        "category": "favorites",
        "rotation": -3.5
    },
    {
        "id": "kajal-mem-34",
        "src": "/images/kajal/photos/kajal-34.jpeg",
        "caption": "A gentle soul with an infectious sense of fun 🌸",
        "date": "Everlasting",
        "alt": "Kajal - A gentle soul with an infectious sense of fun 🌸",
        "category": "smiles",
        "rotation": 1.5
    },
    {
        "id": "kajal-mem-35",
        "src": "/images/kajal/photos/kajal-35.jpeg",
        "caption": "Soft twilight vibes and dreamy reflections 🌆",
        "date": "Heart & Soul",
        "alt": "Kajal - Soft twilight vibes and dreamy reflections 🌆",
        "category": "moments",
        "rotation": -2.5
    },
    {
        "id": "kajal-mem-36",
        "src": "/images/kajal/photos/kajal-36.jpeg",
        "caption": "Unfiltered, gorgeous, and beautifully Kajal 💖",
        "date": "Pure Gold",
        "alt": "Kajal - Unfiltered, gorgeous, and beautifully Kajal 💖",
        "category": "places",
        "rotation": 3.5
    },
    {
        "id": "kajal-mem-37",
        "src": "/images/kajal/photos/kajal-37.jpeg",
        "caption": "Cute festive memories filled with fairy lights ✨",
        "date": "Joyful Heart",
        "alt": "Kajal - Cute festive memories filled with fairy lights ✨",
        "category": "favorites",
        "rotation": -1.5
    },
    {
        "id": "kajal-mem-38",
        "src": "/images/kajal/photos/kajal-38.jpeg",
        "caption": "Cherished snapshot frozen in timeless affection 📸",
        "date": "Elegance",
        "alt": "Kajal - Cherished snapshot frozen in timeless affection 📸",
        "category": "smiles",
        "rotation": 2.5
    },
    {
        "id": "kajal-mem-39",
        "src": "/images/kajal/photos/kajal-39.jpeg",
        "caption": "Looking upward dreamily, chasing sweet hopes 🌌",
        "date": "Cherished",
        "alt": "Kajal - Looking upward dreamily, chasing sweet hopes 🌌",
        "category": "moments",
        "rotation": -3.5
    },
    {
        "id": "kajal-mem-40",
        "src": "/images/kajal/photos/kajal-40.jpeg",
        "caption": "Comfort and happiness found in one sweet person 🤍",
        "date": "Precious Gem",
        "alt": "Kajal - Comfort and happiness found in one sweet person 🤍",
        "category": "places",
        "rotation": 1.5
    },
    {
        "id": "kajal-mem-41",
        "src": "/images/kajal/photos/kajal-41.jpeg",
        "caption": "Playful mood that always brings a wide smile 🎀",
        "date": "Daydreamer",
        "alt": "Kajal - Playful mood that always brings a wide smile 🎀",
        "category": "favorites",
        "rotation": -2.5
    },
    {
        "id": "kajal-mem-42",
        "src": "/images/kajal/photos/kajal-42.jpeg",
        "caption": "Stunning in simplicity, outshining all jewelry 💎",
        "date": "Sweet Harmony",
        "alt": "Kajal - Stunning in simplicity, outshining all jewelry 💎",
        "category": "smiles",
        "rotation": 3.5
    },
    {
        "id": "kajal-mem-43",
        "src": "/images/kajal/photos/kajal-43.jpeg",
        "caption": "A heartbeat captured in a frame 💓",
        "date": "Little Angel",
        "alt": "Kajal - A heartbeat captured in a frame 💓",
        "category": "moments",
        "rotation": -1.5
    },
    {
        "id": "kajal-mem-44",
        "src": "/images/kajal/photos/kajal-44.jpeg",
        "caption": "Her beauty lies in how genuinely she loves and laughs 🌷",
        "date": "Starlit",
        "alt": "Kajal - Her beauty lies in how genuinely she loves and laughs 🌷",
        "category": "places",
        "rotation": 2.5
    },
    {
        "id": "kajal-mem-45",
        "src": "/images/kajal/photos/kajal-45.jpeg",
        "caption": "Radiant in colors, glowing like spring blossoms 🌺",
        "date": "Beloved",
        "alt": "Kajal - Radiant in colors, glowing like spring blossoms 🌺",
        "category": "favorites",
        "rotation": -3.5
    },
    {
        "id": "kajal-mem-46",
        "src": "/images/kajal/photos/kajal-46.jpeg",
        "caption": "Quiet afternoon peace, watching the world go by 🌤️",
        "date": "Candid Love",
        "alt": "Kajal - Quiet afternoon peace, watching the world go by 🌤️",
        "category": "smiles",
        "rotation": 1.5
    },
    {
        "id": "kajal-mem-47",
        "src": "/images/kajal/photos/kajal-47.jpeg",
        "caption": "A precious keepsake to treasure for decades to come 🎁",
        "date": "Forever Smile",
        "alt": "Kajal - A precious keepsake to treasure for decades to come 🎁",
        "category": "moments",
        "rotation": -2.5
    },
    {
        "id": "kajal-mem-48",
        "src": "/images/kajal/photos/kajal-48.jpeg",
        "caption": "A playful wink, a happy heart, and endless fun 😉",
        "date": "Springtime",
        "alt": "Kajal - A playful wink, a happy heart, and endless fun 😉",
        "category": "places",
        "rotation": 3.5
    },
    {
        "id": "kajal-mem-49",
        "src": "/images/kajal/photos/kajal-49.jpeg",
        "caption": "Breathtaking style that is entirely her own 👗",
        "date": "Gentle Calm",
        "alt": "Kajal - Breathtaking style that is entirely her own 👗",
        "category": "favorites",
        "rotation": -1.5
    },
    {
        "id": "kajal-mem-50",
        "src": "/images/kajal/photos/kajal-50.jpeg",
        "caption": "Warm eyes that reflect nothing but kindness and love 🕊️",
        "date": "Endless Love",
        "alt": "Kajal - Warm eyes that reflect nothing but kindness and love 🕊️",
        "category": "smiles",
        "rotation": 2.5
    },
    {
        "id": "kajal-mem-51",
        "src": "/images/kajal/photos/kajal-51.jpeg",
        "caption": "Every single angle showing true angelic grace 👼",
        "date": "Sunny Days",
        "alt": "Kajal - Every single angle showing true angelic grace 👼",
        "category": "moments",
        "rotation": -3.5
    },
    {
        "id": "kajal-mem-52",
        "src": "/images/kajal/photos/kajal-52.jpeg",
        "caption": "Festive cheer, celebrations, and sweet treats 🍰",
        "date": "Sweet Melody",
        "alt": "Kajal - Festive cheer, celebrations, and sweet treats 🍰",
        "category": "places",
        "rotation": 1.5
    },
    {
        "id": "kajal-mem-53",
        "src": "/images/kajal/photos/kajal-53.jpeg",
        "caption": "A moment of quiet reflection, thinking of dreams 🌠",
        "date": "Radiant Soul",
        "alt": "Kajal - A moment of quiet reflection, thinking of dreams 🌠",
        "category": "favorites",
        "rotation": -2.5
    },
    {
        "id": "kajal-mem-54",
        "src": "/images/kajal/photos/kajal-54.jpeg",
        "caption": "The softest glance that melts all worries away 🧸",
        "date": "Happy Spirit",
        "alt": "Kajal - The softest glance that melts all worries away 🧸",
        "category": "smiles",
        "rotation": 3.5
    },
    {
        "id": "kajal-mem-55",
        "src": "/images/kajal/photos/kajal-55.jpeg",
        "caption": "Lively, vibrant, and full of delightful energy ⚡",
        "date": "Velvet Night",
        "alt": "Kajal - Lively, vibrant, and full of delightful energy ⚡",
        "category": "moments",
        "rotation": -1.5
    },
    {
        "id": "kajal-mem-56",
        "src": "/images/kajal/photos/kajal-56.jpeg",
        "caption": "Like a painting brought to life by celestial hands 🎨",
        "date": "Rose Petal",
        "alt": "Kajal - Like a painting brought to life by celestial hands 🎨",
        "category": "places",
        "rotation": 2.5
    },
    {
        "id": "kajal-mem-57",
        "src": "/images/kajal/photos/kajal-57.jpeg",
        "caption": "Innocent wonder and playful curiosity in her eyes 🦋",
        "date": "Whispering Wind",
        "alt": "Kajal - Innocent wonder and playful curiosity in her eyes 🦋",
        "category": "favorites",
        "rotation": -3.5
    },
    {
        "id": "kajal-mem-58",
        "src": "/images/kajal/photos/kajal-58.jpeg",
        "caption": "Sunshine on a rainy day, forever my happy place ☀️",
        "date": "Infinite Joy",
        "alt": "Kajal - Sunshine on a rainy day, forever my happy place ☀️",
        "category": "smiles",
        "rotation": 1.5
    },
    {
        "id": "kajal-mem-59",
        "src": "/images/kajal/photos/kajal-59.jpeg",
        "caption": "Royalty personified with humble tenderness 👑",
        "date": "True Blessing",
        "alt": "Kajal - Royalty personified with humble tenderness 👑",
        "category": "moments",
        "rotation": -2.5
    },
    {
        "id": "kajal-mem-60",
        "src": "/images/kajal/photos/kajal-60.jpeg",
        "caption": "The cutest candid snap in the entire collection 📸",
        "date": "Sweet Haven",
        "alt": "Kajal - The cutest candid snap in the entire collection 📸",
        "category": "places",
        "rotation": 3.5
    },
    {
        "id": "kajal-mem-61",
        "src": "/images/kajal/photos/kajal-61.jpeg",
        "caption": "A timeless beauty that only grows richer with each year ⏳",
        "date": "Precious Days",
        "alt": "Kajal - A timeless beauty that only grows richer with each year ⏳",
        "category": "favorites",
        "rotation": -1.5
    },
    {
        "id": "kajal-mem-62",
        "src": "/images/kajal/photos/kajal-62.jpeg",
        "caption": "Sweetest birthday girl celebrating another gorgeous year 🎂",
        "date": "Soulmate",
        "alt": "Kajal - Sweetest birthday girl celebrating another gorgeous year 🎂",
        "category": "smiles",
        "rotation": 2.5
    },
    {
        "id": "kajal-mem-63",
        "src": "/images/kajal/photos/kajal-63.jpeg",
        "caption": "Always glowing, always cherished, always my Kajal 💖",
        "date": "Birthday Queen",
        "alt": "Kajal - Always glowing, always cherished, always my Kajal 💖",
        "category": "moments",
        "rotation": -3.5
    },
    {
        "id": "kajal-mem-64",
        "src": "/images/kajal/photos/kajal-64.jpeg",
        "caption": "Forever and always, the love of a lifetime ❤️",
        "date": "Forever Yours",
        "alt": "Kajal - Forever and always, the love of a lifetime ❤️",
        "category": "places",
        "rotation": 1.5
    }
] as MemoryItem[],

  // Things I Love About You cards for Kajal
  LOVE_CARDS: [
    {
      id: "card-1",
      title: "Your Incomparable Eyes (Kajal Ki Kashish)",
      shortQuote: "Deep, expressive, and holding an entire universe of dreams.",
      expandedMessage: "Your eyes are true to your name—they have a magical depth that leaves me spellbound every single time. They speak a language of pure kindness, dreams, and gentle warmth.",
      tag: "Soulful Gaze ✨",
      icon: "Eye",
      image: "/images/kajal/photos/kajal-10.jpg",
    },
    {
      id: "card-2",
      title: "Your Contagious Birthday Smile",
      shortQuote: "Lights up any room like the morning sun.",
      expandedMessage: "Your smile has this effortless, innocent charm that instantly dissolves every worry. Seeing you giggle and smile cheerfully is hands down my favorite sight in the whole world.",
      tag: "Pure Sunshine 🌸",
      icon: "Smile",
      image: "/images/kajal/photos/kajal-11.jpg",
    },
    {
      id: "card-3",
      title: "Your Pure & Caring Heart",
      shortQuote: "Gentle, empathetic, and always full of kindness.",
      expandedMessage: "You care so genuinely for the people around you. Your heart is made of pure gold, and having you in my life is the greatest blessing I thank the stars for every day.",
      tag: "Purest Soul 🕊️",
      icon: "Heart",
      image: "/images/kajal/photos/kajal-12.jpg",
    },
    {
      id: "card-4",
      title: "Your Cute Playful Banter",
      shortQuote: "The adorable pouts, giggles, and teasing jokes.",
      expandedMessage: "Your playful spirit makes life so much fun. The way you tease, the cute little expressions you make, and your sudden joyful laughter turn every normal moment into celebration.",
      tag: "Adorable Cutie 🥰",
      icon: "Music",
      image: "/images/kajal/photos/kajal-13.jpg",
    },
    {
      id: "card-5",
      title: "Your Natural & Timeless Grace",
      shortQuote: "Breathtaking elegance without even trying.",
      expandedMessage: "Whether dressed up for a festival or just rocking casual styles, you carry yourself with such effortless grace, poise, and dignity. You are truly a queen in every sense.",
      tag: "Royal Grace 👑",
      icon: "Sparkles",
      image: "/images/kajal/photos/kajal-14.jpg",
    },
    {
      id: "card-6",
      title: "Simply Kajal — Irreplaceable",
      shortQuote: "No words needed. Just you, beautifully and perfectly you. ❤️",
      expandedMessage: "You don't need to do anything to be special. Just being Kajal—with your tender soul, your genuine voice, your laughter, and your loving presence—is everything to me. Happy Birthday! 🎂",
      tag: "Priceless Gem 💖",
      icon: "Sparkle",
      image: "/images/kajal/photos/kajal-15.jpg",
    },
  ] as LoveCardItem[],

  // Interactive Tap The Heart for Kajal's Birthday
  INTERACTIVE_HEART: {
    heading: "Tap the heart ❤️",
    subheading: "Every tap unwraps a special photo, birthday message & blessing for Kajal! 🎂",
    steps: [
      {
        text: "Happy Birthday, Kajal! 🎂",
        subtext: "You clicked it! Tap again to unwrap the next sweet birthday surprise...",
        photo: "/images/kajal/photos/kajal-01.jpg",
        word: "Birthday Joy!",
      },
      {
        text: "That Gorgeous Smile 🌸",
        subtext: "Your laughter lights up my entire world. Never lose that beautiful glow!",
        photo: "/images/kajal/photos/kajal-02.jpg",
        word: "Sweet Sunshine!",
      },
      {
        text: "Those Mesmerizing Eyes ✨",
        subtext: "Kajal in your eyes and poetry in your soul—you are breathtakingly stunning.",
        photo: "/images/kajal/photos/kajal-03.jpg",
        word: "Pure Magic!",
      },
      {
        text: "A Heart of Pure Gold 💖",
        subtext: "The kindest, gentlest, and most precious person I know. Happy Birthday!",
        photo: "/images/kajal/photos/kajal-04.jpg",
        word: "Angel!",
      },
      {
        text: "Make a Wish, Birthday Girl! 🌟",
        subtext: "May all your dreams bloom into reality this year. You have my whole heart forever!",
        photo: "/images/kajal/photos/kajal-05.jpg",
        word: "Forever Yours ❤️",
      },
    ] as InteractiveHeartStep[],
  },

  // Dedicated Birthday & Romantic Shayari Section for Kajal (Hindi & English)
  SHAYARI_SECTION: {
    badge: "दिल की कलम से — जन्मदिन मुबारक 📜🎂",
    title: "Shayari for Birthday Girl Kajal",
    subtitle: "चंद अल्फ़ाज़ जो सिर्फ तुम्हारी नज़ाकत, मुस्कान, आँखों और इस ख़ास जन्मदिन के नाम हैं।",
    shayaris: [
      {
        id: "sh-1",
        hindi: "तेरी पैदाइश का ये दिन गुलशन को महका गया,\nखुदा ने जब तुझे तराशा, तो खुद भी मुस्कुरा गया...\nआँखों का काजल हो तुम, या ज़िन्दगी का सुकून,\nकाजल, तेरा हर एक लम्हा दुआओं से भर गया।\nजन्मदिन की ढेर सारी शुभकामनाएँ! 🎂🌸",
        translation: "The day you were born, the entire universe blossomed into fragrance. Even the heavens smiled as they crafted your gentle grace. You are the sacred kohl of my eyes and the calm peace of my soul... Kajal, may your birthday overflow with infinite blessings.",
        mood: "जन्मदिन की दुआएँ (Birthday Blessings 🎂)",
        photo: "/images/kajal/photos/kajal-01.jpg",
      },
      {
        id: "sh-2",
        hindi: "तेरी आँखों का काजल जैसे शाम का कोई हसीन ख़्वाब,\nतेरी सादगी के आगे फीका पड़ जाए हर गुलाब...\nकाजल, तू वो हँसी है जो दिल को करार देती है,\nतेरी हर एक अदा है बेमिसाल, लाजवाब। ✨",
        translation: "The kohl in your eyes is like a mesmerizing twilight dream; before your innocence, every fresh rose pales. Your smile grants quiet serenity to my heart, Kajal—every glance of yours is peerless.",
        mood: "काजल की कशिश (Enchanting Eyes ✨)",
        photo: "/images/kajal/photos/kajal-02.jpg",
      },
      {
        id: "sh-3",
        hindi: "चमकते रहें सितारे तेरी राहों में सदा के लिए,\nखुशियाँ बिछी रहें तेरे हर कदम पे हमेशा के लिए...\nगम का कोई साया भी कभी छू ना पाए तुझे,\nये दिल दुआ करता है आज तेरी लंबी उम्र के लिए। 🌸",
        translation: "May bright stars forever illuminate your path, and may boundless happiness walk with you at every step. May sorrow never touch your soul—today my whole heart prays for your long, joyful life.",
        mood: "दुआ और खुशी (Love & Prayers 💖)",
        photo: "/images/kajal/photos/kajal-03.jpg",
      },
      {
        id: "sh-4",
        hindi: "तेरी मासूम हँसी में जैसे रब की इनायत है,\nतुझे देखकर मुस्कुराना तो मेरी पुरानी आदत है...\nकाजल, तेरे होने से ही रोशन है ये जहां मेरा,\nतू सिर्फ मोहब्बत नहीं, मेरी सबसे प्यारी इबादत है। 💖",
        translation: "In your sweet innocent laughter lies heavenly grace; smiling at the sight of you has become my favorite habit. Kajal, my world shines because you are in it—you are not just my love, but my most cherished prayer.",
        mood: "मासूम मुस्कान (Innocent Laughter 🌸)",
        photo: "/images/kajal/photos/kajal-04.jpg",
      },
      {
        id: "sh-5",
        hindi: "आज के दिन खुदा ने एक फरिश्ता ज़मीं पे उतारा था,\nजो सबसे हसीन, सबसे प्यारा, और मेरा सबसे दुलारा था...\nकाजल, तू हमेशा ऐसे ही खिलखिलाती रहे उम्र भर,\nयही पैगाम आज मेरे दिल ने आसमान को पुकारा था। 🎂🎉",
        translation: "On this day, the heavens sent down an angel to this earth—the gentlest, most beautiful, and dearest of all. May you bloom with this cheerful laughter forever, Kajal; that is the prayer resounding from my heart.",
        mood: "फरिश्ते का जन्मदिन (Angel on Earth 👼)",
        photo: "/images/kajal/photos/kajal-05.jpg",
      },
      {
        id: "sh-6",
        hindi: "हाथों में हाथ हो तेरा और ये उम्र गुज़र जाए,\nतेरी मुस्कुराहट देख कर हर मुश्किल संवर जाए...\nकाजल, जब तक ये साँसें हैं, तब तक तू ही रहे दिल में,\nतेरा हर जन्मदिन हमारे प्यार की नई दास्तान बन जाए। ❤️",
        translation: "Hand in hand with you, let this whole life drift by peacefully; at one look at your smile, every hardship melts into joy. As long as breath remains, you will reign in my heart, Kajal—let every birthday of yours write an eternal chapter of our love.",
        mood: "हमेशा का साथ (Together Forever ❤️)",
        photo: "/images/kajal/photos/kajal-06.jpg",
      },
    ] as ShayariItem[],
  },

  // Birthday Wishes for Kajal
  SUNSET_WISHES: [
    "May your life be as radiant and vibrant as a golden sunset sky. 🌅",
    "May your days be filled with endless laughter that crinkles your eyes. 😂",
    "May every single dream and wish whispered in your heart come true. 🌟",
    "May peace, sweet warmth, and soft cuddles wrap around you always. ☕",
    "May your birthday mark the beginning of your happiest, brightest chapter yet. 🎂",
    "And may you always remember how deeply loved, admired, and cherished you are, Kajal. 💖",
  ],

  // Split section for Kajal
  SPLIT_SECTION: {
    heading: "Kajal, you turn simple moments into timeless poetry.",
    body: "Maybe that's what makes someone truly unforgettable—not grand, noisy gestures, but the quiet, beautiful way you make every heartbeat feel worth celebrating forever. Happy Birthday!",
    quote: "For Kajal, on your birthday and always. 🎂💖",
    image: "/images/kajal/photos/kajal-01.jpg",
  },

  // Romantic Bollywood Playlist for Kajal
  BOLLYWOOD_SONGS: [
    {
      id: "b-song-1",
      title: "Kesariya",
      artist: "Arijit Singh & Pritam",
      movieOrAlbum: "Brahmāstra",
      youtubeId: "BddP6PYo2gs",
      cover: "/images/kajal/photos/kajal-01.jpg",
      duration: "4:28",
      tag: "Birthday Melody 🧡",
    },
    {
      id: "b-song-2",
      title: "Tum Hi Ho",
      artist: "Arijit Singh & Mithoon",
      movieOrAlbum: "Aashiqui 2",
      youtubeId: "Umqb9KENgmk",
      cover: "/images/kajal/photos/kajal-02.jpg",
      duration: "4:22",
      tag: "Timeless Emotion ❤️",
    },
    {
      id: "b-song-3",
      title: "Raataan Lambiyan",
      artist: "Jubin Nautiyal & Asees Kaur",
      movieOrAlbum: "Shershaah",
      youtubeId: "gvyUuxdRdR4",
      cover: "/images/kajal/photos/kajal-03.jpg",
      duration: "3:50",
      tag: "Gentle Night ✨",
    },
    {
      id: "b-song-4",
      title: "Apna Bana Le",
      artist: "Arijit Singh & Sachin-Jigar",
      movieOrAlbum: "Bhediya",
      youtubeId: "ElZfdU54Cp8",
      cover: "/images/kajal/photos/kajal-04.jpg",
      duration: "4:21",
      tag: "Soulful Connection 🌸",
    },
    {
      id: "b-song-5",
      title: "Ranjha",
      artist: "Jasleen Royal & B Praak",
      movieOrAlbum: "Shershaah",
      youtubeId: "V7LwfY5U5WI",
      cover: "/images/kajal/photos/kajal-05.jpg",
      duration: "3:48",
      tag: "Heartfelt Melodies 💖",
    },
    {
      id: "b-song-6",
      title: "Hawayein",
      artist: "Arijit Singh & Pritam",
      movieOrAlbum: "Jab Harry Met Sejal",
      youtubeId: "cYOB941gyXI",
      cover: "/images/kajal/photos/kajal-06.jpg",
      duration: "4:50",
      tag: "Breezy Romance 🍃",
    },
    {
      id: "b-song-7",
      title: "Agar Tum Saath Ho",
      artist: "Alka Yagnik & Arijit Singh",
      movieOrAlbum: "Tamasha",
      youtubeId: "sK7riqg2mr4",
      cover: "/images/kajal/photos/kajal-07.jpg",
      duration: "5:41",
      tag: "Deepest Feelings 🌹",
    },
  ] as BollywoodSongItem[],

  // Date Night Movies Watchlist for Kajal
  DATE_NIGHT_MOVIES: [
    {
      id: "m-1",
      title: "Yeh Jawaani Hai Deewani",
      year: "2013",
      genre: "Romantic Drama",
      tagline: "Wanderlust, deep talks, and realizing home is a person.",
      note: "For our future spontaneous trips, mountain sunsets, and late-night laughter with Kajal.",
      emoji: "🏔️",
    },
    {
      id: "m-2",
      title: "Jab We Met",
      year: "2007",
      genre: "Romantic Comedy",
      tagline: "Where cheerful chaos meets pure, unfiltered love.",
      note: "Because your playful spirit and infectious laughter remind me of Geet at her best.",
      emoji: "🚂",
    },
    {
      id: "m-3",
      title: "Sita Ramam",
      year: "2022",
      genre: "Classic Love Story",
      tagline: "Handwritten letters, timeless devotion, and eternal vows.",
      note: "For love written with patience, elegance, and pure heart, just like ours.",
      emoji: "💌",
    },
    {
      id: "m-4",
      title: "Barfi!",
      year: "2012",
      genre: "Poetic Romance",
      tagline: "When words fall silent, love speaks through smiles.",
      note: "Sweet, tender, and purest emotional connection that needs no spoken language.",
      emoji: "🎈",
    },
    {
      id: "m-5",
      title: "About Time",
      year: "2013",
      genre: "Heartwarming Romance",
      tagline: "Living every ordinary day with you as if it were the greatest gift.",
      note: "Because every second spent by your side is worth experiencing over and over.",
      emoji: "⏳",
    },
    {
      id: "m-6",
      title: "Dilwale Dulhania Le Jayenge",
      year: "1995",
      genre: "Eternal Romance",
      tagline: "The classic benchmark of true love that withstands everything.",
      note: "For Kajal, the Simran of real life who stole my heart completely.",
      emoji: "🌻",
    },
  ] as DateNightMovieItem[],

  // Birthday Love Letter for Kajal
  LETTER: {
    recipient: "To: Birthday Girl Kajal 🎂💖",
    salutation: "Dearest Kajal,",
    paragraphs: [
      "Happy Birthday, my love! I don't know if a website could ever fully hold everything you mean to me, but I wanted to build something as unique and magical as you.",
      "So I gathered all your sweetest pictures, candid smiles, joyful videos, and heartfelt thoughts into this little universe made especially for your special day.",
      "Just like your name, you bring depth, allure, and beauty to everything around you. Your laughter brings sunshine to the grayest afternoons, and your gentle soul makes this world a softer place.",
      "No matter how many birthdays come and go, my prayer for you will always be the same: may you keep smiling this brightly, may you achieve every dream in your heart, and may love always surround you.",
      "This little world will always remain yours, frozen in love, celebrating you.",
      "Happy Birthday once again, Kajal! 🎂🎉❤️",
    ],
    closing: "With all my love, always & forever,",
    signature: "Yash ❤️",
  },

  // Starry Night Wishes (Clickable stars in Dream section)
  STAR_WISHES: [
    { id: "star-1", x: 18, y: 22, size: 5, wish: "May Kajal's birthday year be filled with golden sunsets and endless blessings 🌅", glowColor: "#FFD1DC" },
    { id: "star-2", x: 36, y: 15, size: 6, wish: "Infinite laughter until our cheeks ache and tears of joy flow 😂🎂", glowColor: "#FFE5B4" },
    { id: "star-3", x: 64, y: 20, size: 5, wish: "Cozy cafe dates, rainy walks, and warm loving conversations ☕💖", glowColor: "#E0BBE4" },
    { id: "star-4", x: 84, y: 32, size: 6, wish: "A lifetime of peace, gentle mornings, and quiet happiness for Kajal ✨", glowColor: "#FFF1C5" },
    { id: "star-5", x: 26, y: 62, size: 5, wish: "Exciting road trips, favorite songs, and carefree singing together 🚗🎶", glowColor: "#FFC6D9" },
    { id: "star-6", x: 72, y: 70, size: 6, wish: "A thousand reasons for Kajal to smile brightly every single day 🌸❤️", glowColor: "#FFDFBA" },
    { id: "star-7", x: 50, y: 46, size: 7, wish: "Every secret dream your sweet heart has ever whispered to the universe 🌟", glowColor: "#E2F0CB" },
  ] as StarWish[],

  // Video Section with all 5 video reels of Kajal
  VIDEO_SECTION: {
    title: "Kajal in Motion",
    quote: "Some people don't just walk into your life—they bring an entire springtime of happiness with them. 🎂❤️",
    poster: "/images/kajal/photos/kajal-01.jpg",
    videoUrl: "/images/kajal/videos/kajal-video-01.mp4",
    reels: [
      {
        id: "reel-1",
        title: "Kajal's Birthday Glow ✨",
        subtitle: "A glance that lights up everything around her",
        tag: "Birthday Sparkle",
        url: "/images/kajal/videos/kajal-video-01.mp4",
        poster: "/images/kajal/photos/kajal-01.jpg",
      },
      {
        id: "reel-2",
        title: "That Irresistible Laugh 🥰",
        subtitle: "Spontaneous smiles & cute cheerful joy",
        tag: "Sweet Happiness",
        url: "/images/kajal/videos/kajal-video-02.mp4",
        poster: "/images/kajal/photos/kajal-02.jpg",
      },
      {
        id: "reel-3",
        title: "Pure Grace in Motion 🌸",
        subtitle: "Elegance woven into every step and gesture",
        tag: "Angelic Charm",
        url: "/images/kajal/videos/kajal-video-03.mp4",
        poster: "/images/kajal/photos/kajal-03.jpg",
      },
      {
        id: "reel-4",
        title: "Festive Radiance & Warmth 💖",
        subtitle: "Bringing cheerful holiday energy everywhere",
        tag: "Festive Queen",
        url: "/images/kajal/videos/kajal-video-04.mp4",
        poster: "/images/kajal/photos/kajal-04.jpg",
      },
      {
        id: "reel-5",
        title: "Moments of Pure Joy 🎂",
        subtitle: "Treasured memories etched forever in heart",
        tag: "Precious Keepsake",
        url: "/images/kajal/videos/kajal-video-05.mp4",
        poster: "/images/kajal/photos/kajal-05.jpg",
      },
    ] as VideoReelItem[],
  },

  // Final Birthday Surprise
  FINAL_SURPRISE: {
    preText: "Wait… there's one more birthday surprise.",
    buttonText: "Open Your Birthday Climax, Kajal! 🎂🎉",
    revealedTitle: "Happy Birthday, Kajal! 🎂💖",
    subheading: "“May your life be as radiant, joyful, and deeply loved as you make everyone feel.”",
    body: "Never forget how extraordinarily special, admired, and treasured you are, Kajal.",
    finalQuote: "For Birthday Girl Kajal,\nbecause the sweetest soul deserves an entire universe crafted just for her. 🎂💖✨",
    portrait: "/images/kajal/photos/kajal-01.jpg",
  },

  // Secret Message (Footer 5-click easter egg)
  SECRET_MESSAGE: {
    heading: "Psst… happy birthday one more time, Kajal! 🎂",
    body: "If you found this secret note, you are officially the cutest and sweetest birthday girl alive. 💖",
    extra: "You unlocked the secret birthday treasure! Sending you the warmest hug and infinite birthday love. 🎉",
  },

  FOOTER: {
    title: "Made with all my heart for Kajal's Birthday 🎂💖",
    tagline: "A little universe. Infinite love. Happy Birthday Kajal!",
  },

  LOVE_WHISPERS: [
    "Happy Birthday to the most gorgeous girl in the world, Kajal! 🎂✨",
    "Every time I think of your sweet smile, my heart fills with joy. 🌸",
    "Your eyes have this magical depth that makes poetry feel incomplete. 💖",
    "Your cheerful laughter is my favorite sound in this entire universe. 🥰",
    "Thank you for being the greatest blessing in my life, Kajal. 🎂❤️",
  ],

  SCRAPBOOK_PHOTOS: [
    {
      id: "sb-1",
      src: "/images/kajal/photos/kajal-26.jpg",
      caption: "Kajal in bloom 🌸",
      tapeColor: "#FFCAD4",
      rotation: -3,
      alt: "Kajal smiling in sunlit bloom",
    },
    {
      id: "sb-2",
      src: "/images/kajal/photos/kajal-27.jpg",
      caption: "pure innocence ✨",
      tapeColor: "#FFE5D9",
      rotation: 2.5,
      alt: "Kajal gentle candid smile",
    },
    {
      id: "sb-3",
      src: "/images/kajal/photos/kajal-28.jpg",
      caption: "birthday queen 👑",
      tapeColor: "#D8E2DC",
      rotation: -2,
      alt: "Kajal looking royal and radiant",
    },
    {
      id: "sb-4",
      src: "/images/kajal/photos/kajal-29.jpg",
      caption: "cutest little pout 🥰",
      tapeColor: "#ECE4DB",
      rotation: 3,
      alt: "Kajal adorable candid expression",
    },
    {
      id: "sb-5",
      src: "/images/kajal/photos/kajal-30.jpg",
      caption: "sparkling joy 🎂",
      tapeColor: "#FFCAD4",
      rotation: -2.5,
      alt: "Kajal laughing cheerfully",
    },
    {
      id: "sb-6",
      src: "/images/kajal/photos/kajal-31.jpg",
      caption: "stylish & modern 😎",
      tapeColor: "#FFE5D9",
      rotation: 2,
      alt: "Kajal chic stylish pose",
    },
    {
      id: "sb-7",
      src: "/images/kajal/photos/kajal-32.jpg",
      caption: "midnight glow 🌙",
      tapeColor: "#D8E2DC",
      rotation: -3,
      alt: "Kajal twilight serene portrait",
    },
    {
      id: "sb-8",
      src: "/images/kajal/photos/kajal-33.jpg",
      caption: "sweet moments ☕",
      tapeColor: "#ECE4DB",
      rotation: 2.5,
      alt: "Kajal relaxed cozy afternoon",
    },
  ] as ScrapbookPhoto[],

  WALL_PHOTOS: [
    {
      id: "pw-1",
      src: "/images/kajal/photos/kajal-16.jpg",
      caption: "Birthday Radiance 🎂✨",
      subcaption: "Glowing with pure happiness on her special birthday.",
      depthZ: 60,
      initialX: -260,
      initialY: -60,
      rotZ: -4,
    },
    {
      id: "pw-2",
      src: "/images/kajal/photos/kajal-17.jpg",
      caption: "Soulful Elegance 🌸",
      subcaption: "That gentle grace and quiet beauty that captures every heart.",
      depthZ: 110,
      initialX: 0,
      initialY: -40,
      rotZ: 2,
    },
    {
      id: "pw-3",
      src: "/images/kajal/photos/kajal-18.jpg",
      caption: "Timeless Queen 👑",
      subcaption: "Breathtaking poise and a gorgeous, confident aura.",
      depthZ: 40,
      initialX: 250,
      initialY: 40,
      rotZ: -3,
    },
    {
      id: "pw-4",
      src: "/images/kajal/photos/kajal-19.jpg",
      caption: "Sweetest Laughter 🥰",
      subcaption: "Cute smiles and playful spirit that lights up the world.",
      depthZ: 90,
      initialX: -140,
      initialY: 130,
      rotZ: 3,
    },
    {
      id: "pw-5",
      src: "/images/kajal/photos/kajal-20.jpg",
      caption: "Gentle Charm 💖",
      subcaption: "Every single candid moment with Kajal is pure magic.",
      depthZ: 70,
      initialX: 160,
      initialY: -140,
      rotZ: -2,
    },
    {
      id: "pw-6",
      src: "/images/kajal/photos/kajal-21.jpg",
      caption: "Effortless Chic ✨",
      subcaption: "Modern style, dazzling presence, and unmatched grace.",
      depthZ: 50,
      initialX: -320,
      initialY: 90,
      rotZ: -3,
    },
    {
      id: "pw-7",
      src: "/images/kajal/photos/kajal-22.jpg",
      caption: "Warm Conversations ☕",
      subcaption: "Sweetest talks, peaceful vibes, and unforgettable laughs.",
      depthZ: 85,
      initialX: 310,
      initialY: -70,
      rotZ: 3.5,
    },
    {
      id: "pw-8",
      src: "/images/kajal/photos/kajal-23.jpg",
      caption: "Kajal Ki Kashish 🌙",
      subcaption: "Those deep dreamy eyes that speak without saying a word.",
      depthZ: 65,
      initialX: -60,
      initialY: 170,
      rotZ: -2,
    },
    {
      id: "pw-9",
      src: "/images/kajal/photos/kajal-24.jpg",
      caption: "Unfiltered Joy 🎶",
      subcaption: "The cheerful laughter that makes everything feel so soft and light.",
      depthZ: 95,
      initialX: 120,
      initialY: 120,
      rotZ: 2,
    },
    {
      id: "pw-10",
      src: "/images/kajal/photos/kajal-25.jpg",
      caption: "A Treasured Angel 💖",
      subcaption: "Cherished forever and always in my heart, Kajal.",
      depthZ: 75,
      initialX: -190,
      initialY: -160,
      rotZ: 3,
    },
  ] as WallPhoto[],
};

export type SiteConfig = typeof SITE_CONFIG;

