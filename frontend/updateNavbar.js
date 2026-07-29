const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'components', 'layout', 'Navbar.tsx');
let content = fs.readFileSync(file, 'utf8');

// 1. Update NAV_LINKS
content = content.replace(/href: '\/(about|tracks|schedule|rules|team|sponsors|contact)'/g, "href: '/#$1'");
content = content.replace(/href: '\/home'/g, "href: '/'");

// 2. Add activeSection state and observer
if (!content.includes('activeSection')) {
  content = content.replace(/const \[scrolled, setScrolled\] = useState\(false\);/, `const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');`);
  
  const observerLogic = `
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Scroll Spy
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection('/#' + entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -80% 0px' });

    sections.forEach(sec => observer.observe(sec));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(sec => observer.unobserve(sec));
    };
  }, []);
`;
  
  // Replace the old useEffect
  content = content.replace(/useEffect\(\(\) => {\s+const handleScroll[^}]+}, \[\]\);/m, observerLogic);
}

// 3. Update isActive logic
content = content.replace(/const isActive = pathname === link\.href;/g, "const isActive = pathname === link.href || (pathname === '/' && activeSection === link.href);");

// 4. Update mobile link click to close menu
content = content.replace(/<Link\s+key={link\.href}\s+href={link\.href}/g, "<Link\n                    key={link.href}\n                    href={link.href}\n                    onClick={() => setIsOpen(false)}");

fs.writeFileSync(file, content);
console.log('Navbar updated');
