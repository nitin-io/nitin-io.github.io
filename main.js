const toggleThemeBtn = document.querySelector('#theme-toggle');

const isDarkMode = window.matchMedia('(prefers-color-scheme:dark)');

// Checks Current Mode
if (isDarkMode.matches) {
  document.body.classList.add('dark-theme');
}

// Add Event Listener for click event and executes callback function
toggleThemeBtn.addEventListener('click', (e) => {
  document.body.classList.toggle('dark-theme');
  toggleThemeBtn.innerText =
    toggleThemeBtn.innerText === 'Dark' ? 'Light' : 'Dark';
});
