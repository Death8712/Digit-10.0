sed -i "s/'TEASER', //g" src/components/Navbar.tsx
sed -i "/if (item === 'TEASER') return 'teaser';/d" src/components/Navbar.tsx
sed -i "s/item === 'TEASER' ? 'teaser' : //g" src/components/Navbar.tsx
