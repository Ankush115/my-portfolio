import React, { useEffect, useRef, useState } from "react";

const sample = [
  {
    title: "E-commerce UI(React)",
    desc: "An interactive storefront UI built with React featuring product browsing, cart interactions, and responsive shopping layouts.",
    role: "Frontend Developer",
    status: "Open Source",
    url: "https://shoponline-vert.vercel.app/",
    repo: "https://github.com/Ankush115/react-ecommerce-ui",
    image: "./images/shopingcartlogo.png",
    tags: ["React", "JavaScript", "UI Design", "CSS", "Vite"],
    stats: [
     {label:"Pages",value:"5+"}, 
      { label: "Products", value: "30+" },
      {label:"Users", value:"Growing"},
      { label: "Interactions", value: "100+" },
      { label: "Stars", value: "4.5" },
    ],
    highlights: [
      "Simple Ecommerce UI for practice",
      "Responsive product grid",
      "Modern e-commerce layout",
      "Reusable shopping components",
    ],
  },
  {
    title: "To-Do App",
    desc: "A lightweight task manager built with React to create, update, and organize daily to-dos with a clean, responsive interface.",
    role: "Frontend Developer",
    status: "Open Source",
    url: "https://github.com/Ankush115/todo",
    repo: "https://github.com/Ankush115/todo",
    image: "./images/todopagelogo.png",
    tags: ["React", "JavaScript", "Productivity", "LocalStorage"],
    stats: [
      { label: "Tasks", value: "Flexible" },
      { label: "Users", value: "Growing" },
      { label: "Stars", value: "4.7" },
    ],
    highlights: [
      "Simple todo app for practice",
      "Add and manage tasks",
      "Responsive minimal layout",
      "Smooth task interactions",
    ],
  },
  
  {
    title: "Registration Form",
    desc: "A modern landing page with reusable interface components, polished visuals, and responsive design patterns.",
    role: "Frontend Developer",
    status: "Live",
    url: "https://codenza-ui.vercel.app",
    repo: "https://github.com/Ankush115/user-interface",
    image: "./images/registrationpagelogo.png",
    tags: ["JavaScript", "CSS", "Responsive Design", "Vite","React","Express","MongoDB"],
    stats: [
      { label: "Pages", value: "2" },
      { label: "Deployments", value: "Live" },
      { label: "Stars", value: "4.8" },
    ],
    highlights: [
      "registration form ",
      "Clean landing page design",
      "Reusable UI patterns",
      "Responsive navigation and hero",
      "stored data in local storage and mongoDB database",
    ],
  },

  {
    title: "HealthCare Insurance Management System",
    desc: "A comprehensive web platform for managing healthcare-insurance policies, user records, and articles with intuitive dashboards.",
    role: "Frontend Developer",
    status: "Live",
    url: "https://www.apollopharmacy.in/?srsltid=AfmBOoog48WqpIcK1JS3aQ-aBdLybhl5GU5C9rm_aTdcnjptewClHPIC",
    repo: "#",
    image: "./images/healthcarelogo.jpg",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "UI Design",
      "TypeScript",
      "React-Query/TanStack-Query",
      "Redux/Redux Toolkit",
    ],
    stats: [
      { label: "Users", value: "10K+" },
      { label: "Deployments", value: "Live" },
      { label: "Pages", value: "18+" },
      { label: "Stars", value: "4.9" },
    ],
    highlights: [
      "Responsive analytics dashboard",
      "Secure user and policy flows",
      "Realtime coverage insights",
      "Comprehensive article management",
      "Hospital and insurance provider directory",
    ],
  },
];

function AnimatedStat({ value, active }) {
  const [displayValue, setDisplayValue] = useState(value);
  const frameRef = useRef(0);

  useEffect(() => {
    const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!active || !match) {
      setDisplayValue(value);
      return;
    }

    const target = parseFloat(match[1]);
    const suffix = match[2] || "";
    const duration = 1200;
    const startTime = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = target * easeOutCubic(progress);
      const formatted = Number.isInteger(target)
        ? Math.round(current)
        : Math.round(current * 10) / 10;
      setDisplayValue(`${formatted}${suffix}`);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [active, value]);

  return <>{displayValue}</>;
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [revealed, setRevealed] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const section = projectsRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.18 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const allTags = [...new Set(sample.flatMap((p) => p.tags))];
  const filtered =
    filter === "all" ? sample : sample.filter((p) => p.tags.includes(filter));

  return (
    <section
      id="projects"
      ref={projectsRef}
      className={`section projects ${revealed ? "reveal" : "hidden"}`}
    >
      <div className="container">
        <div className="projects-header">
          <div>
            <h2>Featured Projects</h2>
            <p className="projects-subtitle">
              Showcasing my best work across different technologies and domains
            </p>
          </div>
          <div className="projects-filters">
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`filter-btn ${filter === tag ? "active" : ""}`}
                onClick={() => setFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filtered.map((p, idx) => (
            <article
              key={p.title}
              className={`project-card ${p.featured ? "featured" : ""}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="project-badge">
                {p.featured && (
                  <span className="badge featured-badge">Featured</span>
                )}
              </div>

              <div className="project-media">
                <img
                  src={
                    p.image ||
                    `https://via.placeholder.com/600x360?text=${encodeURIComponent(p.title)}`
                  }
                  alt={p.title}
                />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <a
                      href={p.url}
                      className="overlay-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>

                <div className="project-meta">
                  {p.role && <span className="project-pill">{p.role}</span>}
                  {p.status && (
                    <span className="project-pill project-pill-alt">
                      {p.status}
                    </span>
                  )}
                </div>

                <div className="project-tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-stats">
                  {p.stats?.map((stat) => (
                    <div key={stat.label} className="project-stat">
                      <span>
                        <AnimatedStat value={stat.value} active={revealed} />
                      </span>
                      <small>{stat.label}</small>
                    </div>
                  ))}
                </div>

                <div className="project-highlights">
                  {p.highlights?.map((item) => (
                    <span key={item} className="project-highlight">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    className="btn btn-primary-small"
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    className="btn btn-secondary-small"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="no-projects">
            <p>No projects found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
