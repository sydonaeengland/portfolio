const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

// Using -original variants where colored, -plain where original is dark/invisible on violet
const ICONS = [
  { name: 'Java',        icon: `${DI}/java/java-original.svg` },
  { name: 'Python',      icon: `${DI}/python/python-original.svg` },
  { name: 'JavaScript',  icon: `${DI}/javascript/javascript-original.svg` },
  { name: 'React',       icon: `${DI}/react/react-original.svg` },
  { name: 'PHP',         icon: `${DI}/php/php-original.svg` },
  { name: 'Flask',       icon: `${DI}/flask/flask-original.svg` },
  { name: 'Vue',         icon: `${DI}/vuejs/vuejs-original.svg` },
  { name: 'MySQL',       icon: `${DI}/mysql/mysql-original.svg` },
  { name: 'PostgreSQL',  icon: `${DI}/postgresql/postgresql-original.svg` },
  { name: 'Git',         icon: `${DI}/git/git-original.svg` },
  { name: 'Figma',       icon: `${DI}/figma/figma-original.svg` },
  { name: 'GitHub',      icon: `${DI}/github/github-original.svg` },
  { name: 'Bootstrap',   icon: `${DI}/bootstrap/bootstrap-original.svg` },
  { name: 'HTML',        icon: `${DI}/html5/html5-original.svg` },
  { name: 'CSS',         icon: `${DI}/css3/css3-original.svg` },
];

export default function TechStack() {
  const doubled = [...ICONS, ...ICONS];

  return (
    <div className="marquee-strip">
      <div className="marquee-row left" aria-label="Tech stack">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={`${item.name}-${i}`}>
            <span className="marquee-icon-wrap">
              <img src={item.icon} alt={item.name} />
            </span>
            <span className="marquee-item-name">{item.name}</span>
            <span className="marquee-sep-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
