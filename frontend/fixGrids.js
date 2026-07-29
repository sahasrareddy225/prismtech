const fs = require('fs');
const path = require('path');

const files = ['SponsorsSectionSPA.tsx', 'RulesSectionSPA.tsx', 'ContactSectionSPA.tsx'];

files.forEach(f => {
  const filePath = path.join(__dirname, 'src', 'components', 'sections', f);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Sponsors:
    // <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
    content = content.replace(/<div style=\{\{ display: 'grid', gridTemplateColumns: 'repeat\(4, 1fr\)', gap: '16px' \}\}>/g, '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">');
    // <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
    content = content.replace(/<div style=\{\{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' \}\}>/g, '<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">');
    // <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }} className="lg-two-col">
    content = content.replace(/<div style=\{\{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' \}\} className="lg-two-col">/g, '<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">');
    
    // Rules:
    // <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
    content = content.replace(/<div style=\{\{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' \}\}>/g, '<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">');
    // <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
    content = content.replace(/<div style=\{\{ display: 'grid', gridTemplateColumns: 'repeat\(3, 1fr\)', gap: '14px' \}\}>/g, '<div className="grid grid-cols-1 md:grid-cols-3 gap-4">');
    
    // Contact:
    // <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '32px', alignItems: 'start' }}>
    content = content.replace(/<div style=\{\{ display: 'grid', gridTemplateColumns: '1fr 1\.6fr', gap: '32px', alignItems: 'start' \}\}>/g, '<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 items-start">');
    // <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
    content = content.replace(/<div style=\{\{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' \}\}>/g, '<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">');
    // <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
    content = content.replace(/<div style=\{\{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' \}\}>/g, '<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">');
    
    fs.writeFileSync(filePath, content);
  }
});
console.log('Fixed grids');
