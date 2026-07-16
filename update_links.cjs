const fs = require('fs');

let content = fs.readFileSync('src/data/events.ts', 'utf8');

// 1. Add registrationLink to EventItem interface
content = content.replace('teamSize?: string;', 'teamSize?: string;\n  registrationLink?: string;');

// 2. Add registration links to the events
content = content.replace(
  /title: "DigiMagic",/,
  'title: "DigiMagic", registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSc8EG57o4A2Pw7kOJuPL9gJggOoGHZgBqYmbieBBAfdogFGvg/viewform?usp=header",'
);

content = content.replace(
  /title: "DigiPoster",/,
  'title: "DigiPoster", registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSczZFpFJKOMVQr3VOJb6yuyzJYoLjSE_3nQ4BseSftSD_0kEg/viewform?usp=publish-editor",'
);

content = content.replace(
  /title: "DigiSlides",/,
  'title: "DigiSlides", registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSc0MgJPoUwAOcSG_UtGBAzvPlr-O7FCDNOJc7YcE3r5vLptTA/viewform?usp=publish-editor",'
);

fs.writeFileSync('src/data/events.ts', content);
