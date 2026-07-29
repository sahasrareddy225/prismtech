const fs = require('fs');
const path = require('path');

const pagesToExtract = [
  'about',
  'tracks',
  'schedule',
  'rules',
  'team',
  'sponsors',
  'contact'
];

for (const p of pagesToExtract) {
  const pageFile = path.join(__dirname, 'src', 'app', p, 'page.tsx');
  if (!fs.existsSync(pageFile)) {
    console.log(`Skipping ${p}: file not found`);
    continue;
  }

  let content = fs.readFileSync(pageFile, 'utf8');

  // Remove Navbar and Footer imports
  content = content.replace(/import Navbar from '.*?';\n?/g, '');
  content = content.replace(/import Footer from '.*?';\n?/g, '');

  // Remove Navbar and Footer tags
  content = content.replace(/<Navbar \/>\n?/g, '');
  content = content.replace(/<Footer \/>\n?/g, '');

  // Rename component
  const ComponentName = p.charAt(0).toUpperCase() + p.slice(1) + 'Section';
  content = content.replace(/export default function \w+\(\) {/g, `export default function ${ComponentName}() {`);

  // Change <main id="..."> to <section id="...">
  content = content.replace(/<main id="[^"]*"/g, `<section id="${p}"`);
  content = content.replace(/<\/main>/g, `</section>`);
  
  // Replace <main> without id just in case
  content = content.replace(/<main/g, `<section id="${p}"`);

  // Write to src/components/sections/
  const outPath = path.join(__dirname, 'src', 'components', 'sections', `${ComponentName}SPA.tsx`);
  fs.writeFileSync(outPath, content);
  
  // Now modify the original page.tsx to just render the new component and Navbar/Footer
  const newPageContent = `'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ${ComponentName} from '@/components/sections/${ComponentName}SPA';

export default function ${ComponentName}Page() {
  return (
    <>
      <Navbar />
      <${ComponentName} />
      <Footer />
    </>
  );
}
`;
  fs.writeFileSync(pageFile, newPageContent);
  console.log(`Processed ${p}`);
}
