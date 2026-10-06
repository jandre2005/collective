const members = [
  {
    name: "Rica Guevarra",
    role: "Project Leader",
    image: "images/profile1.jpg",
    description: "Responsible for leading the team, coordinating tasks, managing project progress, and ensuring effective collaboration to achieve project goals.",
    about: "Passionate about leading teams and turning ideas into successful projects. Focused on organizing tasks, encouraging collaboration, and keeping development on track. Dedicated to creating a productive team environment where ideas are shared, challenges are solved, and project goals are achieved.",
    skills: ["Project Management", "Google Workspace", "VS Code", "Git", "HTML", "CSS", "JavaScript", "Java"],
    projects: [
      { title: "...", desc: "....", url: "" },
    ],
    portfolio: "https://yourportfolio.com",
    github: "https://github.com/habib2005-hatdog",
    linkedin: "https://linkedin.com/",
    email: "yourname@gmail.com"
  },
  {
    name: "Habib Hadjisaid",
    role: "Full-Stack Dev",
    image: "images/profile2.jpg",
    description: "Builds modern full-stack products that feel polished on the frontend and stay reliable on the backend.",
    about: "A developer focused on building reliable, functional, and user-friendly full-stack web applications, turning ideas into practical digital experiences with modern technologies.",
    skills: ["JavaScript", "Java", "Next.js", "Tailwind CSS", "Node,js", "Socket.io", "REST APIs", "mySQL", "MongoDB", "Git", "Linux"],
    projects: [
      { title: "SKT8E", desc: "A full-stack skateboarding e-commerce platform. Features a product catalog, cart, and checkout system. Includes an admin dashboard for inventory management.", url: "" },
      { title: "Msuan", desc: "A real-time messaging platform modeled after ChatKool, featuring rooms, direct messages, presence indicators, Built from scratch with WebSocket support.", url: "" },
    ],
    portfolio: "https://habib-mu.vercel.app/",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/nurhabib-hadjisaid-b2b671268/",
    email: "nurhabibhadjisaid@gmail.com"
  },
  {
    name: "Jandre Villanueva",
    role: "Front-End Dev",
    image: "images/profile3.jpg",
    description: "Focused on creating clean, responsive, and interactive websites with an emphasis on modern design, smooth functionality, and user-friendly interfaces.",
    about: "A web designer and developer focused on creating clean, modern, and responsive websites. I enjoy turning ideas into simple and functional digital experiences.",
    skills: ["HTML", "CSS", "JavaScript", "Java", "MySQL", "Git", "Frontend Development", "UI/UX Design"],
    projects: [
      { title: "COLLECTIVE", desc: "COLLECTIVE is a collaborative portfolio hub that brings five creators into one digital space. It showcases each member’s skills, projects, and personal portfolio. Built to represent different visions coming together as one creation.", url: "" },
      { title: "RevLog", desc: "RevLog is a personal motorcycle maintenance tracker designed to keep service records organized in one place. It tracks maintenance history, mileage, and upcoming service needs. Built to make motorcycle care simple, organized, and easy to manage.", url: "" },
    ],
    portfolio: "https://jandredev.vercel.app/",
    github: "https://github.com/jandre2005",
    linkedin: "https://www.linkedin.com/in/jandre-villanueva-95945143a/",
    email: "drevillanueva75@gmail.com"
  },
  {
    name: "Denzel Cordovez",
    role: "Full-Stack Dev",
    image: "images/profile4.jpg",
    description: "Handles both front-end and back-end development, building reliable, scalable, and functional web applications with seamless system integration.",
    about: "A web developer and student at NU Manila, passionate about building clean, functional, and user-friendly websites that turn ideas into meaningful digital experiences.",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "UI/UX Design", "Bootstrap/Git"],
    projects: [
      { title: "Sample Portfolio Site", desc: "A personal developer portfolio showcasing projects, skills, and experience. Built with PHP and a clean interface designed for simple navigation and easy content exploration.", url: "" },
      { title: "Shoevinir", desc: "A simple e-commerce website for browsing and purchasing footwear. Built with a clean product layout and easy navigation designed for a smooth online shopping experience.", url: "" },
    ],
    portfolio: "https://portfolio-eight-roan-gm53i32gx0.vercel.app/?fbclid=IwY2xjawU0pGlleHRuA2FlbQIxMABwZG9mBWJyaWQRMWJ5eGlGQk1LVzhKbkl4blRzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEexU20qUishrDgxJC8anEBOop4jm9_XOB7vBNuqco4KNrDKGlEvDSwm5sZmew_aem_8bGWydEpQl9O9rm_dWanjA",
    github: "github.com/denzelcordovez",
    linkedin: "linkedin.com/in/denzel-cordovez",
    email: "denzelcordovez26@gmail.com"
  },
  {
    name: "Vin Santos",
    role: "Front-End Dev",
    image: "images/profile5.jpg",
    description: "Creates visually appealing, responsive, and interactive web interfaces with a focus on modern design, seamless functionality, and an engaging user experience.",
    about: "I'm passionate about front-end development and creating clean, responsive, and user-friendly websites. I enjoy exploring different layouts, experimenting with designs, and adding small details that make websites more interactive and visually appealing. My goal is to turn simple ideas into functional and engaging web experiences.",
    skills: ["HTML", "CSS", "JavaScript", "Android Studio", "Networking", "Git"],
    projects: [
      { title: "VinGadgetPlug", desc: "A database-driven e-commerce website developed as an academic project, allowing users to browse and purchase gadgets and tech accessories. Features include product filtering, secure checkout, and admin management.", url: "" },
    ],
    portfolio: "https://vin-portfolio-steel.vercel.app/",
    github: "GitHub: VinLovesCoding",
    linkedin: "https://linkedin.com/",
    email: "vinstephensantos07@gmail.com"
  }
];


/* =====================================================
   2. HELPER FUNCTIONS
===================================================== */

// Shortcut: $("id") instead of document.getElementById("id")
function $(id) {
  return document.getElementById(id);
}

// Turns 0,1,2... into "00","01","02"...
function formatNumber(index) {
  return String(index).padStart(2, "0");
}

// "Rica Guevara" -> "RG"
function getInitials(name) {
  return name
    .split(" ")
    .map(word => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// Puts a member's photo in an <img>. If the photo is missing, show initials instead.
function setImage(img, avatar, member) {
  avatar.removeAttribute("data-i");
  img.style.display = "";

  img.onerror = () => {
    img.style.display = "none";
    avatar.dataset.i = getInitials(member.name);
  };

  img.alt = member.name;
  img.src = member.image;
}


/* =====================================================
   3. MEMBER CARDS
   Builds one card for each member in the list above.
===================================================== */
const grid = $("membersGrid");

members.forEach((member, index) => {
  const card = document.createElement("div");
  card.className = "card-wrap reveal";
  card.style.setProperty("--d", `${index * 0.07}s`);

  card.innerHTML = `
    <button class="member-card" data-index="${index}" aria-label="View ${member.name}'s profile">
      <span class="member-avatar avatar"><img alt=""></span>
      <span class="member-info">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
        <span class="view-member">View Profile <span>→</span></span>
      </span>
    </button>`;

  setImage(card.querySelector("img"), card.querySelector(".avatar"), member);
  grid.appendChild(card);
});

// Soft light that follows the cursor on a card
grid.addEventListener("pointermove", event => {
  const card = event.target.closest(".member-card");
  if (!card) return;

  const box = card.getBoundingClientRect();
  card.style.setProperty("--x", `${event.clientX - box.left}px`);
  card.style.setProperty("--y", `${event.clientY - box.top}px`);
});

// Clicking a card opens that member's profile
grid.addEventListener("click", event => {
  const card = event.target.closest(".member-card");
  if (card) openProfile(Number(card.dataset.index));
});


/* =====================================================
   4. NAVBAR
===================================================== */
const navbar = document.querySelector(".navbar");
const menuBtn = $("menuBtn");
const navLinks = $("navLinks");
const navItems = navLinks.querySelectorAll("a");

// Make the navbar solid after scrolling down a bit
function updateNavbarOnScroll() {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
}
window.addEventListener("scroll", updateNavbarOnScroll, { passive: true });
updateNavbarOnScroll();

// Open or close the mobile menu
function setMenu(open) {
  navLinks.classList.toggle("open", open);
  menuBtn.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", open);
}

// Hamburger button
menuBtn.addEventListener("click", () => {
  setMenu(!navLinks.classList.contains("open"));
});

// Close the menu after clicking a link
navItems.forEach(link => {
  link.addEventListener("click", () => setMenu(false));
});

// Close the menu when clicking outside the navbar
document.addEventListener("click", event => {
  if (!navbar.contains(event.target)) setMenu(false);
});


/* =====================================================
   5. SCROLL ANIMATIONS
===================================================== */

// Fade in elements (.reveal) when they scroll into view
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Highlight the nav link of the section currently on screen
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    navItems.forEach(link => {
      const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
      link.classList.toggle("active", isCurrent);
    });
  });
}, { rootMargin: "-45% 0px -50% 0px" });

document.querySelectorAll("main section[id]").forEach(section => sectionObserver.observe(section));


/* =====================================================
   6. PROFILE POPUP
===================================================== */
const overlay = $("portfolioOverlay");
let lastFocusedElement = null;   // remembers where to return focus when closing

// Show a link only if it has a URL
function setLink(element, url) {
  element.hidden = !url;
  if (url) element.href = url;
}

// Build the "Selected Work" cards
function buildProjects(member) {
  const projects = member.projects || [];

  if (projects.length === 0) {
    return `<p class="profile-description">Projects coming soon.</p>`;
  }

  return projects.map((project, n) => {
    // A project with a URL becomes a clickable link, otherwise a plain box
    const tag = project.url ? "a" : "div";
    const linkAttributes = project.url
      ? ` href="${project.url}" target="_blank" rel="noopener noreferrer"`
      : "";
    const arrow = project.url ? `<span class="project-arrow">↗</span>` : "";

    return `
      <${tag} class="project-card"${linkAttributes}>
        <span class="project-number">${formatNumber(n + 1)}</span>
        <div class="project-info"><h3>${project.title}</h3><p>${project.desc}</p></div>
        ${arrow}
      </${tag}>`;
  }).join("");
}

// Small icons for the links
const icons = {
  portfolio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3-1.9 0-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.3zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zm1.8 13.1H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`
};

// Build the "Links" list (skips any link left empty)
function buildLinks(member) {
  const allLinks = [
    ["Personal Portfolio", member.portfolio, icons.portfolio],
    ["GitHub", member.github, icons.github],
    ["LinkedIn", member.linkedin, icons.linkedin],
    ["Email", member.email && `mailto:${member.email}`, icons.email]
  ];

  const html = allLinks
    .filter(([label, url]) => url)
    .map(([label, url, icon]) => {
      // Email links open in the same tab, others in a new tab
      const newTab = url.startsWith("mailto:") ? "" : ' target="_blank" rel="noopener noreferrer"';
      return `<a href="${url}"${newTab}><span class="link-label">${icon}${label}</span><span>↗</span></a>`;
    })
    .join("");

  return html || `<p class="profile-description">No links yet.</p>`;
}

// Open a member's profile
function openProfile(index) {
  const member = members[index];
  if (!member) return;

  // Fill in the text and photo
  setImage($("portfolioImage"), $("portfolioAvatar"), member);
  $("portfolioNumber").textContent = `MEMBER ${formatNumber(index + 1)}`;
  $("portfolioName").textContent = member.name;
  $("portfolioRole").textContent = member.role;
  $("portfolioDescription").textContent = member.description;
  $("portfolioAbout").textContent = member.about;
  setLink($("personalPortfolio"), member.portfolio);

  // Fill in skills, projects and links
  $("portfolioSkills").innerHTML = member.skills.map(skill => `<span class="skill">${skill}</span>`).join("");
  $("portfolioProjects").innerHTML = buildProjects(member);
  $("portfolioLinks").innerHTML = buildLinks(member);

  // Show the popup
  lastFocusedElement = document.activeElement;
  overlay.inert = false;
  overlay.setAttribute("aria-hidden", "false");
  overlay.classList.add("active");
  document.body.classList.add("no-scroll");
  overlay.scrollTop = 0;
  $("closePortfolio").focus({ preventScroll: true });
}

// Close the profile
function closeProfile() {
  overlay.classList.remove("active");
  overlay.setAttribute("aria-hidden", "true");
  overlay.inert = true;
  document.body.classList.remove("no-scroll");

  if (lastFocusedElement) lastFocusedElement.focus({ preventScroll: true });
}

// Both back buttons close the profile
$("closePortfolio").addEventListener("click", closeProfile);
$("bottomBack").addEventListener("click", closeProfile);

// Escape key closes the profile (or the mobile menu)
document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;

  if (overlay.classList.contains("active")) {
    closeProfile();
  } else {
    setMenu(false);
  }
});