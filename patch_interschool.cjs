const fs = require('fs');
let content = fs.readFileSync('src/components/InterschoolSpecial.tsx', 'utf8');

// Find digiscratch block and replace TBD with Navya Ahuja
const scratchRegex = /digiscratch:\s*\{[\s\S]*?eventHead:\s*"TBD"/;
const scratchMatch = content.match(scratchRegex);
if (scratchMatch) {
  content = content.replace(
    scratchMatch[0],
    scratchMatch[0].replace('eventHead: "TBD"', 'eventHead: "Navya Ahuja", eventHeadNumber: "+91 7827651124"')
  );
}

// Find digiinterschool block and replace TBD with Aaradhya Yadav
const interRegex = /digiinterschool:\s*\{[\s\S]*?eventHead:\s*"TBD"/;
const interMatch = content.match(interRegex);
if (interMatch) {
  content = content.replace(
    interMatch[0],
    interMatch[0].replace('eventHead: "TBD"', 'eventHead: "Aaradhya Yadav", eventHeadNumber: "+91 9818400124"')
  );
}

fs.writeFileSync('src/components/InterschoolSpecial.tsx', content);
