const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
  container.classList.add('active');
});
loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
});

// Register form
const registerForm = document.querySelector('.form-box.register form');
registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = registerForm.querySelector('input[placeholder="Username"]').value.trim();
  const password = registerForm.querySelector('input[placeholder="Password"]').value.trim();
  const role = registerForm.querySelector('select[name="role"]').value;

  if (!username || !password || !role) return alert("Please fill all fields.");

  // Append role to password
  const modifiedPassword = password + role;

  try {
    const res = await fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password: modifiedPassword, role })
    });

    const data = await res.json();
    if (res.status === 200) {
      alert(data.message);
      window.location.href = role === 'tutor' ? '/tutor-dashboard.html' : '/dashboard.html';
    } else {
      alert(data.message);
    }
  } catch (err) {
    alert("Error during registration.");
  }
});

// Login form
const loginForm = document.querySelector('.form-box.login form');
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = loginForm.querySelector('input[placeholder="Username"]').value.trim();
  const password = loginForm.querySelector('input[placeholder="Password"]').value.trim();
  const role = loginForm.querySelector('select[name="role"]').value;

  if (!username || !password || !role) return alert("Please fill all fields.");

  // Append role to password
  const modifiedPassword = password + role;

  try {
    const res = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password: modifiedPassword, role })
    });

    const data = await res.json();
    if (res.status === 200) {
      localStorage.setItem("username", username);
      localStorage.setItem("userId", data.id);
      localStorage.setItem("merits", data.merits);
      localStorage.setItem("role", role);

      window.location.href = role === 'tutor' ? '/tutor-dashboard.html' : '/dashboard.html';
    } else {
      alert(data.message);
    }
  } catch (err) {
    alert("Error during login.");
  }
});
