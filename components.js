// Header HTML
const headerHTML = `
<header class="header">
  <a href="index.html" class="header-logo">✸  rango lf</a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <nav class="menu" id="main-nav">
    <ul>
      <li><a href="about.html">about</a></li>
      <li><a href="blog.html">blog</a></li>
      <li><a href="advice.html">advice</a></li>
      <li><a href="projects & experience.html">projects & experience</a></li>
      <li><a href="Resume - Rango Lee-Fu (9).pdf">resume</a></li>
    </ul>
  </nav>
</header>
`;

// Footer HTML
const footerHTML = `
<footer class="footer">
  <div class="footer-content">
    <span>rango lf © 2025</span>
     <div style="display: flex; align-items: center; gap: 15px; background-color: #f5f5f5; padding: 5px 15px; border-radius: 8px; border: 1px solid #ddd;">
    <a href="https://WebRing.skule.ca/#https://rango-lf.github.io/rango-lf/?nav=prev" style="color: #333; text-decoration: none; font-size: 16px;">←</a>
<a href="https://WebRing.skule.ca/#https://rango-lf.github.io/rango-lf/" target="_blank">
<img src="https://WebRing.skule.ca/img/icon.svg" alt="SKULE WebRing" style="width: 34px; height: 24px; margin-bottom: -6px"/>
</a>
<a href="https://WebRing.skule.ca/#https://rango-lf.github.io/rango-lf/?nav=next" style="color: #333; text-decoration: none; font-size: 16px;">→</a>
</div>
    <div class="footer-links">
      <a href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
        </svg>
      </a>
      <a href="mailto:rango.leefu@mail.utoronto.ca" aria-label="Email">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"/>
        </svg>
      </a>
     
    </div>
  </div>
</footer>
`;

// Load components
document.addEventListener('DOMContentLoaded', function() {
  // Insert header
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    headerContainer.innerHTML = headerHTML;
    initializeMenuToggle();
  }

  // Insert footer
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  }
});

// Initialize mobile menu toggle
function initializeMenuToggle() {
  const menuBtn = document.getElementById('menu-btn');
  const mainNav = document.getElementById('main-nav');
  
  if (menuBtn && mainNav) {
    // Close menu when clicking a link (mobile)
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          menuBtn.checked = false;
        }
      });
    });
  }
}

// Set active nav link based on current page
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.header nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.style.textDecoration = 'underline';
    }
  });
}

// Call after header loads
setTimeout(setActiveNavLink, 100);
