const fs = require('fs');
let content = fs.readFileSync('src/components/RegistrationForm.tsx', 'utf8');

content = content.replace(
  '{ name: "DigiThon", link: "https://forms.gle/yqvhAApcUWGkr3qi6" }',
  '{ name: "DigiThon", link: "https://forms.gle/yqvhAApcUWGkr3qi6" },\n      { name: "DigiScratch", link: "https://forms.gle/yqvhAApcUWGkr3qi6" },\n      { name: "DigiInterSchool", link: "https://forms.gle/yqvhAApcUWGkr3qi6" }'
);

fs.writeFileSync('src/components/RegistrationForm.tsx', content);
