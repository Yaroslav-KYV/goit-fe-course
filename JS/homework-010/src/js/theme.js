const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const siteBody = document.body;
const toggleSwitch = document.getElementById('theme-switch-control');

function switchTheme(e) {
  if (e.target.checked) {
    siteBody.setAttribute('class', `${Theme.DARK}`);
    localStorage.setItem('theme', `${Theme.DARK}`);
  } else {
    siteBody.setAttribute('class', `${Theme.LIGHT}`);
    localStorage.setItem('theme', `${Theme.LIGHT}`);
  }
}

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme')
  ? localStorage.getItem('theme')
  : null;

if (currentTheme) {
  siteBody.setAttribute('class', currentTheme);

  if (currentTheme === Theme.DARK) {
    toggleSwitch.checked = true;
  }
}
