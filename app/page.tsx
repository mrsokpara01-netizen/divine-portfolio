'use client';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Sun,
  X,
} from 'lucide-react';

const WA =
  'https://wa.me/2349019733420?text=Hi%20Divine%2C%20I%20saw%20your%20portfolio%20and%20I%20really%20like%20your%20work.%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.';
const GH = 'https://github.com/mrsokpara01-netizen';
const EMAIL = 'mailto:divineokpara01@gmail.com';
const NAV = [
  ['home', 'Home'],
  ['about', 'About'],
  ['projects', 'Projects'],
  ['expertise', 'Expertise'],
  ['contact', 'Contact'],
];
const PROJECTS = [
  {
    title: 'Daily Pour',
    type: 'Ordering & Operations System',
    image: '/project-daily-pour.png',
    url: 'https://dailypour.vercel.app',
    stack: 'Next.js · Supabase · Paystack',
    status: 'shipped',
  },
  {
    title: 'Konstrukt',
    type: 'AI Copilot for Engineers',
    image: '/project-konstrukt.png',
    url: 'https://konstrukt.it.com',
    stack: 'React · Python · AI · CAD',
    status: 'building',
  },
  {
    title: 'KingKaro',
    type: 'Commerce Experience',
    image: '/project-kingkaro.png',
    url: 'https://kingkaro.vercel.app',
    stack: 'React · Commerce · WhatsApp',
    status: 'shipped',
  },
  {
    title: 'Sampeace',
    type: 'Industrial Machinery Website',
    image: '/project-sampeace.png',
    url: 'https://sampeace-international.vercel.app',
    stack: 'Next.js · Responsive UI',
    status: 'shipped',
  },
  {
    title: 'Strong Hand',
    type: 'Church Digital Platform',
    image: '/project-stronghand.png',
    url: 'https://strong-hand-of-jah.vercel.app',
    stack: 'Next.js · Content Platform',
    status: 'shipped',
  },
  {
    title: 'Aura',
    type: 'Immersive Product Website',
    image: '/project-aura.png',
    url: 'https://aura-beyond-sound.vercel.app',
    stack: 'React · Motion · 3D Web',
    status: 'shipped',
  },
  {
    title: 'Divine Portfolio',
    type: 'Personal Developer Portfolio',
    image: '/project-divine-portfolio-new.png',
    url: 'https://divine-portfolio-psi.vercel.app',
    stack: 'React · TypeScript · Motion',
    status: 'shipped',
  },
  {
    title: 'Sparkles Jewelleries',
    type: 'Luxury Jewellery Experience',
    image: '/project-sparkles-jewelleries.png',
    url: 'https://sparkles-jewelleries.vercel.app',
    stack: 'HTML · CSS · JavaScript',
    status: 'shipped',
  },
  {
    title: 'Royal Triple Dee College',
    type: 'School Website & Result Portal',
    image: '/project-royal-triple-dee.png',
    url: 'https://royal-triple-dee-college.vercel.app',
    stack: 'HTML · CSS · JavaScript',
    status: 'shipped',
  },
];
const FILES = {
  'bio.md': {
    title: 'Hello, World.',
    body: 'I build practical digital products that help businesses operate better, serve customers, automate processes, accept payments, and manage information.',
    rows: [
      ['01', 'name', 'Okpara Divine Kelechukwu'],
      ['02', 'role', 'Full-Stack Developer'],
      ['03', 'focus', 'Business systems & digital products'],
    ],
    icon: 'bio',
  },
  'education.md': {
    title: 'Academic Background.',
    body: 'I am currently studying at university while expanding my knowledge of software engineering, backend systems, databases, and architecture.',
    rows: [
      ['01', 'level', 'University Student'],
      ['02', 'track', 'Software Engineering'],
      ['03', 'mode', 'Learning by building'],
    ],
    icon: 'education',
  },
  'location.md': {
    title: 'Geographic Node.',
    body: 'Based in Lagos, Nigeria, and available for freelance work, collaborations, and ambitious software projects.',
    rows: [
      ['01', 'base', 'Lagos, Nigeria'],
      ['02', 'timezone', 'WAT · UTC+1'],
      ['03', 'status', 'Available'],
    ],
    icon: 'location',
  },
};
const SERVICES = [
  {
    id: '01',
    name: 'Digital Products',
    text: 'Design and build complete web applications and digital products—from the interface to the systems behind them.',
    meta: 'PRODUCT / FULL-STACK',
  },
  {
    id: '02',
    name: 'Business Systems',
    text: 'Create systems for orders, inventory, staff, bookings, dashboards, customers, and internal operations.',
    meta: 'SYSTEMS / OPERATIONS',
  },
  {
    id: '03',
    name: 'Web Experiences',
    text: 'Create polished websites and interactive frontend experiences for businesses, products, and brands.',
    meta: 'FRONTEND / MOTION',
  },
  {
    id: '04',
    name: 'Commerce & Payments',
    text: 'Build e-commerce systems, checkout experiences, payment integrations, and ordering workflows.',
    meta: 'COMMERCE / PAYMENTS',
  },
];
const TECH = {
  HTML: {
    group: 'Frontend',
    code: '<main class="product">\n  <h1>Build with purpose.</h1>\n  <button>Start project</button>\n</main>',
  },
  CSS: {
    group: 'Frontend',
    code: '.product {\n  display: grid;\n  gap: 1.5rem;\n  container-type: inline-size;\n}',
  },
  JavaScript: {
    group: 'Frontend',
    code: 'const product = await build({\n  idea, users, constraints\n});\nproduct.ship();',
  },
  TypeScript: {
    group: 'Frontend',
    code: 'type Product = {\n  status: "building" | "shipped";\n  solve(problem: Problem): Solution;\n};',
  },
  React: {
    group: 'Frontend',
    code: 'export function Product() {\n  const [ready, setReady] = useState(false);\n  return <Build status={ready} />;\n}',
  },
  'Next.js': {
    group: 'Frontend',
    code: 'export default async function Page() {\n  const work = await getProjects();\n  return <Portfolio work={work} />;\n}',
  },
  'Node.js': {
    group: 'Backend',
    code: 'app.post("/orders", async (req, res) => {\n  const order = await queue.add(req.body);\n  res.json(order);\n});',
  },
  Python: {
    group: 'Backend',
    code: 'def build_solution(problem: Problem):\n    plan = architect(problem)\n    return ship(plan)',
  },
  Figma: { group: 'Design', code: '' },
  APIs: {
    group: 'Backend',
    code: 'POST /api/projects\n200 OK\n{ "status": "shipped" }',
  },
  Payments: {
    group: 'Systems',
    code: 'const payment = await paystack.initialize({\n  amount, email, reference\n});',
  },
  Databases: {
    group: 'Systems',
    code: 'SELECT project, status\nFROM portfolio\nORDER BY impact DESC;',
  },
};

function useType(text: string, delay = 0, speed = 65) {
  const [v, setV] = useState('');
  useEffect(() => {
    let interval: number;
    let i = 0;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        i++;
        setV(text.slice(0, i));
        if (i >= text.length) window.clearInterval(interval);
      }, speed);
    }, delay);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, delay, speed]);
  return v;
}
function Corners() {
  return (
    <>
      <i className="corner tl" />
      <i className="corner tr" />
      <i className="corner bl" />
      <i className="corner br" />
    </>
  );
}
function BrandIcon({ name }: { name: 'email' | 'github' | 'whatsapp' }) {
  return <img src={`/brand-${name}.svg`} alt="" aria-hidden="true" />;
}

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [active, setActive] = useState('home');
  const [menu, setMenu] = useState(false);
  const [file, setFile] = useState<keyof typeof FILES>('bio.md');
  const [showAll, setShowAll] = useState(false);
  const [service, setService] = useState(0);
  const [tech, setTech] = useState<keyof typeof TECH>('HTML');
  const [code, setCode] = useState('');
  const [contactTyped, setContactTyped] = useState('');
  const codeTimer = useRef<number | undefined>(undefined);
  const hello = useType("HELLO, I'M DIVINE", 350, 88);
  const role = useType('FULL-STACK DEVELOPER', 2050, 52);
  const builder = useType('SOFTWARE BUILDER', 3150, 58);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  useEffect(() => {
    const reveal = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            if (e.target.id === 'contact') {
              let i = 0;
              const phrase = 'together.';
              const timer = setInterval(() => {
                i++;
                setContactTyped(phrase.slice(0, i));
                if (i === phrase.length) clearInterval(timer);
              }, 95);
            }
            reveal.unobserve(e.target);
          }
        }),
      { threshold: 0.14 },
    );
    document
      .querySelectorAll('[data-reveal]')
      .forEach((e) => reveal.observe(e));
    const sections = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-35% 0px -55%' },
    );
    NAV.forEach(([id]) => {
      const e = document.getElementById(id);
      if (e) sections.observe(e);
    });
    return () => {
      reveal.disconnect();
      sections.disconnect();
    };
  }, [showAll]);
  useEffect(() => {
    clearInterval(codeTimer.current);
    setCode('');
    if (tech === 'Figma') return;
    let i = 0;
    const target = TECH[tech].code;
    codeTimer.current = window.setInterval(() => {
      i++;
      setCode(target.slice(0, i));
      if (i >= target.length) clearInterval(codeTimer.current);
    }, 18);
    return () => clearInterval(codeTimer.current);
  }, [tech]);
  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenu(false);
  };
  const current = FILES[file];
  return (
    <main>
      <div className="boot" />
      <header className="site-header">
        <button
          className="odk-logo"
          onClick={() => go('home')}
          aria-label="Go home"
        >
          <span>K</span>
          <span>O</span>
          <span>D</span>
          <i />
        </button>
        <nav className={menu ? 'open' : ''}>
          {NAV.map(([id, label]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={active === id ? 'active' : ''}
            >
              <i>◉</i>
              {label.toUpperCase()}
            </button>
          ))}
        </nav>
        <div className="head-actions">
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon /> : <Sun />}
          </button>
          <button
            className="mobile-menu"
            onClick={() => setMenu(!menu)}
            aria-label="Menu"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <section id="home" className="hero shell">
        <div className="hero-copy">
          <p className="hero-hello">
            {hello}
            <i className="cursor" />
          </p>
          <h1>
            CODE BY <span>DIVINE</span>
          </h1>
          <div className="role-surface">
            <p>
              {role}
              <i className="cursor" />
            </p>
            <p>
              {builder}
              <i className="cursor" />
            </p>
            <small>product-minded / systems-focused / detail-driven</small>
          </div>
          <p className="hero-body intro-reveal">
            I turn business problems and ambitious ideas into useful,
            well-designed digital products—from customer-facing experiences to
            the systems working behind them.
          </p>
          <div className="hero-actions intro-reveal">
            <button onClick={() => go('projects')}>
              View Projects <ArrowUpRight />
            </button>
            <button className="talk" onClick={() => go('contact')}>
              <span>Let's Talk</span>
              <MessageCircle />
            </button>
          </div>
          <div className="stats intro-reveal">
            <div>
              <b>09+</b>
              <span>projects shipped</span>
              <em>↗</em>
            </div>
            <div>
              <b>10+</b>
              <span>technologies</span>
              <em>↗</em>
            </div>
            <div>
              <b>01</b>
              <span>focus: useful software</span>
              <em>●</em>
            </div>
          </div>
        </div>
        <aside className="cyber-card intro-reveal">
          <Corners />
          <div className="cyber-image">
            <img
              src="/hero-cyber.png"
              alt="Anonymous cyber developer artwork"
            />
            <span />
          </div>
          <p>▣ AVAILABLE / LAGOS, NG</p>
          <div>
            <a href={WA} target="_blank">
              <BrandIcon name="whatsapp" />
              WhatsApp
            </a>
            <a href={GH} target="_blank">
              <BrandIcon name="github" />
              GitHub
            </a>
          </div>
        </aside>
        <button
          className="down"
          onClick={() => go('about')}
          aria-label="Explore portfolio"
        >
          <ArrowDown />
        </button>
      </section>
      <section id="about" className="shell section" data-reveal>
        <div className="editor-bar">
          <span>● ● ●</span>
          <b>portfolio / about / {file}</b>
          <em>UTF-8　Ln 1, Col 1</em>
        </div>
        <div className="editor-path">
          <code>~/portfolio</code>
          <span>›</span>
          <strong>{file}</strong>
          <i>● saved</i>
        </div>
        <div className="file-layout">
          <aside>
            <p>EXPLORER</p>
            {(Object.keys(FILES) as (keyof typeof FILES)[]).map((name) => (
              <button
                className={file === name ? 'active' : ''}
                onClick={() => setFile(name)}
                key={name}
              >
                <span>▱</span>
                {name}
                <i>{file === name ? '●' : ''}</i>
              </button>
            ))}
          </aside>
          <article className="file-content" key={file}>
            <Corners />
            <div className="code-lines">
              01
              <br />
              02
              <br />
              03
              <br />
              04
              <br />
              05
              <br />
              06
            </div>
            <div>
              <p className="syntax">// ACTIVE FILE: {file.toUpperCase()}</p>
              <h2>
                {current.title}
                <i className="cursor" />
              </h2>
              <p>{current.body}</p>
              <dl>
                {current.rows.map(([line, key, value], i) => (
                  <div
                    style={{ '--d': `${i * 100}ms` } as React.CSSProperties}
                    key={key}
                  >
                    <small>{line}</small>
                    <dt>{key}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <span className="terminal-status">
                ✓ file loaded　·　status: ready
              </span>
            </div>
            <div className="file-symbol">
              {current.icon === 'location' ? (
                <MapPin />
              ) : current.icon === 'education' ? (
                <Braces />
              ) : (
                <Database />
              )}
              <b>{current.icon.toUpperCase()}</b>
            </div>
          </article>
        </div>
      </section>
      <section id="projects" className="shell section" data-reveal>
        <div className="section-head">
          <div>
            <p>SELECTED_WORK.JSON</p>
            <h2>Projects that solve.</h2>
          </div>
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show featured' : 'View All Projects'} <ArrowUpRight />
          </button>
        </div>
        <div className={`projects ${showAll ? 'all' : ''}`}>
          {(showAll ? PROJECTS : PROJECTS.slice(0, 3)).map((p, i) => (
            <a
              href={p.url}
              target="_blank"
              className={`project project-${i % 3}`}
              key={p.title}
              data-reveal
              style={{ '--delay': `${i * 90}ms` } as React.CSSProperties}
            >
              <Corners />
              <div className="shot">
                <img src={p.image} alt={`${p.title} project screenshot`} />
                <span>
                  VIEW PROJECT <ArrowUpRight />
                </span>
              </div>
              <div className="project-meta">
                <p>
                  0{i + 1} / {p.stack}
                </p>
                <i>status: {p.status}</i>
              </div>
              <h3>{p.title}</h3>
              <span>{p.type}</span>
            </a>
          ))}
        </div>
      </section>
      <section
        id="services"
        className="shell section services-section"
        data-reveal
      >
        <p className="kicker">WHAT_I_DO.TS</p>
        <div className="service-layout">
          <div className="service-list">
            {SERVICES.map((s, i) => (
              <button
                onMouseEnter={() => setService(i)}
                onFocus={() => setService(i)}
                onClick={() => setService(i)}
                className={service === i ? 'active' : ''}
                key={s.id}
              >
                <small>{s.id}</small>
                <span>{s.name}</span>
                <ArrowUpRight />
              </button>
            ))}
          </div>
          <article className="service-detail" key={service}>
            <Corners />
            <p>{SERVICES[service].meta}</p>
            <h2>{SERVICES[service].name}</h2>
            <p>{SERVICES[service].text}</p>
            <div className="service-terminal">
              <span>$ capability --inspect</span>
              <i>✓ ready to build</i>
            </div>
            <button onClick={() => go('contact')}>
              Discuss a project <ArrowUpRight />
            </button>
          </article>
        </div>
      </section>
      <section id="expertise" className="shell section" data-reveal>
        <div className="section-head">
          <div>
            <p>EXPERTISE / INTERACTIVE</p>
            <h2>Tools I build with.</h2>
          </div>
          <span className="section-note">hover or tap a technology</span>
        </div>
        <div className="expertise">
          <div className="tech-list">
            {Object.entries(TECH).map(([name, data]) => (
              <button
                onMouseEnter={() => setTech(name as keyof typeof TECH)}
                onFocus={() => setTech(name as keyof typeof TECH)}
                onClick={() => setTech(name as keyof typeof TECH)}
                className={tech === name ? 'active' : ''}
                key={name}
              >
                <span>{name}</span>
                <small>{data.group}</small>
                <i>↗</i>
              </button>
            ))}
          </div>
          <div className="code-editor">
            <div className="code-tabs">
              <span>● ● ●</span>
              <b>
                {tech === 'Figma'
                  ? 'design.fig'
                  : `${tech.toLowerCase().replace('.', '')}.${tech === 'Python' ? 'py' : tech === 'CSS' ? 'css' : tech === 'HTML' ? 'html' : 'tsx'}`}
              </b>
              <i>● live</i>
            </div>
            {tech === 'Figma' ? (
              <div className="figma-canvas">
                <div className="frame">
                  <small>FRAME / 1280 × 720</small>
                  <div className="wire-nav" />
                  <div className="wire-grid">
                    <span />
                    <span />
                    <span />
                  </div>
                  <button>BUTTON</button>
                </div>
                <aside>
                  <b>DESIGN</b>
                  <span>Auto layout</span>
                  <span>12px gap</span>
                  <span>8pt grid</span>
                </aside>
              </div>
            ) : (
              <div className="code-body">
                <div className="line-numbers">
                  01
                  <br />
                  02
                  <br />
                  03
                  <br />
                  04
                  <br />
                  05
                  <br />
                  06
                </div>
                <pre>
                  <code>{code}</code>
                  <i className="cursor code-cursor" />
                </pre>
              </div>
            )}
            <div className="editor-footer">
              <span>main*</span>
              <span>UTF-8　Spaces: 2　{TECH[tech].group}</span>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact section" data-reveal>
        <div className="shell contact-inner">
          <div className="contact-heading">
            <p>CONTACT.SH / OPEN CHANNEL</p>
            <div className="contact-availability">
              <i /> available_for_work.ts
            </div>
            <h2>
              Let's build{' '}
              <span>
                {contactTyped}
                <i className="cursor" />
              </span>
            </h2>
            <p className="contact-lead">
              <strong>Have an idea, project, or business problem?</strong>
              <span>Let's turn it into something that works.</span>
            </p>
          </div>
          <div className="contact-console">
            <div className="console-top">
              <span>● ● ●</span>
              <b>new-project.ts</b>
              <i>WAT / UTC+1</i>
            </div>
            <div className="console-line">
              <span>divine@portfolio:~$</span>
              <code>ready_to_build = true</code>
              <i className="cursor" />
            </div>
            <div className="contact-methods">
              <a href={EMAIL} aria-label="Email Divine">
                <span className="contact-icon">
                  <BrandIcon name="email" />
                </span>
                <span className="contact-copy">
                  <b>Message me</b>
                  <small>divineokpara01@gmail.com</small>
                </span>
                <ArrowUpRight />
              </a>
              <a
                href={GH}
                target="_blank"
                rel="noreferrer"
                aria-label="View Divine's GitHub profile"
              >
                <span className="contact-icon">
                  <BrandIcon name="github" />
                </span>
                <span className="contact-copy">
                  <b>GitHub</b>
                  <small>View my code and projects</small>
                </span>
                <ArrowUpRight />
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat with Divine on WhatsApp"
              >
                <span className="contact-icon">
                  <BrandIcon name="whatsapp" />
                </span>
                <span className="contact-copy">
                  <b>WhatsApp</b>
                  <small>Chat with me directly</small>
                </span>
                <ArrowUpRight />
              </a>
            </div>
            <div className="contact-status">
              <span>● OPEN TO FREELANCE & COLLABORATIONS</span>
              <i>Lagos, Nigeria</i>
            </div>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="shell video-footer">
          <div className="video-footer-intro">
            <button
              className="odk-logo mini"
              onClick={() => go('home')}
              aria-label="Back to home"
            >
              <span>K</span>
              <span>O</span>
              <span>D</span>
              <i />
            </button>
            <h2>Let's Build Together.</h2>
            <p>Crafting useful, reliable digital products.</p>
          </div>
          <nav className="footer-navigation" aria-label="Footer navigation">
            <b>NAVIGATION</b>
            <button onClick={() => go('home')}>Home</button>
            <button onClick={() => go('about')}>About</button>
            <button onClick={() => go('projects')}>Projects</button>
          </nav>
          <div className="footer-socials">
            <b>SOCIALS</b>
            <div>
              <a href={EMAIL} aria-label="Email Divine">
                <BrandIcon name="email" />
              </a>
              <a href={GH} target="_blank" rel="noreferrer" aria-label="GitHub">
                <BrandIcon name="github" />
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <BrandIcon name="whatsapp" />
              </a>
            </div>
          </div>
          <div className="video-footer-base">
            <span>© 2026 Divine Kelechukwu Okpara</span>
            <span>Designed & built by Divine.</span>
            <button onClick={() => go('home')}>BACK TO TOP ↑</button>
          </div>
        </div>
      </footer>
    </main>
  );
}
