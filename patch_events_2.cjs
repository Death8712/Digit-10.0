const fs = require('fs');
let content = fs.readFileSync('src/data/events.ts', 'utf8');

// DigiQuiz: Aaradhya Yadav -> Hanisha Nagi (+91 9810924894)
content = content.replace(
  'eventHead: "Aaradhya Yadav", eventHeadNumber: "+91 9818400124"',
  'eventHead: "Hanisha Nagi", eventHeadNumber: "+91 9810924894"'
);

// DigiBuild: Granth Shandilya -> Aaradhya Yadav (+91 9818400124)
content = content.replace(
  'eventHead: "Granth Shandilya", eventHeadNumber: "+91 9958468859"',
  'eventHead: "Aaradhya Yadav", eventHeadNumber: "+91 9818400124"'
);

fs.writeFileSync('src/data/events.ts', content);
