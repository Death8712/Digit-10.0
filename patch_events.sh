sed -i -E 's/eventHead: "Ananya Gahlot",/eventHead: "Ananya Gahlot", eventHeadNumber: "+91 9810743364",/g' src/data/events.ts
sed -i -E 's/eventHead: "Rudransh Kandpal",/eventHead: "Rudransh Kandpal", eventHeadNumber: "+91 9910663253",/g' src/data/events.ts
sed -i -E 's/eventHead: "Navya Ahuja",/eventHead: "Navya Ahuja", eventHeadNumber: "+91 7827651124",/g' src/data/events.ts
sed -i -E 's/eventHead: "Hanisha Nagi",/eventHead: "Hanisha Nagi", eventHeadNumber: "+91 9810924894",/g' src/data/events.ts
sed -i -E 's/eventHead: "Aaradhya Yadav",/eventHead: "Aaradhya Yadav", eventHeadNumber: "+91 9818400124",/g' src/data/events.ts
sed -i -E 's/eventHead: "Granth Shandilya",/eventHead: "Granth Shandilya", eventHeadNumber: "+91 9958468859",/g' src/data/events.ts

# For those that already have an eventHeadNumber
sed -i -E 's/eventHead: "Ishika", eventHeadNumber: "[^"]+"/eventHead: "Ishika Mittal", eventHeadNumber: "+91 9310527312"/g' src/data/events.ts
sed -i -E 's/eventHead: "Divyansh", eventHeadNumber: "[^"]+"/eventHead: "Divyansh Rathore", eventHeadNumber: "+91 95608 02211"/g' src/data/events.ts
sed -i -E 's/eventHead: "Prajanay Chandra", eventHeadNumber: "[^"]+"/eventHead: "Prajanay Chandra", eventHeadNumber: "+91 8010984447"/g' src/data/events.ts
sed -i -E 's/eventHead: "Sheza", eventHeadNumber: "[^"]+"/eventHead: "Sheza Khan", eventHeadNumber: "+91 9968882786"/g' src/data/events.ts

