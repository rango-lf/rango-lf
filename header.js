// header.js - Reusable navigation system
function createHeader() {
  const headerHTML = `
    <header class="permanent-header">
      <a href="index.html" class="logo" style="font-size: 20px">RANGO LF</a>
      <div class="hamburger-menu">
        <button class="hamburger-toggle" onclick="toggleMobileMenu()">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <nav class="desktop-nav">
        <a href="index.html">home</a>
        <a href="about.html">about</a>
        <a href="blog.html">blog</a>
        <a href="advice.html">advice</a>
        <a href="construction.html"><s>experience & projects</s></a>
      </nav>
      <nav class="mobile-nav" id="mobile-nav">
        <a href="index.html">home</a>
        <a href="about.html">about</a>
        <a href="blog.html">blog</a>
        <a href="advice.html">advice</a>
        <a href="construction.html"><s>experience & projects</s></a>
      </nav>
    </header>
  `;
  
  // Insert header at the beginning of the body
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  
  // Initialize mobile menu functionality
  initializeMobileMenu();
}

function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobile-nav');
  const hamburgerIcon = document.querySelector('.hamburger-toggle i');
  
  if (mobileNav && hamburgerIcon) {
    mobileNav.classList.toggle('active');
    
    // Toggle hamburger icon between bars and X
    if (mobileNav.classList.contains('active')) {
      hamburgerIcon.className = 'fas fa-times';
    } else {
      hamburgerIcon.className = 'fas fa-bars';
    }
  }
}

function initializeMobileMenu() {
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    const mobileNav = document.getElementById('mobile-nav');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    if (mobileNav && hamburgerMenu && 
        !hamburgerMenu.contains(event.target) && 
        !mobileNav.contains(event.target)) {
      mobileNav.classList.remove('active');
      const hamburgerIcon = document.querySelector('.hamburger-toggle i');
      if (hamburgerIcon) {
        hamburgerIcon.className = 'fas fa-bars';
      }
    }
  });

  // Close mobile menu when window is resized to desktop size
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      const mobileNav = document.getElementById('mobile-nav');
      const hamburgerIcon = document.querySelector('.hamburger-toggle i');
      if (mobileNav) {
        mobileNav.classList.remove('active');
      }
      if (hamburgerIcon) {
        hamburgerIcon.className = 'fas fa-bars';
      }
    }
  });
}

// Load header when DOM is ready
document.addEventListener('DOMContentLoaded', createHeader);

// Make toggleMobileMenu available globally for onclick handlers
window.toggleMobileMenu = toggleMobileMenu;
