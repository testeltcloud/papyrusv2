import fs from 'fs';

const files = [
  'components/Header.tsx',
  'components/MobileNav.tsx',
  'components/Footer.tsx',
  'components/sections/AboutCTA.tsx',
  'components/sections/Features.tsx',
  'components/sections/FAQ.tsx',
  'components/sections/Differentials.tsx',
  'components/sections/Hero.tsx',
  'components/sections/SpecialistCTA.tsx',
  'components/ui/DownloadButtons.tsx',
  'components/ui/WhatsAppButton.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let original = content;

  let countA = 1;
  content = content.replace(/aria-label="Baixar na App Store"/g, () => `aria-label="Baixar na App Store ${file.split('/').pop().replace('.tsx', '')} ${countA++}"`);
  
  let countP = 1;
  content = content.replace(/aria-label="Baixar no Google Play"/g, () => `aria-label="Baixar no Google Play ${file.split('/').pop().replace('.tsx', '')} ${countP++}"`);

  content = content.replace(/<a([^>]*?)href=\{links\.(appStore|playStore|whatsapp)\}([^>]*?)>/g, (match, p1, p2, p3) => {
    let newProps = '';
    if (!match.includes('target=')) newProps += ' target="_blank"';
    if (!match.includes('rel=')) {
        newProps += ' rel="noopener noreferrer nofollow"';
    } else {
        p1 = p1.replace(/rel="[^"]*"/, '');
        p3 = p3.replace(/rel="[^"]*"/, '');
        newProps += ' rel="noopener noreferrer nofollow"';
    }
    return `<a${p1}href={links.${p2}}${p3}${newProps}>`;
  });

  content = content.replace(/<a([^>]*?)href=\{item\.href\}([^>]*?)>/g, (match, p1, p2) => {
    let newProps = '';
    if (!match.includes('target=')) newProps += ' target="_blank"';
    if (!match.includes('rel=')) {
        newProps += ' rel="noopener noreferrer nofollow"';
    } else {
        p1 = p1.replace(/rel="[^"]*"/, '');
        p2 = p2.replace(/rel="[^"]*"/, '');
        newProps += ' rel="noopener noreferrer nofollow"';
    }
    return `<a${p1}href={item.href}${p2}${newProps}>`;
  });

  content = content.replace(/<a([^>]*?)href="https:\/\/ltcloud\.com\.br\/"([^>]*?)>/g, (match, p1, p2) => {
    let newProps = '';
    if (!match.includes('target=')) newProps += ' target="_blank"';
    if (!match.includes('rel=')) {
        newProps += ' rel="noopener noreferrer nofollow"';
    } else {
        p1 = p1.replace(/rel="[^"]*"/, '');
        p2 = p2.replace(/rel="[^"]*"/, '');
        newProps += ' rel="noopener noreferrer nofollow"';
    }
    return `<a${p1}href="https://ltcloud.com.br/"${p2}${newProps}>`;
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
