// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('flex');
    navLinks.classList.toggle('flex-col');
    navLinks.classList.toggle('absolute');
    navLinks.classList.toggle('top-16');
    navLinks.classList.toggle('right-4');
    navLinks.classList.toggle('bg-gray-800');
    navLinks.classList.toggle('p-4');
    navLinks.classList.toggle('rounded');
  });
}

// Show username from localStorage
const username = localStorage.getItem('username');
const userDisplay = document.getElementById('user-name');
if (userDisplay) {
  userDisplay.innerText = username || 'Guest';
}

// Logout functionality (optional)
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    localStorage.clear();
    alert('You have been logged out.');
    window.location.href = '/index.html';
  });
}
