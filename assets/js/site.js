import { portfolio as d } from "./content.js";

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function esc(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderHeader(activePage) {
  const navItems = [
    { label: "Home", href: "index.html", key: "home" },
    { label: "Education", href: "education.html", key: "education" },
    { label: "Languages", href: "languages.html", key: "languages" },
    { label: "Research", href: "research.html", key: "research" },
    { label: "Publications", href: "publications.html", key: "publications" },
    { label: "Projects", href: "projects.html", key: "projects" },
    { label: "Certifications", href: "certifications.html", key: "certifications" },
    { label: "Achievements", href: "achievements.html", key: "achievements" },
    { label: "Experiences", href: "experiences.html", key: "experiences" },
    { label: "Extra-Curricular", href: "extracurricular.html", key: "extracurricular" },
    { label: "Presentations", href: "presentations.html", key: "presentations" },
    { label: "Gallery", href: "gallery.html", key: "gallery" }
  ];

  const header = $("#site-header");
  if (!header) return;

  header.innerHTML = `
    <header class="navbar">
      <a class="nav-brand" href="index.html">SADIA <span>AFROZ OISHI</span></a>
      
      <div class="nav-scroll-wrapper">
        <button class="nav-scroll-btn left" id="nav-scroll-left" aria-label="Scroll menu left">
          <i class="fas fa-chevron-left"></i>
        </button>

        <nav class="nav-links" id="nav-links-container">
          ${navItems
            .map(
              (item) =>
                `<a class="${activePage === item.key ? "active-nav" : ""}" href="${item.href}">${item.label}</a>`
            )
            .join("")}
        </nav>

        <button class="nav-scroll-btn right" id="nav-scroll-right" aria-label="Scroll menu right">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>

      <a class="nav-cv-btn" href="assets/documents/Sadia-Afroz-Oishi-CV.pdf" download="Sadia_Afroz_Oishi_CV.pdf" target="_blank" rel="noopener" aria-label="Download Full CV">
        <i class="fas fa-file-arrow-down"></i> <span>Download CV</span>
      </a>

      <button class="nav-toggle" id="nav-toggle-btn" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
    </header>
  `;

  const toggleBtn = $("#nav-toggle-btn");
  const navLinks = $("#nav-links-container");
  const scrollLeftBtn = $("#nav-scroll-left");
  const scrollRightBtn = $("#nav-scroll-right");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });
  }

  if (scrollLeftBtn && navLinks) {
    scrollLeftBtn.addEventListener("click", () => {
      navLinks.scrollBy({ left: -220, behavior: "smooth" });
    });
  }

  if (scrollRightBtn && navLinks) {
    scrollRightBtn.addEventListener("click", () => {
      navLinks.scrollBy({ left: 220, behavior: "smooth" });
    });
  }

  const activeLink = $(".nav-links a.active-nav");
  if (activeLink && navLinks) {
    setTimeout(() => {
      activeLink.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }, 100);
  }
}

function renderSocialSidebar() {
  let sidebar = $("#social-sidebar-wrap");
  if (!sidebar) {
    sidebar = document.createElement("aside");
    sidebar.id = "social-sidebar-wrap";
    sidebar.className = "social-sidebar";
    document.body.appendChild(sidebar);
  }

  sidebar.innerHTML = `
    <a href="https://scholar.google.com/citations?user=c2tcMcYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" title="Google Scholar Profile"><i class="fas fa-graduation-cap"></i></a>
    <a href="https://www.linkedin.com/in/oishi12" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
    <a href="mailto:sadiaafrozoishi059@gmail.com" aria-label="Email" title="Direct Email"><i class="fas fa-envelope"></i></a>
    <a href="tel:+8801871554214" aria-label="Phone" title="Phone Contact"><i class="fas fa-phone"></i></a>
    <a href="assets/documents/Sadia-Afroz-Oishi-CV.pdf" download="Sadia_Afroz_Oishi_CV.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download CV" title="Download Full CV (PDF)"><i class="fas fa-file-pdf"></i></a>
  `;
}

function renderFooter() {
  const footer = $("#site-footer");
  if (!footer) return;

  footer.innerHTML = `
    <footer class="site-footer">
      <div class="footer-content">
        <a class="footer-brand" href="index.html">SADIA <span>AFROZ OISHI</span></a>
        <div class="footer-links">
          <a href="index.html">Home</a>
          <a href="education.html">Education</a>
          <a href="languages.html">Languages</a>
          <a href="research.html">Research</a>
          <a href="publications.html">Publications</a>
          <a href="projects.html">Projects</a>
          <a href="certifications.html">Certifications</a>
          <a href="achievements.html">Achievements</a>
          <a href="experiences.html">Experiences</a>
          <a href="extracurricular.html">Extra-Curricular</a>
          <a href="presentations.html">Presentations</a>
          <a href="gallery.html">Gallery</a>
          <a href="assets/documents/Sadia-Afroz-Oishi-CV.pdf" download="Sadia_Afroz_Oishi_CV.pdf" target="_blank" rel="noopener" style="color: var(--primary-accent); font-weight: 700;"><i class="fas fa-file-arrow-down"></i> Download CV</a>
        </div>
        <p class="footer-copy">© 2026 Sadia Afroz Oishi. All rights reserved · Department of Information and Communication Engineering, Pabna University of Science and Technology (PUST)</p>
      </div>
    </footer>
  `;
}

function pageHero(title, lead, sub, badgeText = "Portfolio Section") {
  return `
    <div class="page-hero-banner">
      <div class="page-hero-card">
        <div class="page-hero-badge"><i class="fas fa-circle-notch"></i> ${esc(badgeText)}</div>
        <h1 class="page-hero-title">${esc(title)}</h1>
        <p class="page-hero-lead">${esc(lead)}</p>
        ${sub ? `<p class="page-hero-sub">${esc(sub)}</p>` : ""}
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   LIGHTBOX MODAL UTILITY
   -------------------------------------------------------------------------- */
function setupLightbox() {
  let modal = $("#global-lightbox");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "global-lightbox";
    modal.className = "lightbox-modal";
    modal.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close-btn" id="lightbox-close-btn" aria-label="Close image"><i class="fas fa-times"></i></button>
        <div class="lightbox-img-box">
          <img id="lightbox-img" src="" alt="Enlarged visual evidence">
        </div>
        <div class="lightbox-info">
          <div class="lightbox-meta">
            <span class="pub-tag" id="lightbox-cat"></span>
            <span style="font-size: 13px; color: var(--text-dim); font-weight: 600;" id="lightbox-venue-date"></span>
          </div>
          <h3 id="lightbox-title" style="font-size: 18px; font-weight: 800; color: #0b1329; margin-bottom: 8px;"></h3>
          <p id="lightbox-desc" style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin: 0;"></p>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.closest("#lightbox-close-btn")) {
        modal.classList.remove("active");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        modal.classList.remove("active");
      }
    });
  }
}

function openLightbox(imgSrc, title, category, dateVenue, description) {
  setupLightbox();
  const modal = $("#global-lightbox");
  $("#lightbox-img").src = imgSrc;
  $("#lightbox-title").textContent = title || "";
  $("#lightbox-cat").textContent = category || "Visual Evidence";
  $("#lightbox-venue-date").textContent = dateVenue || "";
  $("#lightbox-desc").textContent = description || "";
  modal.classList.add("active");
}

/* --------------------------------------------------------------------------
   PAGE RENDERERS
   -------------------------------------------------------------------------- */
function renderHome(d) {
  const p = d.profile;

  let overlayHtml = "";
  if (!sessionStorage.getItem("visited_home")) {
    sessionStorage.setItem("visited_home", "true");
    overlayHtml = `
      <div id="welcome-overlay" class="welcome-overlay" onclick="this.classList.add('fade-out')">
        <div class="welcome-modal">
          <div class="welcome-badge"><i class="fas fa-star"></i> Welcome to My Portfolio</div>
          <h1 class="welcome-title">SADIA <span>AFROZ OISHI</span></h1>
          <div class="welcome-line"></div>
          <p class="welcome-subtitle">Computer Vision &amp; Deepfake Forensics Researcher</p>
        </div>
      </div>
    `;
  }

  $("#page-content").innerHTML = `
    ${overlayHtml}

    <section class="section hero-section" id="hero">
      <div class="section-container">
        <div class="home-hero-card">
          <div class="home-hero-split">
            
            <div class="hero-profile-card">
              <img src="${p.portrait}" alt="${esc(p.name)}" class="hero-profile-img">
            </div>

            <div class="about-hero-box">
              <div class="home-badge">
                <span class="badge-dot">■</span> COMPUTER VISION &amp; DEEPFAKE FORENSICS RESEARCHER
              </div>
              <h1 class="home-name">SADIA <span class="accent-text">AFROZ OISHI</span></h1>
              <p class="home-dept">
                <i class="fas fa-university"></i> ${esc(p.affiliation)}
              </p>
              <div class="about-hero-text">
                <p>${esc(p.intro)}</p>
                ${p.about.map((paragraph) => `<p style="margin-top: 12px;">${esc(paragraph)}</p>`).join("")}
              </div>
              <div class="hero-cta-buttons">
                <a class="btn-primary" href="assets/documents/Sadia-Afroz-Oishi-CV.pdf" download="Sadia_Afroz_Oishi_CV.pdf" target="_blank" rel="noopener"><i class="fas fa-file-arrow-down"></i> Download CV (PDF)</a>
                <a class="btn-secondary" href="assets/documents/Sadia_Afroz_Oishi_Full_CV.zip" download="Sadia_Afroz_Oishi_Full_CV.zip" target="_blank" rel="noopener"><i class="fas fa-file-zipper"></i> LaTeX / Overleaf Source</a>
                <a class="btn-secondary" href="mailto:${p.email}"><i class="fas fa-envelope"></i> Contact Me</a>
                <a class="btn-secondary" href="publications.html"><i class="fas fa-book-open"></i> Publications (8)</a>
                <a class="btn-secondary" href="research.html"><i class="fas fa-microscope"></i> Research Trajectory</a>
                <a class="btn-secondary" href="education.html"><i class="fas fa-graduation-cap"></i> Academic Credentials</a>
              </div>
            </div>

          </div>
        </div>

        <!-- STATS ROW -->
        <div class="stats-grid">
          ${d.stats
            .map(
              (s) => `
            <div class="stat-card">
              <div class="stat-value">${esc(s.value)}</div>
              <div class="stat-label">${esc(s.label)}</div>
            </div>
          `
            )
            .join("")}
        </div>

      </div>
    </section>

    <!-- PORTFOLIO DIRECTORY -->
    <section class="section portal-section">
      <div class="section-container">
        <h2 class="section-title">PORTFOLIO <span class="accent-text">DIRECTORY</span></h2>
        <p class="section-subtitle">Direct access to evidence-backed academic records, research publications, credentials, and achievements.</p>
        
        <div class="portal-grid">
          ${d.portalSections
            .map(
              (sec) => `
            <a class="portal-card" href="${sec.href}">
              <div class="portal-icon"><i class="${sec.icon}"></i></div>
              <h3 class="portal-card-title">${esc(sec.title)}</h3>
              <p class="portal-card-desc">${esc(sec.desc)}</p>
            </a>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderEducation(d) {
  $("#page-content").innerHTML = `
    ${pageHero("Education & Academic Background", "The engineering and mathematical foundation behind my research direction.", "B.Sc. in ICE from PUST (CGPA: 3.67), undergraduate deepfake thesis, and relevant machine intelligence coursework.", "Academic Foundation")}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">
        <h2 class="section-title">Academic <span class="accent-text">Degrees & Milestones</span></h2>
        
        <div class="timeline-list">
          ${d.education
            .map(
              (e) => `
            <article class="timeline-card">
              <div class="timeline-year">${esc(e.period)}</div>
              <div class="timeline-content">
                <h2>${esc(e.title)}</h2>
                <h3>${esc(e.place)}</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 8px;">
                  <div class="timeline-grade">${esc(e.grade)}</div>
                  ${e.mediumOfInstruction ? `<div class="timeline-grade" style="background: rgba(0, 136, 204, 0.12); color: #0088cc; border: 1px solid rgba(0, 136, 204, 0.35);"><i class="fas fa-certificate"></i> ${esc(e.mediumOfInstruction)}</div>` : ""}
                </div>
                ${e.status ? `<p style="font-size: 13.5px; color: var(--primary-accent); font-weight: 600; margin-bottom: 8px;">${esc(e.status)}</p>` : ""}
                <p style="color: var(--text-muted); font-size: 14.5px; line-height: 1.6;">${esc(e.description)}</p>
                ${
                  e.thesis
                    ? `<div class="thesis-highlight"><span>Undergraduate Capstone Thesis</span><strong>${esc(e.thesis)}</strong></div>`
                    : ""
                }
                ${
                  e.supervisor
                    ? `<div style="margin-top: 10px; font-size: 13.5px; color: var(--text-dim);">
                        <strong>Supervisor:</strong> ${esc(e.supervisor)}<br>
                        <strong>Academic Referee:</strong> ${esc(e.referee)}
                       </div>`
                    : ""
                }
              </div>
            </article>
          `
            )
            .join("")}
        </div>

        <!-- CORE COURSEWORK -->
        <div style="margin-top: 40px;" class="home-hero-card">
          <h3 style="font-size: 20px; font-weight: 800; text-transform: uppercase; margin-bottom: 16px; color: #0b1329;">Core Coursework Shaping Research</h3>
          <div class="tag-list">
            ${d.coursework.map((c) => `<span class="tag-item" style="font-size: 13px; padding: 6px 14px;">${esc(c)}</span>`).join("")}
          </div>
        </div>

        <!-- ACADEMIC REFERENCES -->
        <h2 class="section-title" style="margin-top: 45px;">Academic <span class="accent-text">Referees & Mentors</span></h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px;">
          ${(d.references || []).map((r) => `
            <div class="focus-card">
              <span class="home-badge" style="margin-bottom: 8px;"><i class="fas fa-user-tie"></i> ${esc(r.role)}</span>
              <h3 style="font-size: 19px; font-weight: 800; color: #0b1329; margin-bottom: 6px;">${esc(r.name)}</h3>
              <p style="font-size: 13.5px; color: var(--primary-accent); font-weight: 600; margin-bottom: 8px;">${esc(r.affiliation)}</p>
              <p style="font-size: 13.5px; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px;">${esc(r.relationship)}</p>
              <div style="font-size: 13px; color: var(--text-dim); display: flex; flex-direction: column; gap: 4px;">
                <span><i class="fas fa-envelope"></i> <a href="mailto:${r.email}" style="color: var(--primary-accent);">${esc(r.email)}</a></span>
                <span><i class="fas fa-phone"></i> ${esc(r.phone)}</span>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- DOWNLOAD CV BANNER -->
        <div style="margin-top: 30px;" class="home-hero-card">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
            <div>
              <span class="home-badge" style="margin-bottom: 8px;"><i class="fas fa-file-pdf"></i> CURRICULUM VITAE</span>
              <h3 style="font-size: 20px; font-weight: 800; color: #0b1329;">Full Academic Curriculum Vitae (CV)</h3>
              <p style="color: var(--text-muted); max-width: 700px; font-size: 14.5px; margin-top: 6px;">Comprehensive academic CV with detailed publication records, research projects, education milestones, technical competencies, and leadership honors.</p>
            </div>
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
              <a class="btn-primary" href="assets/documents/Sadia-Afroz-Oishi-CV.pdf" download="Sadia_Afroz_Oishi_CV.pdf" target="_blank" rel="noopener"><i class="fas fa-file-arrow-down"></i> Download CV (PDF)</a>
              <a class="btn-secondary" href="assets/documents/Sadia_Afroz_Oishi_Full_CV.zip" download="Sadia_Afroz_Oishi_Full_CV.zip" target="_blank" rel="noopener"><i class="fas fa-file-zipper"></i> LaTeX / Overleaf ZIP</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}

function renderLanguages(d) {
  $("#page-content").innerHTML = `
    ${pageHero(
      "Languages & Medium of Instruction",
      "Official linguistic verification, native fluency, and academic medium of instruction.",
      "Bangla (Native Mother Tongue) · English (Official Medium of Instruction for B.Sc. Engineering Degree)",
      "Language Verification"
    )}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">

        <!-- EXECUTIVE STATEMENT -->
        <div class="home-hero-card" style="margin-bottom: 36px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
            <span class="home-badge" style="margin-bottom: 0;">
              <i class="fas fa-certificate"></i> ACADEMIC COMMUNICATION STATEMENT
            </span>
          </div>
          <h2 style="font-size: clamp(20px, 2.5vw, 26px); font-weight: 800; color: #0b1329; text-transform: uppercase; margin-bottom: 12px;">
            Linguistic Competence for <span class="accent-text">International Graduate Studies</span>
          </h2>
          <p style="font-size: 15px; color: var(--text-muted); line-height: 1.7; margin-bottom: 12px;">
            As an aspiring international graduate researcher, precise, evidence-backed academic communication is central to my scholarly profile. My academic and research foundation is built on <strong>Bangla</strong> as my native mother tongue and <strong>English</strong> as the sole official Medium of Instruction (MOI) throughout my 4-year Bachelor of Science in Engineering degree at Pabna University of Science and Technology (PUST).
          </p>
          <p style="font-size: 14.5px; color: var(--text-dim); line-height: 1.6; margin: 0;">
            This bilingual capability enables rich rhetorical excellence—proven by winning the Parliamentary Debate Championship and Debater of the Tournament accolade—while maintaining high-level academic fluency across 5+ peer-reviewed IEEE conference publications, international oral research defenses, and peer-review evaluations.
          </p>
        </div>

        <!-- CORE LANGUAGE CARDS GRID -->
        <h2 class="section-title">Verified Language <span class="accent-text">Proficiency</span></h2>
        <p class="section-subtitle">Formal breakdown of instructional medium, native proficiency, and scholarly communication evidence.</p>

        <div class="lang-page-grid">
          ${(d.languages || []).map((l) => `
            <div class="lang-page-card ${l.badgeType === "native" ? "card-native" : "card-moi"}">
              <div class="lang-page-card-header">
                <div class="lang-page-icon-box">
                  <i class="${l.icon}"></i>
                </div>
                <div class="lang-page-meta">
                  <div class="lang-page-title-row">
                    <h3 class="lang-page-name">${esc(l.name)}</h3>
                    ${l.nativeName && l.nativeName !== l.name ? `<span class="lang-page-native">(${esc(l.nativeName)})</span>` : ""}
                  </div>
                  <span class="language-badge ${l.badgeType === "native" ? "badge-native" : "badge-moi"}">
                    ${l.badgeType === "native" ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-certificate"></i>'} ${esc(l.badgeText || l.level)}
                  </span>
                </div>
              </div>

              <p class="lang-page-summary">${esc(l.summary)}</p>

              <div class="lang-highlights-list">
                <h4 class="lang-highlights-heading"><i class="fas fa-list-check"></i> Key Competencies &amp; Evidence</h4>
                ${(l.highlights || []).map((h) => `
                  <div class="lang-highlight-item">
                    <span class="lang-highlight-dot"></span>
                    <div>
                      <strong>${esc(h.label)}:</strong>
                      <span>${esc(h.text)}</span>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>

        <!-- INSTITUTIONAL VERIFICATION CARD -->
        <div class="home-hero-card" style="margin-top: 40px;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px;">
            <div style="max-width: 820px;">
              <span class="home-badge" style="margin-bottom: 8px;">
                <i class="fas fa-building-columns"></i> INSTITUTIONAL VERIFICATION
              </span>
              <h3 style="font-size: 20px; font-weight: 800; color: #0b1329;">Medium of Instruction (MOI) Institutional Verification</h3>
              <p style="color: var(--text-muted); font-size: 14.5px; line-height: 1.6; margin-top: 8px;">
                Under the academic statutes of Pabna University of Science and Technology (PUST), all undergraduate degree curricula within the Department of Information and Communication Engineering are conducted 100% in the English language. All textbooks, examinations, laboratory practicals, technical reports, seminar presentations, and the final undergraduate research thesis were administered exclusively in English.
              </p>
              <p style="color: var(--text-dim); font-size: 13.5px; line-height: 1.5; margin-top: 6px;">
                This serves as direct institutional verification for graduate admissions committees, fellowship evaluators, and visa authorities requiring English Medium of Instruction (MOI) documentation.
              </p>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px; min-width: 210px;">
              <a class="btn-primary" href="publications.html"><i class="fas fa-book-open"></i> English Publications (8)</a>
              <a class="btn-secondary" href="presentations.html"><i class="fas fa-chalkboard-teacher"></i> Conference Presentations</a>
              <a class="btn-secondary" href="education.html"><i class="fas fa-graduation-cap"></i> Academic Credentials</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}

function renderResearch(d) {
  $("#page-content").innerHTML = `
    ${pageHero("Research & Scientific Work", "Explainable Deepfake Forensics, Spatio-Temporal Modeling, and Smart Agriculture AI.", "From orchard disease dataset engineering to concept bottleneck neural architectures.", "Scholarly Research")}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">
        
        <h2 class="section-title">Core Research <span class="accent-text">Pillars</span></h2>
        <div class="focus-grid">
          ${d.researchFocus
            .map(
              (f) => `
            <div class="focus-card">
              <span class="focus-mark">${esc(f.mark)}</span>
              <h3>${esc(f.title)}</h3>
              <p>${esc(f.text)}</p>
            </div>
          `
            )
            .join("")}
        </div>

        <h2 class="section-title" style="margin-top: 40px;">Selected Research <span class="accent-text">Case Studies</span></h2>
        <div class="research-case-list">
          ${d.researchExperience
            .map(
              (r) => `
            <article class="research-case-card">
              <div class="research-case-head">
                <span class="research-case-period">${esc(r.period)}</span>
              </div>
              <h2 class="research-case-title">${esc(r.title)}</h2>
              ${
                r.image
                  ? `<div class="media-frame"><img src="${r.image}" alt="${esc(r.title)}"></div>`
                  : ""
              }
              <p class="research-case-summary">${esc(r.summary)}</p>
              <ul class="research-case-contributions">
                ${r.contributions.map((c) => `<li>${esc(c)}</li>`).join("")}
              </ul>
              <div class="learning-box">
                <span>Research Impact &amp; Methodology</span>
                <p>${esc(r.outcome)}</p>
              </div>
              <div class="tag-list">
                ${r.tags.map((t) => `<span class="tag-item">${esc(t)}</span>`).join("")}
              </div>
            </article>
          `
            )
            .join("")}
        </div>

        <!-- DATASET HIGHLIGHT (MANGOFRUITBD) -->
        <h2 class="section-title" style="margin-top: 40px;">Featured Published <span class="accent-text">Dataset (MangoFruitBD)</span></h2>
        <article class="dataset-showcase">
          <div>
            <span class="pub-tag dataset-tag" style="margin-bottom: 10px; display: inline-block;"><i class="fas fa-database"></i> Open Access Research Data · 2nd Co-Author</span>
            <h2 style="font-size: 23px; font-weight: 800; color: #0b1329; margin-bottom: 6px;">${esc(d.dataset.title)}</h2>
            <p style="color: var(--primary-accent); font-weight: 700; font-size: 15px; margin-bottom: 12px;">${esc(d.dataset.subtitle)}</p>
            <p style="color: var(--text-muted); font-size: 14.5px; line-height: 1.6;">${esc(d.dataset.summary)}</p>
            
            <div style="margin-top: 14px;">
              <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--primary-accent);">Dataset Annotation &amp; Curation Tools:</span>
              <div class="skills-pill-group">
                ${d.dataset.annotationSkills.map((s) => `<span class="skill-pill"><i class="fas fa-check-circle"></i> ${esc(s)}</span>`).join("")}
              </div>
            </div>

            <div class="dataset-facts-grid">
              ${d.dataset.facts.map((f) => `<span class="dataset-fact-chip">${esc(f)}</span>`).join("")}
            </div>
          </div>
          <div style="text-align: center; display: flex; flex-direction: column; gap: 14px; align-items: center; justify-content: center;">
            <div style="font-size: 13px; font-weight: 700; color: var(--text-dim); text-transform: uppercase;">Role: ${esc(d.dataset.role)}</div>
            <a class="btn-primary" href="${d.dataset.doi}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Open Mendeley DOI</a>
            <span style="font-size: 12px; color: var(--text-dim); max-width: 220px; line-height: 1.4;">${esc(d.dataset.journalLink)}</span>
          </div>
        </article>

        <!-- CURRENT WORK / SUBMITTED PAPERS -->
        <h2 class="section-title" style="margin-top: 40px;">Submitted &amp; <span class="accent-text">Current Research Manuscripts</span></h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 22px;">
          ${d.currentWork
            .map(
              (w) => `
            <div class="focus-card" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span class="pub-tag" style="margin-bottom: 10px; display: inline-block;">${esc(w.status)} · ${esc(w.role)}</span>
                <h3 style="font-size: 18px; margin-bottom: 8px; line-height: 1.4;">${esc(w.title)}</h3>
                <p style="color: var(--primary-accent); font-weight: 700; font-size: 13.5px; margin-bottom: 6px;">${esc(w.venue)}</p>
                <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6;">${esc(w.description)}</p>
              </div>
            </div>
          `
            )
            .join("")}
        </div>

        <!-- TECHNICAL TOOLKIT -->
        <h2 class="section-title" style="margin-top: 50px;">Technical &amp; <span class="accent-text">Research Toolkit</span></h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
          ${(d.skills || [])
            .map(
              (sk) => `
            <div class="focus-card">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
                <div class="portal-icon" style="width: 42px; height: 42px; font-size: 16px;"><i class="${sk.icon}"></i></div>
                <h3 style="margin: 0; font-size: 16px;">${esc(sk.title)}</h3>
              </div>
              <p style="font-size: 13px; color: var(--text-dim); margin-bottom: 12px;">${esc(sk.description)}</p>
              <div class="tag-list">
                ${sk.items.map((it) => `<span class="tag-item"><b>${esc(it.mark)}</b> ${esc(it.name)}</span>`).join("")}
              </div>
            </div>
          `
            )
            .join("")}
        </div>

      </div>
    </section>
  `;
}

function renderPublications(d) {
  $("#page-content").innerHTML = `
    ${pageHero("Publications & Scholarly Records", "Peer-reviewed IEEE conference proceedings, submitted journal manuscripts, and published datasets.", "5+ Conference Papers · 2 Submitted Journal Manuscripts · 1 Mendeley Dataset", "Scholarly Publications")}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">
        
        <!-- FILTER BAR -->
        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 28px;" id="pub-filter-bar">
          <button class="tag-item active" style="cursor: pointer;" data-filter="all">All Records (${d.publications.length})</button>
          <button class="tag-item" style="cursor: pointer;" data-filter="first">First Author</button>
          <button class="tag-item" style="cursor: pointer;" data-filter="journal">Journal (Submitted)</button>
          <button class="tag-item" style="cursor: pointer;" data-filter="conf">IEEE Conferences</button>
          <button class="tag-item" style="cursor: pointer;" data-filter="data">Research Dataset</button>
        </div>

        <div class="publications-list" id="publications-container">
          ${d.publications
            .map(
              (p, idx) => `
            <article class="pub-card" data-category="${p.category.toLowerCase()}" data-badge="${p.badge.toLowerCase()}">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;">
                <span class="pub-tag ${p.category === "Research Dataset" ? "dataset-tag" : ""}">${esc(p.badge)}</span>
                <span style="font-size: 13px; font-weight: 700; color: var(--text-dim);">${esc(p.year)}</span>
              </div>
              <h2 style="font-size: 19px; font-weight: 800; color: #0b1329; margin-bottom: 8px; line-height: 1.4;">${esc(p.title)}</h2>
              <p style="font-size: 13.5px; color: var(--text-muted); margin-bottom: 6px;"><b>Authors:</b> ${esc(p.authors)}</p>
              <p style="font-size: 13.5px; color: var(--primary-accent); font-weight: 600; margin-bottom: 12px;"><i class="fas fa-landmark"></i> ${esc(p.venue)}</p>
              <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">${esc(p.abstract)}</p>
              <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
                ${
                  p.link && p.link !== "#"
                    ? `<a class="btn-primary" href="${p.link}" target="_blank" rel="noopener" style="font-size: 12.5px; padding: 6px 14px;"><i class="fas fa-external-link-alt"></i> ${p.xploreId ? esc(p.xploreId) : (p.doi ? "DOI: " + esc(p.doi) : "View Record")}</a>`
                    : `<span class="tag-item" style="font-size: 12px; padding: 5px 12px;"><i class="fas fa-clock"></i> Under Review / In Press</span>`
                }
                ${
                  p.doi && p.link !== ("https://doi.org/" + p.doi)
                    ? `<a class="btn-secondary" href="https://doi.org/${p.doi}" target="_blank" rel="noopener" style="font-size: 12.5px; padding: 6px 14px;"><i class="fas fa-link"></i> Direct DOI</a>`
                    : ""
                }
              </div>
            </article>
          `
            )
            .join("")}
        </div>

      </div>
    </section>
  `;

  // Filtering interaction
  const filterBtns = $$("#pub-filter-bar button");
  const pubCards = $$("#publications-container .pub-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;

      pubCards.forEach((card) => {
        const cat = card.dataset.category || "";
        const badge = card.dataset.badge || "";
        if (f === "all") {
          card.style.display = "block";
        } else if (f === "first") {
          card.style.display = badge.includes("first author") ? "block" : "none";
        } else if (f === "journal") {
          card.style.display = (cat.includes("journal") || badge.includes("journal")) ? "block" : "none";
        } else if (f === "conf") {
          card.style.display = (cat.includes("conference") || badge.includes("conference")) ? "block" : "none";
        } else if (f === "data") {
          card.style.display = (cat.includes("dataset") || badge.includes("dataset")) ? "block" : "none";
        }
      });
    });
  });
}

function renderProjects(d) {
  $("#page-content").innerHTML = `
    ${pageHero("Technical Projects & Systems", "Implemented architectures in deepfake forensics, smart agricultural vision, mobile biosignals, and databases.", "Case studies detailing implementation architectures, challenges overcome, and outcomes.", "Technical Projects")}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">
        
        <div class="projects-grid">
          ${d.projects
            .map(
              (p) => `
            <article class="project-card">
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;">
                <span class="pub-tag">${esc(p.category)}</span>
                <span style="font-size: 13px; font-weight: 700; color: var(--text-dim);">${esc(p.period)}</span>
              </div>
              <h2 style="font-size: 20px; font-weight: 800; color: #0b1329; margin-bottom: 8px;">${esc(p.title)}</h2>
              <p style="font-size: 14.5px; color: var(--primary-accent); font-weight: 600; margin-bottom: 12px;">${esc(p.lead)}</p>
              
              <ul class="research-case-contributions" style="margin-bottom: 16px;">
                ${p.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}
              </ul>

              <div class="tag-list">
                ${p.tags.map((t) => `<span class="tag-item">${esc(t)}</span>`).join("")}
              </div>
            </article>
          `
            )
            .join("")}
        </div>

      </div>
    </section>
  `;
}

function renderCertifications(d) {
  setupLightbox();

  $("#page-content").innerHTML = `
    ${pageHero("Certifications & Verified Credentials", "Official recognition for international conference peer review, oral presentations, and leadership excellence.", "Peer-Review Appreciation · Conference Presentation Certificates · Boot Camp Credential", "Verified Credentials")}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">
        
        <div class="certs-grid">
          ${d.certifications
            .map(
              (c, idx) => `
            <div class="cert-card" data-idx="${idx}">
              ${
                c.image
                  ? `<div class="cert-img-wrap" style="height: 200px; overflow: hidden; background: #0b1329; cursor: pointer;" onclick="window.triggerCertLightbox(${idx})">
                      <img src="${c.image}" alt="${esc(c.title)}" style="width: 100%; height: 100%; object-fit: cover;">
                     </div>`
                  : `<div style="height: 120px; background: rgba(0, 136, 204, 0.08); display: flex; align-items: center; justify-content: center; font-size: 38px; color: var(--primary-accent);"><i class="fas fa-award"></i></div>`
              }
              <div class="cert-body" style="padding: 18px 20px;">
                <span class="pub-tag" style="margin-bottom: 6px; display: inline-block;">${esc(c.date)}</span>
                <h3 style="font-size: 17px; font-weight: 800; color: #0b1329; margin-bottom: 6px; line-height: 1.4;">${esc(c.title)}</h3>
                <p style="font-size: 13.5px; color: var(--primary-accent); font-weight: 600; margin-bottom: 6px;">${esc(c.issuer)}</p>
                ${c.venue ? `<p style="font-size: 13px; color: var(--text-dim); margin-bottom: 8px;"><i class="fas fa-location-dot"></i> ${esc(c.venue)}</p>` : ""}
                ${c.credentialId ? `<div class="timeline-grade" style="margin-bottom: 10px;">Credential ID: ${esc(c.credentialId)}</div>` : ""}
                <p style="font-size: 13.5px; color: var(--text-muted); line-height: 1.6;">${esc(c.description)}</p>
                ${
                  c.image
                    ? `<button class="btn-secondary" style="margin-top: 12px; font-size: 12.5px; padding: 6px 14px; width: 100%;" onclick="window.triggerCertLightbox(${idx})"><i class="fas fa-magnifying-glass-plus"></i> View Full Certificate</button>`
                    : ""
                }
              </div>
            </div>
          `
            )
            .join("")}
        </div>

      </div>
    </section>
  `;

  window.triggerCertLightbox = (idx) => {
    const cert = d.certifications[idx];
    if (cert && cert.image) {
      openLightbox(cert.image, cert.title, "Official Certificate", `${cert.venue || ""} · ${cert.date || ""}`, cert.description);
    }
  };
}

function renderAchievements(d) {
  setupLightbox();

  $("#page-content").innerHTML = `
    ${pageHero("Achievements & Honors", "Honors earned across parliamentary debate championships, peer-review service, and academic excellence.", "Debate Champion · Debater of the Tournament · Peer Review Recognitions · Double Golden GPA 5.00", "Honors & Distinctions")}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px;">
          ${d.achievements
            .map(
              (a, idx) => `
            <div class="focus-card" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                ${
                  a.image
                    ? `<div style="height: 190px; overflow: hidden; border-radius: var(--radius-sm); margin-bottom: 14px; background: #0b1329; cursor: pointer;" onclick="window.triggerAchLightbox(${idx})">
                        <img src="${a.image}" alt="${esc(a.title)}" style="width: 100%; height: 100%; object-fit: cover;">
                       </div>`
                    : ""
                }
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                  <span class="pub-tag"><i class="${a.icon}"></i> ${esc(a.badge)}</span>
                  <span style="font-size: 13px; font-weight: 700; color: var(--text-dim);">${esc(a.date)}</span>
                </div>
                <h3 style="font-size: 18px; font-weight: 800; color: #0b1329; margin-bottom: 8px; line-height: 1.4;">${esc(a.title)}</h3>
                <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6;">${esc(a.description)}</p>
              </div>
              ${
                a.image
                  ? `<button class="btn-secondary" style="margin-top: 14px; font-size: 12.5px; padding: 6px 14px;" onclick="window.triggerAchLightbox(${idx})"><i class="fas fa-magnifying-glass-plus"></i> View Evidence Photo</button>`
                  : ""
              }
            </div>
          `
            )
            .join("")}
        </div>

      </div>
    </section>
  `;

  window.triggerAchLightbox = (idx) => {
    const ach = d.achievements[idx];
    if (ach && ach.image) {
      openLightbox(ach.image, ach.title, ach.badge, ach.date, ach.description);
    }
  };
}

function renderExperiences(d) {
  setupLightbox();

  $("#page-content").innerHTML = `
    ${pageHero("Leadership & Professional Experiences", "Student governance, podcast broadcasting, academic peer reviewing, and research leadership.", "Joint Organizing Secretary · Founding Member PUSTCEC · Podcast Host · IEEE Peer Reviewer", "Leadership & Roles")}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">
        
        <div class="timeline-list">
          ${d.experiences
            .map(
              (exp, idx) => `
            <article class="timeline-card">
              <div class="timeline-year">${esc(exp.period)}</div>
              <div class="timeline-content">
                <h2>${esc(exp.role)}</h2>
                <h3>${esc(exp.organization)}</h3>
                <p style="font-size: 13px; color: var(--text-dim); margin-bottom: 12px;"><i class="fas fa-location-dot"></i> ${esc(exp.location)}</p>
                
                ${
                  exp.image
                    ? `<div style="height: 220px; overflow: hidden; border-radius: var(--radius-sm); margin-bottom: 14px; background: #0b1329; cursor: pointer;" onclick="window.triggerExpLightbox(${idx})">
                        <img src="${exp.image}" alt="${esc(exp.role)}" style="width: 100%; height: 100%; object-fit: cover;">
                       </div>`
                    : ""
                }

                <ul class="research-case-contributions">
                  ${exp.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}
                </ul>

                ${
                  exp.image
                    ? `<button class="btn-secondary" style="margin-top: 14px; font-size: 12.5px; padding: 6px 14px;" onclick="window.triggerExpLightbox(${idx})"><i class="fas fa-magnifying-glass-plus"></i> View Stage Photo</button>`
                    : ""
                }
              </div>
            </article>
          `
            )
            .join("")}
        </div>

      </div>
    </section>
  `;

  window.triggerExpLightbox = (idx) => {
    const exp = d.experiences[idx];
    if (exp && exp.image) {
      openLightbox(exp.image, `${exp.role} — ${exp.organization}`, "Leadership Record", `${exp.location} · ${exp.period}`, exp.bullets.join(" "));
    }
  };
}

function renderExtracurricular(d) {
  setupLightbox();

  $("#page-content").innerHTML = `
    ${pageHero("Extra-Curricular Leadership & Public Speaking", "Grand stage emceeing, podcast interviewing, parliamentary debating, and campus event organizing.", "Stage Host for ICE Alumni Reunion · Podcast Host ('Mic & Minds') · Parliamentary Debate Champion", "Public Speaking & Governance")}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px;">
          ${d.extracurricular
            .map(
              (ec, idx) => `
            <div class="focus-card" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                ${
                  ec.image
                    ? `<div style="height: 200px; overflow: hidden; border-radius: var(--radius-sm); margin-bottom: 14px; background: #0b1329; cursor: pointer;" onclick="window.triggerEcLightbox(${idx})">
                        <img src="${ec.image}" alt="${esc(ec.title)}" style="width: 100%; height: 100%; object-fit: cover;">
                       </div>`
                    : ""
                }
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                  <span class="pub-tag">${esc(ec.role)}</span>
                  <span style="font-size: 13px; font-weight: 700; color: var(--text-dim);">${esc(ec.period)}</span>
                </div>
                <h3 style="font-size: 18px; font-weight: 800; color: #0b1329; margin-bottom: 10px; line-height: 1.4;">${esc(ec.title)}</h3>
                <ul class="research-case-contributions" style="margin-bottom: 14px;">
                  ${ec.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}
                </ul>
              </div>
              ${
                ec.image
                  ? `<button class="btn-secondary" style="margin-top: 10px; font-size: 12.5px; padding: 6px 14px;" onclick="window.triggerEcLightbox(${idx})"><i class="fas fa-magnifying-glass-plus"></i> View Stage Record</button>`
                  : ""
              }
            </div>
          `
            )
            .join("")}
        </div>

      </div>
    </section>
  `;

  window.triggerEcLightbox = (idx) => {
    const ec = d.extracurricular[idx];
    if (ec && ec.image) {
      openLightbox(ec.image, ec.title, ec.role, ec.period, ec.bullets.join(" "));
    }
  };
}

function renderPresentations(d) {
  setupLightbox();

  $("#page-content").innerHTML = `
    ${pageHero("Talks, Presentations & Defense Records", "Oral technical defenses delivered at international conferences and academic conventions.", "IEEE PECCII 2026 · IEEE ICCIT 2025 · IEEE QPAIN 2026 · 1st RUEC 2025 · IEEE RAAICON 2026", "Conference Presentations")}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">
        
        <div class="timeline-list">
          ${d.presentations
            .map(
              (p, idx) => `
            <article class="timeline-card">
              <div class="timeline-year">${esc(p.date)}</div>
              <div class="timeline-content">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;">
                  <span class="pub-tag">${esc(p.role)}</span>
                  <span style="font-size: 13px; font-weight: 700; color: var(--text-dim);"><i class="fas fa-location-dot"></i> ${esc(p.venue)}</span>
                </div>
                <h2 style="font-size: 19px; font-weight: 800; color: #0b1329; margin-bottom: 6px;">${esc(p.conference)}</h2>
                <h3 style="font-size: 15px; color: var(--primary-accent); margin-bottom: 12px; font-weight: 700;">Paper: "${esc(p.paperTitle)}"</h3>
                
                ${
                  p.image
                    ? `<div style="height: 220px; overflow: hidden; border-radius: var(--radius-sm); margin-bottom: 14px; background: #0b1329; cursor: pointer;" onclick="window.triggerPresLightbox(${idx})">
                        <img src="${p.image}" alt="${esc(p.conference)}" style="width: 100%; height: 100%; object-fit: cover;">
                       </div>`
                    : ""
                }

                <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6;">${esc(p.summary)}</p>

                ${
                  p.image
                    ? `<button class="btn-secondary" style="margin-top: 14px; font-size: 12.5px; padding: 6px 14px;" onclick="window.triggerPresLightbox(${idx})"><i class="fas fa-magnifying-glass-plus"></i> View Presentation Proof</button>`
                    : ""
                }
              </div>
            </article>
          `
            )
            .join("")}
        </div>

      </div>
    </section>
  `;

  window.triggerPresLightbox = (idx) => {
    const p = d.presentations[idx];
    if (p && p.image) {
      openLightbox(p.image, `${p.conference} Presentation`, p.role, `${p.venue} · ${p.date}`, p.summary);
    }
  };
}

function renderGallery(d) {
  setupLightbox();

  $("#page-content").innerHTML = `
    ${pageHero("Photographic Evidence Gallery", "Visual evidence spanning IEEE conferences, presentation stages, debate championship awards, and campus leadership.", "17 Verified Photographic Records with Complete Self-Authored Narratives", "Visual Archive")}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">
        
        <!-- CATEGORY TABS -->
        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 28px;" id="gallery-filter-bar">
          <button class="tag-item active" style="cursor: pointer;" data-filter="all">All Photos (${d.gallery.length})</button>
          <button class="tag-item" style="cursor: pointer;" data-filter="conferences & research">Conferences &amp; Research</button>
          <button class="tag-item" style="cursor: pointer;" data-filter="debate & awards">Debate &amp; Awards</button>
          <button class="tag-item" style="cursor: pointer;" data-filter="leadership & service">Leadership &amp; Service</button>
          <button class="tag-item" style="cursor: pointer;" data-filter="media & hosting">Media &amp; Hosting</button>
        </div>

        <div class="gallery-grid" id="gallery-container">
          ${d.gallery
            .map(
              (g, idx) => `
            <div class="gallery-card" data-category="${g.category.toLowerCase()}" data-idx="${idx}" onclick="window.triggerGalleryLightbox(${idx})">
              <div class="gallery-img-wrap">
                <img src="${g.thumb}" alt="${esc(g.title)}" loading="lazy">
              </div>
              <div class="gallery-caption">
                <span class="gallery-category">${esc(g.category)}</span>
                <div class="gallery-title">${esc(g.title)}</div>
                <div style="font-size: 11.5px; color: var(--text-dim); margin-top: 4px;"><i class="fas fa-calendar-day"></i> ${esc(g.date)} · ${esc(g.venue)}</div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>

      </div>
    </section>
  `;

  // Gallery filtering
  const filterBtns = $$("#gallery-filter-bar button");
  const galleryCards = $$("#gallery-container .gallery-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;

      galleryCards.forEach((card) => {
        const cat = card.dataset.category || "";
        if (f === "all" || cat.includes(f)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  window.triggerGalleryLightbox = (idx) => {
    const item = d.gallery[idx];
    if (item) {
      openLightbox(item.src, item.title, item.category, `${item.venue} · ${item.date}`, item.desc);
    }
  };
}

function init() {
  const page = document.body.dataset.page || "home";
  renderHeader(page);
  renderSocialSidebar();

  switch (page) {
    case "home":
      renderHome(d);
      break;
    case "education":
      renderEducation(d);
      break;
    case "languages":
      renderLanguages(d);
      break;
    case "research":
      renderResearch(d);
      break;
    case "publications":
      renderPublications(d);
      break;
    case "projects":
      renderProjects(d);
      break;
    case "certifications":
      renderCertifications(d);
      break;
    case "achievements":
      renderAchievements(d);
      break;
    case "experiences":
      renderExperiences(d);
      break;
    case "extracurricular":
      renderExtracurricular(d);
      break;
    case "presentations":
      renderPresentations(d);
      break;
    case "gallery":
      renderGallery(d);
      break;
    default:
      renderHome(d);
      break;
  }

  renderFooter();
}

document.addEventListener("DOMContentLoaded", init);
