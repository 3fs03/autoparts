const toggleBtn = document.getElementById("toggle-btn");
const theme = document.querySelector("body");
const line = Array.from(document.getElementsByClassName("line"));
let darkMode = localStorage.getItem("dark-mode");

if(darkMode === 'enabled'){
    toggleBtn.classList.add("fa-sun");
}
else{
    toggleBtn.classList.add("fa-moon");
}

const enableDarkMode = () => {
  theme.classList.add("active");
  line.forEach(element => {
    element.classList.toggle('active');
   });
  toggleBtn.classList.remove("fa-moon");
  toggleBtn.classList.add("fa-sun");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  theme.classList.remove("active");
  line.forEach(element => {
    element.classList.remove('active');
   });
  toggleBtn.classList.remove("fa-sun");
  toggleBtn.classList.add("fa-moon");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); 
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); 
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
