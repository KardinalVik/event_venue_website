let darkMode = localStorage.getItem('darkMode'); // Retrieve the saved darkmode preference from localStorage and store it in the 'darkMode' variable.


const darkModeToggle = document.querySelector('#dark-mode-toggle'); // Select the darkmode toggle element from the HTML and store it in 'darkModeToggle' for future interactions.

const enableDarkMode = () => { // adds the class to the body and then updates localStorage
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => { //removes the class from body and then updates localStorage
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode',  null);
}
 

if (darkMode === 'enabled') { // If the user has already visited the website with darkmode enabled, this will keep it on.
  enableDarkMode();
}


darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); // if the user clicks the button their darkmode setting will be retrieved. 
  
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); // if enabled, enable dark mode. If not, don't enable.
  }
});
