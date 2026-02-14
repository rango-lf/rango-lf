// Sidebar content - edit this file to update the sidebar across all pages
const sidebarContent = `
  <button class="mobile-toggle" onclick="toggleSidebar()">☰ MENU</button>
  
  <div class="sidebar-content">
    <div class="title">RANGO L.F.</div>
    <div class="subtitle">engineering thoughts & projects</div>

    <div class="profile">
      <p class="profile-desc">
        <b><u>RANGO LEE FU</u></b><br>
        First-year Mechanical & Industrial Engineering student at the University of Toronto
      </p>
    </div>

    <br>
    <div class="menu">
      <a href="index.html">home</a>
      <a href="about.html">about</a>
      <a href="projects.html">projects</a>
      <a href="blog.html">blog</a>
      <a href="resources.html">resources</a>
    </div>

    <br>
    <div class="contact-section">
      <b>CONTACT</b>
      <div class="contact-links">
        <a href="mailto:rango.leefu@mail.utoronto.ca"><i class="fa-solid fa-envelope"></i> Email</a>
        <a href="https://www.linkedin.com/in/rango-lee-fu-7351b52b7/"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
        <a href="https://github.com/rango-lf"><i class="fa-brands fa-github"></i> GitHub</a>
      </div>
    </div>

    <br>
    <div class="sidebar-footer">
      <img src="https://rainy.gay/pride/bv/progress.png" style="width: 100%; border: 1px solid black; margin-bottom: 12px;">
      
      <!-- SKULE WebRing -->
      <div class="webring-widget">
        <a href="https://WebRing.skule.ca/#https://rango-lf.github.io/rango-lf/?nav=prev">←</a>
        <a href="https://WebRing.skule.ca/#https://rango-lf.github.io/rango-lf/" target="_blank">
          <img src="https://WebRing.skule.ca/img/icon.svg" alt="SKULE WebRing"/>
        </a>
        <a href="https://WebRing.skule.ca/#https://rango-lf.github.io/rango-lf/?nav=next">→</a>
      </div>

      <p style="font-size: 10px; margin-top: 12px;">P.S. The thoughts, advice, and opinions presented on this site reflect the views of the University of Toronto, the Faculty of Applied Science and Engineering, the Engineering Society, and all other affiliated organisations... NOT!</p>
    </div>
  </div>
`;

// Function to load sidebar
function loadSidebar() {
  const sidebarElement = document.getElementById('sidebar');
  if (sidebarElement) {
    sidebarElement.innerHTML = sidebarContent;
  }
}

// Function to toggle sidebar on mobile
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

// Close sidebar when clicking outside on mobile
function setupSidebarClickOutside() {
  document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.querySelector('.mobile-toggle');
    
    if (window.innerWidth <= 768 && sidebar && toggle) {
      if (!sidebar.contains(event.target)) {
        sidebar.classList.remove('active');
      }
    }
  });
}

// Initialize sidebar when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  loadSidebar();
  setupSidebarClickOutside();
});
